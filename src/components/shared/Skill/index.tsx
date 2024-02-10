import { BrowserView, MobileView } from "react-device-detect"
import SkillWeb from "./Skill"
import SkillMobile from "./SkillMobile"

function Skill() {
    return (
        <>
            <BrowserView>
                <SkillWeb></SkillWeb>
            </BrowserView>
            <MobileView>
                <SkillMobile></SkillMobile>
            </MobileView>
        </>
    )
}

export default Skill