<template>
  <template-view>
    <!-- Hero Section -->
    <section>
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <img src="@/assets/about.png" alt="" height="480px" width="500px" />
          </div>
          <div>
            <h2>
             With <span class="text-danger">Sayari,</span> you can read your favourite books chapter by chapter
        
            </h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Explorer section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <div>
              <h1>Free To Explore</h1>
              <p>
                Our platform is dedicated to providing a space for writers and
                poets to share their work and connect with a community of
                literary enthusiasts. Whether you're looking for inspiration, a
                new perspective, or just a good read, you'll find it here.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/new.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- How to use sayari -->
    <section class="py-5">
      <div class="container">
        <h1 class="text-center">
          How to use <span class="text-danger">Sayari</span>
        </h1>
        <div class="d-flex py-5">
          <div class="text-center">
            <i class="fa-solid fa-plus fs-2"></i>
            <h1>Create</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, tempora autem! Temporibus nihil omnis libero dolore
              non facilis obcaecati, magnam fugit rerum aperiam eveniet veniam
              iure quas! Amet, dolore quaerat.
            </p>
          </div>

          <div class="text-center">
            <i class="fa-solid fa-book-open-reader fs-2"></i>
            <h1>Connect</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam magni
            possimus eius ipsa dolores hic excepturi ut pariatur quae dolorum
            doloremque, culpa dignissimos doloribus vel. Harum, neque esse.
            Facilis, autem!
          </div>

          <div class="text-center">
            <i class="fa-solid fa-book fs-2"></i>
            <h1>Publish</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam magni
            possimus eius ipsa dolores hic excepturi ut pariatur quae dolorum
            doloremque, culpa dignissimos doloribus vel. Harum, neque esse.
            Facilis, autem!
          </div>
        </div>
      </div>
    </section>
  </template-view>
</template>

<script>
import TemplateView from "./TemplateView.vue";
export default {
  components: { TemplateView },
};
</script>

<style lang="scss" scoped></style>
