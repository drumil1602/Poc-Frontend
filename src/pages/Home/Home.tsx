import React, { useState } from "react";
import styles from "./Home.module.scss";
import Sidebar, { Image } from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import Lottie from "react-lottie-player";
import loaderData from "../../Lottie/loaderData.json";

const Home: React.FC = () => {
  const [isLoading, setloading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("/room.jpg");

  const onClick = async (imageData: Image) => {
    setloading(true);
    try {
      //TODO logic here
      setImageSrc("/room.jpg");
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
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
