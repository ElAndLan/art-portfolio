import { useRouter } from 'next/router';
import Image from "next/image";
import Data from "../../data";
import styles from "../../styles/ImageView.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const ImagePage = () => {
    const router = useRouter();
    const pid = router.query.image;
    const location = pid - 1;

    return (
        <div className={styles.container}>
        <Header />
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={Data[location].url}></Image>
            </div>
            <div className={styles.infoContainer}>
                The info of the picture will go here. So Date, Medium(Pencil&Paper, Ink,Digital) as well as a short
                description
            </div>
        <Footer />
        </div>
    )
}

export default ImagePage;