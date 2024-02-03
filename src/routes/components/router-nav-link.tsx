import Link from "next/link";
import PropTypes from "prop-types"
import { forwardRef } from "react"
// import { Link } from "react-router-dom"

const RouterNavLink = forwardRef(
    ({ href, className = "", activeClassName, ...other }: any, ref: any) => {
        // TODO activeClassName
        console.warn("activeClassName is not supported in Next.js, use CSS instead.")
        console.log("activeClassName =", activeClassName)
        return (
            <Link
                ref={ref}
                href={href}
                {...other}
                className={className}
            />
        )
    }
)

RouterNavLink.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
}
export default RouterNavLink;