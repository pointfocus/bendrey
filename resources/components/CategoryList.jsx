import { useLanguage } from "../providers/LanguageContext"
import { Link } from "@inertiajs/react";

export default function CategoryList() {
    const { language } = useLanguage();

    return (
        <div className="flex flex-col bg-catBg h-[220px] w-[200px] drop-shadow-[0_0_10px_rgba(0,0,0,.8)]">
            <p className="text-2xl font-bold font-[Oswald, sans-serif] p-[10px]">{language === "en" ? "Categories" : "श्रेणी[संपादन]"}</p>
            <div>
                <Link href="">
                    <p className="pl-[20px] text-red-900">{language === "en" ? "Popular Books" : "लोकप्रिय पुस्तके"}</p>
                </Link>
                <Link href="">
                    <p className="pl-[20px] text-red-900">{language === "en" ? "E-Books" : "ई-बुक्स"}</p>
                </Link>
            </div>
        </div>
    )
}