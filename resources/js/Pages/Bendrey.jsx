import Header from "../../components/header"
import Footer from "../../components/Footer"
import { useLanguage } from "../../providers/LanguageContext"
import HeadComponent from "../../components/HeadComponent";

export default function Bendrey() {
    const { language } = useLanguage();
    const title = language === "en" ? "Bendrey - VS Bendrey" : "बेंद्रे - वासुदेव सीताराम बेंद्रे";
    const description = "Bendrey About Page";
    const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India"

    return (
        <>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col min-h-screen justify-between bg-mainBg">
                <Header title={language === "en" ? "Vasudeo Sitaram Bendrey" : "वासुदेव सीताराम बेंद्रे"} />
                <Footer />
            </div>
        </>
    )
}