import { lazy, Suspense } from "react"
import { Outlet, Navigate, useRoutes } from "react-router-dom"

import Layout from "layouts"

export const IndexPage = lazy(() => import("pages/App"))
export const BlogsPage = lazy(() => import("pages/Blogs"))
export const ViewBlog = lazy(() => import("pages/ViewBlog"))
export const Careers = lazy(() => import("pages/Careers"))
export const Contact = lazy(() => import("pages/Contact"))
export const AboutUs = lazy(() => import("pages/AboutUs"))
export const Pricing = lazy(() => import("pages/Pricing"))
export const LoginPage = lazy(() => import("pages/Login"))
// export const ProductsPage = lazy(() => import("src/pages/products"))
export const Page404 = lazy(() => import("pages/PageNotFound"))

export const SeIos = lazy(() => import("pages/CareerDetails/SeIos"))
export const SoftwareEngIntern = lazy(() => import("pages/CareerDetails/SoftwareEngIntern"))
export const BusinessAnalystIntern = lazy(() => import("pages/CareerDetails/BusinessAnalystIntern"))
export const UiUxDesigner = lazy(() => import("pages/CareerDetails/UiUxDesigner"))
export const FrontEndEngineer = lazy(() => import("pages/CareerDetails/FrontEndEngineer"))
export const DevOpsEngineer = lazy(() => import("pages/CareerDetails/DevOpsEngineer"))

// ----------------------------------------------------------------------

const Loader = () => {
    return (
        <div className="preloader">
            <div className="preloader-inner">
                <div className="preloader-icon">
                    <span />
                    <span />
                </div>
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            element: (
                <Layout>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Layout>
            ),
            children: [
                { element: <IndexPage />, index: true },
                { path: "about-us", element: <AboutUs /> },
                {
                    path: "careers",
                    children: [
                        { path: "", element: <Careers /> },
                        { path: "seIos", element: <SeIos /> },
                        { path: "softwareEngIntern", element: <SoftwareEngIntern /> },
                        { path: "businessAnalystIntern", element: <BusinessAnalystIntern /> },
                        { path: "uiUxDesigner", element: <UiUxDesigner /> },
                        { path: "frontEndEngineer", element: <FrontEndEngineer /> },
                        { path: "devOpsEngineer", element: <DevOpsEngineer /> },
                    ],
                },
                { path: "contact", element: <Contact /> },
                { path: "blogs", element: <BlogsPage /> },
                { path: "view-blog", element: <ViewBlog /> },
                { path: "pricing", element: <Pricing /> },
            ],
        },
        // {
        //     path: "login",
        //     element: <LoginPage />,
        // },
        {
            path: "404",
            element: <Page404 />,
        },
        {
            path: "*",
            element: <Navigate to="/404" replace />,
        },
    ])

    return routes
}
