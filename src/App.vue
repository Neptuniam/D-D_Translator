<template>
<div>
    <div class="center-xs Intro">
        <h1> Josh's D&D Language Translator</h1>
        <h3>Built By: Liam Jones</h3>
    </div>

    <Forwards />
</div>
</template>

<script>
import Forwards from './components/Forwards.vue'

export default {
  name: 'app',
  components: {
    Forwards
  }
}
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    .Intro {
        margin: 50px 0px 100px 0px;
    }

    .fullWidth {
        width: 100% !important;
    }
</style>
