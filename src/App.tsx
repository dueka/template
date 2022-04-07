import React from "react";
import { ToastContainer } from "react-toastify";
import "./scss/main.scss";
import ScrollToTop from "./ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AppLayout from "./layouts/AppLayout";
const App: React.FC = (): JSX.Element => {
  return (
    <React.Suspense fallback={"App loading"}>
      <ToastContainer autoClose={5000} />
      <ScrollToTop>
        <AppLayout />
      </ScrollToTop>
    </React.Suspense>
  );
};

export default App;
