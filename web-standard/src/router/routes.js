// single pages
import homePage from '../pages/Home.vue'
import notFoundPage from '../pages/NotFound.vue'
import layout01 from '../pages/Layout01'
import layout02 from '../pages/Layout02'
import layout03 from '../pages/Layout03'
import layout04 from '../pages/Layout04'
import layout05 from '../pages/Layout05'

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
    path: '/layout02',
    name: 'layout02',
    component: layout02,
    meta: { title: `${DOMAIN_TITLE} | layout02` }
  },
  {
    path: '/layout03',
    name: 'layout03',
    component: layout03,
    meta: { title: `${DOMAIN_TITLE} | layout03` }
  },
  {
    path: '/layout04',
    name: 'layout04',
    component: layout04,
    meta: { title: `${DOMAIN_TITLE} | layout04` }
  },  {
    path: '/layout05',
    name: 'layout05',
    component: layout05,
    meta: { title: `${DOMAIN_TITLE} | layout05` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
