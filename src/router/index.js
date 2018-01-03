import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TextDes from '@/components/Text'
import Children from '@/components/Children'
import ChildrenTwo from '@/components/ChildrenTwo'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
