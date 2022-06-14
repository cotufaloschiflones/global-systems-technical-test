import store from '@/store'

export default [
  {
    path:        '/',
    name:        'home',
    component:   () =>   import('@/views/Home'),
    beforeEnter: async (to, from, next) => {
      await store.dispatch('fetchTodos')
      next()
    }
  },
  {
    path:        '/active',
    name:        'activeTodos',
    component:   () => import('@/views/ActiveTodos'),
    beforeEnter: async (to, from, next) => {
      await store.dispatch('fetchTodos')
      next()
    }
  },
  {
    path:        '/completed',
    name:        'completedTodos',
    component:   () => import('@/views/CompletedTodos'),
    beforeEnter: async (to, from, next) => {
      await store.dispatch('fetchTodos')
      next()
    }
  }
]
