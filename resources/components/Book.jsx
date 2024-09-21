import bgProduct from "../images/bgProduct.png"
import productOne from "../images/productOne.jpg"

export default function () {
    return (
        <>
            <div className="w-[150px] md:w-[190px]">
                <div style={{
                    backgroundImage: `url(${bgProduct})`,
                }} className="float-left">
                    <div>
                        <img src={productOne} className="flex contain pt-1 pr-2" />
                    </div>
                </div >
            </div>
        </>
    )
}