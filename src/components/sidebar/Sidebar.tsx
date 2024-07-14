import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { SiTicktick } from "react-icons/si";
import { IoCube, IoGridOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { MdFilterList } from "react-icons/md";
import { PiListLight } from "react-icons/pi";
import { getAllImages } from "../../services/images";

export type Image = {
  imageUrl: string;
  tileUrl: string;
  name: string;
  size: {
    height: number;
    width: number;
  };
  __v: number;
  _id: string;
};

export interface SidebarProps {
  onClick: (any: Image) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClick }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedTile, setSelectedTile] = useState<string>("")

  useEffect(() => {
    const fetchImages = async () => {
      const response = await getAllImages();
      setImages(response.data);
    };

    fetchImages();
  }, []);

  const handleClick = (image: Image) => {
    setSelectedTile(image._id)
    onClick(image);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.png" alt="logo" />
      </div>
      <div className={styles.btnsContainer}>
        <button>
          <IoCube />
          Floors
        </button>
        <button>
          <SiTicktick />
          Walls
        </button>
      </div>
      <div className={styles.actionBtns}>
        <div className={styles.action}>
          <GoSearch />
        </div>
        <div className={styles.action}>
          <MdFilterList />
          Filter
        </div>
        <div className={styles.action}>
          <div className={styles.item}>
            <PiListLight />
          </div>
          <div className={styles.item}>
            <IoGridOutline />
          </div>
        </div>
      </div>
      <div className={styles.tileContainer}>
        {images.map((image) => (
          <div
            className={`${styles.tile} ${image._id === selectedTile ? styles.selected : ""}`}
            key={image._id}
            onClick={() => handleClick(image)}

          >
            <div className={styles.tileImageContainer}>
              <img src={image.tileUrl} alt={image.name} />
            </div>
            <div>
              <h5>{image.name}</h5>
              <p>
                Size: {image.size.width}mm x {image.size.height}mm
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
