import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },

  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },

    ADD_TASK(state, task){
      const taskTemp = {
        description: task.description,
        due_date: task.due_date,
        completed: false,
        important: task.important
      }
      console.log('11', task)
      axios.post('http://localhost:8081/tasks/', taskTemp).then(() => {
        state.tasks.push(taskTemp);
      })
    },

    DELETE_TASK(state, id){
      axios.delete('http://localhost:8081/tasks/'+ id).then(() => {
        state.tasks = state.tasks.filter((item) => id !== item.id);
      })
    },

    UPDATE_TASK(state, task){
      console.log('11', task)
      axios.put('http://localhost:8081/tasks/'+ task.id, task).then(() => {
        state.tasks.push(task);
      })
    },

    SET_IMPORTANT(state, id, important){
      axios.put('http://localhost:8081/tasks/'+ id, {
        id: this.id,
        important: important
      }).then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })      
    },

    SET_COMPLETED(state, id){
      axios.put('http://localhost:8081/tasks/'+ id, {
        completed: !this.completed
      }).then(() => {
        state.tasks.push(taskTemp);
      })      
    },

    COUNT_TASKS(state){}

  },

  actions: {
    loadTasks({commit}){
      axios.get('http://localhost:8081/tasks')
      .then(response => {
        console.log('1',response.data);
        let tasksTemp = response.data
        commit('SET_TASKS', tasksTemp)
      })
    },

    addTask(context, task){
      console.log('10', task)
      context.commit('ADD_TASK', task)
    },

    deleteTask(context, id){
      context.commit('DELETE_TASK', id)
    },

    updateTask(context, task){
      console.log('10', task, task.id)
      context.commit('UPDATE_TASK', task)
    },
    
    setTaskImportant(context, id, important){
      context.commit('SET_IMPORTANT', id, important)
    },

    setTaskCompleted(context, id){
      context.commit('SET_COMPLETED', id)
    },

    countTasks(context){
      context.commit('COUNT_TASKS')
    }

  },

  getters: {
    getTask: (state) => (id) => {
      var task = state.tasks.find(task => task.id === id)
      console.log('b',task);
      
      return task
    },
  }

})
