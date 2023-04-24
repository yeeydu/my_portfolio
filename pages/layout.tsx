import Footer from "@component/components/Footer";
import Navbar from "@component/components/Navbar";
import Head from "./Head";


export default function Layout({ children }: any) {
  return (
    <div >
      <Head/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
