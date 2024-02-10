import { BrowserView, MobileView } from "react-device-detect"
import NavbarWeb from "./Navbar"
import NavbarMobile from "./NavbarMobile"

function Navbar() {
    return (
        <>
            <BrowserView>
                <NavbarWeb></NavbarWeb>
            </BrowserView>
            <MobileView>
                <NavbarMobile></NavbarMobile>
            </MobileView>
        </>
    )
}

export default Navbar