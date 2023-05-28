import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Profile from '~/pages/Profile'
import NotFound from '~/pages/NotFound'

const publicRoutes = [
    {path: '/login', component: Login, layout: null},

]

const privateRoutes = [
    // {route: '/dashboard', component: Dashboard},
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/chat/:username', component: Profile},

]

export {publicRoutes, privateRoutes}