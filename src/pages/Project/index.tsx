import { BrowserView, MobileView } from "react-device-detect"
import ProjectWeb from "./Project"
import ProjectMobile from "./ProjectMobile"

function Project() {
    return (
        <>
            <BrowserView>
                <ProjectWeb></ProjectWeb>
            </BrowserView>
            <MobileView>
                <ProjectMobile></ProjectMobile>
            </MobileView>
        </>
    )
}

export default Project