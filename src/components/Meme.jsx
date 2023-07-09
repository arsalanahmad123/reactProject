import { useState } from "react";
import { useEffect } from "react";
export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage() {
    const memeArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((preMeme) => {
      return {
        ...preMeme,
        randomImage: url,
      };
    });
  }

  useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemes(data.data.memes);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((preMeme) => {
      return {
        ...preMeme,
        [name]: value,
      };
    });
  }

  return (
    <>
      <main>
        <div className="form">
          <input
            type="text"
            className="form--input"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form--input"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form--button" onClick={getMemeImage}>
            Generate Meme
          </button>
        </div>
        <div className="memeImageDiv">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--topText">{meme.topText}</h2>
          <h2 className="meme--bottomText">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}
