import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh", backgroundColor: "#111828" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
