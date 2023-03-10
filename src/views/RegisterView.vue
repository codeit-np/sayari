<template>
  <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="login">
            <div class="card w-100 p-5">
              <h3 class="text-center">Register</h3>
              <form action="">
                <div class="form-group my-2">
                  <label for="my-input">UserName</label>
                  <input
                    id="my-input"
                    class="form-control"
                    type="text"
                    name=""
                    placeholder="Create new UserName"
                    v-model="user.UserName"
                  />
                </div>

                <div class="form-group">
                  <label for="my-input">Email</label>
                  <input
                    id="my-input"
                    class="form-control"
                    type="email"
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
                    type="password"
                    name=""
                    placeholder="Enter your password"
                    v-model="user.password"
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
                    v-model="user.passwordconfirm"
                  />
                </div>
                <div class="form-group my-2">
                  <label for="my-input">Birthday</label>
                  <input
                    id="my-input"
                    class="form-control"
                    type="date"
                    name=""
                    v-model="user.birthday"
                  />
                </div>
                <div class="form-group my-2 text-center">
                  <span>Already have an account? </span>
                  <a
                    class="text-center text-danger"
                    href=""
                    @click.prevent="$router.push({ name: 'login' })"
                    >Login</a
                  >
                </div>

                <div class="form-group my-2 text-center">
                  <button class="btn btn-danger">Register</button>
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
import axios from 'axios';
export default {
  name: "RegisterView",
  data(){
    return{
      user:{
        UserName: "",
        email: "",
        password: "",
        passwordconfirm: "",
        birthday: ""
      }
    }
  },
  methods:{
    showMessage() {
        this.$message({
          message: 'Congrats, registration successful.',
          type: 'success'
        });
      },
    showErrorMessage() {
        this.$message({
          message: 'Oops registration failed.',
          type: 'danger'
        });
      },
    async login(){
      try{
          var response = await axios.post("http://localhost:3000/users",this.user);
          if(response.status == 201){
            this.showMessage()
            this.$router.push({name:'login'})
          }
      }catch(e){
        console.warn(e)
      }
    }
    }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 74vh;
}
</style>
