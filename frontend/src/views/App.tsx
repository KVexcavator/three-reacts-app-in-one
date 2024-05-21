import * as React from "react"
import "../styles/main.pcss"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import catFourth from "url:../../static/cat-3.jpg"
import catFirst from "url:../../static/cat-1.jpg"
import catSecond from "url:../../static/cat-2.jpg"
import catThird from "url:../../static/cat-3.jpg"
import CardFirst from "../components/Card/index1"
import CardSecond from "../components/Card/index2"
import CardThird from "../components/Card/index3"
import CardFourth from "../components/Card/index4"

function App() {
const Card = () => {
  const location = window.location.host

  if(location.includes('dtc.gold') || location ===  'localhost:8081'){
    return(
      <CardFirst
        title="First Domain"
        image={catFirst}
        imageAlt="First Domain"
        description={`This is site in firstaaa domain`}
        tags={["#first", "#domain", "#ggg"]}
      />
    )
  }else if(location.includes('slgroup') || location === 'localhost:8082'){
    return(
      <CardSecond
        title="Second Domain"
        image={catSecond}
        imageAlt="Second Domain"
        description={`This is site in second domain`}
        tags={["#second", "#domain"]}
      />
    )
  }else if(location.includes('vproject') || location === 'localhost:8083'){
    return(
      <CardThird
        title="Third Domain"
        image={catThird}
        imageAlt="Third Domain"
        description={`This is site in third domain`}
        tags={["#third", "#domain"]}
      />
    )
  }else if(location.includes('celingormash') || location === 'localhost:8084'){
    return(
      <CardFourth
        title="Fourth Domain"
        image={catFourth}
        imageAlt="Fourth Domain"
        description={`This is site in fourth domain`}
        tags={["#fourth", "#domain"]}
      />
    )
  }
}
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
