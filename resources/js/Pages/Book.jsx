import { useLanguage } from "../../providers/LanguageContext";
import HeadComponent from "../../components/HeadComponent";
import Header from "../../components/header"
import Footer from "../../components/Footer"
import { Badge } from "@chakra-ui/react";

export default function Book({ book }) {
    const { language } = useLanguage();
    const title = language === 'en' ? book.title_en : book.title_ma;
    const description = book.description_en.substring(0, 50)
    const keywords = (
        "hello this is the keywords"
    )
    const img = book.bookImg;
    const popular = book.popular;

    return (
        <div>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col justify-between bg-mainBg min-h-screen min-w-full">
                <Header title={title} />

                {/* description area */}
                <div className="flex self-center justify-between w-[1170px] bg-white">

                    {/* category label */}
                    <div className="flex">
                        <div>Hello</div>
                    </div>

                    {/* book information */}
                    <div className="flex bg-bookDescBg w-[75%] border-t-[3px] border-[#6b2b11] justify-between">

                        {/* left column */}
                        <div className="flex flex-col w-[50%]">
                            <div className="flex flex-row">
                                <div className="ml-10 mt-4">
                                    <Badge px="2" color="white" variant="solid" colorScheme="green">{language === "en" ? "New" : "नवीन"}</Badge>
                                </div>
                                {popular === true ?
                                    <div className="mx-2 mt-4">
                                        <Badge variant="solid" colorScheme="yellow">{language === "en" ? "Popular" : "लोकप्रिय"}</Badge>
                                    </div>
                                    :
                                    <div></div>
                                }

                            </div>
                            <div className="flex bg-bookBg m-10 bg-no-repeat">
                                <img src={img} className="w-[142px] h-[211px] mt-1 mr-3" />
                            </div>
                            <div className="mx-10">
                                <p>{language === "en" ? book.description_en : book.description_ma}</p>
                            </div>
                        </div>
                        {/* right column */}
                        <div className="flex flex-col bg-white w-[50%]">
                            <div className="my-10">
                                <p>{book.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}