import './App.css';
import SideBar from './components/SideBar';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <SideBar />
      <VideoGallery />
      {/* crad gallery */}
    </div>
  );
}

export default App;
