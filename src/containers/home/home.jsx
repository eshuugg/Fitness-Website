import HomeBanner from "./homeBanner/homeBanner";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Pricing from "./pricing/pricing";
import Carousel from "../../components/carousel/carousel";
import BmiCalculator from "../../components/bmiCalculator/bmiCalculator";
import Subfooter from "./subFooter/subfooter";

const Home = () => {
  const images = [
    "https://www.pngpix.com/wp-content/uploads/2016/11/PNGPIX-COM-Men-Fitness-PNG-Transparent-Image.png",
    "https://freepngimg.com/thumb/fitness/30153-3-fitness-photos.png",
    "https://freepngimg.com/thumb/fitness/30153-3-fitness-photos.png",
    "https://www.beautymuscle.net/wp-content/uploads/2014/09/alicia-coates-14113663134gnk8.png",
    "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Men-Fitness-PNG-Transparent-Image-1.png",
    "https://t.eu1.jwwb.nl/W1571029/EaOvLemEdXJvEqf5vFLrhUwBAXw=/0x8:900x1151/341x433/f.eu1.jwwb.nl/public/w/p/f/temp-zftgzvriofpimzaendtx/y8e5tp/hot_boy_png_by_anime1991-d5n6gfm-1.png",
  ];
  const img2 = [
    "https://wallpapertag.com/wallpaper/full/0/6/8/122078-download-free-fitness-wallpaper-1920x1200-for-meizu.jpg",
    "https://cdn.wallpapersafari.com/82/25/bBCFyt.jpg",
    "https://www.boxinginsider.com/wp-content/uploads/2018/11/fitness-training-for-women.jpg",
    "http://watchfit.com/wp-content/uploads/2015/02/fitness-competition-diet_1.jpg",
    "https://cdn.wallpapersafari.com/28/31/VGsmh4.jpg",
  ];
  return (
    <>
      <HomeBanner />
      <Section1 />
      <Section2 />
      <Carousel data={img2} height={280} speed={8000} />
      <Carousel text data={images} />
      <Section3 />
      <Pricing />
      <BmiCalculator />
      <Subfooter />
    </>
  );
};

export default Home;
