import React , {Component} from "react";
import { name } from "tar/lib/types";
import User from "./User";

class Users extends Component{
    render(){
        const { users } = this.props;

        return(
            <table class="table">
  <thead className="table-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
        {users.map(user =>{
            const{id,name,email} = user;

            return <User key={id}
            id = {id}
            name = {name}
            email = {email}
            />;
        })}
  </tbody>
</table>

        );
    }
}

export default Users;