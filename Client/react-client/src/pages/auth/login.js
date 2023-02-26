import React, { useEffect } from 'react'
import loginimg from "../../assets/images/login.jpg";
import { useForm } from "react-hook-form";
import TextboxFor from '../../shared/form/textboxFor';
import ValidationFor from "../../shared/form/validationFor";
import LabelFor from "../../shared/form/labelFor";
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import BaseButton from '../../shared/components/baseButton';


export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const body = new URLSearchParams(
            {
                "client_id": "WebMvcClientForUser",
                "client_secret": "secret",
                "grant_type": "password",
                "userName": data.email,
                "password": data.password
            }
        )
        login(body).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr justify-around items-center hidden">
                <img src={loginimg} alt="login image" />
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white w-[300px]" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-gray-800 font-bold text-3xl mb-5">Hoşgeldin :)</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Giriş Yap ve Hemen Alışverişe Başla</p>
                    <div className='text-left'>
                        <fieldset className="flex flex-col">
                            <LabelFor name="email" errors={errors}>
                                E-Posta
                            </LabelFor>
                            <TextboxFor
                                placeholder="example@example.com"
                                type="email"
                                register={register("email", { required: true })}
                                errors={errors}
                            />
                            <ValidationFor
                                name="email"
                                title="E-posta alanını boş bırakmayınız."
                                errors={errors}
                            />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <LabelFor name="password" errors={errors}>
                                Şifre
                            </LabelFor>
                            <TextboxFor
                                placeholder="example"
                                type="password"
                                register={register("password", { required: true })}
                                errors={errors}
                            />
                            <ValidationFor
                                name="password"
                                title="Şifre alanını boş bırakmayınız."
                                errors={errors}
                            />
                        </fieldset>
                    </div>
                    <BaseButton text={"Giriş Yap"}/>
                    <span className="text-sm ml-2  hover:text-blue-500 cursor-pointer">Şifreni mi unuttun?</span>
                </form>
            </div>
        </div>
    );
}
