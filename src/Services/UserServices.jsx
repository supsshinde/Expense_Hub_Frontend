import axios from "axios";
let saveUser="http://localhost:8080/user/addUser"
let loginUserUrl = "http://localhost:8080/user/login";
class UserServices
{
    createUser(user)
    {
        return axios.post(saveUser,user);
    }
    loginUser(loginData)
     { 
        return axios.post(loginUserUrl, loginData);
     } 


}
export default new UserServices;