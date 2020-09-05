import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {listBlogs} from "../../graphql/queries";
import {Blog} from "../../model/blog";

type Props = {

};



export function AdminBlogList(props: Props) {
const [blogs, setBlogs] = useState<Blog[]>([]);

useEffect(() => {
    fetchBlogs();
}, []);

async function fetchBlogs() {
    const { data }: any = await API.graphql({ query: listBlogs });
    setBlogs(data ? data.listBlogs.items : []);
}
    return (
        <div>
            <header>Blogs</header>
            <ul>
                {blogs.map((blog: Blog, index) => {
                    return <li key={index}>
                        <h4>{blog.title}</h4>
                        <h5>{blog.subtitle}</h5>
                        <p>Posted on <b>{new Date(blog.posted).toDateString()}</b></p>
                        <p>{blog.content}</p>
                    </li>
                })}
            </ul>
        </div>
    );
};
