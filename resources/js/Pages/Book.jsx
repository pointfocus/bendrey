import { useLanguage } from "../../providers/LanguageContext";
import HeadComponent from "../../components/HeadComponent";
import Header from "../../components/header"
import Footer from "../../components/Footer"
import { Badge, Icon } from "@chakra-ui/react";
import Categories from "../../components/CategoriesComponent";


export default function Book({ book }) {
    const { language } = useLanguage();
    const title = language === 'en' ? book.title_en : book.title_ma;
    const description = book.description_en.substring(0, 50)
    const keywords = book.keywords;
    const img = book.bookImg;
    const popular = book.popular;
    const isNew = book.new;
    const inStock = book.in_stock

    const getTranslatedLanguages = (languages) => {
        return languages.map(lang => {
            if (lang.toLowerCase() === 'english') return language === 'ma' ? 'अंग्रेजी' : 'English';
            if (lang.toLowerCase() === 'marathi') return language === 'ma' ? 'मराठी' : 'Marathi';
            return lang;
        }).filter(Boolean)
            .join(', ');
    };

    const getTranslatedFormats = (formats) => {
        return formats.map(form => {
            if (form.toLowerCase() === 'print') return language === 'ma' ? 'अंग्रेजी' : 'Print';
            if (form.toLowerCase() === 'e-book') return language === 'ma' ? 'मराठी' : 'E-Book';
            return lang;
        }).filter(Boolean)
            .join(', ');
    };


    return (
        <div>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col justify-between bg-mainBg min-h-screen min-w-full">
                <Header title={title} />

                {/* description area */}
                <div className="flex self-center justify-between w-[1170px]">

                    {/* category label */}
                    <Categories />

                    {/* book information */}
                    <div className="flex bg-bookDescBg w-[75%] border-t-[3px] border-[#6b2b11] justify-between">

                        {/* left column */}
                        <div className="flex flex-col w-[50%]">
                            <div className="flex flex-row">
                                <div className="ml-10 mt-4">
                                    {isNew === true ? <Badge color="white" variant="solid" colorScheme="green">{language === "en" ? "New" : "नवीन"}</Badge>
                                        :
                                        ""
                                    }
                                </div>
                                {popular === true ?
                                    <div className="mx-2 mt-4">
                                        <Badge variant="solid" colorScheme="yellow">{language === "en" ? "Popular" : "लोकप्रिय"}</Badge>
                                    </div>
                                    :
                                    ""
                                }
                                {inStock === true ?
                                    <div className="mt-4">
                                        <Badge colorScheme="blackAlpha">{language === "en" ? "In-Stock" : "इन-स्टॉक"}</Badge>
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                            {/* book image */}
                            <div className="flex bg-bookBg m-10 bg-no-repeat">
                                <img src={img} className="w-[142px] h-[211px] mt-1 mr-3" />
                            </div>
                            {/* book information */}
                            <div className="flex flex-col mx-10 mb-20 gap-1">
                                <div className="flex gap-2">
                                    <div className="flex font-bold">{language === "en" ? "Pages: " : "पृष्ठे: "}</div>
                                    {book.pages}
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex font-bold">
                                        {language === "en" ? "Languages: " : "भाषा: "}
                                    </div>
                                    {book.languages && Array.isArray(book.languages) ? getTranslatedLanguages(book.languages) : ""}
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex font-bold">{language === "en" ? "Formats: " : "फॉर्मेट[संपादन]।: "}</div>
                                    {book.formats && Array.isArray(book.formats) ? getTranslatedFormats(book.formats) : ""}
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex font-bold">{language === "en" ? "Publisher: " : "प्रकाशक: "}</div>
                                    {book.publisher}
                                </div>
                            </div>
                        </div>
                        {/* right column */}
                        <div className="flex flex-col w-[50%]">
                            <div className="my-10">
                                <p>{language === "en" ? book.description_en : book.description_ma}</p>

                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex text-red-900 font-bold">
                                    <a className="flex" href={book.link} target="_blank">
                                        {language === "en" ? "Purchase the book here" : "येथे पुस्तक खरेदी करा"}
                                    </a>
                                </div>
                                <div className="flex font-bold">{language === "en" ? "Or" : "किंवा"}</div>
                                <div className="flex">
                                    <div className="flex font-bold text-red-900"><a href="mailto:bendreypublications@gmail.com">bendreypublications@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}