import React, { useEffect } from 'react'
import loginimg from "../../assets/images/login3.jpg";
import { useForm } from "react-hook-form";
import TextboxFor from '../../shared/form/textboxFor';
import ValidationFor from "../../shared/form/validationFor";
import LabelFor from "../../shared/form/labelFor";
import { login } from '../../store/authSlice';
import BaseButton from '../../shared/components/baseButton';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import JwtHelper from '../../helpers/jwtHelper';

export default function Login() {
    const isAuthentication = new JwtHelper().verifyAccessToken();

    const navigate = useNavigate();

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
            toast.success("Giriş Başarılı");
            localStorage.setItem("userToken",response.data.access_token);   
            navigate("/home")
        }).catch(err => {
            toast.error("Giriş Yapılamadı İşlem Başarısız");
            console.log(err);
        })
    }

    useEffect(() => {
        if(isAuthentication){
            navigate("/home")
        }
    }, [JSON.stringify(isAuthentication)])

    return (
        <div className="h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr justify-around items-center hidden">
                <img width={"100%"} src={loginimg} alt="login image" />
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white w-[300px]" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-gray-800 font-bold text-3xl mb-5">Hoşgeldin :)</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Giriş Yap ve Hemen Eğitime Başla</p>
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
