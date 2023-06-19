import { useState } from "react";

function BadState() {
  const [album, setAlbum] = useState({ singer: "", songWriter: "", song: "", title: "" });
  const { singer, songWriter, song, title } = album; //비구조화 할당

  const onAlbum = (e) => {
    setAlbum({
      ...album,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>state 최소화(좋은 예시)😺</h2>

      <input name="singer" value={singer} onChange={onAlbum} />
      <input name="songWriter" value={songWriter} onChange={onAlbum} />
      <input name="song" value={song} onChange={onAlbum} />
      <input name="title" value={title} onChange={onAlbum} />
    </>
  );
}
export default BadState;
