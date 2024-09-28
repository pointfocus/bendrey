import { useState } from "react";
import { useLanguage } from "../../providers/LanguageContext";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Shelf from "../../components/Shelf";
import useWindowWidth from "../../components/UseWindowWidth";
import BottomShelf from "../../components/BottomShelf";
import { Head } from "@inertiajs/react";



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
        <>
            <Head title={language === "en" ? "Bendrey - Books" : "बेंद्रे - बुक्स"} />
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

                <Footer />
            </div>
        </>
    );
}