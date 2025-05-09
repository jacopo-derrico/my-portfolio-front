import { usePortfolioStore } from '~/store/portfolio';

export default defineEventHandler(async (event) => {
    const store = usePortfolioStore() // pinia store
    
    return store.projects.map(project => ({
      loc: `/projects/${project.slug}`
    }))
  })