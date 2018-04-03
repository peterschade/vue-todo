<template>
  <div class="ui centered card" :class="{ 'green' :todo.done }">
    <!--yoda, ternary: :class="todo.done ? 'green' : 'red'"  -->


    <!--View Mode-->
    <div class="content" v-show="!isEditing">
      <div class="header">
          {{ todo.title }}
      </div>
      <div class="meta">
          {{ todo.project }}
      </div>
      <div class="extra content">
          <span class="right floated edit icon" @click="showForm">
          <i class="edit icon"></i>
        </span>
        <span class="right floated trash icon" @click="deleteTodo(todo)">
          <i class="trash icon"></i>
        </span>
      </div>
    </div>
    <div class="ui bottom attached blue basic icon button" @click="completeTodo(todo)" v-show="!isEditing && !todo.done">
      <i class="checkmark sign icon"></i>
      Done
    </div>


    <!-- Editing mode -->
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title" >
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.project" >
        </div>
      </div>
    </div>
    <div class='ui bottom attached buttons' v-show="isEditing">
      <button class='ui icon button' @click="hideForm">
        <i class="close icon"></i>
        Cancel
      </button>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
    },
  };
</script>
