import React from "react";
import Welcome from './components/welcome';
import Basic from './components/basic';
import Objective from "./components/objective";
import Education from "./components/education";
import History from "./components/history";
import Skills from "./components/skills";
import './App.css'

class App extends React.Component {
    constructor(props : any) {
        super(props);
    }
    state = {
        currentPage: <Welcome />
    }
    render() {
        let clickHandler = (direction : string) : void => {
            document.getElementById('startButton')?.classList.add('move');
            let pages = ['Welcome', "Basic", 'Objective', 'Education', 'History', 'Skills'];
            let pageComponents = [<Welcome />, <Basic />, <Objective />, <Education />, <History />, <Skills />]
            pages.forEach((page, index) =>{
                if (page === this.state.currentPage.type.name) {
                    direction === 'forward' ? this.setState({currentPage: pageComponents[index + 1]}) : this.setState({currentPage: pageComponents[index - 1]})
                }
            })
        }
if (this.state.currentPage.type.name === "Welcome") {
    return (
        
        <div id='wrapper'>
         {this.state.currentPage}
        <div id="startButton" onClick={()=>clickHandler('forward')}>Let's Get Started!<i className="fas fa-chevron-right"></i></div>
        </div>
        
    )}
else if (this.state.currentPage.type.name !== "Welcome") {
    return (
        <div id='wrapper'>
         {this.state.currentPage}
         <div id='buttonArea'>
          <div id="backButton" onClick={()=>clickHandler('back')}><i className="fas fa-chevron-left"></i>Back</div>
          <div id="continueButton" onClick={()=>clickHandler('forward')}>Continue<i className="fas fa-chevron-right"></i></div>
          </div>
        </div>
    )
}
}};

export default App;