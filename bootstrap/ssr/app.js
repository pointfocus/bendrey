import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { usePage, Link, Head, createInertiaApp } from "@inertiajs/react";
import { useDisclosure, Input, Menu, MenuButton, MenuList, MenuItem, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Badge, ChakraProvider } from "@chakra-ui/react";
import { createContext, useState, useContext, useRef, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import axios from "axios";
import { createRoot } from "react-dom/client";
const logoFinal = "/build/assets/logoFinal-WbtLOCE7.png";
const bgTopCarousel = "/build/assets/bgTopCarousel-DRPddHPd.png";
const newBgLogo = "/build/assets/newBgLogo-Ddl-nw70.png";
const bgH1 = "/build/assets/bgH1-BugLKaTh.png";
const bgBoxHead1 = "/build/assets/bgBoxHead1-B0r_Aa6u.png";
const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prev) => prev === "en" ? "ma" : "en");
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, toggleLanguage }, children });
};
const useLanguage = () => useContext(LanguageContext);
function Geo() {
  const { language } = useLanguage();
  const { toggleLanguage } = useLanguage();
  return /* @__PURE__ */ jsx("button", { onClick: toggleLanguage, children: language === "en" ? "मराठी" : "English" });
}
const india = "/build/assets/india-DldOQAKg.png";
const us = "/build/assets/us-BkGZdKyE.png";
function Header({ title }) {
  const { language } = useLanguage();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { url } = usePage();
  const btnRef = useRef();
  const isBookPath = /^\/books\/\d+$/;
  const isBendreyPath = /^\/vsbendrey$/;
  const navItem = "font-['Oswald', sans-serif] font-medium text-base leading-[30px] text-[#D0BA9D] drop-shadow lg:px-2 xl:px-4 hover:text-white";
  return /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-grow justify-around min-h-[185px] bg-[url('../images/bgHeaderMobile.jpg')] sm:bg-[url('../images/bgHeader.png')] items-start sm:items-end", children: /* @__PURE__ */ jsxs("div", { className: " sm:gap-0 sm:flex w-[450px] justify-between sm:justify-between sm:w-[600px] lg:max-w-[1200px] lg:w-[1000px] xl:max-w-[1400px] xl:w-[1250px] xl:px-[80px] lg:px-[50px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex place-content-center pb-2", children: [
        /* @__PURE__ */ jsx("img", { className: "hidden sm:flex w-[400px] min-w-[100px] md:min-w-[400px] object-contain", src: newBgLogo }),
        /* @__PURE__ */ jsx(Link, { href: "/", className: "pt-2 sm:pt-0 sm:self-end z-102 absolute md:pl-2 max-w-[200px] sm:max-w-[400px]", children: /* @__PURE__ */ jsx("img", { src: logoFinal }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between lg:pr-[20px] xl:pr-[20px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "pl-4 sm:pl-2 pr-3 text-white flex flex-row pt-1 sm:pt-2 lg:place-self-end", children: [
          /* @__PURE__ */ jsx("img", { src: language === "en" ? india : us, className: "h-4 self-center pr-2" }),
          /* @__PURE__ */ jsx(Geo, {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-[30px] px-4 sm:px-0 sm:mt-0 sm:hidden lg:block xl:pr-[13px] xl:pl-[18px] -mb-[30px] xl:w-[380px] lg:pr-[8px] lg:pl-2", children: /* @__PURE__ */ jsx(Input, { placeholder: language === "en" ? "search" : "शोधणे", size: "sm", color: "gray", borderColor: "gray", focusBorderColor: "gray.400" }) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex justify-between pb-[20px]", children: [
          /* @__PURE__ */ jsx(Link, { href: "/books", className: navItem, children: language === "en" ? "BOOKS" : "पुस्तके" }),
          /* @__PURE__ */ jsx("div", { className: "flex z-[201]", children: /* @__PURE__ */ jsxs(Menu, { className: "flex justify-center", children: [
            /* @__PURE__ */ jsx(MenuButton, { className: `text-center ${navItem}`, children: language === "en" ? "BENDREY" : "वासुदेव सीताराम बेंद्रे" }),
            /* @__PURE__ */ jsxs(MenuList, { bg: "black", color: "#D0BA9D", border: 0, borderRadius: 0, fontFamily: "['Oswald', sans-serif]", children: [
              /* @__PURE__ */ jsx(MenuItem, { as: "a", href: "/vsbendrey", bg: "black", className: "hover:text-white font-bold", children: language === "en" ? "VS Bendrey" : "वासुदेव सीताराम बेंद्रे" }),
              /* @__PURE__ */ jsx(MenuItem, { as: "a", href: "/articles", bg: "black", className: "hover:text-white font-bold", children: language === "en" ? "Articles" : "लेख[संपादन]" }),
              /* @__PURE__ */ jsx(MenuItem, { as: "a", href: "/images", bg: "black", className: "hover:text-white font-bold", children: language === "en" ? "Images" : "प्रतिमा" }),
              /* @__PURE__ */ jsx(MenuItem, { as: "a", href: "/videos", bg: "black", className: "hover:text-white font-bold", children: language === "en" ? "Videos" : "व्हिडिओ" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { href: "/contact", className: navItem, children: language === "en" ? "CONTACT" : "संपर्क" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex lg:hidden sm:pb-[20px] sm:place-self-end w-full justify-center mt-[60px]", children: [
          /* @__PURE__ */ jsx(Button, { ref: btnRef, bg: "yellow.700", colorScheme: "", onClick: onOpen, children: /* @__PURE__ */ jsx(HamburgerIcon, { w: 4, h: 4 }) }),
          /* @__PURE__ */ jsxs(
            Drawer,
            {
              isOpen,
              placement: "top",
              onClose,
              finalFocusRef: btnRef,
              children: [
                /* @__PURE__ */ jsx(DrawerOverlay, {}),
                /* @__PURE__ */ jsxs(DrawerContent, { children: [
                  /* @__PURE__ */ jsx(DrawerCloseButton, { color: "white" }),
                  /* @__PURE__ */ jsx(DrawerHeader, { bg: "black", color: "white", children: language === "en" ? "Menu" : "मेनू" }),
                  /* @__PURE__ */ jsxs(DrawerBody, { color: "white", bg: "black", children: [
                    /* @__PURE__ */ jsx(Link, { href: "/vsbendrey", children: /* @__PURE__ */ jsx("p", { className: `my-2 ${navItem}`, children: language === "en" ? "VS Bendrey" : "वासुदेव सीताराम बेंद्रे" }) }),
                    /* @__PURE__ */ jsx(Link, { href: "/books", children: /* @__PURE__ */ jsx("p", { className: `my-2 ${navItem}`, children: language === "en" ? "Books" : "पुस्तके" }) }),
                    /* @__PURE__ */ jsx(Link, { href: "/articles", children: /* @__PURE__ */ jsx("p", { className: `my-2 ${navItem}`, children: language === "en" ? "Articles" : "लेख[संपादन]" }) }),
                    /* @__PURE__ */ jsx(Link, { href: "/images", children: /* @__PURE__ */ jsx("p", { className: `my-2 ${navItem}`, children: language === "en" ? "Images" : "प्रतिमा" }) }),
                    /* @__PURE__ */ jsx(Link, { href: "/videos", children: /* @__PURE__ */ jsx("p", { className: `my-2 ${navItem}`, children: language === "en" ? "Videos" : "व्हिडिओ" }) }),
                    /* @__PURE__ */ jsx(Link, { href: "/contact", children: /* @__PURE__ */ jsx("p", { className: `my-2 ${navItem}`, children: language === "en" ? "Contact" : "संपर्क" }) })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex z-[200] justify-center items-end self-end sm:pl-[560px] sm:pr-[100px]", children: /* @__PURE__ */ jsx("img", { className: "z-[200] hidden -mt-[9px] sm:flex sm:-ml-[550px] sm:max-w-[700px] lg:max-w-[995px] xl:max-w-[1400px] xl:w-[1270px] md:justify-center pl-20", src: bgTopCarousel }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-[5px] sm:-mt-[60px] lg:-mt-[85px] xl:-mt-[110px]", children: isBookPath.test(url) || isBendreyPath.test(url) ? /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
      /* @__PURE__ */ jsx("img", { src: bgH1, alt: "banner", className: "flex h-[100px] w-[500px] lg:w-[830px]" }),
      /* @__PURE__ */ jsx("h1", { className: "absolute mt-9 font-bold text-[32px] drop-shadow-xl", children: title })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
      /* @__PURE__ */ jsx("img", { src: bgBoxHead1, alt: "banner" }),
      /* @__PURE__ */ jsx("h1", { className: "absolute mt-9 font-bold text-[32px] drop-shadow-xl", children: title })
    ] }) })
  ] });
}
const bendreyLogoFinal = "/build/assets/bendreyLogoFinal-CxgAS1EN.png";
const VSB = "/build/assets/VSB-C7owXtp2.mp4";
const bgBottomBanner = "/build/assets/bgBottomBanner-wGyVdtqZ.png";
function BottomShelf() {
  return /* @__PURE__ */ jsx("div", { className: "-mb-[55px] z-[200]", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "xl:mx-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center md:justify-around ", children: [
      /* @__PURE__ */ jsx("video", { className: "hidden md:flex z-[100] w-[457px] h-[177px] xl:mt-8", autoPlay: false, loop: true, children: /* @__PURE__ */ jsx("source", { src: VSB, type: "video/mp4" }) }),
      /* @__PURE__ */ jsx("div", { className: "z-[100] mb-[10px] w-[200px] place-content-end sm:mr-24", children: /* @__PURE__ */ jsx("img", { className: "pb-[10px]", src: bendreyLogoFinal, alt: "Bendrey Logo" }) })
    ] }),
    /* @__PURE__ */ jsx("img", { className: "md:flex min-h-[100px] -mt-[90px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]", src: bgBottomBanner })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(BottomShelf, {}),
    /* @__PURE__ */ jsx("div", { className: "flex bg-[#35281f] h-[90px] place-content-end items-center" })
  ] });
}
const bpFavicon = "/build/assets/bpFavicon-DpA6vf5Z.png";
function HeadComponent({ title, keywords, description }) {
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "csrf-token", content: "{{csrf_token()}}" }),
    /* @__PURE__ */ jsx("meta", { "head-key": "description", name: "description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("link", { rel: "icon", href: bpFavicon })
  ] });
}
function Articles() {
  const { language } = useLanguage();
  const title = language === "en" ? "Bendrey - Articles" : "बेंद्रे - लेख[संपादन]";
  const description = "Articles Page";
  const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India, Articles";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeadComponent, { title, description, keywords }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen justify-between bg-mainBg", children: [
      /* @__PURE__ */ jsx(Header, { title: language === "en" ? "Articles" : "लेख[संपादन]" }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles
}, Symbol.toStringTag, { value: "Module" }));
function Bendrey() {
  const { language } = useLanguage();
  const title = language === "en" ? "Bendrey - VS Bendrey" : "बेंद्रे - वासुदेव सीताराम बेंद्रे";
  const description = "Bendrey About Page";
  const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeadComponent, { title, description, keywords }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen justify-between bg-mainBg", children: [
      /* @__PURE__ */ jsx(Header, { title: language === "en" ? "Vasudeo Sitaram Bendrey" : "वासुदेव सीताराम बेंद्रे" }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bendrey
}, Symbol.toStringTag, { value: "Module" }));
function Categories() {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-catBg bg-no-repeat w-[258px] h-[258px]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex mx-4 my-2 text-2xl font-bold ", children: language === "en" ? "Categories" : "श्रेणी[संपादन]" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex font-bold text-red-900", children: language === "en" ? "Books" : "पुस्तके" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-2", children: [
        /* @__PURE__ */ jsx(Link, { href: "#", children: language === "en" ? "Ebooks" : "ई-बुक्स" }),
        /* @__PURE__ */ jsx(Link, { href: "#", children: language === "en" ? "Printed Books" : "मुद्रित पुस्तके" }),
        /* @__PURE__ */ jsx(Link, { href: "#", children: language === "en" ? "Popular Books" : "लोकप्रिय पुस्तके" }),
        /* @__PURE__ */ jsx(Link, { href: "#", children: language === "en" ? "New Books" : "नवी पुस्तके" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex font-bold text-red-900", children: /* @__PURE__ */ jsx(Link, { href: "#", children: language === "en" ? "Articles" : "लेख[संपादन]" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex font-bold text-red-900", children: /* @__PURE__ */ jsx(Link, { href: "#", children: language === "en" ? "Videos" : "व्हिडिओ" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex font-bold text-red-900", children: /* @__PURE__ */ jsx(Link, { href: "#", children: language === "en" ? "Images" : "प्रतिमा" }) })
    ] })
  ] });
}
function Book$1({ book }) {
  const { language } = useLanguage();
  const title = language === "en" ? book.title_en : book.title_ma;
  const description = book.description_en.substring(0, 50);
  const keywords = book.keywords;
  const img = book.bookImg;
  const popular = book.popular;
  const isNew = book.new;
  const inStock = book.in_stock;
  const getTranslatedLanguages = (languages) => {
    return languages.map((lang2) => {
      if (lang2.toLowerCase() === "english") return language === "ma" ? "अंग्रेजी" : "English";
      if (lang2.toLowerCase() === "marathi") return language === "ma" ? "मराठी" : "Marathi";
      return lang2;
    }).filter(Boolean).join(", ");
  };
  const getTranslatedFormats = (formats) => {
    return formats.map((form) => {
      if (form.toLowerCase() === "print") return language === "ma" ? "अंग्रेजी" : "Print";
      if (form.toLowerCase() === "e-book") return language === "ma" ? "मराठी" : "E-Book";
      return lang;
    }).filter(Boolean).join(", ");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(HeadComponent, { title, description, keywords }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between bg-mainBg min-h-screen min-w-full", children: [
      /* @__PURE__ */ jsx(Header, { title }),
      /* @__PURE__ */ jsxs("div", { className: "flex self-center justify-between lg:w-[970px] mx-2", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx(Categories, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[400px] sm:w-[500px] md:flex-row bg-bookDescBg lg:w-[75%] border-t-[3px] border-[#6b2b11] md:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:w-[50%]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row ml-10", children: [
              isNew === true ? /* @__PURE__ */ jsx("div", { className: "mx-2 mt-4", children: /* @__PURE__ */ jsx(Badge, { color: "white", variant: "solid", colorScheme: "green", children: language === "en" ? "New" : "नवीन" }) }) : "",
              popular === true ? /* @__PURE__ */ jsx("div", { className: "mx-2 mt-4", children: /* @__PURE__ */ jsx(Badge, { variant: "solid", colorScheme: "yellow", children: language === "en" ? "Popular" : "लोकप्रिय" }) }) : "",
              inStock === true ? /* @__PURE__ */ jsx("div", { className: "mx-2 mt-4", children: /* @__PURE__ */ jsx(Badge, { colorScheme: "blackAlpha", children: language === "en" ? "In-Stock" : "इन-स्टॉक" }) }) : ""
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex mt-[70px] md:mt-0 justify-center md:justify-normal", children: /* @__PURE__ */ jsx("div", { className: "flex bg-bookBg md:m-10 bg-no-repeat", children: /* @__PURE__ */ jsx("img", { src: img, className: "flex w-[142px] h-[211px] mt-1 mr-3" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "my-20 mx-10 font-semibold", children: /* @__PURE__ */ jsx("p", { children: language === "en" ? book.description_en : book.description_ma }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:w-[50%] justify-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-10 mb-20 gap-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "flex font-bold", children: language === "en" ? "Pages: " : "पृष्ठे: " }),
                book.pages
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "flex font-bold", children: language === "en" ? "Languages: " : "भाषा: " }),
                book.languages && Array.isArray(book.languages) ? getTranslatedLanguages(book.languages) : ""
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "flex font-bold", children: language === "en" ? "Formats: " : "फॉर्मेट[संपादन]।: " }),
                book.formats && Array.isArray(book.formats) ? getTranslatedFormats(book.formats) : ""
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "flex font-bold", children: language === "en" ? "Publisher: " : "प्रकाशक: " }),
                book.publisher
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col gap-1 mx-10 mb-[50px]", children: [
              /* @__PURE__ */ jsx("div", { className: "flex text-red-900 font-bold", children: /* @__PURE__ */ jsx("a", { className: "flex", href: book.link, target: "_blank", children: language === "en" ? "Purchase the book here" : "येथे पुस्तक खरेदी करा" }) }),
              /* @__PURE__ */ jsx("div", { className: "flex font-bold", children: language === "en" ? "Or" : "किंवा" }),
              /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("div", { className: "flex font-bold text-red-900", children: /* @__PURE__ */ jsx("a", { href: "mailto:bendreypublications@gmail.com", children: language === "en" ? "Email Us" : "आम्हाला ईमेल करा" }) }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsx(Footer, {}) })
    ] })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Book$1
}, Symbol.toStringTag, { value: "Module" }));
const productOne = "/build/assets/productOne-DwO8Zz5d.jpg";
function Book() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "w-[150px] md:w-[190px]", children: /* @__PURE__ */ jsx("div", { className: "flex float-left bg-bookBg bg-no-repeat", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: productOne, className: "flex contain pt-1 pr-2 mr-2" }) }) }) }) });
}
const bgShelf = "/build/assets/bgShelf-CHD1xARx.png";
function Shelf({ books }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex justify-center",
        children: books.map((book, index) => (
          // book component
          /* @__PURE__ */ jsx("div", { className: "p-3 z-[100]", children: /* @__PURE__ */ jsx(Book, { title: book }) }, index)
        ))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center z-[99]", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "z-[99] min-h-[100px] -mt-[20px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]",
        src: bgShelf,
        alt: "Shelf"
      }
    ) })
  ] });
}
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowWidth;
};
function Books() {
  const { language } = useLanguage();
  const windowWidth = useWindowWidth();
  const [books] = useState([
    "Book 1",
    "Book 2",
    "Book 3",
    "Book 4",
    "Book 5",
    "Book 6",
    "Book 7",
    "Book 8",
    "Book 9",
    "Book 10",
    "Book 11",
    "Book 12",
    "Book 13",
    "Book 14",
    "Book 15",
    "Book 16",
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: language === "en" ? "Bendrey - Books" : "बेंद्रे - बुक्स" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between bg-mainBg min-h-screen min-w-full", children: [
      /* @__PURE__ */ jsx(Header, { title }),
      /* @__PURE__ */ jsx("div", { children: Array.from({ length: shelves }, (_, shelfIndex) => /* @__PURE__ */ jsx(
        Shelf,
        {
          books: books.slice(shelfIndex * booksPerShelf, (shelfIndex + 1) * booksPerShelf)
        },
        shelfIndex
      )) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Books
}, Symbol.toStringTag, { value: "Module" }));
const instagram = "/build/assets/instagram-DEJqQQMA.png";
const facebook = "/build/assets/facebook-CZpvzEj1.png";
const x = "/build/assets/x-s3eKbmDj.png";
function Contact() {
  const { language } = useLanguage();
  const headerTitle = language === "en" ? "Contact" : "संपर्क";
  const title = language === "en" ? "Bendrey - Contact" : "बेंद्रे - संपर्क";
  const description = "Bendrey Contact Page";
  const keywords = "Bendrey, Contact, Twitter, Facebook, About Us";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(HeadComponent, { title, description, keywords }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between bg-mainBg min-h-screen min-w-full", children: [
      /* @__PURE__ */ jsx(Header, { title: headerTitle }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "mb-4 xl:mt-40", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mx-20 flex-col sm:flex-row gap-10 mt-10 mb-10 sm:mb-0 sm:gap-0", children: [
          /* @__PURE__ */ jsx("img", { src: instagram, className: "flex z-[100] w-[100px] h-[100px] xl:h-[150px] xl:w-[150px]" }),
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/V.S.Bendrey/", className: "flex z-[100] w-[100px] h-[100px] xl:h-[150px] xl:w-[150px]", children: /* @__PURE__ */ jsx("img", { src: facebook }) }),
          /* @__PURE__ */ jsx("img", { src: x, className: "flex z-[100] w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex mt-[15px] justify-center z-[99]", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "z-[99] min-h-[100px] -mt-[20px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]",
            src: bgShelf,
            alt: "Shelf"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const right = "/build/assets/right-rFFhZSGn.png";
const left = "/build/assets/left-BfHZjyat.png";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: right,
      className: `w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] ${className}`,
      style: { ...style, display: "block" },
      onClick
    }
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: left,
      className: `h-[25px] w-[25px] sm:w-[30px] sm:h-[30px] ${className}`,
      style: { ...style, display: "block" },
      onClick
    }
  );
}
function Carousel() {
  var settings = {
    infinite: true,
    nextArrow: /* @__PURE__ */ jsx(SampleNextArrow, {}),
    prevArrow: /* @__PURE__ */ jsx(SamplePrevArrow, {}),
    // centerPadding: "20px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4e3,
    pauseOnHover: true,
    draggable: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
          // centerPadding: "100px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
          // centerPadding: "100px"
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
          // centerPadding: "100px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
          // centerPadding: "100px"
        }
      }
    ]
  };
  return /* @__PURE__ */ jsx("div", { className: "slider-container -mb-1", children: /* @__PURE__ */ jsxs(Slider, { ...settings, children: [
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx("div", { className: "sm:ml-9 ml-4", children: /* @__PURE__ */ jsx(Book, {}) })
  ] }) });
}
function Home() {
  const { language } = useLanguage();
  const title = language === "en" ? "Popular Books" : "लोकप्रिय पुस्तके";
  const bookCount = {
    xl: 5,
    lg: 4,
    md: 3,
    default: 2
  };
  const renderBooks = (count) => {
    return Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx(Book, {}) }, index));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: language === "en" ? "Bendrey" : "बेंद्रे" }),
      /* @__PURE__ */ jsx("meta", { "head-key": "description", name: "description", content: "Bendrey" }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "Vasudeo Sitaram Bendrey books historian author india marathi" }),
      /* @__PURE__ */ jsx("link", { rel: "icon", href: bpFavicon })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-mainBg min-h-screen min-w-full", children: [
      /* @__PURE__ */ jsx(Header, { title }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]", children: /* @__PURE__ */ jsx("div", { className: "min-w-[100px] lg:w-[950px] xl:w-[1050px]", children: /* @__PURE__ */ jsx(Carousel, {}) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "min-h-[100px] -mt-[10px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]", src: bgShelf }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center -mt-[92px] lg:-mt-[104px] xl:-mt-[130px]", children: [
          /* @__PURE__ */ jsx("img", { src: bgBoxHead1, alt: "banner" }),
          /* @__PURE__ */ jsx("h1", { className: "absolute mt-9 font-bold text-[29px] md:text-[30px] drop-shadow-xl", children: language === "en" ? "Research Books" : "संशोधन पुस्तके" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex z-[100] md:hidden justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]", children: /* @__PURE__ */ jsx("div", { className: "flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]", children: renderBooks(bookCount.default) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden z-[100] md:flex lg:hidden justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]", children: /* @__PURE__ */ jsx("div", { className: "flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]", children: renderBooks(bookCount.md) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden z-[100] lg:flex xl:hidden justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]", children: /* @__PURE__ */ jsx("div", { className: "flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]", children: renderBooks(bookCount.lg) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden xl:flex z-[100] justify-center mt-10 px-[50px] sm:px-[50px] md:px-[110px] lg:mx-[50px]", children: /* @__PURE__ */ jsx("div", { className: "flex z-[100] gap-10 justify-center min-w-[100px] lg:w-[950px] xl:w-[1050px]", children: renderBooks(bookCount.xl) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center z-[99]", children: /* @__PURE__ */ jsx("img", { className: "z-[99] min-h-[100px] -mt-[20px] sm:ml-[20px] sm:pr-[40px] sm:w-[700px] lg:w-[995px] xl:w-[1270px]", src: bgShelf }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Footer, {}) })
    ] })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function ImagesComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center my-20", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col" }) });
}
function Images$1() {
  const { language } = useLanguage();
  const title = language === "en" ? "Bendrey - Images" : "बेंद्रे - प्रतिमा";
  const description = "Images Page";
  const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India, Images";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeadComponent, { title, description, keywords }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen justify-between bg-mainBg", children: [
      /* @__PURE__ */ jsx(Header, { title: language === "en" ? "Images" : "प्रतिमा" }),
      /* @__PURE__ */ jsx(ImagesComponent, {}),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Images$1
}, Symbol.toStringTag, { value: "Module" }));
function Images() {
  const { language } = useLanguage();
  const title = language === "en" ? "Bendrey - Videos" : "बेंद्रे - व्हिडिओ";
  const description = "Videos Page";
  const keywords = "Vasudeo, Sitaram, Bendrey, Books, Historian, Author, India, Videos";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeadComponent, { title, description, keywords }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen justify-between bg-mainBg", children: [
      /* @__PURE__ */ jsx(Header, { title: language === "en" ? "Videos" : "व्हिडिओ" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 my-20", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/21pADQ5gWVw", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/hJmogEsHaDA", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/IIQ-vMJvTGQ", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/IbAFm1zPqfQ", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/jrTsKHrUG4Q", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/4I9umNITLkc", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/ttFS_BwZ55c", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/ezByp7NH1rk", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/IvdRdbHulKo", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/m4SlbjOwthY", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/8ktBDTHQ4ok", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/pZsVvyjej2c", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/Tj6k7l3NE28", frameborder: "0", allowfullscreen: true }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/K5rdFhS7CJ4", frameborder: "0", allowfullscreen: true }) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Images
}, Symbol.toStringTag, { value: "Module" }));
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
createInertiaApp({
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Articles.jsx": __vite_glob_0_0, "./Pages/Bendrey.jsx": __vite_glob_0_1, "./Pages/Book.jsx": __vite_glob_0_2, "./Pages/Books.jsx": __vite_glob_0_3, "./Pages/Contact.jsx": __vite_glob_0_4, "./Pages/Home.jsx": __vite_glob_0_5, "./Pages/Images.jsx": __vite_glob_0_6, "./Pages/Videos.jsx": __vite_glob_0_7 });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(ChakraProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) }) })
    );
  }
});
