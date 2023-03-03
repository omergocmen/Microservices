import { Rating } from "primereact/rating";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BaseButton from "../../shared/components/baseButton";
import { getBasket, saveBasket } from "../../store/basketSlice";
import { getById } from "../../store/courseSlice";

export default function CourseDetail() {
    const dispatch = useDispatch();
    const params = useParams();

    const course = useSelector((state) => state.course.course);

    const basket = useSelector(state=>state.basket.basket)

    const examples = [
        {
            text: "İlk Ders",
            description: "Bu derste proje oluşturmayı öğreneceğiz",
        },
        {
            text: "ikinci Ders",
            description: "Bu derste gerekli kurulumları yapacağız",
        },
        {
            text: "Üçüncü Ders",
            description: "Bu derste içerik oluşturmayı öğreneceğiz",
        },
    ];

    useEffect(() => {
        dispatch(getById(params.id));
    }, []);

    const saveBasketClick = () => {
        dispatch(getBasket())
        if(basket){
            const newBasketItem={
                courseId:params.id,
                courseName:course.name,
                pictureUrl:course.pictureUrl,
                price:course.price,
                quantity:1
            }
            const newBasket={
                basketItems:[...basket.basketItems,newBasketItem],
                discountCode:"",
                discountRate:1,
                userId:"bf7557b6-3e8b-48f8-b953-2552f23bc6e3"
            }
            dispatch(saveBasket(newBasket))
        }
    };

    return (
        <section className="text-gray-700 body-font shadow-lg mt-10 overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="justify-between text-left lg:w-4/5 mx-auto flex flex-col md:flex-row">
                    <div className="w-3/5 bg-gray-100 px-20">
                        <img
                            alt="ecommerce"
                            className="h-[300px] min-w-[250px] circle object-center rounded-full mt-12 border border-gray-200"
                            src={"http://localhost:5012/photos/" + course.pictureUrl}
                        />
                        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                            <h1 className="text-gray-900 text-xl title-font font-medium">Örnek İçerikler</h1>
                            <div className="grid max-w-2xl mx-auto mt-3">
                                {examples.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                                            <div className="sm:mr-5">
                                                <div className="flex items-center justify-center w-12 h-12 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                                    <svg
                                                        className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                                        stroke="currentColor"
                                                        viewBox="0 0 52 52"
                                                    >
                                                        <polygon
                                                            strokeWidth="3"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="none"
                                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-xl font-semibold sm:text-base">{item.text}</p>
                                                <p className="text-sm text-gray-700">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Ömer Göçmen</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium my-4">{course.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span className="text-gray-600 ml-3">1643 Değerlendirme</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                <Rating value={3} readOnly cancel={false} />
                            </span>
                        </div>
                        <p className="leading-relaxed">{course.description}</p>
                        <div className="grid gap-y-8">
                            <h1 className="text-gray-900 text-center text-xl title-font font-medium mt-8">Eğitimde Neler Öğreneceksin</h1>
                            <div className="flex text-left">
                                <i className="pi pi-check" style={{ fontSize: "2rem" }} />
                                <p className="mx-4">
                                    Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts
                                    keytar banjo tattooed umami cardigan.
                                </p>
                            </div>
                            <div className="flex text-left">
                                <i className="pi pi-check" style={{ fontSize: "2rem" }} />
                                <p className="mx-4">
                                    Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts
                                    keytar banjo tattooed umami cardigan.
                                </p>
                            </div>
                            <div className="flex text-left">
                                <i className="pi pi-check" style={{ fontSize: "2rem" }} />
                                <p className="mx-4">
                                    Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts
                                    keytar banjo tattooed umami cardigan.
                                </p>
                            </div>
                            <div className="text-2xl font-bold text-left">
                                <p className="mx-4">{course.price + " $"}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <BaseButton onClick={saveBasketClick} text={"Sepete Ekle"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
