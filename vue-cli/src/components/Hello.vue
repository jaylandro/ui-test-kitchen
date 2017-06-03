<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <btn :clickBtn="this.clickBtn" text="Submit"></btn>
  </div>
</template>

<script>
import btn from './Btn'
export default {
  name: 'hello',
  data: () => ({
    msg: 'Welcome to Your Vue.js PWA'
  }),
  components: {
    btn
  },
  methods: {
    clickBtn: () => console.log('from test method')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
