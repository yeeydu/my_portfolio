import Footer from "@component/components/Footer";
import Navbar from "@component/components/Navbar";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <title>Name</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta property="og:title" content="Yeeyson Duarte" key="title" />
        <meta
          name="This is my developer portfolio, please fill free to see and contact me"
          content="Nextjs app"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
