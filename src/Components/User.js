import React , {Component} from "react";
import { name } from "tar/lib/types";

class User extends Component{
    render(){
        const {id, name, email} = this.props;
        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default User;