import { useEffect, useState } from "react";
import { worker } from "./__mock__/mswBrowser";

function App() {
  const [list, setList] = useState([]);

  if (import.meta.env.DEV) {
    worker.start({
      serviceWorker: {
        url: "/user",
      },
    });
  }
  useEffect(() => {
    fetch("/user")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <>
      <div>:)</div>
    </>
  );
}

export default App;
