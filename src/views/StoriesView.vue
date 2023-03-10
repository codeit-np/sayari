<template>
  <template-view>
    <div class="container">
    <div class="row g-2">
      <div class="h2">Stories for you</div>
          <div class="col-md-3" v-for="(i, index) in 4" :key="index">
    <vs-card type="3">
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="@/assets/ended.jpg" alt="">
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
          </div>
    </div> 
    </div>  

    <section class="py-5">
      <div class="container g-2">
        <h2>Trending now
          </h2>
        <div class="row">
          <div class="col-md-3" v-for="(post,index) in posts.posts" :key="index">
            <div class="card">
              <div class="card-body">
                <div style="width:100%;height: 200px">
                <img :src="post.image" class="img-fluid" style="width:100%;height:100%;objectFit:cover" alt="">
                </div>
                <div class="text-center py-2">
                <h5>{{post.title}}</h5>
                <span class="badge bg-success" v-if="post.type == 'free'">{{post.type}}</span>
                <span class="badge bg-danger" v-else>{{post.type}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template-view>
</template>

<script>

import TemplateView from './TemplateView.vue'
import axios from 'axios'
  export default {
  components: { TemplateView },
   data(){
    return{
      posts:[]
    }
  },
  mounted(){
    this.getStories()
  },
  methods:{
    async getStories(){
        var response = await axios.get ("  http://localhost:3000/types/1?_embed=posts");
        console.log(response.data)
        this.posts = response.data
    }
  }
    
  }
</script>

<style lang="scss" scoped>

</style>