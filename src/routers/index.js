import Home from '../pages/home'
import Detail from '../pages/detail'
import Sign from '../pages/sign'
import SignIn from '../pages/sign/sign-in'
import SignUp from '../pages/sign/sign-up'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/detail/:id',
    component: Detail,
    exact: true
  },
  {
    path: '/sign',
    component: Sign,
    // exact: true,
    children: [
      {
        path: '/sign/sign_in',
        component: SignIn
      },
      {
        path: '/sign/sign_up',
        component: SignUp
      }
    ]
  }
]

export default routes
