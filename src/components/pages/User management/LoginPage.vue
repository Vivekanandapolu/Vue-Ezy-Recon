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
              <form>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <i class="ri-mail-fill"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control ps-0 shadow-none form-control-lg form-control-sm"
                    placeholder="Email id"
                  />
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-text">
                    <i class="ri-git-repository-private-fill"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control ps-0 shadow-none form-control-lg form-control-sm"
                    placeholder="Password"
                  />
                </div>
                <router-link to="/home">
                  <button
                    class="submit-btn btn w-100 d-flex align-items-center justify-content-between"
                  >
                    Sign In <i class="ri-arrow-right-line"></i>
                  </button>
                </router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
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
</style>
