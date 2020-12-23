import React, {useState, useEffect} from 'react'
import Alert from './components/Alert'
import './App.css';
import AudioComponent from './components/Audio'
import VideoComponent from './components/Video'

const initialState = {
  alertShow:true
}



function App() {
  const [alert, setAlert] = useState(initialState);
  // const [counter, setCounter] = useState(new Date().getSeconds())
  // console.log(counter)
  
  let newSecond = new Date().getSeconds()
  // let i =0;
  // let videoNumber = 0
  // while(i<=13){
  //   console.log("pause")
  //   if(i == 12 && videoNumber < 5){
  //       console.log("i"+i+"video"+ videoNumber);
  // }
  
  
  // let i = 0;

  // let videoNumber = 0
  // while(i<=13){
  //   // console.log("stated");
  //   // counter++
  //   if(i == 12 && videoNumber < 5){
  //   console.log("i"+i+"video"+ videoNumber);
      
  //     i=0
  //     videoNumber = +1
      
  //   }
  // }

  const volumeControl = () => {
    setAlert({alertShow:false})
  }

  useEffect(()=>{
    setTimeout(() => {
      volumeControl()
    }, 1200)
  }
    ,[alert])
  return (
    <div className="App">
      {alert.alertShow? <Alert/>:null}
      <VideoComponent />
      <AudioComponent/>
      {/* Counter: {counter} */}
      Time: {newSecond}
    </div>
  );
}

export default App;
