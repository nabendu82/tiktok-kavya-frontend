import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="nabendu82"
          description="Windows Editing"
          song="This is Windows"
          likes={239}
          shares={345}
          messages={890}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="thewebdev"
          description="Windows Editing with kden"
          song="kden os great"
          likes={390}
          shares={355}
          messages={990}
        />
      </div>
    </div>
  );
}

export default App;
