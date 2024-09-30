import Header from "../../components/header"
import Footer from "../../components/Footer"
import { useLanguage } from "../../providers/LanguageContext"
import HeadComponent from "../../components/HeadComponent";
import ImagesComponent from "../../components/ImagesComponent";


export default function Images() {
    const { language } = useLanguage();
    const title = language === "en" ? "Bendrey - Images" : "बेंद्रे - प्रतिमा";
    const description = "Images Page";
    const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India, Images"

    return (
        <>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col min-h-screen justify-between bg-mainBg">
                <Header title={language === "en" ? "Images" : "प्रतिमा"} />
                <ImagesComponent />
                <Footer />
            </div>
        </>
    )
}