import React, { useEffect, useState } from "react";
import { Badge } from "primereact/badge";
import LinkButton from "../../shared/components/linkButton";
import { Rating } from "primereact/rating";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basketSlice";
import { Link } from "react-router-dom";
export default function Cart() {
    const [dropdownOpen, setdropdownOpen] = useState(false);

    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket.basket);
    useEffect(() => {
        dispatch(getBasket());
    }, []);

    return (
        <div>
            <button
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
            >
                <i className="pi pi-shopping-cart p-overlay-badge" style={{ fontSize: "2rem" }}>
                    <Badge value={basket?.basketItems?.length}></Badge>
                </i>
            </button>
            {dropdownOpen && (
                <div className="bg-white text-base absolute z-10 list-none divide-y divide-gray-100 rounded shadow w-[350px] max-w-[370px]">
                    <ul className="py-1 border border-2 rounded">
                        {basket?.basketItems?.map((item, index) => {
                            return (
                                <>
                                    <li key={index}>
                                        <div className="flex flex-column xl:flex-row xl:align-items-start p-3">
                                            <img
                                                className="w-9 max-w-[115px] min-h-[100px]"
                                                src={"http://localhost:5012/photos/" + `${item.pictureUrl}`}
                                                alt={item.courseName}
                                            />
                                            <div className="text-left ml-4 flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                                <div className="flex flex-column align-items-center sm:align-items-start gap-y-2">
                                                    <p className="font-bold text-900">{item.courseName}</p>
                                                    <div>
                                                        <div>
                                                            <Rating value={4} readOnly cancel={false} />
                                                            <i className="text-sm underline">Ömer Göçmen</i>
                                                        </div>
                                                        <span className="font-semibold">{item.price + "$"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                </>
                            );
                        })}
                        {basket?.basketItems.length != 0 ? (
                            <>
                                <li>
                                    <div className="justify-between px-10 flex flex-column xl:flex-row xl:align-items-start p-3">
                                        <p>Toplam Tutar</p>
                                        <p>{basket?.basketItems?.reduce((n, { price }) => n + price, 0)}$</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="justify-between px-10 flex flex-column xl:flex-row xl:align-items-start">
                                        <LinkButton href={"cartdetail"} text="Ödemeye Geç" />
                                    </div>
                                </li>
                            </>
                        ) : (
                            <>
                                <div className="xl:flex-row xl:align-items-start p-3">
                                    <p className="mb-4 text-xl">Henüz Ürün Eklenmedi</p>
                                    <LinkButton href={"/home/courses"} text={"Hemen Başla"}></LinkButton>
                                </div>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
