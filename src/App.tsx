import { memo } from "react";
import Header from "./components/header/Header";
import MainRouters from "./utils/index";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-[100vh]">
        <MainRouters />
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default memo(App);
