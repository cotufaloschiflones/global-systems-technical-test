<template>
  <input
    v-model="newTodo"
    class="new-todo"
    type="text"
    placeholder="todo"
    :class="isFocused ? 'edit' : ''"
    @keyup.enter="addNewTodo(newTodo)"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoListCardAddTodoInput',
  data: () => ({
    isFocused: true,
    newTodo:   null,
  }),
  methods: {
    ...mapActions(['addTodo']),
    addNewTodo(name) {
      this.addTodo(name)
      this.newTodo = null
    }
  }
}
</script>

<style lang="scss" >
.new-todo {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	color: inherit;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	padding: 16px 16px 16px 60px;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);

    &::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }

    &::-moz-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }

    &::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }
}
</style>