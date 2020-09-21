<template>
  <div>
  <input class="input" @input="debounce" type="text" placeholder="Text input" v-model="searchValue">
    <button class="button" @click="debounce">Search</button>
    <ul>
      <li v-for="result in results" :key="result.id" @click="searchValue=result.name">{{result.name}}</li>
    </ul>
  </div>
</template>

<script>
const axios= require("axios");
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
      results:[],
      timeout: null
    }
  },
  methods:{
    debounce(){
      clearTimeout(this.timeout);
      this.timeout=setTimeout(()=>{
        this.search();
      }, 1000);
    },
    search() {
      axios.get("https://rickandmortyapi.com/api/character/?name=" + this.searchValue).then(response => {
        console.log(response.data);
        this.results = response.data.results;
      });
    },
    select(name){
    this.searchValue=result.name;
    search();
    }
  }
}
</script>

<style scoped>

</style>