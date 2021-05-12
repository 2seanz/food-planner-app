import { Component } from 'react';
import { Route, Switch } from  'react-router-dom';
import './styles/App.css';
import './styles/index.css';

// Components
import Navbar from './Components/Navbar';
import EntreeContainer from './Containers/EntreeContainer';
import CourseContainer from './Containers/CourseContainer';
import SidesContainer from './Containers/SidesContainer';
import DessertsContainer from './Containers/DessertsContainer';
import Cart from './Containers/Cart';


const API = "http://localhost:3000/Menu"


class App extends Component {

  state = {
    menu: [],
    course: "",
    type: "",
    position: 0,
    cart: []
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

    // console.log(menuCopy.length)
    // console.log(filterMenu.length)
    // console.log(filterType.length)

    if(this.state.position > filterMenu.length-1) {
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

  filterCourses = () => {

    const menuCopy = [...this.state.menu]
    const filterEntrees = menuCopy.filter(menuItems => menuItems.course === this.state.course)
    const secondFilter = filterEntrees.filter(menuItems => menuItems.type === this.state.type)

    if(this.state.type === ""){
      return filterEntrees.slice(this.state.position, this.state.position + 3)
    } else {
      return secondFilter.slice(this.state.position, this.state.position + 3)
    }
  }

  addToMealPlan = (menuItem) => {

    if(!this.state.cart.includes(menuItem)) {
      this.setState({cart: [...this.state.cart, menuItem]})
    }
  }

  selectCourseType = (e) => {this.setState({type: e, position: 0})}

  handleCourseState = (e) => {this.setState({course: e})}

  resetPosition = () => {this.setState({position: 0, type: ""})}


  render() {

    return (
      <div className="App">
        <Navbar resetPosition={this.resetPosition} />

        <Switch>

          <Route path="/entrees">
            <EntreeContainer 
              menu={this.filterCourses()} 
              incrementMenu={this.incrementMenu} 
              decrementMenu={this.decrementMenu}
              selectEntreeType={this.selectCourseType}
              course={this.state.course} 
              type={this.state.type} 
              wholeMenu={this.state.menu}
              addToMealPlan={this.addToMealPlan}
            />
          </Route>

          <Route path="/sides">
            <SidesContainer 
              menu={this.filterCourses()} 
              incrementMenu={this.incrementMenu} 
              decrementMenu={this.decrementMenu}
              selectEntreeType={this.selectCourseType}
              course={this.state.course} 
              type={this.state.type}
              wholeMenu={this.state.menu}
              addToMealPlan={this.addToMealPlan}
            />
          </Route>

          <Route path="/desserts">
            <DessertsContainer 
              menu={this.filterCourses()} 
              incrementMenu={this.incrementMenu} 
              decrementMenu={this.decrementMenu}
              selectEntreeType={this.selectCourseType}
              course={this.state.course} 
              type={this.state.type}
              wholeMenu={this.state.menu}
              addToMealPlan={this.addToMealPlan}
            />
          </Route>

          <Route path="/cart">
            <Cart cart={this.state.cart} />
          </Route>

          <Route path="/">
            <CourseContainer handleCourseState={this.handleCourseState} />
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
