import { Link } from "@inertiajs/react";
import { useLanguage } from "../providers/LanguageContext"

export default function Categories() {
    const { language } = useLanguage();
    return (
        <div className="flex flex-col bg-catBg bg-no-repeat w-[258px] h-[258px]">
            <div className="flex mx-4 my-2 text-2xl font-bold ">{language === 'en' ? "Categories" : "श्रेणी[संपादन]"}</div>
            <div className="flex flex-col ml-6">
                <div className="flex font-bold text-red-900">
                    {language === 'en' ? "Books" : "पुस्तके"}
                </div>
                <div className="flex flex-col ml-2">
                    <Link href="#">
                        {language === "en" ? "Ebooks" : "ई-बुक्स"}
                    </Link>
                    <Link href="#">
                        {language === "en" ? "Printed Books" : "मुद्रित पुस्तके"}
                    </Link>
                    <Link href="#">
                        {language === "en" ? "Popular Books" : "लोकप्रिय पुस्तके"}
                    </Link>
                    <Link href="#">
                        {language === "en" ? "New Books" : "नवी पुस्तके"}
                    </Link>
                </div>
            </div>
            <div className="flex flex-col ml-6">
                <div className="flex font-bold text-red-900">
                    <Link href="#">
                        {language === 'en' ? "Articles" : "लेख[संपादन]"}
                    </Link>
                </div>
                <div className="flex font-bold text-red-900">
                    <Link href="#">
                        {language === 'en' ? "Videos" : "व्हिडिओ"}
                    </Link>
                </div>
                <div className="flex font-bold text-red-900">
                    <Link href="#">
                        {language === 'en' ? "Images" : "प्रतिमा"}
                    </Link>
                </div>
            </div>
        </div >
    )
}