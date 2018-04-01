import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TextDes from '@/components/Text'
import Children from '@/components/Children'
import ChildrenTwo from '@/components/ChildrenTwo'
import Test from '@/components/TestTwo'
import Shop from '@/components/Shopping'
import ShopCar from '@/components/ShopCar'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        Test: Test
      }
    },
    {
    	path: '/textdes/:id',
    	name: 'TextDes',
    	component: TextDes,
      children: [
        {
          path: 'children',
          name: 'Children',
          component: Children
        },
        {
          path: 'children-two',
          name: 'ChildrenTwo',
          component: ChildrenTwo
        }
      ]
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/shopping',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/shop-car',
      name: 'ShopCar',
      component: ShopCar
    }
  ]
})
