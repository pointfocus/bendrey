import Header from "../../components/header"
import Footer from "../../components/Footer"
import { useLanguage } from "../../providers/LanguageContext"
import HeadComponent from "../../components/HeadComponent";

export default function Images() {
    const { language } = useLanguage();
    const title = language === "en" ? "Bendrey - Videos" : "बेंद्रे - व्हिडिओ";
    const description = "Videos Page";
    const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India, Videos"

    return (
        <>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col min-h-screen justify-between bg-mainBg">
                <Header title={language === "en" ? "Videos" : "व्हिडिओ"} />
                <Footer />
            </div>
        </>
    )
}