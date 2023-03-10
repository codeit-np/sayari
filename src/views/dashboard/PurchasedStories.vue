<template>
  <dashboard-menu>
       <section class="py-5">
      <div class="container g-2">
        <h2 class="text-dark"> Your purchased stories
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
                <span class="badge bg-success">{{post.type}}</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </dashboard-menu>
</template>

<script>
import DashboardMenu from "@/components/DashboardMenu.vue"
import axios from 'axios'
  export default {
    components:{DashboardMenu},
   data(){
    return{
      posts:[]
    }
  },
  mounted(){
    this.getSayari()
  },
  methods:{
    async getSayari(){
        var response = await axios.get ("http://localhost:3000/types/2?_embed=posts");
        console.log(response.data)
        this.posts = response.data
    }
  }
    
  }
</script>

<style lang="scss" scoped>

</style>