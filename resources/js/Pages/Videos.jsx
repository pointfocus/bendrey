import Header from "../../components/header"
import Footer from "../../components/Footer"
import { useLanguage } from "../../providers/LanguageContext"
import HeadComponent from "../../components/HeadComponent";

export default function Images() {
    const { language } = useLanguage();
    const title = language === "en" ? "Bendrey - Videos" : "बेंद्रे - व्हिडिओ";
    const description = "Videos Page";
    const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India, Videos"

    return (
        <>
            <HeadComponent title={title} description={description} keywords={keywords} />
            <div className="flex flex-col min-h-screen justify-between bg-mainBg">
                <Header title={language === "en" ? "Videos" : "व्हिडिओ"} />
                <div className="flex flex-col gap-5 my-20">
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/21pADQ5gWVw" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/hJmogEsHaDA" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/IIQ-vMJvTGQ" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/IbAFm1zPqfQ" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/jrTsKHrUG4Q" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/4I9umNITLkc" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/ttFS_BwZ55c" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/ezByp7NH1rk" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/IvdRdbHulKo" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/m4SlbjOwthY" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/8ktBDTHQ4ok" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/pZsVvyjej2c" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Tj6k7l3NE28" frameborder="0" allowfullscreen></iframe></div>
                    <div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/K5rdFhS7CJ4" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}