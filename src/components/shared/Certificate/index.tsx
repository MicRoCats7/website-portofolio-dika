import { BrowserView, MobileView } from "react-device-detect"
import CertificateWeb from "./Certificate"
import CertificateMobile from "./CertificateMobile"

function Certificate() {
    return (
        <>
            <BrowserView>
                <CertificateWeb></CertificateWeb>
            </BrowserView>
            <MobileView>
                <CertificateMobile></CertificateMobile>
            </MobileView>
        </>
    )
}

export default Certificate