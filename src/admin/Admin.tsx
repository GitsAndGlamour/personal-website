import React, {useState} from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom'
import AdminBlog from "./Blog/AdminBlog";


function Admin() {
const [admin, setAdmin] = useState(false);
    checkIsAdmin();

    return admin ?
        <Router>
            <div>
                <header>Admin</header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/admin/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/admin/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/admin/tutorials'>Tutorials</Link>
                        </li>
                        <li>
                            <Link to='/admin/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/admin/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/admin/hire'>Hire</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/admin/blog'><AdminBlog/></Route>
                    <Route path='/admin/tutorials'>Admin Tutorials</Route>
                    <Route path='/admin/portfolio'>Admin Portfolio</Route>
                    <Route path='/admin/contact'>Admin Contact</Route>
                    <Route path='/admin/hire'>Admin Hire</Route>
                    <Route path='/admin/'>Admin Home</Route>
                </Switch>
                <AmplifySignOut/>
            </div>
        </Router> : <>Administrator Only</>;

        function checkIsAdmin(): void {
        Auth.currentUserInfo().then(user => {
            setAdmin(user.username === 'Admin');
        })
    }
}


export default withAuthenticator(Admin);
