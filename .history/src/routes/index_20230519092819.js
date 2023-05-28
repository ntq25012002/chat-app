import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Profile from '~/pages/Profile'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/login', component: Login, layout: null},
]

const privateRoutes = [
    // {route: '/dashboard', component: Dashboard},
]