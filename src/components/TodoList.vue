<template>
  <ul
    v-if="todos.length"
    class="todo-list"
  >
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name:       'TodoList',
  components: {
    TodoListItem
  },
  props: {
    todos: { type: Array, required: true }
  }
}
</script>

<style lang="scss">
.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}
</style>
