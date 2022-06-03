import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = ({children}) => {
  return (
    <div className="md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto bg-neutral-200 shadow-lg border-x border-x-gray-300 mb-2 border-b border-b-gray-300">
        <Navigation /> 
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout