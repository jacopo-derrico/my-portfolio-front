const handler = defineEventHandler(async (event): Promise<Array<{ loc: string }>> => {
  const config = useRuntimeConfig();
  const endpoint =
    // prefer runtime public config (set in nuxt.config.ts)
    config.public?.wordpressUrl ||
    // fallback to base url -> append /graphql
    (config.public?.wordpressBaseUrl ? `${config.public.wordpressBaseUrl.replace(/\/$/, '')}/graphql` : undefined);

  if (!endpoint) {
    console.error('[sitemap] WP GraphQL endpoint not configured (set runtime config `public.wpGraphqlUrl`, `wpGraphqlUrl` or provide DB_LINK / DB_BASE_LINK env var)');
    return [];
  }

  const query = `query SitemapPages {
    projects(first: 10000) { nodes { uri slug } }
  }`;

  try {
    const resp: any = await $fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(config.public?.wpGraphqlToken || config.wpGraphqlToken ? { Authorization: `Bearer ${config.public?.wpGraphqlToken || config.wpGraphqlToken}` } : {})
      },
      body: { query }
    });

    // const pages = resp?.data?.pages?.nodes ?? [];
    // const posts = resp?.data?.posts?.nodes ?? [];
    const projects = resp?.data?.projects?.nodes ?? [];

    const normalize = (p: string | null | undefined) => {
      if (!p) return p;
      let path = p;
      // If WP returns an absolute URL, extract the pathname (and search) so we canonicalise consistently
      try {
        if (/^https?:\/\//i.test(path)) {
          const u = new URL(path);
          path = u.pathname + (u.search || '');
        }
      } catch (e) {
        // ignore invalid URL parsing
      }

      let s = path.startsWith('/') ? path : `/${path}`;
      // collapse multiple slashes and remove trailing slash except for root
      s = s.replace(/\/+/g, '/');
      if (s.length > 1) s = s.replace(/\/$/, '');
      return s;
    };

    const unique = new Map<string, { loc: string }>();
    for (const n of projects) {
      const raw = n?.uri ?? (n?.slug ? `/projects/${n.slug}` : null);
      if (!raw) continue;
      const loc = normalize(raw);
      if (!loc) continue;

      // Canonicalise WP's singular "project" folder to the app's "/projects/" route
      const canonical = loc.replace(/^\/project(\/|$)/, '/projects$1');
      if (!unique.has(canonical)) unique.set(canonical, { loc: canonical });
    }

    const items = Array.from(unique.values());
    return items as Array<{ loc: string }>;
  } catch (err) {
    console.error('[sitemap] failed to fetch WP GraphQL:', err);
    return [];
  }
});

export default handler;