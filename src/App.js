
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, 
  Routes, 
  Route, 
 } from "react-router-dom";
export default class App extends Component{
  pageSize=6;
  state ={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render(){
    return(
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      </div>

      <Routes>

        <Route exact path="/" element={<News setProgress={this.setProgress} key="general"  pageSize={this.pageSize} country="in" category="General"/> }/>
        <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="Business"/> }/>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment"  pageSize={this.pageSize} country="in" category="Entertainment"/> }/>   
        <Route exact path="/general" element={<News setProgress={this.setProgress} key="general"  pageSize={this.pageSize} country="in" category="General"/> }/>
        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health"  pageSize={this.pageSize} country="in" category="Health"/> }/>
        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science"  pageSize={this.pageSize} country="in" category="Science"/> }/>      
        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports"  pageSize={this.pageSize} country="in" category="Sports"/> }/>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology"  pageSize={this.pageSize} country="in" category="Technology"/> }/>
        </Routes>
    </Router>
    )
  }
}


