import ApprovalComp from "./ApprovalComp.vue";
import DashboardComp from "./DashboardComp.vue";
import DiscriminationComp from "./DiscriminationComp.vue";
import ReconciliationComp from "./ReconciliationComp.vue";
import WashInvoiceModule from "./WashInvoiceModule.vue";
import Supporting_doc from "./SupportingDoc.vue";
import J104Comp from "./J104Comp.vue";
import MissingJ104 from "./MissingJ104.vue";
import PracticeVue from "./PracticeVue.vue";
import AllConcept from "./AllConcept.vue";

export default [
  {
    path: "/wash-invoice-module",
    component: WashInvoiceModule,
    redirect: "/wash-invoice-module/AllConcept",
    children: [
      {
        path: "Approval",
        component: ApprovalComp,
      },
      {
        path: "Discrimination",
        component: DiscriminationComp,
      },
      {
        path: "Dashboard",
        component: DashboardComp,
      },
      {
        path: "Reconciliation",
        component: ReconciliationComp,
      },
      {
        path: "Supporting_docs",
        component: Supporting_doc,
      },
      {
        path: "J104",
        component: J104Comp,
      },
      {
        path: "Missing_In_J104",
        component: MissingJ104,
      },
      {
        path: "Practice",
        component: PracticeVue,
      },
      {
        path: "AllConcept",
        component: AllConcept,
      },
    ],
  },
];
