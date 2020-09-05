import React, {useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {listBlogs} from "../../graphql/queries";
import {deleteBlog} from "../../graphql/mutations";
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

async function onDeleteBlog(id: string) {
    // eslint-disable-next-line no-restricted-globals
    const canDelete = confirm('Are you sure you want to delete this blog?');
    if (canDelete) {
        await API.graphql(graphqlOperation(deleteBlog, {input: {id}}));
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }
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
                        <p><b>Tags: </b>{blog.tags.toString().replaceAll(',', ', ')}
                            <Link to={`/admin/blog/form/${blog.id}`}><button>edit</button></Link>
                            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onDeleteBlog(blog.id)}>delete</button>
                        </p>
                    </li>
                })}
            </ul>
        </div>
    );
};
