<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        repoName:'',
        repoUrl:''
      }
    },

    mounted(){
      const url = `https://api.github.com/search/repositories?q=v&sort=stars`
      axios.get(url).then(response => {
        const result = response.data
        const mostPopule = result.items[0]
        this.repoUrl = mostPopule.html_url
        this.repoName = mostPopule.name
      }).catch(error => {
        alert('出错了！')
      })
    }


  }


</script>

<style>



</style>
