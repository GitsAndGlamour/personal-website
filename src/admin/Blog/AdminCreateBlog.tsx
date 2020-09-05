import React, {useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {createBlog} from "../../graphql/mutations";
import ReactMarkdown from "react-markdown";

export default function AdminCreateBlog() {
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    return <div>
        <header>Create Blog Post</header>
        <br/>
        <main>
            <form>
                <label>Title</label>
                <br/>
                <input onChange={updateTitle}/>
                <br/>
                <br/>
                <label>Subtitle</label>
                <br/>
                <input onChange={updateSubtitle}/>
                <br/>
                <br/>
                <label>Content</label>
                <br/>
                <textarea onChange={updateContent}/>
                <br/>
                <br/>
                <label>Tags</label>
                <br/>
                <textarea onChange={updateTags}/>
                <br/>
                <button onClick={onCreateBlog}>Submit Blog</button>
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
    async function onCreateBlog(event: React.MouseEvent<HTMLButtonElement>) {
        const blogDetails = { title, subtitle, content, tags, posted: new Date().toISOString() };
        const newBlog = await API.graphql(graphqlOperation(createBlog, {input: blogDetails}));
        console.log(newBlog);
    }
}
