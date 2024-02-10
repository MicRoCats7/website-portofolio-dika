import { BrowserView, MobileView } from "react-device-detect"
import CollectionWeb from "./Collection"
import CollectionMobile from "./CollectionMobile"

function Collection() {
    return (
        <>
            <BrowserView>
                <CollectionWeb></CollectionWeb>
            </BrowserView>
            <MobileView>
                <CollectionMobile></CollectionMobile>
            </MobileView>
        </>
    )
}

export default Collection