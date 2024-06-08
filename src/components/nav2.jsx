import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import logo2 from "../assets/logoIcon.png";
import {
  Logo,
  Logo2,
  NavWrapper,
  NavWrapperLink,
  NavWrapperLinkIcon,
  StyledNavBtn,
  StyledNavText,
} from "../styles/index.styled";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const link = [
    { page: "Home", href: "/" },
    { page: "Services", href: "/services" },
    { page: "About", href: "/about" },
    { page: "Blogs", href: "/blog" },
    { page: "Books", href: "/book" },
    { page: "Subscription", href: "/subs" },
    { page: "Community", href: "/community" },
  ];

  return (
    <>
      <NavWrapper id="nav" className="px-12 py-2 drop-shadow-md">
        <div>
          <Logo className="w-[11rem]" src={logo} />
          <Logo2 className="" src={logo2} alt="" />
        </div>
        {active ? (
          <IoCloseOutline
            className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
            onClick={() => setActive(!active)}
          />
        ) : (
          <CiMenuFries
            className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
            onClick={() => setActive(!active)}
          />
        )}

        <NavWrapperLink active={active}>
          {link.map((link) => (
            <StyledNavText
              key={link.page}
              to={link.href}
              className={"text-base font-semibold"}
            >
              {link.page}
            </StyledNavText>
          ))}
        </NavWrapperLink>
        <NavWrapperLinkIcon active={active}>
          <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
            <StyledNavBtn className="w-[11rem] py-5 px-7 mx-auto md:my-6 xx:my-3 sm:w-[13rem] sm:h-[4.5rem] bg-extraClr h-[2.5rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
              CONTACT US
            </StyledNavBtn>
          </Link>
        </NavWrapperLinkIcon>
      </NavWrapper>
    </>
  );
};

export default NavBar;
