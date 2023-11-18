// import Loader from "@/components/Common/Loader";
// import Head from "next/head";
// import { useEffect } from "react";
// import DarkNavbar from "../dark-navbar";
// import PaymentResult from "@/components/PaymentInfo/PaymentResult";
// import DarkFooter from "../dark-footer";
// import DefaultLayout from "@/layouts/default";

// function PurchaseStatus() {
//   useEffect(() => {
//     document.body.classList.add("main-bg");
//     // Additional setup if needed

//     return () => document.body.classList.remove("main-bg");
//   }, []);

//   const metadata = {
//     subTitle: "PURCHASE",
//     title: "Details.",
//   };

//   return (
//     <>
//       <Head>
//         <title>Createabit - Purchase Details</title>
//       </Head>

//       <Loader />
//       <div id="smooth-wrapper">
//         <DarkNavbar />
//         <div id="smooth-content">
//           <main className="main-bg">
//             <PaymentResult />
//           </main>
//           <DarkFooter />
//         </div>
//       </div>
//     </>
//   );
// }

// PurchaseStatus.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

// export default PurchaseStatus;
