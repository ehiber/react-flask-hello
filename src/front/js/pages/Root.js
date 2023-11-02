import { Outlet } from "react-router-dom/dist"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Root = () => {
    return (
        <ScrollToTop>
            <Navbar />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}