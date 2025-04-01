import './assets/App.css'
import './assets/list.css'
import Title from "./components/title.tsx";
import Intro from "./components/intro.tsx";
import Hobby1 from "./components/hobby1.tsx";
import Hobby2 from "./components/hobby2.tsx";

function App() {

  return (
    <>
        <Title />
        <Intro name1={"Jake"} name2={"Pakorn"} />
        <Hobby1 />
        <Hobby2 />
    </>
  )
}

export default App
