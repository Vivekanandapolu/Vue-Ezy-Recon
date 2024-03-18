<template>
  <div class="main">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-lg-7 col-sm-6">
          <div
            class="left d-flex gap-4 h-100 flex-column align-items-baseline justify-content-center"
          >
            <img
              class="logo"
              src="../../../assets/images/reconLogo.svg"
              alt=""
            />
            <p class="display-5 leftText">
              Your Trusted <b>Reconciliations</b> Companion
            </p>
          </div>
        </div>
        <div
          class="col-lg-5 col-sm-6 d-flex justify-content-center align-items-center"
        >
          <div class="right w-100">
            <div class="form-titles d-flex flex-column mb-4">
              <b class="title fs-5 mb-2">Welcome to Ezy Recon</b>
              <small class="fs-6 text-black-50 sub-title"
                >Sign in using your valid credentials
              </small>
            </div>
            <div class="form">
              <form @submit.prevent="login">
                <div class="input-group mb-3" :class="{ 'r-border': emailMsg }">
                  <span class="input-group-text">
                    <i class="ri-mail-fill"></i
                  ></span>

                  <input
                    @blur="validation('email')"
                    ref="email"
                    v-model="email"
                    type="text"
                    class="form-control ps-0 shadow-none form-control-lg form-control-sm"
                    placeholder="Email id"
                  />
                </div>
                <span class="err">{{ emailMsg }}</span>
                <div
                  class="input-group"
                  :class="{
                    'r-border': passMsg,
                    'mb-4': !passMsg,
                    'mb-3': passMsg,
                  }"
                >
                  <span class="input-group-text">
                    <i class="ri-git-repository-private-fill"></i
                  ></span>
                  <input
                    @blur="validation('pwd')"
                    v-model="pwd"
                    type="password"
                    class="form-control ps-0 shadow-none form-control-lg form-control-sm"
                    placeholder="Password"
                  />
                </div>
                <span class="err">{{ passMsg }}</span>

                <button
                  type="submit"
                  class="submit-btn btn w-100 d-flex align-items-center justify-content-between"
                >
                  Sign In <i class="ri-arrow-right-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apis from "@/components/shared/apiurls";
import axios from "axios";
import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";
export default {
  mounted() {
    this.emailMsg = "";
    this.passMsg = "";
    if (localStorage.getItem("USERDETAILS")) {
      this.$router.push("/home");
    } else {
      this.$router.push("/");
    }
  },
  data() {
    return {
      email: "",
      pwd: "",
      emailMsg: "",
      passMsg: "",
      errors: {},
    };
  },
  methods: {
    login() {
      if (
        this.emailMsg !== "" ||
        this.passMsg !== "" ||
        !this.email ||
        !this.pwd
      ) {
        toast.error("Enter Credentials");
      } else {
        axios
          .post(apis.login, {
            usr: this.email,
            pwd: this.pwd,
          })
          .then((response) => {
            console.log(response, "sdnkfnksnl");
            if (response.data.message == "Logged In") {
              toast.success("Login Successful");
              localStorage.setItem(
                "USERDETAILS",
                JSON.stringify(response.data)
              );
              setTimeout(() => {
                this.$router.push("/home");
              }, 1000);
            }
          })
          .catch(() => {
            toast.error("Invalid Credentials");
          });
      }
    },
    validation(type) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (type === "email") {
        if (!emailRegex.test(this.email)) {
          this.emailMsg = "Enter a valid Email";
        } else {
          this.emailMsg = "";
        }
      }
      if (type === "pwd") {
        if (!this.pwd || this.pwd.length <= 4) {
          this.passMsg = "Password must be greater than 5 characters";
        } else {
          this.passMsg = "";
        }
      }
    },
  },
};
</script>
<style scoped>
.main {
  height: 100vh;
  background: linear-gradient(0deg, #1b222c, #1b222c),
    linear-gradient(0deg, #e4e4e4, #e4e4e4) !important;
}

.leftText {
  color: white;
}
.title {
  color: #183153;
}
.right {
  background-color: white;
  padding: 30px 20px;
  border-radius: 5px;
}
.submit-btn {
  background-color: #fe5358;
  padding: 0.7rem 0.75rem;
  font-weight: 700;
  border: none;
  text-align: left;
  color: white;
}
.container {
  min-height: 100dvh;
}
.r-border {
  border: 1px solid #fe5358;
}
.g-border {
  border: 1px solid green;
}
.err {
  position: relative;
  top: -15px;
  color: red;
  font-size: 11px;
  font-weight: 600;
}
</style>
