import React, {useState, useEffect} from 'react'
import Alert from './components/Alert'
import './App.css';
import AudioComponent from './components/Audio'
import VideoComponent from './components/Video'

const initialState = {
  alertShow:true
}

function App() {
  const [alert, setAlert] = useState(initialState)

  const volumeControl = () => {
    setAlert({alertShow:false})
  }
  useEffect(()=>{
    setTimeout(() => {
      volumeControl()
    }, 6000)
  }
    ,[alert])
  return (
    <div className="App">
      {alert.alertShow? <Alert/>:null}
      <VideoComponent />
      <AudioComponent/>
    </div>
  );
}

export default App;
