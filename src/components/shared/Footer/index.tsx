import { BrowserView, MobileView } from "react-device-detect"
import FooterWeb from "./Footer"
import FooterMobile from "./FooterMobile"

function Footer() {
    return (
        <>
            <BrowserView>
                <FooterWeb></FooterWeb>
            </BrowserView>
            <MobileView>
                <FooterMobile></FooterMobile>
            </MobileView>
        </>
    )
}

export default Footer