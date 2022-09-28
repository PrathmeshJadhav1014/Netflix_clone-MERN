import "./App.css"
import Footer from "./Components/Footer.jsx/Footer";
import Get_Started from "./Components/GetStarted/Get_Started";
import Main from "./Components/Main";
import Content from "./Components/Main/Content";


function App() {
  return (
    <div className="app">
      <Get_Started/>
      <Content/>
      <Footer/>


    </div>
  );
}

export default App;
