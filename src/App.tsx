import "./App.css";
import Loading from "./components/Loading/Loading";
import UploadPreview from "./components/UploadPreview/UploadPreview";

function App() {
  return (
    <div className="App">
      <div className="loading">
        <Loading />
      </div>
      <div className="uploadPreview">
        <UploadPreview />
      </div>
    </div>
  );
}

export default App;
