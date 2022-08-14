import styles from "../../styles/Image.module.css";

const image = (props) => {
  return (
    <div>
      <img src={props.url} key={props.key} className={styles.image} />
    </div>
  );
};

export default image;
