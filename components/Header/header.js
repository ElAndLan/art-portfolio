import Link from "next/link";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div id={styles.logo}>
        <h1> M.M.E Art</h1>
      </div>
      <ul>
        <li>
          <div className={styles.navBarItem} id={styles.home}>
            <Link href="/">Home </Link>
          </div>
        </li>
        <li>
          <div className={styles.navBarItem} id={styles.about}>
            <Link href="/about">About </Link>
          </div>
        </li>
        <li>
          <div className={styles.navBarItem} id={styles.contact}>
            <Link href="/contact">Contact </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
