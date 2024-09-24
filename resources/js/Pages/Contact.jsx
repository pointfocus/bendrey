import Header from "../../components/header";
import { useLanguage } from "../../providers/LanguageContext"
import Footer from "../../components/Footer"
import HeadComponent from "../../components/HeadComponent";



export default function Contact() {
    const { language } = useLanguage();
    const title = language === 'en' ? "Contact" : "संपर्क"
    const description = "Bendrey Contact Page"
    const keywords = (
        "Bendrey, Contact, Twitter, Facebook, About Us"
    )

    return (
        <div>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col justify-between bg-mainBg min-h-screen min-w-full">
                <Header title={title} />

                <Footer />
            </div>
        </div>
    )
}