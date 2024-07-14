import React from "react";
import styles from "./Main.module.scss";
// import {
//   TransformWrapper,
//   TransformComponent,
// } from "react-zoom-pan-pinch";

export interface MainProps {
  imageSrc: string;
}

const Main: React.FC<MainProps> = ({ imageSrc }) => {

  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        {/* <TransformWrapper
          wheel={{ step: 0.1 }}
          doubleClick={{ mode: "zoomIn" }}
        >
          {() => (
            <>
              <TransformComponent> */}
                <img
                  src={imageSrc || "/room.jpeg"}
                  alt=""
                  className={styles.image}
                />
              {/* </TransformComponent>
            </>
          )}
        </TransformWrapper> */}
      </div>
    </div>
  );
};

export default Main;
