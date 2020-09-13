<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ msg }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      url: '',
      msg: 'hello mzj!'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
