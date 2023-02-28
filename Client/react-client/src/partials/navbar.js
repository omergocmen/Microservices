import React from "react";
import "../assets/css/navbar.css";
import Cart from "../pages/cart/cart";
import LinkButton from "../shared/components/linkButton";

export default function Navbar() {
  return (
    <div>
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
              <ul className="md:flex items-center gap-x-3 justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/home">
                    Ana Sayfa
                  </a>
                </li>
                <li>
                  <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/home/courses">
                    Eğitim İçerikleri
                  </a>
                </li>
                <li>
                  <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/home/contact">
                    İletişim
                  </a>
                </li>
                <li>
                  <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/home/aboutus">
                    Hakkımızda
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center">
            <p className="text-3xl">Solid Learn</p>
          </div>
          <div className="order-2 md:order-3 flex items-center" id="nav-content">
            {/* <a className="inline-block no-underline hover:text-black" href="#">
              <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <circle fill="none" cx="12" cy="7" r="3"></circle>
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
              </svg>
            </a> */}
            <Cart/>
            <div className="mx-10">
              <LinkButton href="/login" text="Giriş Yap" />
            </div>
          </div>
        </div>
      </nav>
      <hr/>
    </div>
  );
}
