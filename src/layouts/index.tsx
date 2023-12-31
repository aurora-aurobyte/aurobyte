import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

// ----------------------------------------------------------------------

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}
