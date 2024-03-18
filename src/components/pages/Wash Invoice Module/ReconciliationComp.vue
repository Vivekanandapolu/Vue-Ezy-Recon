<template>
  <div class="recon-sec-content">
    <div class="recon-tab-header">
      <div class="arrow-div">
        <span class="arrows"
          ><i class="ri-arrow-left-line"></i> <i class="ri-arrow-right-line"></i
        ></span>
        J104 vs Wash Invoice Reconciliation (5866)
      </div>
      <div class="buttons-div">
        <button class="btn export-btn">
          <i class="ri-download-2-line"></i> Export
        </button>
        <button class="btn export-btn">
          <i class="ri-download-2-line"></i> Upload
        </button>
        <select class="form-select w-auto shadow-none">
          <option value="January" selected>January</option>
          <option value="Febravary">Febravary</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select class="form-select w-auto shadow-none">
          <option value="2023" selected>2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
    <div class="all-tables d-flex">
      <div
        class="table-1 table-responsive"
        ref="scrollableTable1"
        style="width: 24%"
        @scroll="handleTableScroll"
      >
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Account</th>
              <th>Source</th>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" class="form-check-input shadow-none" />
              </td>
              <td>
                <span
                  ><input
                    type="text"
                    placeholder="Account Number"
                    class="form-control form-control-sm shadow-none"
                /></span>
              </td>
              <td>
                <select
                  name=""
                  id=""
                  class="form-select form-select-sm shadow-none"
                >
                  <option value="All" selected>All</option>
                  <option value="PMS">PMS</option>
                  <option value="MAN">MAN</option>
                  <option value="Empty">Empty</option>
                </select>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td>837482938</td>
              <td>PMS</td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td>837436738</td>
              <td>MAN</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <input type="checkbox" class="form-check-input shadow-none" />
              </td>
              <td>837497873</td>
              <td>PMS</td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td>837482458</td>
              <td>PMS</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <input type="checkbox" class="form-check-input shadow-none" />
              </td>
              <td>837482338</td>
              <td>MAN</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        ref="scrollableTable2"
        class="table-2 table-responsive"
        style="width: 40%"
        @scroll="handleTableScroll"
      >
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Checkout Date</th>
              <th>Stay Revenue ($)</th>
              <th>Stay Type</th>
              <th>Prop Rate</th>
            </tr>
            <tr>
              <td>
                <span
                  ><input
                    type="text"
                    placeholder="Name"
                    class="form-control form-control-sm shadow-none"
                /></span>
              </td>
              <td></td>
              <td></td>
              <td>
                <select
                  name=""
                  id=""
                  class="form-select w-auto form-select-sm shadow-none"
                >
                  <option value="All" selected>All</option>
                  <option value="INCID">INCID</option>
                  <option value="POINT">POINT</option>
                  <option value="MILES">MILES</option>
                  <option value="REDEM">REDEM</option>
                </select>
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
              <td>POINT</td>
              <td>4.2</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
              <td>POINT</td>
              <td>4.2</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
              <td>POINT</td>
              <td>4.2</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
              <td>POINT</td>
              <td>4.2</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
              <td>POINT</td>
              <td>4.2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        ref="scrollableTable3"
        class="table-3 table-responsive"
        style="width: 40%"
        @scroll="handleTableScroll"
      >
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Departure Date</th>
              <th>Rev Bkt Mem Curr Eligible ($)</th>
            </tr>
            <tr>
              <td>
                <span
                  ><input
                    type="text"
                    placeholder="Name"
                    class="form-control form-control-sm shadow-none"
                /></span>
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        ref="scrollableTable4"
        class="table-4 table-responsive"
        style="width: 36%"
        @scroll="handleTableScroll"
      >
        <table class="table">
          <thead>
            <tr>
              <th>Amount Diff. ($)</th>
              <th>Category</th>
              <th>Reason</th>
            </tr>
            <tr>
              <td></td>
              <td>
                <select
                  name=""
                  id=""
                  class="form-select form-select-sm shadow-none"
                >
                  <option value="All" selected>All</option>
                  <option value="Matching">Matching</option>
                  <option value="Missing">Missing</option>
                  <option value="Mismatch">Mismatch</option>
                  <option value="Non Compliance">Non Compliance</option>
                </select>
              </td>
              <td>
                <select
                  name=""
                  id=""
                  class="form-select form-select-sm shadow-none"
                >
                  <option value="All" selected>All</option>
                  <option value="Matching">Matching</option>
                  <option value="Missing In Wash Invoice and Zero Invoice">
                    Missing In Wash Invoice and Zero Invoice
                  </option>
                  <option value="Missing">Possible Name Match</option>
                  <option value="Missing In Wash Invoice">
                    Missing In Wash Invoice
                  </option>
                  <option value="Amount Missmatch">Amount Missmatch</option>
                  <option value="Non Compliance">Non Compliance</option>
                  <option value="Missing In J104">Missing In J104</option>
                  <option value="Possible Name and Amount Missmatch">
                    Possible Name and Amount Missmatch
                  </option>
                  <option value="Non Compliance and Amount Missmatch">
                    Non Compliance and Amount Missmatch
                  </option>
                </select>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
            <tr>
              <td>LILLIG, DANIEL</td>
              <td>25/06/2023</td>
              <td>686.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recon-tab-header {
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 19px;
  flex-wrap: wrap;
}
.arrow-div {
  display: flex;
  align-items: center;
  gap: 11px;
}
.arrows i {
  border: solid 1px lightgray;
  zoom: 1.2;
  padding: 2px 2px;
  height: 20px;
  margin: 1px;
  font-size: 15px;
}
.buttons-div {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}
.export-btn {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #fe5358;
  box-shadow: none;
  color: #fe5358;
}
.export-btn:hover {
  background: #fe5358;
  color: white;
}
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  table {
    border-right: 1px solid black;
    border-left: 1px solid black;
  }
}
.all-tables {
  white-space: nowrap;
  border-top: 1px solid black;
}
</style>

<script>
export default {
  mounted() {
    console.log(this.$refs);
    const tableRefs = [
      "scrollableTable1",
      "scrollableTable2",
      "scrollableTable3",
      "scrollableTable4",
    ];
    tableRefs.forEach((refName) => {
      const tableRef = this.$refs[refName];
      tableRef.addEventListener("scroll", this.handleTableScroll);
    });
  },
  methods: {
    handleTableScroll(event) {
      const tableRefs = [
        "scrollableTable1",
        "scrollableTable2",
        "scrollableTable3",
        "scrollableTable4",
      ];
      tableRefs.forEach((refName) => {
        const tableRef = this.$refs[refName];
        if (tableRef !== event.target) {
          tableRef.scrollTop = event.target.scrollTop;
          tableRef.scrollLeft = event.target.scrollLeft;
        }
      });
    },
  },
};
</script>
