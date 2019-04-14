import Vue from 'vue'
import Router from 'vue-router'

import AlbumsComponent from '@/pages/albums/AlbumsComponent'
import AlbumDetailsComponent from '@/pages/albums/AlbumDetailsComponent'
import PostsComponent from '@/pages/posts/PostsComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsComponent
    },
    {
      path: '/albums/:albumId',
      name: 'album-details',
      component: AlbumDetailsComponent
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsComponent
    },
    {
      path: '*',
      redirect: '/posts',
    }
  ]
})
