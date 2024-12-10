export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser()

  // redirect the user to the login page
  if (!user && to.path !== '/login') {
    return navigateTo({ 
      path: '/login',
    })
  }

  // redirect to admin page if admin has accessed
  // if (user?.customClaims.role === 'admin' && to.path === '/login') {
  //   return navigateTo({ 
  //     path: '/admin',
  //   })
  // }

})