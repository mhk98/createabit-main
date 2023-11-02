// import { useRouter } from "next/router";
// import { useUser } from "./userContext";

// function ProtectedRoute({ children }) {
//   const { user } = useUser();
//   const router = useRouter();

//   if (!user) {
//     router.replace("/dark/login");
//   }

//   // Render children when the user is authenticated
//   return user ? <>{children}</> : null;
// }

// export default ProtectedRoute;
