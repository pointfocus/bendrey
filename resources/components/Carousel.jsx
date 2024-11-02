import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import bgProduct from "../images/bgProduct.png"
import { Link } from "@inertiajs/react"
import Book from "./Book"
import right from "../images/right.png"
import left from "../images/left.png"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src={right}
            className={`w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] ${className}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src={left}
            className={`h-[25px] w-[25px] sm:w-[30px] sm:h-[30px] ${className}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}


export default function Carousel() {
    var settings = {
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // centerPadding: "20px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        draggable: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // centerPadding: "100px"
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    // centerPadding: "100px"
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // centerPadding: "100px"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // centerPadding: "100px"
                }
            }
        ]
    }
    return (
        <div className="slider-container -mb-1">
            <Slider {...settings}>
                <div className="sm:ml-9 ml-4"><Book /></div>
                <div className="sm:ml-9 ml-4"><Book /></div>
                <div className="sm:ml-9 ml-4"><Book /></div>
                <div className="sm:ml-9 ml-4"><Book /></div>
                <div className="sm:ml-9 ml-4"><Book /></div>
                <div className="sm:ml-9 ml-4"><Book /></div>
                <div className="sm:ml-9 ml-4"><Book /></div>
                <div className="sm:ml-9 ml-4"><Book /></div>
            </Slider>
        </div>
    )
}