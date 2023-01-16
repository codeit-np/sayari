<template>
  <template-view>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <div class="login">
              <div class="card w-100 p-5">
                <h3 class="text-center">Sign Up</h3>
                <form action="">
                     <div class="form-group my-2">
                    <label for="my-input">Full Name</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="text"
                      name=""
                      placeholder="Full Name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="my-input">Email</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="email"
                      name=""
                      placeholder="Email"
                    />
                  </div>

                  <div class="form-group my-2">
                    <label for="my-input">Password</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="password"
                      name=""
                      placeholder="Password"
                    />
                  </div>

                  <div class="form-group my-2">
                    <label for="my-input">Retype Password</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="password"
                      name=""
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div class="form-group my-2 text-center">
                       <span>Already have an account? </span> <a class="text-center" href="" @click.prevent="$router.push({name:'login'})">Login</a>
                  </div>

                   <div class="form-group my-2 text-center">
                        <button class="btn btn-primary ">Register</button>
                  </div>
                </form>
              </div>
            </div>
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
  name: "RegisterView",
};
</script>

<style scoped>
    .login{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70vh;
       
    }
</style>
