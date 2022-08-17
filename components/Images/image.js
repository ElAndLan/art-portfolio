import styles from "../../styles/Image.module.css";
import Link from "next/link";

const image = (props) => {

  const location = "/image/" + props.id;
  return (
    <div>
      <Link href={location}><img src={props.url} key={props.key} className={styles.image}/></Link>
    </div>
  );
};

export default image;
