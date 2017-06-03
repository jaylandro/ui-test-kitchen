<template>
  <button class="btn" v-on:click="this.clickBtn">{{ text }} Heyyy</button>
</template>

<script>
export default {
  props: {
    clickBtn: Function,
    text: String
  }
}
</script>
