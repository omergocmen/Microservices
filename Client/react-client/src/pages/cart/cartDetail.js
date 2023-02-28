import React, { useState } from "react";
import BaseButton from "../../shared/components/baseButton";

export default function CartDetails() {
  return (
    <>
      <div className="m-20 border shadow">
        <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden">
          <div className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition duration-700" id="checkout">
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
              >
                <h1 className="text-4xl font-black leading-10 text-gray-800 pt-3">Alışverin Sepetin</h1>
                <div className="md:flex border border-2 p-10 rounded-xl items-center mt-14 border-t border-gray-200">
                  <div className="w-1/4">
                    <img
                      src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                      alt
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-3/4 text-left">
                    <h1 className="leading-3 text-gray-800 md:pt-0 pt-4">
                      <b>RF293</b>
                    </h1>
                    <p className="mt-2 leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                    <p className="leading-3 text-gray-600 py-4">Color: Black</p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <h1 className="text-4xl font-black leading-10 text-gray-800 pt-3">Sepet Tutarı</h1>
                    <div className="flex items-center justify-between pt-16 m-2">
                      <p className="text-base leading-none text-gray-800">Ham Toplam Değer</p>
                      <p className="text-base leading-none text-gray-800">$9,000</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between pt-5 m-2">
                      <p className="text-base leading-none text-gray-800">Kargo</p>
                      <p className="text-base leading-none text-gray-800">$30</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between pt-5 m-2">
                      <p className="text-base leading-none text-gray-800">Kdv</p>
                      <p className="text-base leading-none text-gray-800">$35</p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">Toplam</p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                    </div>
                    <BaseButton text="Ödeme Yap"/>
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
