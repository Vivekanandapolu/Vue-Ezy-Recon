<template>
  <HeaderComp />
  <div class="container-fluid carousel-div">
    <h5 class="m-0 title mb-3">Reconcilation</h5>

    <div class="scrollable">
      <div class="arrow-div-left arrow-div" @click="scroll('left')">
        <i class="ri-arrow-left-line"> </i>
      </div>
      <div class="container-cards" ref="navs">
        <div class="cards d-flex gap-3">
          <div class="card" @click="routeToModule('Wash')">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/yellow (1).svg" alt="" />
              <h6 class="card-title">OFB(Wash) vs J104</h6>
              <h5 class="card-text">MBV earned points Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div class="card" @click="routeToModule('AR')">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/green.svg" alt="" />
              <h6 class="card-title">L112 vs L124</h6>
              <h5 class="card-text">AR Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/blue.svg" alt="" />
              <h6 class="card-title">
                Redemption Stay reimbursable vs City Ledger
              </h6>
              <h5 class="card-text">
                Marriott Bonvoy Redemption Reimbursement & Occupancy Premium
              </h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/red.svg" alt="" />
              <h6 class="card-title">
                OFB(Wash Invoice) vs Marriott Bonvoy Property eBonus
              </h6>
              <h5 class="card-text">Bonus Points Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/thickgreen.svg" alt="" />
              <h6 class="card-title">Property Enrollment Report vs J104</h6>
              <h5 class="card-text">Bonvoy Enrollment</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/yellowgreen.svg" alt="" />
              <h6 class="card-title">MBV 1 vs ..</h6>
              <h5 class="card-text">MBV Top50 report</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/skyblue.svg" alt="" />
              <h6 class="card-title">
                OFB(Wash Invoice) vs Marriott Bonvoy Events - Group Points
                Posted MONTH 1 2023
              </h6>
              <h5 class="card-text">MBV 3 & 12 Report Validation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/purple.svg" alt="" />
              <h6 class="card-title">
                OFB(Wash Invoice) 2 vs On Demand Report
              </h6>
              <h5 class="card-text">OTA Commission Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow-div-right arrow-div" @click="scroll('right')">
        <i class="ri-arrow-right-line"></i>
      </div>
    </div>
    <!--Only For mobile Width-->
    <div id="carouselExample1" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <!--Cards-->
          <div class="card" @click="routeToModule('Wash')">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/yellow (1).svg" alt="" />
              <h6 class="card-title">OFB(Wash) vs J104</h6>
              <h5 class="card-text">MBV earned points Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card" @click="routeToModule('AR')">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/green.svg" alt="" />
              <h6 class="card-title">L112 vs L124</h6>
              <h5 class="card-text">AR Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/blue.svg" alt="" />
              <h6 class="card-title">
                Redemption Stay reimbursable vs City Ledger
              </h6>
              <h5 class="card-text">
                Marriott Bonvoy Redemption Reimbursement & Occupancy Premium
              </h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/red.svg" alt="" />
              <h6 class="card-title">
                OFB(Wash Invoice) vs Marriott Bonvoy Property eBonus
              </h6>
              <h5 class="card-text">Bonus Points Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/thickgreen.svg" alt="" />
              <h6 class="card-title">Property Enrollment Report vs J104</h6>
              <h5 class="card-text">Bonvoy Enrollment</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/yellowgreen.svg" alt="" />
              <h6 class="card-title">MBV 1 vs ..</h6>
              <h5 class="card-text">MBV Top50 report</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/skyblue.svg" alt="" />
              <h6 class="card-title">
                OFB(Wash Invoice) vs Marriott Bonvoy Events - Group Points
                Posted MONTH 1 2023
              </h6>
              <h5 class="card-text">MBV 3 & 12 Report Validation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body d-flex align-items-start flex-column gap-3">
              <img src="../../../assets/images/purple.svg" alt="" />
              <h6 class="card-title">
                OFB(Wash Invoice) 2 vs On Demand Report
              </h6>
              <h5 class="card-text">OTA Commission Reconciliation</h5>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <h6 class="m-0">View</h6>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample1"
        data-bs-slide="prev"
      >
        <i class="arrow ri-arrow-left-s-line"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample1"
        data-bs-slide="next"
      >
        <i class="arrow ri-arrow-right-s-line"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#carouselExample1 {
  display: none;
}
.carousel-div {
  background: #181212 !important;
  padding: 10px 77px;
  gap: 10px 20px;
  min-width: 339px;
}
.title {
  width: fit-content;
  font-size: 18px;
  color: white;
  font-weight: bold;
}
.card {
  width: fit-content;
  height: 18rem;
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
}
.card:hover {
  box-shadow: 5px 6px 9px #ffffff5e;
  scale: 1.009;
}
.cards-div {
  display: grid;
  gap: 15px;
  padding: 10px 37px 41px 37px;
  grid-template-columns: repeat(auto-fill, minmax(259px, 1fr));
}
.arrow {
  color: black;
  width: 33px;
  height: 33px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}
.card-title {
  color: #847e7e;
}

.card-text {
  color: rgba(0, 0, 0, 0.881);
  font-size: 18px;
  font-weight: bold;
}
.card-footer h6 {
  font-weight: bold;
}

.scrollable {
  display: flex;
  align-items: center;
  overflow: hidden;
  overflow-x: auto;
}
.scrollable::-webkit-scrollbar {
  display: none;
}
.cards {
  width: fit-content;
}

.container-cards {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
}
.container-cards::-webkit-scrollbar {
  display: none;
}
.card {
  width: 18rem !important;
}

.arrow-div {
  position: fixed;
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.arrow-div-left {
  left: 35px;
}
.arrow-div:is(:hover) {
  transition: all 0.3s;
  filter: drop-shadow(3px 3px 3px white);
}
.arrow-div-right {
  right: 35px;
}
@media (max-width: 567px) {
  .arrow-div-left {
    left: 20px;
  }
  .arrow-div-right {
    right: 20px;
  }
  .carousel-div {
    padding: 10px 69px;
  }
  .card {
    width: 14rem !important;
  }
}
</style>

<script>
import HeaderComp from "./HeaderComp.vue";

export default {
  OnMounted() {
    if (window.innerWidth <= 400) {
      this.mobileWidth = true;
    } else {
      this.mobileWidth = false;
    }
  },
  data() {
    return {
      arrowDirection: false,
      mobileWidth: false,
      arr: [],
      obj: {},
    };
  },
  components: {
    HeaderComp,
  },
  methods: {
    routeToModule(moduleName) {
      if (moduleName == "Wash") {
        this.$router.push("/wash-invoice-module");
      } else if (moduleName == "AR") {
        // this.$router.push("/wash-invoice-module");
      }
    },
    activeCarousel(arrow) {
      if (arrow == "left") {
        this.arrowDirection = false;
      } else {
        this.arrowDirection = true;
      }
    },
    scroll(direction) {
      if (direction === "left") {
        if (this.mobileWidth) {
          this.$refs.navs.scrollLeft -= 240;
        } else {
          this.$refs.navs.scrollLeft -= 302;
        }
      } else if (direction === "right") {
        if (this.mobileWidth) {
          this.$refs.navs.scrollLeft += 240;
        } else {
          this.$refs.navs.scrollLeft += 302;
        }
      }
    },
  },
};
</script>
