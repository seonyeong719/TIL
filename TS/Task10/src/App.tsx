import { worker } from "./__mock__/mswBrowser";

function App() {
  if (import.meta.env.MODE === "development") {
    worker.start({
      serviceWorker: {
        url: "/assets/mockServiceWorker.js",
      },
    });
  }

  return (
    <>
      <div>:)</div>
    </>
  );
}

export default App;
