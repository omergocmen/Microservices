import React from "react";

export default function Header({imageUrl}) {
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <span id="blackOverlay" className="w-1/2 h-full absolute opacity-25 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex ">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12 text-white">
              <h1 className="font-semibold text-5xl">Aradığın Tüm Eğitim İçeriklerini Burada Bulacaksın Hadi Hemen Eğitime Başla </h1>
              <p className="font-semibold mt-4 text-lg">En kaliteli eğitim içeriklerini en uygun fiyatlarda bulabilirsin.</p>
              <p className="font-semibold mt-4 text-lg">Haydi sen de sana uygun olabilecek Eğtimleri filtrele, bul ve hemen satın al.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }}>
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
  );
}
