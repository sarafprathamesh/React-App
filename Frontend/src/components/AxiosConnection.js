import axios from "axios";


class UserService {
    constructor() {
        this.baseurl = "http://localhost:4000/";
    }

    getUsers() {
        return axios.get(this.baseurl + "user/data");
    }

    addUser(user){
        return axios.post(this.baseurl+"adduser",user);
    }


}

export default new UserService();