import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import GlobalStyles from "./styles/GlobaleStyles";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={
                <Navigate
                  replace
                  to="dashboard"
                />
              }
            />
            <Route
              path="dashboard"
              element={<Dashboard />}
            />
            <Route
              path="account"
              element={<Account />}
            />{" "}
            <Route
              path="bookings"
              element={<Bookings />}
            />{" "}
            <Route
              path="cabins"
              element={<Cabins />}
            />{" "}
            <Route
              path="settings"
              element={<Settings />}
            />
            <Route
              path="users"
              element={<Users />}
            />
          </Route>
          <Route
            path="login"
            element={<Login />}
          />{" "}
          <Route
            path="*"
            element={<PageNotFound />}
          />{" "}
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}
