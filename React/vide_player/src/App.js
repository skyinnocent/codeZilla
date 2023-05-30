import { useState } from "react";
import ReactPlayer from "react-player";
import snowfallvideo from "./assets/snowfall.mp4";

const videoUris = [
  "https://www.youtube.com/shorts/nwu9c4xD3AA",
  "https://www.youtube.com/shorts/UUgG1B2UpXw",
  "https://www.youtube.com/watch?v=nhBVL41-_Cw&ab_channel=Fireship",
  "https://www.youtube.com/watch?v=Ata9cSC2WpM&ab_channel=Fireship",
];

function App() {
  const [vidURL, setVidUrl] = useState("");
  const GetandsetVideo = (event) => {
    const input = Number(event.target.value);
    setVidUrl(videoUris[input]);
  };

  return (
    <div className="App">
      <i>{vidURL}</i>
      <div className="radios">
        <label>
          React
          <input
            type="radio"
            value={0}
            onChange={GetandsetVideo}
            checked={vidURL === videoUris[0]}
          ></input>
        </label>
        <label>
          Vite
          <input
            type="radio"
            value={1}
            onChange={GetandsetVideo}
            checked={vidURL === videoUris[1]}
          ></input>
        </label>
        <label>
          Vue
          <input
            type="radio"
            value={2}
            onChange={GetandsetVideo}
            checked={vidURL === videoUris[2]}
          ></input>
        </label>
        <label>
          Angular
          <input
            type="radio"
            value={3}
            onChange={GetandsetVideo}
            checked={vidURL === videoUris[3]}
          ></input>
        </label>
      </div>
      <div className="video">
        <ReactPlayer url={vidURL} controls />
      </div>
      <div>
        <video controls>
          <source src={snowfallvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
