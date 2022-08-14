import Image from "./image";
import styles from "../../styles/Images.module.css";

const Images = (props) => {
  return (
    <div className={styles.container}>
      {props.images.map((image) => (
        <Image
          key={image.id}
          id={image.id}
          url={image.url}
          title={image.title}
        />
      ))}
    </div>
  );
};

export default Images;
