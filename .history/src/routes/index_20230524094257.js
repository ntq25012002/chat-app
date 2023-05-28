import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Profile from '~/pages/Profile'
import Chat from '~/pages/Chat'
import NotFound from '~/pages/NotFound'

const publicRoutes = [
    {path: '/login', component: Login, layout: null},

]

const privateRoutes = [
    // {route: '/dashboard', component: Dashboard},
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/chat/:user/:id', component: Chat},

]

export {publicRoutes, privateRoutes}