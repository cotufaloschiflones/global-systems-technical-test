import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

export class Service {
  get axios() {
    return axiosInstance
  }
  get baseUrl() { // override in child class if neccessary
    return ''
  }
  async index(params) {
    return this.axios.get(this.baseUrl, { params })
      .then(response => {
        if (response.status === 204) return []
        return response.data
      })
  }
  async get(id) {
    return this.axios.get(`${this.baseUrl}/${id}`).then(response => response.data)
  }
  async create(model) {
    return this.axios.post(this.baseUrl, model)
  }
  async update(model) {
    return this.axios.put(`${this.baseUrl}/${model.id}`, model)
  }
  async delete(id) {
    return this.axios.delete(`${this.baseUrl}/${id}`)
  }
}
