// import { useRouter } from "next/router";
// import { useUser } from "./userContext";
// import { useEffect } from "react";

// function ProtectedRoute({ children }) {
//   const { user } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     // Use the useEffect hook to handle route protection when the component mounts

//     if (!user) {
//       // Redirect the user to the login page if not authenticated
//       router.push("/dark/login");
//     }
//   }, [user, router]);

//   // Render children when the user is authenticated
//   return user ? <>{children}</> : null;
// }

// export default ProtectedRoute;
