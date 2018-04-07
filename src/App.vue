<template>
  <div id="app">
    <div class='ui centered grid'>
      <div class='twelve wide mobile eight wide tablet six wide computer column'>

        <h2 class="ui dividing header">
          <i class="check square outline icon"></i>
          <div class="content">
            VueDO
            <div class="sub header">Vue2 basic demo</div>
          </div>
        </h2>

        <todo-list :todos="todos"></todo-list>
        <create-todo @create-todo="createTodo"></create-todo>

      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import TodoList from './components/ListView/_ListView';
import CreateTodo from './components/ListView/TodoCreate';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
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
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
};
</script>
