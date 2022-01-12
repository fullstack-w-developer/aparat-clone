import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Layout from "../layout/Layout";
import { PushMenuProvider } from "../Context/MenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <PushMenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PushMenuProvider>
  );
}

export default MyApp;
