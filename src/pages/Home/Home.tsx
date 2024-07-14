import React, { useState } from "react";
import styles from "./Home.module.scss";
import Sidebar, { Image } from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import Lottie from "react-lottie-player";
import loaderData from "../../Lottie/loaderData.json";

const Home: React.FC = () => {
  const [isLoading, setloading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("/room.jpg");

  const onClick = (imageData: Image) => {
      setloading(true);
      setTimeout(() => {
        setImageSrc(imageData.imageUrl);
        setloading(false);
      }, 2500)
    
  };

  return (
    <div className={styles.home}>
      <Sidebar onClick={onClick} />
      <Main imageSrc={imageSrc} />
      {isLoading && (
        <div className={styles.loading}>
          <Lottie
            loop
            animationData={loaderData}
            play
            style={{ width: 180, height: 180 }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
