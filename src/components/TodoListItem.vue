<template>
  <li
    :class="{
      completed: todo.completed,
      editing: isEditing(todo)
    }"
    class="todo-list-item"
  >
    <div class="view">
      <app-checkbox
        class="toggle"
        :input-value="todo.completed"
        @click="toggleTodoComplete(todo)"
      />
      <label @dblclick="onEdit(todo, $event)">{{ todo.name }}</label>
      <div
        class="destroy"
        @click.prevent.stop="deleteTodo(todo.id)"
      />
    </div>
    <input
      v-model="todo.name"
      class="edit"
      type="text"
      @keyup.enter="editTodo(todo)"
      @keyup.esc="cancelEdition"
      @blur="editTodo(todo)"
    >
  </li>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import AppCheckbox from '@/components/AppCheckbox'

export default {
  name:       'TodoListItem',
  components: {
    AppCheckbox
  },
  props: {
    todo: { type: Object, required: true }
  },
  computed: {
    ...mapState(['currentEditingTodo'])
  },
  methods: {
    ...mapMutations(['setCurrentEditingTodo']),
    ...mapActions(['fetchTodos', 'toggleTodoComplete', 'editTodo', 'deleteTodo']),
    async onEdit(todo, event) {
      await this.setCurrentEditingTodo(todo)
      event.target.closest('li').querySelector('.edit')?.focus()
    },
    cancelEdition() {
      this.setCurrentEditingTodo(null)
      this.fetchTodos()
    },
    isEditing(todo) {
      return this.currentEditingTodo?.id === todo.id
    }
  }
}
</script>

<style lang="scss">
.todo-list-item {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  label {
    word-break: break-all;
    padding: 15px 15px 15px 20px;
    line-height: 1.2;
    transition: color 0.4s;
    flex-grow: 1 !important;
  }
  .view {
    display: flex;
    align-items: center;
  }
  .edit {
    display: none;
    width: 480px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
    position: relative;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  .toggle {
    text-align: center;
    width: 40px;
    height: auto;
    margin: 0;
    padding: 0;
    @media screen and (-webkit-min-device-pixel-ratio:0) {
	  	height: 40px;
	  }
  }

  .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }
  .destroy:hover { color: #af5b5e }
  .destroy:after { content: '×' }

  // EDITION MODE
  &.editing {
    border-bottom: none;
    padding: 0;

    .view { display: none; }
    .edit { display: block; }
  }

  &.editing:last-child { margin-bottom: -1px }

  &.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }
  &:hover .destroy { display: block; }
}
</style>