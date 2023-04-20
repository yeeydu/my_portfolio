import Footer from "@component/components/Footer";
import Navbar from "@component/components/Navbar";
import Head from "./head";

export default function Layout({ children }: any) {
  return (
    <div className="dark:bg-stone-900 ">
      <Head/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
