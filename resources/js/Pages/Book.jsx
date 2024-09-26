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
    const img = book.bookImg;

    return (
        <div>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col justify-between bg-mainBg min-h-screen min-w-full">
                <Header title={title} />
                <div className="flex self-center justify-between w-[1170px] bg-white">
                    <div className="flex">
                        <div>Hello</div>
                    </div>
                    <div className="flex bg-bookDescBg w-[75%] border-t-[3px] border-[#6b2b11] justify-between">
                        {/* <div className="flex flex-row justify-between bg-green-600"> */}
                        <div className="flex flex-col">
                            <div className="flex bg-bookBg m-10 bg-no-repeat">
                                <img src={img} className="w-[142px] h-[211px] mt-1 mr-3" />
                            </div>
                            <div>
                                <p>{language === "en" ? book.description_en : book.description_ma}</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white">
                            <div>
                                <p>{book.price}</p>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}