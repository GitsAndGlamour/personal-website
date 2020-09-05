import React, {useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {createBlog, updateBlog} from "../../graphql/mutations";
import ReactMarkdown from "react-markdown";
import {getBlog} from "../../graphql/queries";
import {Blog} from "../../model/blog";

interface Prop {
    match?: any;
}

export default function AdminBlogForm(props: Prop) {
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const { blogId } = props.match?.params || { blogId: undefined };

    useEffect(() => {
        fetchBlog();
    }, []);

    async function fetchBlog() {
        const { data }: any = await API.graphql({ query: getBlog, variables: { id: blogId } });
        const blog: Blog = data ? data.getBlog : undefined;
        setTitle(blog?.title || '');
        setSubtitle(blog?.subtitle || '');
        setContent(blog?.content || '');
        setTags(blog?.tags || []);
    }
    return <div>
        <header>{ (blogId ? 'Modify' : 'Create') +  ' Blog Post'}</header>
        <br/>
        <main>
            <form>
                <label>Title</label>
                <br/>
                <input onChange={updateTitle} value={title} />
                <br/>
                <br/>
                <label>Subtitle</label>
                <br/>
                <input onChange={updateSubtitle} value={subtitle} />
                <br/>
                <br/>
                <label>Content</label>
                <br/>
                <textarea onChange={updateContent} value={content} />
                <br/>
                <br/>
                <label>Tags</label>
                <br/>
                <textarea onChange={updateTags} value={tags} />
                <br/>
                <button onClick={onSubmitBlog}>Submit Blog</button>
            </form>
            <div>
                <h1>Preview</h1>
                <ReactMarkdown source={content} escapeHtml={true} />
            </div>
        </main>
    </div>;

    function updateTitle(event:  React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function updateSubtitle(event:  React.ChangeEvent<HTMLInputElement>) {
        setSubtitle(event.target.value);
    }

    function updateContent(event:  React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);
    }
    function updateTags(event:  React.ChangeEvent<HTMLTextAreaElement>) {
        setTags(event.target.value.split(/,\s?/));
    }
    async function onSubmitBlog(event: React.MouseEvent<HTMLButtonElement>) {
        const blogDetails = { title, subtitle, content, tags, posted: new Date().toISOString() };
        const query = blogId ? updateBlog : createBlog;
        await API.graphql(graphqlOperation(query, {input: { id: blogId, ...blogDetails} }));
    }
}
