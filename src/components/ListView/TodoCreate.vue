<template>
  <div class='ui basic content center aligned segment'>
    <!--Add button-->
    <button class="ui circular positive icon button"
            @click="openForm"
            v-show="!isCreating">
      <i class="plus icon"></i>
    </button>

    <!--form-->
    <div class="ui fluid card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>
              Your new Todo
              <input type="text" v-model="titleText">
            </label>
          </div>
          <div class="field">
            <label>
              Project
              <input type="text" v-model="projectText">
            </label>
          </div>

          <div class="ui buttons">
            <button class="ui icon button" @click="closeForm">
              Cancel
            </button>
            <div class="or"></div>
            <button class="ui positive right labeled icon button" @click="sendForm()">
              <i class="add icon"></i>
              New
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titleText: '',
        projectText: '',
        isCreating: false,
      }
    },

    methods: {
      openForm() {
        this.isCreating = true
      },
      closeForm() {
        this.isCreating = false
      },
      sendForm() {
        if (this.titleText.length > 0 && this.projectText.length > 0) {
          const title = this.titleText
          const project = this.projectText

          this.$emit('create-todo', {
            title,
            project,
            done: false,
          })

          // clear form
          this.titleText = ''
          this.projectText = ''
          this.isCreating = false
        }
      },
    },

    // no arrow functions! needs this context to vue instance
    created: function () {
      console.log('TodoCreate.vue component was created')
    },
  }
</script>
