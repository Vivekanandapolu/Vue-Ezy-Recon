<template>
  <HeaderComp />
  <div class="main">
    <div class="washheader mb-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-xl-3 col-md-5 col-sm-12">
            <div class="left d-flex align-items-center gap-2">
              <router-link to="/home">
                <i class="ri-arrow-left-s-line arrow"></i></router-link
              ><b>OFB(Wash Invoice) Reconciliation</b>
              <div class="vr"></div>
            </div>
          </div>
          <div class="col-lg-8 col-xl-9 col-md-7 col-sm-12">
            <div class="right d-flex align-items-center gap-2">
              <i
                class="ri-arrow-left-line leftArrow"
                @click="scroll('left')"
              ></i>
              <div class="middle-items">
                <ul class="nav1" ref="nav">
                  <router-link to="/wash-invoice-module/Dashboard"
                    ><li
                      class="item"
                      :class="{ active: activeRoute == 'dashboard' }"
                    >
                      Dashboard
                    </li></router-link
                  >
                  <router-link to="/wash-invoice-module/Reconciliation">
                    <li
                      class="item"
                      :class="{ active: activeRoute == 'reconciliation' }"
                    >
                      Reconciliation
                    </li></router-link
                  >
                  <router-link to="/wash-invoice-module/Supporting_docs">
                    <li
                      class="item"
                      :class="{ active: activeRoute == 'supporting_docs' }"
                    >
                      Supporting Docs
                    </li></router-link
                  >
                  <router-link to="/wash-invoice-module/J104">
                    <li class="item" :class="{ active: activeRoute == 'j104' }">
                      J104
                    </li></router-link
                  >
                  <router-link to="/wash-invoice-module/Approval">
                    <li
                      class="item"
                      :class="{ active: activeRoute == 'approval' }"
                    >
                      Approval
                    </li></router-link
                  >
                  <router-link to="/wash-invoice-module/Missing_In_J104">
                    <li
                      class="item"
                      :class="{ active: activeRoute == 'missing_in_j104' }"
                    >
                      Missing In J104 SetOff
                    </li></router-link
                  >
                  <router-link to="/wash-invoice-module/Discrimination">
                    <li
                      class="item"
                      :class="{ active: activeRoute == 'discrimination' }"
                    >
                      Discrimination
                    </li></router-link
                  >
                </ul>
              </div>
              <i
                class="ri-arrow-right-line rightArrow"
                @click="scroll('right')"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
import HeaderComp from "../Global Dashboard/HeaderComp.vue";

export default {
  data() {
    return {
      activeRoute: "",
    };
  },

  //When ever changed the params It will called..
  watch: {
    $route() {
      this.activeRoute =
        this.$route.path.split("/")[this.$route.path.split("/").length - 1];
      this.activeRoute = this.activeRoute.toLowerCase();
    },
  },
  //Mounted Hook
  mounted() {
    this.activeRoute =
      this.$route.path.split("/")[this.$route.path.split("/").length - 1];
    this.activeRoute = this.activeRoute.toLowerCase();
  },
  components: {
    HeaderComp,
  },
  //You can write your custom methods
  methods: {
    scroll(direction) {
      if (direction == "left") {
        this.$refs.nav.scrollLeft -= 75;
      } else {
        this.$refs.nav.scrollLeft += 75;
      }
    },
  },
};
</script>
<style scoped>
.washheader {
  padding: 10px 5px 0px 5px;
  background-color: #1b222c;
  display: flex;
  align-items: center;
  gap: 10px;
}
.arrow {
  width: 30px;
  height: 30px;
  background: white;
  color: #000000d1;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.left {
  padding-bottom: 10px;
}
.item {
  color: white;
  transition: all 0.5s;
  border-bottom: 3px solid transparent;
  padding-bottom: 10px;
}
.nav1 {
  display: flex;
  align-items: center;
  gap: 10px 30px;
  list-style: none;
  padding: 0px;
  margin: 0px;
  /* flex-wrap: wrap; */
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
}
.middle-items {
  width: 100%;
  overflow: hidden !important;
  white-space: nowrap;
  scroll-behavior: smooth !important;
}
.leftArrow,
.rightArrow {
  color: white;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: #1b222c;
  z-index: 100;
  cursor: pointer;
  margin-bottom: 10px;
}
.right {
  width: -webkit-fill-available;
}
.main {
  min-width: 339px;
}
/* .rightArrow {
  margin-left: 10px;
} */
/* .leftArrow {
  margin-right: 10px;
} */

.item:is(:hover, .active) {
  border-bottom: 3px solid #fe5358;
  cursor: pointer;
  font-weight: 500;
  scale: 1.01;
}
b {
  color: white;
  white-space: nowrap;
  font-size: 15px;
}
.vr {
  width: 3px;
  background: white;
}
@media (max-width: 1200px) {
  .vr {
    display: none;
  }
  .nav1 {
    overflow: auto;
  }
}
@media (min-width: 1441px) {
  .leftArrow,
  .rightArrow {
    display: none;
  }
}
@media (min-width: 786px) {
  .leftArrow:is(:hover),
  .rightArrow:is(:hover) {
    border-radius: 50%;
    background: white;
    height: 30px;
    color: black;
    display: flex;
    justify-content: center;
    scale: 1.01;
    transition: all 0.5s;
  }
}
</style>
