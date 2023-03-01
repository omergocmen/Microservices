import React, { useState } from "react";
import { Badge } from "primereact/badge";
import Basebutton from "../../shared/components/baseButton";
import { Rating } from "primereact/rating";

export default function Cart() {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setdropdownOpen(!dropdownOpen)}
        className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
      >
        <i className="pi pi-shopping-cart p-overlay-badge" style={{ fontSize: "2rem" }}>
          <Badge value="2"></Badge>
        </i>
      </button>
      {dropdownOpen && (
        <div className="bg-white text-base absolute z-10 list-none divide-y divide-gray-100 rounded shadow w-[370px] max-w-[370px]">
          <ul className="py-1 border border-2 rounded">
            <li>
              <div className="flex flex-column xl:flex-row xl:align-items-start p-3">
                <img
                  className="w-9 max-w-[115px] min-h-[100px]"
                  src={"https://kockerim.com/wp-content/uploads/2022/11/rabbitmq.png"}
                  alt=".net core kursu"
                />
                <div className="text-left ml-4 flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div className="flex flex-column align-items-center sm:align-items-start gap-y-2">
                    <p className="font-bold text-900">RabbitMQ Masstransit Öğrenme Kursu</p>
                    <div>
                      <div>
                        <Rating value={4} readOnly cancel={false}/>
                        <i className="text-sm underline">Ömer Göçmen</i>
                      </div>
                        <span className="font-semibold">50$</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <hr/>
            <li>
              <div className="flex flex-column xl:flex-row xl:align-items-start p-3">
                <img
                  className="w-9 max-w-[115px] min-h-[100px]"
                  src={"https://miro.medium.com/max/1400/0*n5APaWlshOK-IPNs.jpg"}
                  alt=".net core kursu"
                />
                <div className="text-left ml-4 flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div className="flex flex-column align-items-center sm:align-items-start">
                    <p className="font-bold text-900 break-all">.Net Core Kurs</p>
                    <div>
                      Ömer Göçmen
                      <div>
                        <Rating value={2} readOnly cancel={false}/>
                      </div>
                        <span className="font-semibold">100$</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <hr/>
            <li>
              <div className="flex flex-column xl:flex-row xl:align-items-start p-3">
                <img
                  className="w-9 max-w-[115px] min-h-[115px]"
                  src={"https://i.ytimg.com/vi/VESPItwumjw/sddefault.jpg"}
                  alt=".net core kursu"
                />
                <div className="text-left ml-4 flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div className="flex flex-column align-items-center sm:align-items-start">
                    <p className="font-bold text-900">.Net Core Kursu</p>
                    <div>
                      Ömer Göçmen
                      <div>
                        <Rating value={3} readOnly cancel={false}/>
                      </div>
                        <span className="font-semibold">125$</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <hr/>
            <li>
              <div className="justify-between px-10 flex flex-column xl:flex-row xl:align-items-start p-3">
                <p>Toplam Tutar</p>
                <p>275$</p>
              </div>
            </li>
            <li>
              <div className="justify-between px-10 flex flex-column xl:flex-row xl:align-items-start">
              <Basebutton text="Ödemeye Geç"/> 
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
