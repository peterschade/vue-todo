import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      title: 'Todo A',
      project: 'Project A',
      done: false,
    }, {
      title: 'Todo B',
      project: 'Project B',
      done: true,
    }, {
      title: 'Todo C',
      project: 'Project C',
      done: false,
    }, {
      title: 'Todo D',
      project: 'Project D',
      done: false,
    }],
  },
  mutations: {
    // addTodo (state) {
    //   console.log('addTodo: %o', state)
    //   // state.todos
    // },
  },
})

