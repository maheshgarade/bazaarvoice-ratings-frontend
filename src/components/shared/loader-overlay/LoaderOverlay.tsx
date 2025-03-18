import React from "react";
import Image from "next/image";
import styles from "./LoaderOverlay.module.css";

const LoaderOverlay = () => {
  return (
    <div className={styles.overlay}>
      <Image
        src="/beyond-blue-loader.gif"
        alt="Loading..."
        width={100}
        height={100}
        className={styles.loader}
      />
    </div>
  );
};

export default LoaderOverlay;
