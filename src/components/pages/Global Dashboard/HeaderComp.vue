<template>
  <div
    class="container-fluid header d-flex align-items-center justify-content-between"
  >
    <div
      class="lefthead d-flex align-items-center justify-content-evenly gap-3"
    >
      <router-link to="/home">
        <img src="../../../assets/images/reconLogo.svg" alt=""
      /></router-link>
      <select
        class="form-select form-select-lg w-auto shadow-none form-select-sm"
      >
        <option value="">Mulbary Shades</option>
        <option value="">Sai Chakra</option>
        <option value="">Hotels Limited</option>
      </select>
    </div>
    <div class="righthead">
      <p class="profile_icon">V</p>
    </div>
  </div>
</template>
<style scoped>
.header {
  background: linear-gradient(0deg, #1f1b29, #1f1b29),
    linear-gradient(0deg, #e4e4e4, #e4e4e4) !important;
  padding: 10px 37px;
  gap: 10px 20px;
  min-width: 339px;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.profile_icon {
  margin: 0px;
  color: white;
  width: 35px;
  height: 35px;
  background: #fe5358 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 600;
}

@media (max-width: 567px) {
  .righthead {
    width: 100%;
  }
  .profile_icon {
    margin: 0 auto;
  }
  .header {
    padding: 10px !important;
  }
}
</style>
<script></script>
