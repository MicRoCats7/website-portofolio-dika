import { BrowserView, MobileView } from "react-device-detect"
import ArticleWeb from "./Article"
import ArticleMobile from "./ArticleMobile"

function Article() {
    return (
        <>
            <BrowserView>
                <ArticleWeb></ArticleWeb>
            </BrowserView>
            <MobileView>
                <ArticleMobile></ArticleMobile>
            </MobileView>
        </>
    )
}

export default Article