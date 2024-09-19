import Carousel from "../../components/Carousel"
import Header from "../../components/header"
import bgBoxHead1 from "../../images/bgBoxHead1.png"
import { useLanguage } from "../../providers/LanguageContext"

export default function Home() {
    const { language } = useLanguage();

    return (
        <>
            <div className="bg-mainBg h-dvh">
                {/* header */}
                <Header />

                {/* banner */}
                <div className="hidden sm:flex justify-center sm:-mt-[4px] md:-mt-[3px] lg:mt-[4px] xl:mt-[11px]">
                    <img src={bgBoxHead1} alt="banner" />
                    <h1 className="absolute mt-9 font-bold text-[32px] drop-shadow-xl">{language === 'en' ? 'Popular Books' : 'लोकप्रिय पुस्तके'}</h1>
                </div>

                {/* carousel */}
                <div className="flex justify-center">
                    <Carousel />
                </div>
            </div>
        </>
    )
}