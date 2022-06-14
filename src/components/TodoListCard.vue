<template>
  <v-container class="todoapp">
    <slot><h1>todos</h1></slot>

    <todo-list-card-add-todo-input />

    <todo-list :todos="todos" />

    <todo-list-card-toggle-complete
      v-if="todos.length"
      :todos="todos"
      class="my-0"
    />

    <todo-list-card-footer
      :todos="todos"
      :hide-clear-complete="hideClearComplete || todos.length === 0"
    />
  </v-container>
</template>

<script>
import TodoListCardToggleComplete from '@/components/TodoListCardToggleComplete'
import TodoListCardAddTodoInput from '@/components/TodoListCardAddTodoInput'
import TodoListCardFooter from '@/components/TodoListCardFooter'
import TodoList from '@/components/TodoList'

export default {
  name:       'TodoListCard',
  components: {
    TodoListCardToggleComplete,
    TodoListCardAddTodoInput,
    TodoListCardFooter,
    TodoList
  },
  props: {
    todos:             { type: Array, required: true },
    hideClearComplete: { type: Boolean, default: false },
  }
}
</script>

<style lang="scss" scoped>
.todoapp {
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>