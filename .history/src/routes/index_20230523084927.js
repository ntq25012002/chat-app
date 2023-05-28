import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Profile from '~/pages/Profile'
import NotFound from '~/pages/NotFound'

const publicRoutes = [
    {path: '/login', component: Login, layout: null},
    {path: '/profile', component: Profile},

]

const privateRoutes = [
    // {route: '/dashboard', component: Dashboard},
    {path: '/', component: Home},
]

export {publicRoutes, privateRoutes}