import Header from "../../components/header";
import { useLanguage } from "../../providers/LanguageContext"
import Footer from "../../components/Footer"
import HeadComponent from "../../components/HeadComponent";
import bgShelf from "../../images/bgShelf.png"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import x from "../../images/x.png"



export default function Contact() {
    const { language } = useLanguage();
    const headerTitle = language === 'en' ? "Contact" : "संपर्क";
    const title = language === "en" ? "Bendrey - Contact" : "बेंद्रे - संपर्क";
    const description = "Bendrey Contact Page"
    const keywords = (
        "Bendrey, Contact, Twitter, Facebook, About Us"
    )

    return (
        <div>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col justify-between bg-mainBg min-h-screen min-w-full">
                <Header title={headerTitle} />

                <div className="flex justify-center">
                    <div className="mb-4 xl:mt-40">
                        <div className="flex justify-between mx-20 flex-col sm:flex-row gap-10 mt-10 mb-10 sm:mb-0 sm:gap-0">
                            <img src={instagram} className="flex z-[100] w-[100px] h-[100px] xl:h-[150px] xl:w-[150px]" />
                            <a href="https://www.facebook.com/V.S.Bendrey/" className="flex z-[100] w-[100px] h-[100px] xl:h-[150px] xl:w-[150px]">
                                <img src={facebook} />
                            </a>
                            <img src={x} className="flex z-[100] w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]" />
                        </div>

                        <div className="hidden sm:flex mt-[15px] justify-center z-[99]">
                            <img
                                className="z-[99] min-h-[100px] -mt-[20px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]"
                                src={bgShelf}
                                alt="Shelf"
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}