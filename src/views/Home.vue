<template>
  <todo-list-card :todos="todos">
    <template slot="title">
      <h1>todos2</h1>
    </template>
  </todo-list-card>
</template>

<script>
import { mapState } from 'vuex'
import TodoListCard from '@/components/TodoListCard'

export default {
  name:       'Home',
  components: {
    TodoListCard
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>
