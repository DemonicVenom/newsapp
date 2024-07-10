
import './App.css';
import './Components/NavBar'
import NavBar from './Components/NavBar';
import News from './Components/news';
import {Routes, Route } from 'react-router-dom';


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        
        <NavBar/>
        <Routes>
          {/* <Route exact path='/' element={<News/>}> </Route> */}
          <Route exact path='/business' element={<News key="business" pageSize={4}  category='business'/>}> </Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={4}  category='entertainment'/>}> </Route>
          <Route exact path='/general' element={<News key="general" pageSize={4}  category='general'/>}> </Route>
          <Route exact path='/health' element={<News key="health" pageSize={4}  category='health'/>}> </Route>
          <Route exact path='/science' element={<News key="science" pageSize={4}  category='science'/>}> </Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={4}  category='sports'/>}> </Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={4}  category='technology'/>}> </Route>
          {/* <Route exact path='/business'> element={<><News key="business" pageSize={4} category='business'/></>}</Route> */}
          {/* <Route exact path='/entertainment'> element={<><News  pageSize={4} category='entertainment'/></>}</Route>
          <Route exact path='/general'> element={<><News  pageSize={4} category='general'/></>}</Route>
          <Route exact path='/health'> element={<><News  pageSize={4} category='health'/></>}</Route>
          <Route exact path='/science'> element={<><News  pageSize={4} category='science'/></>}</Route>
          <Route exact path='/sports'> element={<><News  pageSize={4} category='sports'/></>}</Route>
          <Route exact path='/technology'> element={<><News  pageSize={4} category='technology'/></>}</Route> */}
        </Routes>
        
    
        </>
    )
  }
}
