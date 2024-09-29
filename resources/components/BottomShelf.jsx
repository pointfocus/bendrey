import bendreyLogoFinal from "../images/bendreyLogoFinal.png"
import VSB from "../images/VSB.mp4"
import bgBottomBanner from "../images/bgBottomBanner.png"

export default function BottomShelf() {
    return (
        <div className="-mb-[55px] z-[200]">
            <div className="flex justify-center">
                <div className="xl:mx-2">
                    <div className="flex justify-center md:justify-around ">
                        <video className="hidden md:flex z-[100] w-[457px] h-[177px] xl:mt-8" autoPlay={false} loop={true}>
                            <source src={VSB} type="video/mp4" />
                        </video>
                        <div className="z-[100] mb-[10px] w-[200px] place-content-end sm:mr-24">
                            <img className="pb-[10px]" src={bendreyLogoFinal} alt="Bendrey Logo" />
                        </div>
                    </div>
                    <img className="md:flex min-h-[100px] -mt-[90px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]" src={bgBottomBanner} />
                </div>
            </div>
        </div>
    )
}