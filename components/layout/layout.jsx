
//components
import Header from "../header/header";
import Footer from "../footer/footer";


const Layout = ({children}) => {

    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Layout;