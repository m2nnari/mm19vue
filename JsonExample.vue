<template>
   <div>

     <search></search>
   </div>
</template>

<script>
import Joke from './Joke.vue';
import Search from "./Search.vue";
export default {
    components: {
      Search,
      joke: Joke
      },
    created(){
      
    },
    data(){
        return {
           
        }
    }
}
</script>

<style>

</style>