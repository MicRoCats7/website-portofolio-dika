import { BrowserView, MobileView } from "react-device-detect"
import CardAboutWeb from "./CardAbout"
import CardAboutMobile from "./CardAboutMobile"

function CardAbout() {
    return (
        <>
            <BrowserView>
                <CardAboutWeb></CardAboutWeb>
            </BrowserView>
            <MobileView>
                <CardAboutMobile></CardAboutMobile>
            </MobileView>
        </>
    )
}

export default CardAbout