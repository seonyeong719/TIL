import { useState } from "react";

function BadState() {
  const [singer, setSinger] = useState("");
  const [songWriter, setSongWriter] = useState("");
  const [song, setSong] = useState("");
  const [title, setTitle] = useState("");

  const onSinger = (e) => {
    setSinger(e.target.value);
  };
  const onSongWriter = (e) => {
    setSongWriter(e.target.value);
  };
  const onSong = (e) => {
    setSong(e.target.value);
  };
  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <h2>state 남용(나쁜 예시)👿</h2>

      <input name="singer" value={singer} onChange={onSinger} />
      <input name="songWriter" value={songWriter} onChange={onSongWriter} />
      <input name="song" value={song} onChange={onSong} />
      <input name="title" value={title} onChange={onTitle} />
    </>
  );
}
export default BadState;


