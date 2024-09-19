import Header from "../../components/header";
import { useLanguage } from "../../providers/LanguageContext"



export default function Contact() {
    const { language } = useLanguage();

    return (
        <div>
            <Header />
            <p className="h-dvh bg-black-100 text-center content-center font-bold">{language === "en" ? "Contact Page" : "संपर्क पृष्ठ"}</p>
        </div>
    )
}