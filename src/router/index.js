import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import TextDes from '@/components/Text'
const TextDes = (resolve) => require(['@/components/Text'],resolve)


import Children from '@/components/Children'
import ChildrenTwo from '@/components/ChildrenTwo'

// import TestTwo from '@/components/TestTwo'
// const TestTwo = () => require('@/components/TestTwo')


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
import table from '@/components/table'

import dataComponent from '@/components/dataComponent'
import nonRenderingComponent from '@/components/nonRenderingComponent'
import nonRenderingComponent2 from '@/components/nonRenderingComponent2'
import slotTest from '@/components/slotTest'
import inputComponent from '@/components/inputComponent'

import collapseContainer from '@/components/collapseContainer'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        Test: (resolve) => require(['@/components/TestTwo'],resolve)//TestTwo
      }
    },
    {
    	path: '/textdes/:id',
    	name: 'TextDes',
      component: TextDes,
      // component: (resolve) => require(['@/components/Text'],resolve),
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
      path: '/TestTwo',
      name: 'TestTwo',
      component: (resolve) => require(['@/components/TestTwo'],resolve)
      // component: TestTwo
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
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/dataComponent',
      name: 'dataComponent',
      component: dataComponent
    },
{
      path: '/nonRenderingComponent',
      name: 'nonRenderingComponent',
      component: nonRenderingComponent
    },
    {
      path: '/nonRenderingComponent2',
      name: 'nonRenderingComponent2',
      component: nonRenderingComponent2
    },
    {
      path: '/slotTest',
      name: 'slotTest',
      component: slotTest
    },
    {
      path: '/inputComponent',
      name: 'inputComponent',
      component: inputComponent
    },
    {
      path: '/collapseContainer',
      name: 'collapseContainer',
      component: collapseContainer
    },
  ]
})
