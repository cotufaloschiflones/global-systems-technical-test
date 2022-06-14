<template>
  <todo-list-card
    :todos="activeTodos"
    hide-clear-complete
  >
    <template>
      <h1>active</h1>
    </template>
  </todo-list-card>
</template>

<script>
import { mapState } from 'vuex'
import TodoListCard from '@/components/TodoListCard'

export default {
  name:       'ActiveTodos',
  components: {
    TodoListCard
  },
  computed: {
    ...mapState(['activeTodos'])
  }
}
</script>

