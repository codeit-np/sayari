<template>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <div class="login">
              <div class="card w-100 p-5">
                <h3 class="text-center">Log In</h3>
                <form action="">
                  <div class="form-group">
                    <label for="my-input">Email</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="text"
                      name=""
                      placeholder="Enter your email"
                      v-model="user.email"
                    />
                  </div>

                  <div class="form-group my-2">
                    <label for="my-input">Password</label>
                    <input
                      id="my-input"
                      class="form-control"
                      type="text"
                      name=""
                      placeholder="Enter your password"
                      v-model="user.password"
                    />
                  </div>

                  <div class="form-group my-2 text-center">
                       <span>Don't have an account? </span> <a class="text-center text-danger" href="" @click.prevent="$router.push({name:'register'})">Register</a>
                  </div>

                   <div class="form-group my-2 text-center">
                        <button class="btn btn-danger" @click.prevent="login()">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "LoginView",
  data(){
    return{
      user:{
        email: "",
        password: ""
      }
    }
  },
  methods:{
    showMessage() {
        this.$message({
          message: 'Congrats, login successful.',
          type: 'success'
        });
      },
    showErrorMessage() {
        this.$message({
          message: 'Oops login failed.',
          type: 'danger'
        });
      },
    async login(){
      try{
          var response = await axios.post("http://localhost:3000/users",this.user);
          if(response.status == 201){
            this.showMessage()
            this.$router.push({name:'dashboard'})
          }
      }catch(e){
        console.warn(e)
      }
    }
    }
  }

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
