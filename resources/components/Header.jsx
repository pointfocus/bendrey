import { Link } from "@inertiajs/react"
import logoFinal from "../images/logoFinal.png"
import bgTopCarousel from "../images/bgTopCarousel.png"
import newBgLogo from "../images/newBgLogo.png"
import { Button, Input, useDisclosure } from "@chakra-ui/react"
import Geo from "./Geo"
import { useLanguage } from "../providers/LanguageContext"
import india from "../images/india.png"
import us from "../images/us.png"
import { useRef } from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"



export default function Header() {
    const { language } = useLanguage();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const navItem =
        "font-['Oswald', sans-serif] font-medium text-base leading-[30px] text-[#D0BA9D] drop-shadow lg:px-2 xl:px-4 hover:text-white"

    return (
        <div className="">
            <div className="flex flex-grow justify-around min-h-[185px] bg-[url('../images/bgHeaderMobile.jpg')] sm:bg-[url('../images/bgHeader.png')] items-start sm:items-end">
                {/* nav */}
                <div className=" sm:gap-0 sm:flex w-[450px] justify-between sm:justify-between sm:w-[600px] lg:max-w-[1200px] lg:w-[1000px] xl:max-w-[1400px] xl:w-[1250px] lg:px-[50px]">
                    {/* logo */}
                    <div className="flex place-content-center pb-2">
                        <img className="hidden sm:flex w-[400px] min-w-[100px] md:min-w-[400px] object-contain" src={newBgLogo} />

                        <Link href="#" className="pt-2 sm:pt-0 sm:self-end z-102 absolute md:pl-2 max-w-[200px] sm:max-w-[400px]">
                            <img src={logoFinal} />
                        </Link>

                    </div>

                    {/* right navigation group */}
                    <div className="flex flex-col justify-between lg:pr-[20px] xl:pr-[20px]">
                        <div className="pl-4 sm:pl-2 pr-3 text-white flex flex-row pt-1 sm:pt-2 lg:place-self-end">
                            <img src={language === "en" ? india : us} className="h-4 self-center pr-2" />
                            <Geo />
                        </div>

                        {/* search bar */}
                        <div className="mt-[30px] px-4 sm:px-0 sm:mt-0 sm:hidden lg:block xl:pr-[13px] xl:pl-[18px] -mb-[30px] xl:w-[380px] lg:pr-[8px] lg:pl-2">
                            <Input placeholder={language === "en" ? "search" : "शोधणे"} size="sm" color="gray" borderColor="gray" focusBorderColor="gray.400" />
                        </div>

                        {/* nav links */}
                        <div className="hidden lg:flex justify-between pb-[20px]">
                            <div className={navItem}>{language === 'en' ? "BOOKS" : "पुस्तके"}</div>
                            <div className={navItem}>VASUDEO BENDREY</div>
                            <div className={navItem}>CONTACT</div>
                        </div>

                        {/* drawer nav */}
                        <div className="flex lg:hidden sm:pb-[20px] sm:place-self-end w-full justify-center mt-[60px]">
                            <Button ref={btnRef} bg="yellow.700" colorScheme="" onClick={onOpen}>
                                <HamburgerIcon w={4} h={4} />
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement="right"
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton color="white" />
                                    <DrawerHeader bg="yellow.900" color="white">{language === "en" ? "Menu" : "मेनू"}</DrawerHeader>
                                    <DrawerBody color="white" bg="yellow.700">
                                        <Link href="/books">
                                            <p className="pb-3">Books</p>
                                        </Link>
                                        <Link href="/">
                                            <p className="pb-3">Vasudeo Bendrey</p>
                                        </Link>
                                        <Link href="/contact">
                                            <p>Contact</p>
                                        </Link>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>

                        </div>
                    </div>
                </div>
                {/* bottom nav shelf */}
                <div className="fixed flex-grow items-end self-end sm:pl-[560px] sm:pr-[100px]"><img className="hidden sm:block sm:-ml-[550px] sm:-mt-[11px] sm:max-w-[700px] -mb-[65px] lg:max-w-[995px] lg:-mb-[100px] xl:max-w-[1400px] xl:w-[1250px] xl:-mb-[150px] md:justify-center pl-20" src={bgTopCarousel} /></div>
            </div>
        </div >
    )
}