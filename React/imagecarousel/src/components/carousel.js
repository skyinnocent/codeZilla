import img1 from "./../assets/1.jpg";
import img2 from "./../assets/2.jpg";
import img3 from "./../assets/3.jpg";
import img4 from "./../assets/4.jpg";
import img5 from "./../assets/5.jpg";
import { useState } from "react";
import "./carousel.css";
const images = [
  { title: "This is an image", link: img1 },
  { title: "This is an image", link: img2 },
  { title: "This is an image", link: img3 },
  { title: "This is an image", link: img4 },
  { title: "This is an image", link: img5 },
];

const Carousel = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    count === images.length - 1 ? setCount(0) : setCount(count + 1);
  };
  const decreaseCount = () => {
    count === 0 ? setCount(images.length - 1) : setCount(count - 1);
  };
  return (
    <>
      <h1>This is a Image Carousel</h1>
      <button onClick={decreaseCount}>decrease</button>
      <img src={images[count].link} alt=""></img>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};

export default Carousel;
