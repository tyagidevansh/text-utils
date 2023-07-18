import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <>
    <Navbar title = "TextUtils"/>
    <div className='container my-3'> 

    <TextForm heading = "Enter the text to analyze"/>

    </div>

    </>
  
  );
  
 
}

export default App;
