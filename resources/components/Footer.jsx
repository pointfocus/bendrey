import social1 from "../images/social1.png"
import social2 from "../images/social2.png"
import BottomShelf from "./BottomShelf"

export default function Footer() {
    return (
        <div>
            <BottomShelf />
            <div className="flex bg-[#35281f] h-[90px] place-content-end items-center">

                {/* <div className="flex z-[200] justify-between mr-[50px] mt-10 mb-8">
                    <img className="max-h-[40px] mx-4" src={social1} alt="twitter logo" />
                    <img className="max-h-[40px]" src={social2} alt="facebook logo" />
                </div> */}
            </div>
        </div>
    )
}