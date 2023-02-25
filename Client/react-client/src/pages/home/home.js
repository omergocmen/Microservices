import React from "react";
import { Link } from "react-router-dom";
import Header from "../../partials/header";

export default function Home() {
  return (
    <>
      <main>
     <Header/>
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Hızlıca Ürünleri Bulma İmkanı</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Burada istediğin tüm ürünleri hızlı arama filtreleriyle bulabilir alternatifleriyle kıyaslayabilirsin
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Ücretsiz Kullanım</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Uygulamamızda dilediğin her alanı ücretsiz bir şekilde kullanabilirsin, önemli olan uygun ürünü bulabilmen
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verilerin Güvende</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Tüm verilerini büyük bir dikkat ile saklıyoruz, verilerin güncel yöntemler ile şifrelenerek saklanıyor. Güvenli ellerdesin :)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-building text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Şirketler Artık Kolayca Adayları Görüntüleyebilecek ve Kendine Uygun Adayları Seçebilecek
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  En hızlı ve kolay şekilde ücretsiz iş ilanını oluşturup sana en uygun adayları bulabilirsin ayrıca aday aramak için uzun uzun zaman
                  harcamana gerek yok Trink-is bunun için tasarlandı
                </p>
                <Link to="/jobAnnouncment/create" className="font-bold text-gray-800 mt-8">
                  Hemen İlan Oluştur
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current"></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever
                      happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
