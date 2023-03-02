import { Rating } from "primereact/rating";
import React from "react";
import BaseButton from "../../shared/components/baseButton";

export default function CourseDetail() {
  return (
    <section class="text-gray-700 body-font shadow-lg mt-10 overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="justify-between lg:w-4/5 mx-auto flex flex-col md:flex-row">
          <img
            alt="ecommerce"
            class="w-2/5 object-cover object-center rounded border border-gray-200"
            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
          />
          <div class="w-2/5 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">Ömer Göçmen</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium my-4">.Net Core ile Uygulama Geliştirme</h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <span class="text-gray-600 ml-3">1643 Değerlendirme</span>
              </span>
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <Rating value={3} readOnly cancel={false} />
              </span>
            </div>
            <p class="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
              cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra
              jean shorts keytar banjo tattooed umami cardigan.
            </p>
            <div className="grid gap-y-8"> 
            <h1 class="text-gray-900 text-center text-xl title-font font-medium mt-8">Eğitimde Neler Öğreneceksin</h1>
              <div className="flex text-left">
                <i className="pi pi-check" style={{ fontSize: "2rem" }} />
                <p className="mx-4">
                  Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
              </div>
              <div className="flex text-left">
                <i className="pi pi-check" style={{ fontSize: "2rem" }} />
                <p className="mx-4">
                  Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
              </div>
              <div className="flex text-left">
                <i className="pi pi-check" style={{ fontSize: "2rem" }} />
                <p className="mx-4">
                  Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
              </div>
            </div>
            <div class="flex">
              <BaseButton text={"Sepete Ekle"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
