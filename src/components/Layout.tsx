import Head from "./Head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FunctionComponent } from "react";

interface LayoutProps {
  pageTitle: string;
  currentRoute: string;
  metaDescription: string;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  pageTitle,
  currentRoute,
  metaDescription,
}) => {
  return (
    <div>
      <Head pageTitle={pageTitle} description={metaDescription} />
      <NavBar currentRoute={currentRoute} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
