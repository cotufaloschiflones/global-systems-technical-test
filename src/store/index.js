import Vue from 'vue'
import Vuex from 'vuex'
import { todoService } from '@/services/todoService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:              null,
    activeTodos:        null,
    completedTodos:     null,
    currentEditingTodo: null
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
      state.activeTodos = todos.filter(todo => !todo.completed)
      state.completedTodos = todos.filter(todo => todo.completed)
    },
    setCurrentEditingTodo(state, todo) {
      state.currentEditingTodo = todo
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const todos = await todoService.index()
      commit('setTodos', todos)
    },
    async addTodo({ commit, state }, name) {
      if (!name) return
      const newTodo = {
        id:        +new Date(),
        completed: false,
        name
      }

      await todoService.create(newTodo)
      commit('setTodos', [...state.todos, newTodo])
    },
    async editTodo({ dispatch, commit, state }, todo) {
      const existsTodo = state.todos.some(t => t.id === todo.id)
      if (!existsTodo) return
      if (!todo.name) {
        dispatch('deleteTodo', todo.id)
        return
      }

      await todoService.update(todo)
      commit('setCurrentEditingTodo', null)
    },
    async deleteTodo({ commit, state }, id) {
      await todoService.delete(id)
      const todos = state.todos.filter(todo => todo.id !== id)
      commit('setTodos', todos)
    },
    async toggleTodoComplete({ commit, state }, todo) {
      todo.completed = !todo.completed
      await todoService.update(todo)
      const todos = state.todos.map(t => t.id === todo.id ? todo : t)
      commit('setTodos', todos)
    },
    async toggleAllTodosComplete({ commit, state }, completed) {
      state.todos.forEach(todo => todo.completed = completed)
      const todosPut = state.todos.map(todo => todoService.update(todo))
      await Promise.all([todosPut])
      commit('setTodos', state.todos)
    },
    async clearCompleted({ commit, state }) {
      const completed = state.todos
        .filter(todo => todo.completed)
        .map(todo => todoService.delete(todo.id))
      await Promise.all([completed])
      const todos = state.todos.filter(todo => !todo.completed)
      commit('setTodos', todos)
    }
  }
})
