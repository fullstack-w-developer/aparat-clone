import Header from "../components/Header/Header"


const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      {/* <AsideBar/> */}
        {children}
    </div>
  );
}

export default Layout;
