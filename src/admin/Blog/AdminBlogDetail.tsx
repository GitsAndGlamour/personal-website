import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {getBlog} from "../../graphql/queries";
import {Blog} from "../../model/blog";
import ReactMarkdown from "react-markdown";

type Props = {
    match: any
};



export function AdminBlogDetail(props: Props) {
    const blankBlog = {id: '', tags: [], title: '', subtitle: '', content: '', posted: ''};
    const [blog, setBlog] = useState<Blog>(blankBlog);
    const { blogId } = props.match.params;

    useEffect(() => {
        fetchBlog();
    }, []);

    async function fetchBlog() {
        const { data }: any = await API.graphql({ query: getBlog, variables: { id: blogId } });
        setBlog(data ? data.getBlog : blankBlog);
    }
    const markdown = ``;
    return (
        <div>
            <header>
                <h1>{blog.title}</h1>
                <h3>{blog.subtitle}</h3>
            </header>
                <p>Posted on <b>{new Date(blog.posted).toDateString()}</b></p>
                <br/>
            <ReactMarkdown source={blog.content} escapeHtml={false} />
        </div>
    );
};
