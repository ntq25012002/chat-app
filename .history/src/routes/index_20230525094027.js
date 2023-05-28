import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import Chat from '~/pages/Chat';

const publicRoutes = [
    {path: '/login', component: Login, layout: null},
    {path: '/register', component: Register, layout: null},
]

const privateRoutes = [
    // {route: '/dashboard', component: Dashboard},
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/chat/:user/:id', component: Chat},

]

export {publicRoutes, privateRoutes}