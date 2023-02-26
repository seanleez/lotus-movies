import Header from "./Header";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
