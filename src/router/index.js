import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TextDes from '@/components/Text'
import Children from '@/components/Children'
import ChildrenTwo from '@/components/ChildrenTwo'
import Test from '@/components/TestTwo'
import Testt from '@/components/Test'
import Shop from '@/components/Shopping'
import ShopCar from '@/components/ShopCar'
import ShopCarAddress from '@/components/ShopCarAddress'
import ComponentInputParent from '@/components/componentInputParent'
import ContainerTab from '@/components/containerTab'
import ClickOutside from '@/components/clickOutside'
import link from '@/components/link'
import functional from '@/components/functional'
import talklist from '@/components/talklist'

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
    },
    {
      path: '/address',
      name: 'address',
      component: ShopCarAddress
    },
    {
      path: '/testt',
      name: 'Testt',
      component: Testt
    },
    {
      path: '/componentInputParent',
      name: 'componentInputParent',
      component: ComponentInputParent
    },
    {
      path: '/containerTab',
      name: 'containerTab',
      component: ContainerTab
    },
    {
      path: '/clickOutside',
      name: 'clickOutside',
      component: ClickOutside
    },
    {
      path: '/link',
      name: 'link',
      component: link
    },
    {
      path: '/functional',
      name: 'functional',
      component: functional
    },
    {
      path: '/talklist',
      name: 'talklist',
      component: talklist
    },
  ]
})
