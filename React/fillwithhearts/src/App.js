import { useState } from "react";
import "./App.css";
import image1 from "./assets/Screenshot from 2023-05-17 09-52-36.png";
import image2 from "./assets/Screenshot from 2023-05-17 09-52-56.png";
import image3 from "./assets/Screenshot from 2023-05-17 09-53-18.png";
const images = [image1, image2, image3];
function App() {
  const [hearts, setHearts] = useState("10px");
  const [image, setImage] = useState(0);
  const changeimageHandler = () => {
    console.log(image);
    setImage(Math.floor(Math.random() * images.length));
    console.log(image);
    setHearts("");
  };
  const heartsChangehandler = () => {
    setHearts((hearts) => parseInt(hearts) + 10 + "px");
    console.log(hearts);
  };
  return (
    <div className="App">
      <div className="container">
        <span style={{ fontSize: `${hearts}` }}>❤️</span>
        <img src={images[image]} alt=""></img>
      </div>
      <button onClick={heartsChangehandler}>Add ❤️</button>
      <button onClick={changeimageHandler}>Change image</button>
    </div>
  );
}

export default App;
