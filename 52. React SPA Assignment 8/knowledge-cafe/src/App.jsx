import { useState } from 'react'
import './css/bootstrap.min.css'
import './js/bootstrap.bundle.min'
import './css/bootstrap-icons.css'
import './App.css'
import Nav from './Component/Nav/Nav'
import Blogs from './Component/Blogs/Blogs'
import QnA from './Component/QnA/QnA'

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Blogs></Blogs>
      <div className="display-2 mb-3 mt-3 text-center">QNA</div>
      <div className="accordion" id="accordionExample">
        <QnA></QnA>
      </div>
    </div>
  )
}

export default App
