import React from "react";
import Welcome from './components/welcome';
import Basic from './components/basic';
import Objective from "./components/objective";
import './App.css'

class App extends React.Component {
    constructor(props : any) {
        super(props);
    }
    state = {
        currentPage: <Welcome />
    }
    render() {
        let clickHandler = () : void => {
            document.getElementById('startButton')?.classList.add('move');
            let pages = ['Welcome', "Basic", 'Objective'];
            let pageComponents = [<Welcome />, <Basic />, <Objective />]
            pages.forEach((page, index) =>{
                if (page === this.state.currentPage.type.name) {
                this.setState({currentPage: pageComponents[index + 1]})
                }
            })
        }

    return (
        <div id='wrapper'>
         {this.state.currentPage}
        <div id="startButton" onClick={()=>clickHandler()}>Let's Get Started!<i className="fas fa-chevron-right"></i></div>
        </div>
    );
}};

export default App;