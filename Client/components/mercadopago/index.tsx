/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

'use client'

import { formatNumber } from "./utils/formatNumber";
import { MercadoPagoButton } from "./components/MercadoPagoButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import Product from "./Mock/product";
import styles from "./components/MercadoPagoButton/styles.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { PiPlantDuotone } from "react-icons/pi"

interface NotificationType {
  isOpen: boolean;
  type: "approved" | "failure" | null;
  content: string;
}



export default function Sell() {

  const [notification, setNotification] = useState<NotificationType>({
    isOpen: false,
    type: null,
    content: "",
  });
  const dataParcel = useAppSelector(state => state.parcelas.parcelaData);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");

    const info = Product(dataParcel);


    if (status === "approved") {
      setNotification({
        content: "Pago aprobado!",
        isOpen: true,
        type: "approved",
      });
    } else if (status === "failure") {
      setNotification({
        content: "Pago fallido!",
        isOpen: true,
        type: "failure",
      });
    }

    setTimeout(() => {
      setNotification({
        isOpen: false,
        type: null,
        content: "",
      });
    }, 5000);
  }, []);

  return (
    <main className={styles.container}>
      <div className="flex justify-evenly">
        <img
          src={dataParcel.image[0]}
          alt={dataParcel.name}
          className="w-1/2 h-1/2 bg-slate-300 m-2 box-border object-cover rounded-3xl flex justify-center items-center" />
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl">{dataParcel.name}</h1>
            <h2 className="text-2xl">${Number(dataParcel.price)} CLP</h2>
          </div>
          {/* <div className={styles.center}>
            <span>Descripción:</span>

            <ul>
              {dataParcel.description}
            </ul>
          </div> */}

          {/* <div> */}
          {/* <MercadoPagoButton product={dataParcel} /> */}

          {/* </div> */}
        </div>
        <div className="flex items-center justify-center w-10 my-2 h-10 rounded-full bg-[#b7fcf6] ">
          <PiPlantDuotone className="h-[2rem] w-[2rem] text-[#51a8a1]" />
        </div>
      </div>

      {notification.isOpen && (
        <div className={styles.notification}>
          <div
            className={styles.iconContainer}
            style={{
              backgroundColor:
                notification.type === "approved" ? "#00cc99" : "#ee4646",
            }}
          >
            <Image
              src={`/assets/${notification.type}.svg`}
              alt={notification.type!}
              width={25}
              height={25}
            />
          </div>

          <p>{notification.content}</p>
        </div>
      )}
    </main>
  );
}
