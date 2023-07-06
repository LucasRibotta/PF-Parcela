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
      <div className={styles.productContainer}>
        <img src={dataParcel.image[0]} alt={dataParcel.name} className="w-[360px] h-[450px]" />


        <div className={styles.data}>
          <div className={styles.top}>
            <h2>{dataParcel.name}</h2>
            <h3>{Number(dataParcel.price)}</h3>
          </div>

          <div className={styles.center}>
            <span>Descripción:</span>

            <ul>
              {dataParcel.description}
            </ul>
          </div>

          <div>
            <MercadoPagoButton product={dataParcel} />
          </div>
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
