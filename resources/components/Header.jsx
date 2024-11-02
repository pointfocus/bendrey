import { Link } from "@inertiajs/react"
import logoFinal from "../images/logoFinal.png"
import bgTopCarousel from "../images/bgTopCarousel.png"
import newBgLogo from "../images/newBgLogo.png"
import { Button, Input, useDisclosure } from "@chakra-ui/react"
import { usePage } from "@inertiajs/react"
import bgH1 from "../images/bgH1.png"
import bgBoxHead1 from "../images/bgBoxHead1.png"
import Geo from "./Geo"
import { useLanguage } from "../providers/LanguageContext"
import india from "../images/india.png"
import us from "../images/us.png"
import { useRef } from "react"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

import { HamburgerIcon } from "@chakra-ui/icons"



export default function Header({ title }) {
    const { language } = useLanguage();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { url } = usePage();
    const btnRef = useRef();
    const isBookPath = /^\/books\/\d+$/;
    const isBendreyPath = /^\/vsbendrey$/;

    const navItem =
        "font-['Oswald', sans-serif] font-medium text-base leading-[30px] text-[#D0BA9D] drop-shadow lg:px-2 xl:px-4 hover:text-white"

    return (
        <div className="">
            <div className="flex flex-grow justify-around min-h-[185px] bg-[url('../images/bgHeaderMobile.jpg')] sm:bg-[url('../images/bgHeader.png')] items-start sm:items-end">
                {/* nav */}
                <div className=" sm:gap-0 sm:flex w-[450px] justify-between sm:justify-between sm:w-[600px] lg:max-w-[1200px] lg:w-[1000px] xl:max-w-[1400px] xl:w-[1250px] xl:px-[80px] lg:px-[50px]">
                    {/* logo */}
                    <div className="flex place-content-center pb-2">
                        <img className="hidden sm:flex w-[400px] min-w-[100px] md:min-w-[400px] object-contain" src={newBgLogo} />

                        <Link href="/" className="pt-2 sm:pt-0 sm:self-end z-102 absolute md:pl-2 max-w-[200px] sm:max-w-[400px]">
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
                            <Link href="/books" className={navItem}>{language === 'en' ? "BOOKS" : "पुस्तके"}</Link>
                            <div className="flex z-[201]">
                                <Menu className="flex justify-center">
                                    <MenuButton className={`text-center ${navItem}`}>{language === 'en' ? "BENDREY" : "वासुदेव सीताराम बेंद्रे"}</MenuButton>
                                    <MenuList bg="black" color="#D0BA9D" border={0} borderRadius={0} fontFamily="['Oswald', sans-serif]">
                                        <MenuItem as='a' href='/vsbendrey' bg="black" className="hover:text-white font-bold">
                                            {language === 'en' ? "VS Bendrey" : "वासुदेव सीताराम बेंद्रे"}
                                        </MenuItem>
                                        <MenuItem as='a' href='/articles' bg="black" className="hover:text-white font-bold">
                                            {language === 'en' ? "Articles" : "लेख[संपादन]"}
                                        </MenuItem>
                                        <MenuItem as='a' href='/images' bg="black" className="hover:text-white font-bold">
                                            {language === 'en' ? "Images" : "प्रतिमा"}
                                        </MenuItem>
                                        <MenuItem as='a' href='/videos' bg="black" className="hover:text-white font-bold">
                                            {language === 'en' ? "Videos" : "व्हिडिओ"}
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <Link href="/contact" className={navItem}>{language === 'en' ? "CONTACT" : "संपर्क"}</Link>
                        </div>

                        {/* drawer nav */}
                        <div className="flex lg:hidden sm:pb-[20px] sm:place-self-end w-full justify-center mt-[60px]">
                            <Button ref={btnRef} bg="yellow.700" colorScheme="" onClick={onOpen}>
                                <HamburgerIcon w={4} h={4} />
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement="top"
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton color="white" />
                                    <DrawerHeader bg="black" color="white">{language === "en" ? "Menu" : "मेनू"}</DrawerHeader>
                                    <DrawerBody color="white" bg="black">
                                        <Link href="/vsbendrey">
                                            <p className={`my-2 ${navItem}`}>{language === 'en' ? "VS Bendrey" : "वासुदेव सीताराम बेंद्रे"}</p>
                                        </Link>
                                        <Link href="/books">
                                            <p className={`my-2 ${navItem}`}>{language === 'en' ? "Books" : "पुस्तके"}</p>
                                        </Link>
                                        <Link href="/articles">
                                            <p className={`my-2 ${navItem}`}>{language === 'en' ? "Articles" : "लेख[संपादन]"}</p>
                                        </Link>
                                        <Link href="/images">
                                            <p className={`my-2 ${navItem}`}>{language === 'en' ? "Images" : "प्रतिमा"}</p>
                                        </Link>
                                        <Link href="/videos">
                                            <p className={`my-2 ${navItem}`}>{language === 'en' ? "Videos" : "व्हिडिओ"}</p>
                                        </Link>
                                        <Link href="/contact">
                                            <p className={`my-2 ${navItem}`}>{language === 'en' ? "Contact" : "संपर्क"}</p>
                                        </Link>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>

                        </div>
                    </div>
                </div>
            </div>

            {/* bottom nav shelf */}
            <div className="flex z-[200] justify-center items-end self-end sm:pl-[560px] sm:pr-[100px]"><img className="z-[200] hidden -mt-[9px] sm:flex sm:-ml-[550px] sm:max-w-[700px] lg:max-w-[995px] xl:max-w-[1400px] xl:w-[1270px] md:justify-center pl-20" src={bgTopCarousel} />
            </div>
            <div className="flex justify-center mt-[5px] sm:-mt-[60px] lg:-mt-[85px] xl:-mt-[110px]">
                {isBookPath.test(url) || isBendreyPath.test(url) ? (
                    <div className="flex justify-center">
                        <img src={bgH1} alt="banner" className="flex h-[100px] w-[500px] lg:w-[830px]" />
                        <h1 className="absolute mt-9 font-bold text-[32px] drop-shadow-xl">{title}</h1>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <img src={bgBoxHead1} alt="banner" />
                        <h1 className="absolute mt-9 font-bold text-[32px] drop-shadow-xl">{title}</h1>
                    </div>
                )}

            </div>
        </div >
    )
}