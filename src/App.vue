<template>
  <div class="container">
    <Search></Search>
    <user-Main></user-Main>
  </div>

</template>

<script>
    import Search from './components/Search'
    import Main from './components/Main'
    export default {
       data(){
         return {


         }
       },
      components:{
         Search,
         userMain:Main
      }
    }
</script>

<style scoped>

</style>
