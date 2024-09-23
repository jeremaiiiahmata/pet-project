import ListGroup from "./components/ListGroup.jsx";
import Footer from "./components/Footer.jsx"
import Posts from "./components/Posts.jsx"
import Alert from "./components/Alert.jsx";
import Button from "./components/Button.jsx"
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Title from "./components/Title.jsx";

function App(){ // creates a function that displays the <Message /> component

  const [alertVisibility, setAlertVisibility] = useState(true);

const handleSelectItem = () => {
} 
  return(
    <>
      <div>
        <Navbar/>
        <Title/>
        <Posts/>
        {/* <ListGroup heading="Blog" onSelectItem={handleSelectItem}/> */}
        <Footer />
      </div>
    </>
  )
}

export default App;

