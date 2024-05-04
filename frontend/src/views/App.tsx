import * as React from "react"
import "../styles/main.pcss"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CardFirst from "../components/Card/index1"
import catFirst from "url:../../static/cat-1.jpg"
import catSecond from "url:../../static/cat-2.jpg"
import catThird from "url:../../static/cat-3.jpg"
import CardSecond from "../components/Card/index2"
import CardThird from "../components/Card/index3"

function App() {
const Card = () => {
  if(window.location.host === 'localhost:8081'){
    return(
      <CardFirst
        title="First Domain"
        image={catFirst}
        imageAlt="First Domain"
        description={`This is site in first domain`}
        tags={["#first", "#domain"]}
      />
    )
  }else if(window.location.host === 'localhost:8082'){
    return(
      <CardSecond
        title="Second Domain"
        image={catSecond}
        imageAlt="Second Domain"
        description={`This is site in second domain`}
        tags={["#second", "#domain"]}
      />
    )
  }else if(window.location.host === 'localhost:8083'){
    return(
      <CardThird
        title="Third Domain"
        image={catThird}
        imageAlt="Third Domain"
        description={`This is site in third domain`}
        tags={["#third", "#domain"]}
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
