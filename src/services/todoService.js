import { Service } from '@/services/Service'

class TodoService extends Service {
  get baseUrl() {
    return 'todos'
  }

  // example creating new method available in child class (todoService)
  // async fetchTodosOrderByLength(params) { your fancy code here }
}

export const todoService = new TodoService()
