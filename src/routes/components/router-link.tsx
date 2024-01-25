import PropTypes from "prop-types"
import { forwardRef } from "react"
import { NavLink } from "react-router-dom"
import Link from "next/link";

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ href, ...other }: any, ref: any) => {
    if (href == undefined) {
        console.error("href is undefined", other);
        return null;
    }

    return <Link ref={ref} href={href} {...other} />
})

RouterLink.propTypes = {
    href: PropTypes.string,
}

const RouterNavLink = forwardRef(
    ({ href, className = "", activeClassName, ...other }: any, ref: any) => {
        return (
            <Link
                ref={ref}
                href={href}
                {...other}
                className={({ isActive }: { isActive: boolean }) =>
                    isActive ? className + " " + activeClassName : className
                }
            />
        )
    }
)

RouterNavLink.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
}

export default RouterLink
export { RouterNavLink }
