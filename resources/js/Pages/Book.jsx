import { useLanguage } from "../../providers/LanguageContext";
import HeadComponent from "../../components/HeadComponent";
import Header from "../../components/header"
import Footer from "../../components/Footer"
import BottomShelf from "../../components/BottomShelf";

export default function Book({ book }) {
    const { language } = useLanguage();
    const title = language === 'en' ? book.title_en : book.title_ma;
    const description = book.description_en.substring(0, 50)
    const keywords = (
        "hello this is the keywords"
    )

    return (
        <div>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col justify-between bg-mainBg min-h-screen min-w-full">
                <Header title={title} />
                <div className="flex justify-around">
                    hello
                </div>
                <Footer />
            </div>
        </div>
    )
}