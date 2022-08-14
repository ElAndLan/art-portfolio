import Head from "next/head";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Images from "../components/Images/images";
import imagesData from "../data";

/*This will be where the main site is, where the art will be in a grid layout.
          ::TODO:: 
1) Set up the layout of the grid.
2) Create dummy data that the grid can access to test loading in the images.
3) 
*/

const Home = () => {
  return (
    <div>
      <Header />
      <Images images={imagesData} />
      <Footer />
    </div>
  );
};

export default Home;
