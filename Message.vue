<template>
   <div>
       <button class="isRed ? "red" : "blue" " Click me</button>
       <input type="text" v-model="somevalue">
       <input type="text" v-bind:value="somevalue">
       <input type="text" v-model="message" @keydown.enter="add">
       <button v-on:click="items.push(message)"> Add </button>
       <button @click="items = []">Clear All</button>
       <ul>
           <li v-for="item in items" :key="item">{{item}}</li>
       </ul>
        {{ message }}
       </div> 
</template>
<script>
export default {
    data(){
        return {
            somevalue: "",
            message: "Hello World",
            items: ["Piim","sai","krõpsud"]
            isRed: true;
        }
    },
    methods: {
         add(){
             if(this.message != ""){

             }
            this.items.push(this.message);
            this.message="";
         }
    }   
}
computed: {
    reverse{
        retyrb thus.somevalue.split("").reverse().join("")
    }
}

</script>