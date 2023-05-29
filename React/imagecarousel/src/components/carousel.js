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
      <main>
        <h1>This is an Image Carousel</h1>
        <div>
          <h2>{images[count].title}</h2>
          <button className="left" onClick={decreaseCount}></button>
          <img src={images[count].link} alt={images[count].title}></img>
          <button className="right" onClick={increaseCount}></button>
        </div>
      </main>
    </>
  );
};

export default Carousel;
