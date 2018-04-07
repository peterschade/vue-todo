<template>
  <div class="ui fluid card" :class="{ 'green' :todo.done }">
    <!-- yoda, ternary: :class="todo.done ? 'green' : 'red'"  -->


    <!--View Mode-->
    <div class="content" v-show="!isEditing">
      <div class="header">
          {{ todo.title }}
      </div>
      <div class="meta">
          {{ todo.project }}
      </div>

      <div class="extra content">
          <span class="right floated edit icon"
                @click="showForm">
          <i class="edit icon"></i>
        </span>
        <span class="right floated trash icon"
              @click="deleteTodo(todo)">
          <i class="trash icon"></i>
        </span>
      </div>
    </div>
    <div class="ui bottom attached blue basic icon button"
         v-show="!isEditing && !todo.done"
         @click="completeTodo(todo)"
    >
      <i class="checkmark sign icon"></i>
      mark done
    </div>


    <!-- Editing mode -->
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title
            <input type='text' v-model="todo.title" >
          </label>
        </div>
        <div class='field'>
          <label>Project
            <input type='text' v-model="todo.project" >
          </label>
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
    props: {
      todo: {
        type: [Object, Array],
        required: true,
      },
    },

    data() {
      return {
        isEditing: false,
      }
    },
    methods: {
      completeTodo(todo) {
        this.$emit('complete-todo', todo)
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo)
      },
      showForm() {
        this.isEditing = true
      },
      hideForm() {
        this.isEditing = false
      },
    },
  }
</script>
