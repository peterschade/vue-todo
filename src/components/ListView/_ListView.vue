<template>
  <div>
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

    <todo v-for="(todo, index) in todos" :key="index"
          @delete-todo="deleteTodo"
          @complete-todo="completeTodo"
          :todo.sync="todo"
    />
  </div>
</template>

<script type="text/javascript">
  import sweetalert from 'sweetalert'
  import Todo from './Todo'

  export default {
    props: ['todos'],

    components: {
      Todo,
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

