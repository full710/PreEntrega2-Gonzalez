import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/layout.css'

const Layout = ({ children }) => {

    return (
        <div className='layout'>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout