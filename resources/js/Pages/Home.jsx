import Carousel from "../../components/Carousel"
import Header from "../../components/header"
import bgShelf from "../../images/bgShelf.png"
import { useLanguage } from "../../providers/LanguageContext"
import bgBoxHead1 from "../../images/bgBoxHead1.png"
import Book from "../../components/Book"
import Footer from "../../components/Footer"
import { Head } from "@inertiajs/react"
import bpFavicon from "../../images/bpFavicon.png"

export default function Home() {
    const { language } = useLanguage();
    const title = language === 'en' ? 'Popular Books' : 'लोकप्रिय पुस्तके'
    const bookCount = {
        xl: 5,
        lg: 4,
        md: 3,
        default: 2
    }

    const renderBooks = (count) => {
        return Array.from({ length: count }).map((_, index) => (
            <div key={index} className="p-2">
                <Book />
            </div>
        ))
    }

    return (
        <>
            <Head>
                <title>{language === 'en' ? "Bendrey" : "बेंद्रे"}</title>
                <meta head-key="description" name="description" content="Bendrey" />
                <meta name="keywords" content="Vasudeo Sitaram Bendrey books historian author india marathi" />
                <link rel="icon" href={bpFavicon} />
            </Head>
            <div className="bg-mainBg min-h-screen min-w-full">
                {/* header */}
                <Header title={title} />
                {/* carousel */}
                <div className="flex justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]">
                    <div className="min-w-[100px] lg:w-[950px] xl:w-[1050px]">
                        <Carousel />
                    </div>
                </div>

                {/* first middle shelf */}
                <div className="flex justify-center">
                    <img className="min-h-[100px] -mt-[10px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]" src={bgShelf} />
                </div>


                {/* second middle shelf */}
                <div>
                    <div className="flex justify-center -mt-[92px] lg:-mt-[104px] xl:-mt-[130px]">
                        <img src={bgBoxHead1} alt="banner" />
                        <h1 className="absolute mt-9 font-bold text-[29px] md:text-[30px] drop-shadow-xl">{language === 'en' ? 'Research Books' : 'संशोधन पुस्तके'}</h1>
                    </div>

                    {/* default book display */}
                    <div className="flex z-[100] md:hidden justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]">
                        <div className="flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]">
                            {renderBooks(bookCount.default)}
                        </div>
                    </div>
                    {/* md book display */}
                    <div className="hidden z-[100] md:flex lg:hidden justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]">
                        <div className="flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]">
                            {renderBooks(bookCount.md)}
                        </div>
                    </div>
                    {/* lg book display */}
                    <div className="hidden z-[100] lg:flex xl:hidden justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]">
                        <div className="flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]">
                            {renderBooks(bookCount.lg)}
                        </div>
                    </div>
                    {/* xl book display */}
                    <div className="hidden xl:flex z-[100] justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]">
                        <div className="flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]">
                            {renderBooks(bookCount.xl)}
                        </div>
                    </div>
                </div>

                {/* second middle shelf image */}
                <div className="flex justify-center z-[99]">
                    <img className="z-[99] min-h-[100px] -mt-[20px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]" src={bgShelf} />
                </div>

                {/* footer */}
                <div>
                    <Footer />
                </div>
            </div >
        </>
    )
}