import { useLanguage } from '../providers/LanguageContext'

export default function Geo() {
    const { language } = useLanguage();
    const { toggleLanguage } = useLanguage();


    return (
        <button onClick={toggleLanguage}>{language === 'en' ? "मराठी" : "English"}</button>
    )
}