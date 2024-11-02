import bgProduct from "../images/bgProduct.png"
import productOne from "../images/productOne.jpg"

export default function () {
    return (
        <>
            <div className="w-[150px] md:w-[190px]">
                <div className="flex float-left bg-bookBg bg-no-repeat">
                    <div>
                        <img src={productOne} className="flex contain pt-1 pr-2 mr-2" />
                    </div>
                </div >
            </div>
        </>
    )
}