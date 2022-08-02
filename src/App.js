import { Component } from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      users:[
        {
          id : 1,
          name : "ahmet yasin ada",
          email : "yasinada@gmail.com"
        },
        {
        id : 2,
        name : "mustafa yavuz ada",
        email : "yavuzada@gmail.com"
        },
        {
        id : 3,
        name : "feyzanur ada",
        email : "feyzaada@gmail.com"
        }
      ]
    };
  }
  render(){ 
  return (
    <div className="container">
      <h4>User App</h4>
      <hr/>
      <AddUser/>
      <hr/>
      <Users users = {this.state.users}/>
    </div>
  );
  }
}

export default App;
