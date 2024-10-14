import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/layout.css'

const Layout = ({ children }) => {

    return (
        <>
            <NavBar />
            <div className='layaut'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout