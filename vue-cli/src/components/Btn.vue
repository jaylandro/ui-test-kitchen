<template>
  <button class="btn" v-on:click="this.clickBtn">{{ this.text }}</button>
</template>

<script>
export default {
  props: {
    clickBtn: {
      type: Function,
      default: () => 'hello'
    },
    text: {
      type: String,
      default: 'Submit'
    }
  }
}
</script>
