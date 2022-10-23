import react from 'react';
import {Outlet , Link} from 'react-router-dom';
const Layout = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/">Home</Link>

                </li>
                <li>
                    <Link to="/about"> About</Link>
                </li>
                <li>
                    <Link to="/services">Sevices</Link>
                </li>
                <li>
                    <Link to ="/contactus">Contact US</Link>
                </li>
            </ul>
        </nav>

    )
};
export default Layout;
