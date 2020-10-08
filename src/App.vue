<template>
  <div id="app">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    axios.get('song/url?id=33894312&proxy=http://192.168.1.6:8080')
      .then((data) => {
        console.log(data);
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
