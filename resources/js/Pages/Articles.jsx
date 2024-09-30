import Header from "../../components/header"
import Footer from "../../components/Footer"
import { useLanguage } from "../../providers/LanguageContext"
import HeadComponent from "../../components/HeadComponent";

export default function Articles() {
    const { language } = useLanguage();
    const title = language === "en" ? "Bendrey - Articles" : "बेंद्रे - लेख[संपादन]";
    const description = "Articles Page";
    const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India, Articles"

    return (
        <>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col min-h-screen justify-between bg-mainBg">
                <Header title={language === "en" ? "Articles" : "लेख[संपादन]"} />
                <Footer />
            </div>
        </>
    )
}