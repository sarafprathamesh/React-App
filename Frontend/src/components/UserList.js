import { useEffect, useState } from "react";
import UserService from "./AxiosConnection"; 

const UserList = () => {
    let [UserArr, SetUserArr] = useState([]);

    useEffect(()=>{
        UserService.getUsers().then((res)=> {
            SetUserArr(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);


    const renderList = () =>{
        return(
            UserArr.map((user) =>{
                return <tr><td>{user.firstname}</td>&nbsp;&nbsp;&nbsp;<td>{user.lastname}</td>&nbsp;&nbsp;<td>{user.email}</td>&nbsp;&nbsp;<td>{user.password}</td></tr>
            })
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <tr><th>FirstName</th>&nbsp;&nbsp;&nbsp;<th>LastName</th>&nbsp;&nbsp;<th>Email</th>&nbsp;&nbsp;<th>Password</th></tr>
                </thead>

                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;
