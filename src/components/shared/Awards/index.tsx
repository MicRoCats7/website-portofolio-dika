import { BrowserView, MobileView } from "react-device-detect"
import AwardsWeb from "./Awards"
import AwardsMobile from "./AwardsMobile"

function Awards() {
    return (
        <>
            <BrowserView>
                <AwardsWeb></AwardsWeb>
            </BrowserView>
            <MobileView>
                <AwardsMobile></AwardsMobile>
            </MobileView>
        </>
    )
}

export default Awards