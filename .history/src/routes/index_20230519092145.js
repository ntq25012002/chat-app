import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Profile from '~/pages/Profile'

const publicRoutes = [
    {route: '/', component: Home},
    {route: '/profile', component: Profile},
    {route: '/login', component: Login},
]

const privateRoutes = [
    // {route: '/dashboard', component: Dashboard},
]