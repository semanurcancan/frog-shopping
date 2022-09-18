//login sonrası dashboard a geçiş

import { Login } from "../login/Login"
import { useSelector } from 'react-redux';
import { selectUser } from '../login/loginSlice';
import Home from "../home/Home";


function Admin() {
    const userInfo= useSelector(selectUser)

    return (
        <div>
            {userInfo.login?<Home/> :<Login/>}
        </div>



    )

}

export default Admin;