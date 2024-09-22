import { useState } from "react";
import { useLanguage } from "../../providers/LanguageContext";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Shelf from "../../components/Shelf";
import useWindowWidth from "../../components/UseWindowWidth";
import VSB from "../../images/VSB.mp4"
import bendreyLogo from "../../images/bendreyLogoFinal.png"
import bgBottomBanner from "../../images/bgBottomBanner.png"



export default function Books() {
    const { language } = useLanguage();
    const windowWidth = useWindowWidth();

    const [books] = useState([
        "Book 1", "Book 2", "Book 3", "Book 4",
        "Book 5", "Book 6", "Book 7", "Book 8",
        "Book 9", "Book 10", "Book 11", "Book 12",
        "Book 13", "Book 14", "Book 15", "Book 16",
        "Book"
    ]);

    const title = language === "en" ? "Books" : "पुस्तके[संपादन]";

    const getBooksPerShelf = () => {
        if (windowWidth < 640) return 2;
        if (windowWidth < 768) return 2;
        if (windowWidth < 1024) return 3;
        if (windowWidth < 1280) return 4;
        return 5;
    };
    const booksPerShelf = getBooksPerShelf();
    const shelves = Math.ceil(books.length / booksPerShelf);

    return (
        <div className="flex flex-col justify-between bg-mainBg min-h-screen min-w-full">
            <Header title={title} />
            <div>
                {Array.from({ length: shelves }, (_, shelfIndex) => (
                    <Shelf
                        key={shelfIndex}
                        books={books.slice(shelfIndex * booksPerShelf, (shelfIndex + 1) * booksPerShelf)}
                    />
                ))}
            </div>

            <div className="-mb-[55px] z-[200]">
                <div className="flex justify-center">
                    <div className="xl:mx-2">
                        <div className="flex justify-center md:justify-around ">
                            <video className="hidden md:flex z-[100] w-[457px] h-[177px] xl:mt-8" autoPlay="false" loop="true">
                                <source src={VSB} type="video/mp4" />
                            </video>
                            <div className="z-[100] mb-[10px] w-[200px] place-content-end mr-24">
                                <img className="pb-[10px]" src={bendreyLogo} alt="Bendrey Logo" />
                            </div>
                        </div>
                        <img className="md:flex min-h-[100px] -mt-[90px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]" src={bgBottomBanner} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}