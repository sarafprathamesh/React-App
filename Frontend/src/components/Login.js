import { useState } from "react";
import UserService from "./AxiosConnection";

const Login = () => {
    let[Userobj, SetUserObj] = useState({firstname:"",lastname:"",email:"",password:""});

    const handlechange=(event)=>{
        const {name,value}=event.target;
        SetUserObj({...Userobj,[name]:value});
    }

    const addUser=()=>{
        UserService.addUser(Userobj).then((result)=>{
            console.log(result.data);
        })
    }


    return (
        <div>
           <form action="/"> 
                <label htmlFor="firstname">FirstName : </label>
                <input type="text" name="firstname" id="firstname" value={Userobj.firstname} onChange={handlechange}></input> <br></br>

                <label htmlFor="lastname">LastName : </label>
                <input type="text" name="lastname" id="lastname" value={Userobj.lastname} onChange={handlechange}></input> <br></br>

                <label htmlFor="email">Email : </label>
                <input type="text" name="email" id="email" value={Userobj.email} onChange={handlechange}></input> <br></br>

                <label htmlFor="password">Password : </label>
                <input type="text" name="password" id="password" value={Userobj.password} onChange={handlechange}></input> <br></br>

                <button type="submit" name="button" onClick={addUser}>Login</button>

            </form>

        </div>
    )
}

export default Login;