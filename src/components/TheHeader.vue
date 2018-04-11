<template>
  <!-- Multiple Slot example -->
  <h2 class="ui dividing header">
    <!--<i class="green check square outline icon"></i>-->
    <img src="../assets/logo.png">
    <div class="content">

      <slot></slot>

      <div class="sub header">

        <slot name="sub-header"></slot>

      </div>
    </div>
  </h2>
</template>
