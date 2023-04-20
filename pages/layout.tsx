import Footer from "@component/components/Footer";
import Navbar from "@component/components/Navbar";
import Head from "./head";

export default function Layout({ children }: any) {
  return (
    <div >
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
