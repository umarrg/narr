import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import profile from '../components/profile.vue'
import upload from '../components/upload.vue'
import ocr from '../components/ocr.vue'
import docs from '../components/docs.vue'
import video from '../components/video.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  
  
  {
    path: '/profile',
    name: 'profile',
    component: profile
      
  }, 
  {
    path: '/upload',
    name: 'upload',
    component: upload
      
  },  
  {
    path: '/ocr',
    name: 'ocr',
    component: ocr
      
  },  
  {
    path: '/docs',
    name: 'docs',
    component: docs
      
  },  
  {
    path: '/video',
    name: 'video',
    component: video
      
  },  

    
 
  
  // {
  //   path: '/chat',
  //   name: 'chat',
  //   component:{
  //     chat
  //     } 

    
  // },
  // {
  //   path: '/ocr',
  //   name: 'ocr',
  //   component:{
  //    ocr
  //     } 

    
  // },
  {
    path: '/chat',
    name: 'chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/chat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
