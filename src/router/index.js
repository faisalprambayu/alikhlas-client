import Vue from 'vue'
import VueRouter from 'vue-router'

import Beranda from '@/views/Home.vue'

import Blog from '@/views/blog/Blog.vue'
import BlogDetail from '@/views/blog/BlogDetail.vue'

import Contact from '@/views/Contact.vue'

import Agenda from '@/views/agenda/Agenda.vue'
import AgendaDetail from '@/views/agenda/AgendaDetail.vue'

// import Bidang from '@/views/bidang/Bidang.vue'
import DakwahPeribadatan from '@/views/bidang/DakwahPeribadatan.vue'
import Ekonomi from '@/views/bidang/Ekonomi.vue'
import Fundraising from '@/views/bidang/Fundraising.vue'
import Pendidikan from '@/views/bidang/Pendidikan.vue'
import SaranaPrasarana from '@/views/bidang/SaranaPrasarana.vue'
import SosialMultimedia from '@/views/bidang/SosialMultimedia.vue'

// import Tentang from '@/views/tentang/Tentang.vue'
import Pengurus from '@/views/tentang/Pengurus.vue'
import Sejarah from '@/views/tentang/Sejarah.vue'
import Struktur from '@/views/tentang/Struktur.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda
  },

  // {
  //   path: '/tentang',
  //   name: 'Tentang',
  //   component : Tentang
  // },
  {
    path: '/sejarah',
    name: 'Sejarah',
    component : Sejarah
  },
  {
    path: '/pengurus',
    name: 'Pengurus',
    component : Pengurus
  },
  {
    path: '/struktur',
    name: 'Struktur',
    component : Struktur
  },

  // {
  //   path: '/tentang',
  //   name: 'Tentang',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },{
    path: '/blog/blogdetail',
    name: 'blog.detail',
    component: BlogDetail,
  }

  ,{
    path: '/kontak',
    name: 'kontak',
    component: Contact,
  },

  {
    path: '/agenda',
    name: 'agenda',
    component: Agenda,
  },
  {
    path: '/agenda/agendadetail',
    name: 'agenda.detail',
    component: AgendaDetail,
  },
  
  // {
  //   path: '/bidang',
  //   name: 'bidang',
  //   component: Bidang,
  // },
  {
    path: '/dakwahperibadatan',
    name: 'dakwahperibadatan',
    component: DakwahPeribadatan,
  },
  {
    path: '/ekonomi',
    name: 'ekonomi',
    component: Ekonomi,
  },
  {
    path: '/fundraising',
    name: 'fundraising',
    component: Fundraising,
  },
  {
    path: '/pendidikan',
    name: 'pendidikan',
    component: Pendidikan,
  },
  {
    path: '/saranaprasarana',
    name: 'saranaprasarana',
    component: SaranaPrasarana,
  },
  {
    path: '/sosialmultimedia',
    name: 'sosialmultimedia',
    component: SosialMultimedia ,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
