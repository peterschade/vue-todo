<template>
  <div>
    <the-header>
      VueDO
      <template slot="sub-header">Vue2 basic demo</template>
    </the-header>

    <div class="four column centered row">
      <p class="column tasks">
        Completed Tasks:
        <b>{{todos.filter(todo => todo.done).length}}</b>
      </p>
      <p class="column tasks">
        Pending Tasks:
        <b>{{todos.filter(todo => !todo.done).length}}</b>
      </p>
    </div>

    <!-- v-for over array with key, v-bind todo -->
    <todo v-for="(todo, index) in todos" :key="index"
          @delete-todo="deleteTodo"
          @complete-todo="completeTodo"
          :todo.sync="todo" />

    <!-- v-on emitted events -->
    <create-todo @create-todo="createTodo"></create-todo>
  </div>
</template>

<script type="text/javascript">
  import sweetalert from 'sweetalert'
  import Todo from './Todo.vue'
  import CreateTodo from './TodoCreate.vue'
  import TheHeader from 'src/components/TheHeader.vue'

  export default {
    components: {
      Todo,
      CreateTodo,
      TheHeader,
    },

    data() {
      return {
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
      }
    },

    methods: {
      deleteTodo(todo) {
        sweetalert(
          'Are you sure you want to delete that?', {
            buttons: ['Nope', 'Yep'],
            dangerMode: true,
            icon: 'warning',
          })
          .then((value) => {
            if (value) {
              const todoIndex = this.todos.indexOf(todo)
              this.todos.splice(todoIndex, 1)

              sweetalert('Poof! Your todo has been deleted!', {
                icon: 'success',
              })
            }
          })
      },

      completeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo)
        this.todos[todoIndex].done = true

        sweetalert('Success!', 'To-Do completed!', 'success')
      },

      createTodo(newTodo) {
        this.todos.push(newTodo)

        sweetalert('Success!', 'To-Do created!', 'success')
      },
    },
  }
</script>

<!--Scoped styles wont leak into other components -->
<style scoped lang="scss">
  p.tasks {
    display: inline-block;

    &:first-child {
      padding-right: 1rem;
    }
  }
</style>

