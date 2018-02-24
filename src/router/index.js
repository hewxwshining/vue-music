import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

//路由组件异步加载
//推荐
const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) =>{
    resolve(module);
  })
}
//推荐详情
const Disc = (resolve) => {
  import('components/disc/disc').then((module) => {
    resolve(module)
  })
}
// 歌手
const Singer = (resolve) => {
  import('components/singer/singer').then((module) =>{
    resolve(module);
  })
}
// 歌手详情
const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((module) =>{
    resolve(module);
  })
}

export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },{
      path: '/recommend',
      component: Recommend,
      children: [{
        path: ':id',
        component: Disc
      }]
    },{
      path: '/singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
  ]
});
