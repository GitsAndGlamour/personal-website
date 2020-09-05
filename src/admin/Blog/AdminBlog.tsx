import React from "react";

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import CreateBlog from "./CreateBlog";
import {AdminBlogList} from "./AdminBlogList";

export default function AdminBlog() {


    return <Router>
        <div>
            <header>Admin Blog</header>
            <nav>
                <ul>
                    <li>
                        <Link to='/admin/blog'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/admin/blog/create'>Add Blog</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/admin/blog/create'><CreateBlog/></Route>
                <Route path='/admin/blog'><AdminBlogList/></Route>
            </Switch>
        </div>
    </Router>
}
