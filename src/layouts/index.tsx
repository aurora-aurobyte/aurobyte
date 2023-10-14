import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: { children: any }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
}
