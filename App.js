// import logo from './logo.svg';
import './App.css';
import Mouse from './Components/Mouse';
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'
import {Context , createContext, useContext } from 'react';


const LangContext = createContext("ENG")({
  lang : "ENG",
  changeLang: () => {},
});


function Select() {
  const {lang} = useContext(LangContext);
  const hendleChange = (e) => {
    let value = e.target.option[e.target.selectedIndex].value
  }
  return (
    <select value = {lang} onChange = {hendleChange}>
      <option value="ENG">ENG</option>
      <option value="RU">RU</option>
      <option value="FR">FR</option>
    </select>
  );
}

function Header(){
  return (
   
    <Select></Select>

  )}


  function  Context() {
    const {lang} = useContext(LangContext);
    return (
      <div style= ({ backgroungColor: "green", display: "flex", })>{lang}</div>
    )
  
  }

function App (){
  const [lang, setLang] = useState("");  
  const contextValue = {
    lang,
    changeLang: (newLang) => {
      setLang(newLang);
    }
  }
}
return <LangContext.Provider value = {contextValue}></LangContext.Provider>


// function App() {
//   return (
//     <div className="App">
//        {/* <Mouse></Mouse>
//        <ClassComponent></ClassComponent> */}
//        <FuncComponent></FuncComponent>
       
//     </div>
//   );
// }



export default App;
