<template>
  <div class='ui basic content center aligned segment'>
    <!--Add button-->
    <button class="ui circular positive icon button" @click="openForm" v-show="!isCreating">
      <i class="plus icon"></i>
    </button>

    <!--form-->
    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="titleText" type="text">
          </div>
          <div class="field">
            <label>Project</label>
            <input v-model="projectText" type="text">
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
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit('create-todo', {
          title,
          project,
          done: false,
        });
        this.titleText = '';
        this.projectText = '';
        this.isCreating = false;
      }
    },
  },
};
</script>
