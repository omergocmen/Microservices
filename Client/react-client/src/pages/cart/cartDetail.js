import { Rating } from "primereact/rating";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import BaseButton from "../../shared/components/baseButton";
import { deleteBasket, getBasket, saveBasket } from "../../store/basketSlice";

export default function CartDetails() {
    const basket = useSelector((state) => state.basket.basket);

    useEffect(() => {
        dispatch(getBasket());
    }, []);

    const dispatch = useDispatch();

    const clearBasket = () => {
      if(basket.basketItems.length<=0){
        toast.warning("Sepette Temizlenecek Ürün Yok");
        return
      }
        const newBasket = {
            basketItems: [],
            discountRate: basket.discountRate,
            discountCode: basket.discountCode,
            userId: basket.userId,
        };
        dispatch(saveBasket(newBasket));
    };

    const deleteBasketItem=(item)=>{
      const newBasket = {
        basketItems: basket.basketItems.filter(
          (i) => i.courseId !== item.courseId
        ),
        discountRate: basket.discountRate,
        discountCode: basket.discountCode,
        userId: basket.userId,
      };
      dispatch(saveBasket(newBasket));
    }

    return (
        <>
            <div className="m-20 border shadow">
                <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden">
                    <div className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition duration-700" id="checkout">
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div
                                className="relative lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                                id="scroll"
                            >
                                <h1 className="text-4xl font-black leading-10 text-gray-800 pt-3">Alışverin Sepetin</h1>
                                {basket?.basketItems?.map((item, index) => {
                                    return (
                                        <div className="md:flex border border-2 p-10 rounded-xl items-center mt-4 border-t border-gray-200">
                                            <div className="w-1/4">
                                                <img
                                                    src={"http://localhost:5012/photos/" + `${item.pictureUrl}`}
                                                    alt
                                                    className="w-[250px] h-auto object-center object-cover"
                                                />
                                            </div>
                                            <div className="md:pl-3 md:w-3/4 text-left">
                                                <h1 className="leading-3 text-gray-800 md:pt-0 pt-4">
                                                    <b>{item.courseName}</b>
                                                </h1>
                                                <div className="my-2">
                                                    <Rating value={4} readOnly cancel={false} />
                                                    <i className="text-sm underline">Ömer Göçmen</i>
                                                </div>
                                                <p className="leading-3 text-gray-600 ">{item.price}$</p>
                                            </div>
                                            <div>
                                              <button onClick={()=>deleteBasketItem(item)} className="pi pi-times"/>
                                            </div>
                                        </div>
                                    );
                                })}
                                <BaseButton onClick={() => clearBasket()} className="absolute bottom-0" text="Sepeti Temizle" />
                            </div>
                            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                    <div>
                                        <h1 className="text-4xl font-black leading-10 text-gray-800 pt-3">Sepet Tutarı</h1>
                                        <div className="flex items-center justify-between pt-16 m-2">
                                            <p className="text-base leading-none text-gray-800">Ham Toplam Değer</p>
                                            <p className="text-base leading-none text-gray-800">
                                                {basket?.basketItems?.reduce((n, { price }) => n + price, 0)}$
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="flex items-center justify-between pt-5 m-2">
                                            <p className="text-base leading-none text-gray-800">Kargo</p>
                                            <p className="text-base leading-none text-gray-800">30$</p>
                                        </div>
                                        <hr />
                                        <div className="flex items-center justify-between pt-5 m-2">
                                            <p className="text-base leading-none text-gray-800">Komisyon Ücreti</p>
                                            <p className="text-base leading-none text-gray-800">35$</p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-gray-800">Toplam</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                                                {basket?.basketItems?.reduce((n, { price }) => n + price, 0) + 65}$
                                            </p>
                                        </div>
                                        <BaseButton text="Ödeme Yap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
