<template>
  <app-checkbox
    v-model="allChecked"
    :input-value="allCompleted"
    :indeterminate="isUndeterminated"
  >
    <template #label>
      <small><b>{{ label }}</b></small>
    </template>
  </app-checkbox>
</template>

<script>
import { mapActions } from 'vuex'
import AppCheckbox from '@/components/AppCheckbox'

export default {
  name:       'TodoListCardToggleComplete',
  components: {
    AppCheckbox
  },
  props: {
    todos: { type: Array, required: true }
  },
  computed: {
    pendingTodos() {
      return this.todos.filter(todo => !todo.completed)
    },
    allCompleted() {
      return this.todos.every(todo => todo.completed)
    },
    isUndeterminated() {
      return this.todos.some(todo => !todo.completed) && this.todos.some(todo => todo.completed)
    },
    allChecked: {
      get() {
        return this.todos.every(todo => todo.completed)
      },
      set(value) {
        this.toggleAllTodosComplete(value)
      }
    },
    label() {
      return this.allCompleted
        ? 'Mark all todos as active'
        : 'Mark all todos as completed'
    }
  },
  methods: {
    ...mapActions(['toggleAllTodosComplete'])
  }
}
</script>

<style lang="scss" scoped>

</style>