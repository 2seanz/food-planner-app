import { Component } from 'react';
import './styles/App.css';
import EntreeContainer from './Containers/EntreeContainer';
import Navbar from './Components/Navbar';

const API = "http://localhost:3000/Menu"


class App extends Component {

  state = {
    course: "Entree",
    type: "",
    position: 0,
    menu: []
  }
    
  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(menu => this.setState({
        menu: menu
    }))
  }

  incrementMenu = () => {

    const menuCopy = [...this.state.menu]
    const filterMenu = menuCopy.filter(menuItems => menuItems.course === this.state.course)
    const filterType = filterMenu.filter(menuItems => menuItems.type === this.state.type)

    // console.log(menuCopy)
    // console.log(filterMenu)
    // console.log(filterType)

    if(this.state.position > filterMenu.length) {
      this.setState({position: 0})
    // } else if(this.state.position > filterType.length) {
    //   this.setState({position: 0})
    } else {
      this.setState({position: this.state.position + 3})
    }
  }

  decrementMenu = () => {
    if(this.state.position > 3) {
      this.setState({position: this.state.position - 3})
    } else {
      this.setState({position: 0})
    }
  }

  selectEntreeType = (event) => {
    this.setState({
      type: event,
      position: 0
    })
  }

  filterEntrees = () => {

    const menuCopy = [...this.state.menu]
    const filterEntrees = menuCopy.filter(menuItems => menuItems.course === this.state.course)
    const menuIndex = filterEntrees.filter(menuItems => menuItems.type === this.state.type)

    // console.log(menuCopy)
    // console.log(filterEntrees)
    // console.log(menuIndex)

    if(this.state.type === ""){
      return filterEntrees.slice(this.state.position, this.state.position + 3)
    } else {
      return menuIndex.slice(this.state.position, this.state.position + 3)
    }
  }


  render() {

    return (
      <div className="App">
        <Navbar />
        <EntreeContainer 
          menu={this.filterEntrees()} 
          incrementMenu={this.incrementMenu} 
          decrementMenu={this.decrementMenu}
          selectEntreeType={this.selectEntreeType}
          course={this.state.course} 
          type={this.state.type} 
        />
      </div>
    );
  }
}

export default App;
