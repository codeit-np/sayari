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
            <button
              class="btn btn-outline-danger"
              @click.prevent="$router.push({ name: 'register' })"
            >
              Start Reading
            </button>
            <button
              class="btn btn-outline-danger ms-2"
              @click.prevent="$router.push({ name: 'register' })"
            >
              Start Writing
            </button>
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
              <h1>Let your story be discovered</h1>
              <p>
                Our platform is dedicated to providing a space for writers and
                poets to share their work and connect with a community of
                literary enthusiasts. Whether you're looking for inspiration, a
                new perspective, or just a good read, you'll find it here.
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
            <vs-button danger border:active="active == 2" @click="active = 2">
              View More
            </vs-button>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md-12">
            <latest-book-component />
          </div>
        </div>
      </div>
    </section>

    <!--Writers  -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <h2>Writers</h2>
          <p>The renowned authors of Sayari</p>
          <div class="col-md-3" v-for="(writer, index) in writers" :key="index">
            <div class="card" style="objectfit: cover">
              <div class="card-body">
                <div style="width: 100%; height: 100%">
                  <img
                    :src="writer.image"
                    class="img-fluid"
                    style="width: 100%; height: 200px; objectfit: cover"
                    alt=""
                  />
                </div>
                <h4 class="text-center py-2">{{ writer.name }}</h4>
                <h5 class="text-center text-primary">"{{ writer.author }}"</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template-view>
</template>

<script>
import axios from "axios";
import TemplateView from "./TemplateView.vue";
import LatestBookComponent from "@/components/LatestBookComponent.vue";
export default {
  components: { TemplateView, LatestBookComponent },
  data() {
    return {
      writers: [],
    };
  },
  mounted() {
    this.getWrite();
  },
  methods: {
    async getWrite() {
      var response = await axios.get("http://localhost:3000/writers");
      console.log(response.data);
      this.writers = response.data;
    },
  },
};
</script>

<style scoped>
h1 {
  color: black;
  font-weight: bold;
}
p {
  color: black;
  font-weight: 500;
  font-size: 20px;
}
.btn {
  height: 50px;
  width: 150px;
  font-size: 18px;
  margin-top: 50px;
  font-weight: 500;
}
.card:hover {
  background-color: #f1f1f1;
  box-shadow: 5px 5px 5px #aaaaaa;
}
</style>
