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
    const items = [...projects]
      .map((n: any) => {
        const raw = n?.uri ?? (n?.slug ? `/projects/${n.slug}` : null);
        if (!raw) return null;
        const path = raw.startsWith('/') ? raw : `/${raw}`;
        return { loc: path };
      })
      .filter(Boolean) as Array<{ loc: string }>;

    return items;
  } catch (err) {
    console.error('[sitemap] failed to fetch WP GraphQL:', err);
    return [];
  }
});

export default handler;