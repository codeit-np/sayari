<template>
     <vs-card-group>
    <vs-card v-for="(card,index) in 6" :key="index" @click="handleClick">
<template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="@/assets/ikigai.jpeg" alt="">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
      </template>
    </vs-card>
  </vs-card-group>


</template>

<script>
import axios from 'axios'
    export default {
        name:'LatestBookComponent',
          data(){
    return{
      cards:[]
    }
  },
  mounted(){
    this.fetchCards();
  },
  methods:{
    async fetchCards(){
        var response = await axios.get(" http://localhost:3000/cards")
        console.warn(response.data)
        this.cards = response.data
    }
  }
    }
  

    
</script>

<style lang="scss" scoped>

</style>