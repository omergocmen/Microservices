import { Button } from "primereact/button";
import React, { Fragment, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";
import JwtHelper from "../helpers/jwtHelper";
import Cart from "../pages/cart/cart";
import { Menu, Transition } from "@headlessui/react";
import LinkButton from "../shared/components/linkButton";
import BaseButton from "../shared/components/baseButton";

export default function Navbar() {
    const isAuthentication = new JwtHelper().verifyAccessToken();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("userToken");
        navigate("/login");
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const items = [{ label: "Siperişlerim" }, { label: "Çıkış Yap" }];

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
                                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/home">
                                        Ana Sayfa
                                    </Link>
                                </li>
                                <li>
                                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/home/courses">
                                        Eğitim İçerikleri
                                    </Link>
                                </li>
                                <li>
                                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/home/contact">
                                        İletişim
                                    </Link>
                                </li>
                                <li>
                                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/home/aboutus">
                                        Hakkımızda
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl">Solid Learn</p>
                    </div>
                    <div className="order-2 md:order-3 flex items-center" id="nav-content">
                        {isAuthentication ? (
                            <>
                                <Cart />
                                <div className="mx-10">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="block w-full min-w-[50px] border-black border-2 py-2 rounded-xl font-semibold my-2">
                                                <i className=" pi pi-ellipsis-h"></i>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/home/orders"
                                                                className={classNames(
                                                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Siparişlerim
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={()=>logout()}
                                                                className={classNames(
                                                                    active ? "text-left w-full bg-gray-100 text-gray-900" : "text-gray-700",
                                                                    "text-left block w-full px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Çıkış Yap
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </>
                        ) : (
                            <div className="mx-10">
                                <LinkButton href="/login" text="Giriş Yap" />
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    );
}
