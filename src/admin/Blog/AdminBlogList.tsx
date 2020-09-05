import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {listBlogs} from "../../graphql/queries";
import {Blog} from "../../model/blog";
import {Link} from "react-router-dom";

type Props = {

};



export function AdminBlogList(props: Props) {
const [blogs, setBlogs] = useState<Blog[]>([]);

useEffect(() => {
    fetchBlogs();
}, []);

async function fetchBlogs() {
    const {data}: any = await API.graphql({ query: listBlogs });
    setBlogs(data ? data.listBlogs.items : []);
    console.log(blogs);
}

    return (
        <div>
            <header>Blogs</header>
            <ul>
                {blogs.map((blog: Blog, index) => {
                    return <li key={index}>
                        <h4><Link to={`/admin/blog/${blog.id}`}>{blog.title}</Link></h4>
                        <h5>{blog.subtitle}</h5>
                        <p>Posted on <b>{new Date(blog.posted).toDateString()}</b></p>
                        <p><b>Tags: </b>{blog.tags.toString().replaceAll(',', ', ')} <Link to={`/admin/blog/form/${blog.id}`}><button>edit</button></Link></p>
                    </li>
                })}
            </ul>
        </div>
    );
};
