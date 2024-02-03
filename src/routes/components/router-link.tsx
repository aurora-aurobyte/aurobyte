import PropTypes from "prop-types"
import { forwardRef } from "react"
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
export default RouterLink
