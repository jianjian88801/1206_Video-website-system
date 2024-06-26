import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discussshipinfenxiang from '@/views/modules/discussshipinfenxiang/list'
    import forum from '@/views/modules/forum/list'
    import pingtaigonggao from '@/views/modules/pingtaigonggao/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shipinfenxiang from '@/views/modules/shipinfenxiang/list'
    import messages from '@/views/modules/messages/list'
    import shipinleixing from '@/views/modules/shipinleixing/list'
    import config from '@/views/modules/config/list'
    import discussshipinpaiming from '@/views/modules/discussshipinpaiming/list'
    import shipinpaiming from '@/views/modules/shipinpaiming/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discussshipinfenxiang',
        name: '视频分享评论',
        component: discussshipinfenxiang
      }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/pingtaigonggao',
        name: '平台公告',
        component: pingtaigonggao
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shipinfenxiang',
        name: '视频分享',
        component: shipinfenxiang
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/shipinleixing',
        name: '视频类型',
        component: shipinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussshipinpaiming',
        name: '视频排名评论',
        component: discussshipinpaiming
      }
      ,{
	path: '/shipinpaiming',
        name: '视频排名',
        component: shipinpaiming
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
