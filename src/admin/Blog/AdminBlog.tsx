import React from "react";

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import AdminCreateBlog from "./AdminCreateBlog";
import {AdminBlogList} from "./AdminBlogList";
import {AdminBlogDetail} from "./AdminBlogDetail";

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
                <Route path='/admin/blog/create'><AdminCreateBlog/></Route>
                <Route
                    path="/admin/blog/:blogId"
                    strict
                    sensitive
                    render={({ match }) => match ? <AdminBlogDetail match={match} /> : <>Blog Page Not Found</>}
                />
                <Route path='/admin/blog'><AdminBlogList/></Route>
            </Switch>
        </div>
    </Router>
}
