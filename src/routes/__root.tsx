import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Main from '@/components/layout/main'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Main>
        <Outlet />
      </Main>

      <Header />
      <Footer />

      <TanStackRouterDevtools />
    </>
  ),
})
