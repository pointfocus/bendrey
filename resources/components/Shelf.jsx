// Shelf.js
import Book from "./Book";
import bgShelf from "../images/bgShelf.png"

export default function Shelf({ books }) {

    return (
        <div className="mb-4">
            <div
                className="flex justify-center"
            >
                {books.map((book, index) => (
                    // book component
                    <div key={index} className="p-3 z-[100]">
                        <Book title={book} />
                    </div>
                ))}
            </div>

            {/* shelf image */}
            <div className="flex justify-center z-[99]">
                <img
                    className="z-[99] min-h-[100px] -mt-[20px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]"
                    src={bgShelf}
                    alt="Shelf"
                />
            </div>
        </div>
    );
};

