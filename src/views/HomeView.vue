<template>
  <template-view>
    <!-- Hero Section -->
    <section>
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h1>Welcome to <span class="text-danger">Sayari</span></h1>
            <p>
              Sayari is an online literary community where readers and writers
              of original poetry and stories can interact.
            </p>
            <button class="btn btn-outline-danger">Start Reading</button>
            <button class="btn btn-outline-danger ms-2">Start Writing</button>
          </div>
          <div>
            <img
              src="@/assets/hero-img.jpg"
              alt=""
              height="470px"
              width="620px"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Explorer section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/explore.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div>
              <h1>Free To Explore</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ex debitis molestias in voluptas error ducimus
                dignissimos veritatis fuga, a ullam illo! Omnis alias ipsam
                laudantium sed doloribus velit fugiat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Section -->
    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div>
            <h1>Latest Books</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae delectus non nihil culpa suscipit, quos
            </p>
          </div>
          <div>
            <vs-button :active="active == 1" @click="active = 1">
              View More
            </vs-button>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md-3" v-for="(i, index) in 8" :key="index">
            <latest-book-component />
          </div>
        </div>
      </div>
    </section>
  </template-view>
</template>

<script>
import TemplateView from "./TemplateView.vue";
import LatestBookComponent from "@/components/LatestBookComponent.vue";
export default {
  components: { TemplateView, LatestBookComponent,},
};
</script>

<style  scoped>

h1{
  color: black;
  font-weight: bold;
}
p{
  color: black;
  font-weight: 500;
  font-size: 20px;
}
.btn{
  height: 50px;
  width: 150px;
  font-size: 18px;
  margin-top: 50px;
  font-weight: 500;
}
</style>
