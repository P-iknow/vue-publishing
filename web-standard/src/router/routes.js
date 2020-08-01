// single pages
import homePage from '../pages/Home.vue'
import notFoundPage from '../pages/NotFound.vue'
import layout01 from '../pages/Layout01'

import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/layout01',
    name: 'layout01',
    component: layout01,
    meta: { title: `${DOMAIN_TITLE} | layout01` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
