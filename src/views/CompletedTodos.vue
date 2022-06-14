<template>
  <todo-list-card
    :todos="completedTodos"
  >
    <template>
      <h1>completed</h1>
    </template>
  </todo-list-card>
</template>

<script>
import { mapState } from 'vuex'
import TodoListCard from '@/components/TodoListCard'

export default {
  name:       'CompletedTodos',
  components: {
    TodoListCard
  },
  computed: {
    ...mapState(['completedTodos'])
  }
}
</script>

