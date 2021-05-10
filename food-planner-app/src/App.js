import { Component } from 'react';
import './App.css';
import CardContainer from './Containers/CardContainer';
import Navbar from './Components/Navbar';

const API = "http://localhost:3000/Menu"


class App extends Component {

  state = {
    menu: [],
    course: "",
    type: "",
    position: 0
  }
    
  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(menu => this.setState({
        menu: menu
    }))
  }

  incrementMenu = () => {
    this.setState({
      position: this.state.position + 3
    })
  }

  decrementMenu = () => {
    this.setState({
      position: this.state.position - 3
    })
  }

  render() {

    const displayMenuItems = this.state.menu.slice(this.state.position, this.state.position + 3)

    return (
      <div className="App">
        <Navbar />
        <CardContainer menu={displayMenuItems} incrementMenu={this.incrementMenu} decrementMenu={this.decrementMenu} />
      </div>
    );
  }
}

export default App;
