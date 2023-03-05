import { Rating } from "primereact/rating";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import BaseButton from "../../shared/components/baseButton";
import { getBasket, paymentBasket, saveBasket } from "../../store/basketSlice";
import { Knob } from "primereact/knob";
import { useForm } from "react-hook-form";
import TextboxFor from "../../shared/form/textboxFor";
import LabelFor from "../../shared/form/labelFor";
import ValidationFor from "../../shared/form/validationFor";
import { createOrder } from "../../store/orderSlice";
import { deleteDiscount, getDiscountByCode } from "../../store/discountSlice";

export default function CartDetails() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {
        register: registercode,
        handleSubmit: handleSubmitcode,
        formState: { errors: errorscode },
    } = useForm();

    const [priceDiscountRate, setPriceDiscountRate] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const basket = useSelector((state) => state.basket.basket);
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState("invisible");

    useEffect(() => {
        dispatch(getBasket());
        if(basket?.basketItems){
            setTotalPrice(basket.basketItems.reduce((n, { price }) => n + price, 0));
        }
    }, [JSON.stringify(basket)]);

    const dispatch = useDispatch();

    const clearBasket = () => {
        if (basket.basketItems.length <= 0) {
            toast.warning("Sepette Temizlenecek Ürün Yok");
            return;
        }
        const newBasket = {
            basketItems: [],
            discountRate: basket.discountRate,
            discountCode: basket.discountCode,
            userId: basket.userId,
        };
        dispatch(saveBasket(newBasket));
    };

    const deleteBasketItem = (item) => {
        const newBasket = {
            basketItems: basket.basketItems.filter((i) => i.courseId !== item.courseId),
            discountRate: basket.discountRate,
            discountCode: basket.discountCode,
            userId: basket.userId,
        };
        dispatch(saveBasket(newBasket));
    };

    const payment = (data) => {
        return new Promise((resolve, reject) => {
            setVisible("visible");
            const timer = setInterval(() => {
                setValue((value) => {
                    if (value == 100) {
                        setVisible("invisible");
                        clearInterval(timer);
                        resolve(true);
                        return 0;
                    }
                    const diff = parseInt(Math.random() * 10);
                    return Math.min(value + diff, 100);
                });
            }, 150);
        });
    };

    const onSubmit = (data) => {
        if (basket.basketItems.length == 0) {
            toast.warning("Sepette Ürün Bulunamadı");
            return 0;
        }
        data.order = {
            buyerId: "bf7557b6-3e8b-48f8-b953-2552f23bc6e3",
            orderItems: basket.basketItems.map((item) => {
                return {
                    productId: item.courseId,
                    productName: item.courseName,
                    pictureUrl: item.pictureUrl,
                    price: item.price,
                };
            }),
            address: {
                province: "string",
                district: "string",
                street: "string",
                zipCode: "string",
                line: "string",
            },
        };
        data.totalPrice = totalPrice-priceDiscountRate+35;
        dispatch(createOrder(data));
        payment().then(() => {
            const newBasket = {
                basketItems: [],
                discountRate: basket.discountRate,
                discountCode: basket.discountCode,
                userId: data.order.buyerId,
            };
            setPriceDiscountRate(0)
            dispatch(paymentBasket(newBasket));
        });
    };

    const codeOnSubmit = (data) => {
        dispatch(getDiscountByCode(data.code)).then((response) => {
            if (response?.payload?.data) {
                const discRate = response.payload.data.rate
                const discValue=((totalPrice*discRate)/100)
                setPriceDiscountRate(priceDiscountRate+discValue);
                toast.success("İndirim Uygulandı");
                dispatch(deleteDiscount(response.payload.data.id))
            }else{
                toast.info("Böyle bir indirim kodu bulunamadı");
            }
        })
    };

    return (
        <>
            <div className="m-20 border bg-rose-700 shadow">
                <div className={visible + " h-screen fixed top-0 left-0 z-10 bg-black w-full opacity-70"} id="modal">
                    <div className="w-[100px] mt-96 mx-auto">
                        <Knob value={value} onChange={(e) => setValue(e.value)} min={0} max={100} />
                    </div>
                </div>
                <div className="w-full h-full bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden">
                    <div className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition duration-700" id="checkout">
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div
                                className="relative lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                                id="scroll"
                            >
                                <h1 className="text-4xl font-black leading-10 text-gray-800 pt-3">Alışverin Sepetin</h1>
                                {basket?.basketItems?.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="md:flex border border-2 p-10 rounded-xl items-center mt-4 border-t border-gray-200"
                                        >
                                            <div className="w-1/4">
                                                <img
                                                    src={"http://localhost:5012/photos/" + `${item.pictureUrl}`}
                                                    alt={item.courseName}
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
                                                <button onClick={() => deleteBasketItem(item)} className="pi pi-times" />
                                            </div>
                                        </div>
                                    );
                                })}
                                <BaseButton onClick={() => clearBasket()} className="absolute bottom-0" text="Sepeti Temizle" />
                            </div>
                            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                <div className="flex flex-col md:h-screen px-14 py-10 justify-between overflow-y-auto">
                                    <div>
                                        <h1 className="text-4xl font-black leading-10 text-gray-800 pt-3">Sepet Tutarı</h1>
                                        <div className="flex items-center justify-between pt-10 m-2">
                                            <p className="text-base leading-none text-gray-800">Ham Toplam Değer</p>
                                            <p className="text-base leading-none text-gray-800">
                                                {basket?.basketItems?.reduce((n, { price }) => n + price, 0)}$
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="flex items-center justify-between pt-5 m-2">
                                            <p className="text-base leading-none text-gray-800">Uygulanan İndirim Kodu Tutarı</p>
                                            <p className="text-base leading-none text-gray-800">{priceDiscountRate}$</p>
                                        </div>
                                        <hr />
                                        <div className="flex items-center justify-between pt-5 m-2">
                                            <p className="text-base leading-none text-gray-800">Komisyon Ücreti</p>
                                            <p className="text-base leading-none text-gray-800">35$</p>
                                        </div>
                                        <hr />
                                        <div className="flex items-center justify-between pt-5 mx-2">
                                            <p className="text-base leading-none text-gray-800">Toplam</p>
                                            <p className="text-base leading-none text-gray-800">
                                                {totalPrice - priceDiscountRate + 35}$
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <form onSubmit={handleSubmitcode(codeOnSubmit)}>
                                            <div>
                                                <div className="flex justify-between text-left">
                                                    <fieldset className="w-3/5">
                                                        <LabelFor name="code" errors={errorscode}>
                                                            İndirim Kodu
                                                        </LabelFor>
                                                        <TextboxFor
                                                            placeholder="BAHAR10"
                                                            type="code"
                                                            register={registercode("code", { required: true })}
                                                            errors={errorscode}
                                                        />
                                                        <ValidationFor
                                                            name="code"
                                                            title="İndirim Kodu alanını boş bırakmayınız."
                                                            errors={errorscode}
                                                        />
                                                    </fieldset>
                                                    <fieldset className="mt-3">
                                                        <BaseButton text="İndirim Uygula" />
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <div className="text-left">
                                                    <fieldset className="flex flex-col">
                                                        <LabelFor name="cardNumber" errors={errors}>
                                                            Kart Numarası
                                                        </LabelFor>
                                                        <TextboxFor
                                                            placeholder="0000/0000/0000/0000"
                                                            type="cardNumber"
                                                            register={register("cardNumber", { required: true })}
                                                            errors={errors}
                                                        />
                                                        <ValidationFor
                                                            name="cardNumber"
                                                            title="Kart Numarası alanını boş bırakmayınız."
                                                            errors={errors}
                                                        />
                                                    </fieldset>
                                                </div>
                                                <div className="flex justify-between text-left">
                                                    <fieldset className="w-3/5">
                                                        <LabelFor name="cardName" errors={errors}>
                                                            Kart Üzerindeki İsim
                                                        </LabelFor>
                                                        <TextboxFor
                                                            placeholder="Jhon Doe"
                                                            type="cardName"
                                                            register={register("cardName", { required: true })}
                                                            errors={errors}
                                                        />
                                                        <ValidationFor
                                                            name="cardName"
                                                            title="Kart Üzerindeki İsim alanını boş bırakmayınız."
                                                            errors={errors}
                                                        />
                                                    </fieldset>
                                                    <fieldset className="w-1/5">
                                                        <LabelFor name="cvv" errors={errors}>
                                                            Cvv
                                                        </LabelFor>
                                                        <TextboxFor
                                                            placeholder="000"
                                                            type="cvv"
                                                            register={register("cvv", { required: true })}
                                                            errors={errors}
                                                        />
                                                        <ValidationFor name="cvv" title="Cvv alanını boş bırakmayınız." errors={errors} />
                                                    </fieldset>
                                                </div>
                                                <div className="flex justify-between text-left">
                                                    <fieldset className="w-3/5">
                                                        <LabelFor name="totalPrice" errors={errors}>
                                                            Kart Tipi
                                                        </LabelFor>
                                                        <TextboxFor
                                                            placeholder="Banka/Kredi"
                                                            type="totalPrice"
                                                            register={register("totalPrice", { required: true })}
                                                            errors={errors}
                                                        />
                                                        <ValidationFor
                                                            name="totalPrice"
                                                            title="Kart Tipi alanını boş bırakmayınız."
                                                            errors={errors}
                                                        />
                                                    </fieldset>
                                                    <fieldset className="w-1/5">
                                                        <LabelFor name="expiration" errors={errors}>
                                                            Son Kullanım
                                                        </LabelFor>
                                                        <TextboxFor
                                                            placeholder="00/00"
                                                            type="expiration"
                                                            register={register("expiration", { required: true })}
                                                            errors={errors}
                                                        />
                                                        <ValidationFor
                                                            name="expiration"
                                                            title="Son Kullanım Tarihi alanını boş bırakmayınız."
                                                            errors={errors}
                                                        />
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div>
                                                <BaseButton text="Ödeme Yap" />
                                            </div>
                                        </form>
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
