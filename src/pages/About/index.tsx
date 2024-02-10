import { BrowserView, MobileView } from "react-device-detect"
import AboutMobile from "./AboutMobile"
import AboutWeb from "./About"

function About() {
    return (
        <>
            <BrowserView>
                <AboutWeb></AboutWeb>
            </BrowserView>
            <MobileView>
                <AboutMobile></AboutMobile>
            </MobileView>
        </>
    )
}

export default About