import Contact from '../components/Contact';
import Links from '../components/Links';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import "../style/pages/blogs.scss";
import API from '../api/express_requests';
import { useEffect, useState, Fragment } from 'react';
import BlogEntryForm from "../components/CreateBlog";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} style={shadesOfPurple} showLineNumbers={true}>{value}</SyntaxHighlighter>;
    };

export default function Blogs(){
    const api = new API();
    const[vals, setVals] = useState({});
    
    useEffect(()=>{
        api.getBlogs()
        .then(data=>{
            setVals(data);
        })
        .catch(err => console.log(err))
    },[]);
    
    const preview = [];
    for(var i in vals){
        
        const blog_title = vals[i].title.toLowerCase();
        const slugifiedTitle = (blog_title) => {
            blog_title = blog_title.replace(/[^a-zA-Z ]/g, "")
            blog_title = blog_title.replace(/[^a-zA-Z0-9]/g, "-");
            return blog_title;
        }
        
        let uploadDate = new Date((vals[i].date_recorded)).toLocaleDateString();

        preview.push(
            <div key={vals[i].blog_id}>

                <div>
                    <h1>
                        <Link href="/blog/[id]/[title]" as={`/blog/${vals[i].blog_id}/${slugifiedTitle(blog_title)}`}>
                                <a style={{ fontSize: "40px", color: "#2D2B57"}}>{vals[i].title}</a>
                        </Link>
                    </h1>

                    <p>{uploadDate}</p>

                    <div className="bodytest">
                            <ReactMarkdown
                            escapeHtml={false}
                            source={vals[i].body}
                            renderers={{ "code": CodeBlock}}
                            />
                            <div className="fadeout"></div>
                    </div>

                </div>
                <hr/>
                <style jsx>{`
                    div:last-child hr {
                        display: none;
                    }

                    .bodytest{
                        position: relative;
                        height: 200px;
                        overflow: hidden;
                        margin-bottom: 20px;
                    }

                    .fadeout {
                        bottom: 0;
                        height: 100px;
                        background: linear-gradient(
                            rgba(255, 255, 255, 0) 0%,
                            rgba(255, 255, 255, 1) 100%
                        );
                        position: absolute;
                        width: 100%;
                    } 

                `}</style>
            </div>
        );
    }

    return(
        <Fragment>

            <Layout>
                <div className="content" style={{paddingTop: "60px"}}>
                    <div className="mainparent">
                        <aside className="sidebarright">
                            <div className="column">
                                <div className="links">
                                    <Links/>
                                </div>

                                <div className="contact">
                                    <Contact/>
                                </div>
                            </div>
                        </aside>
                        <section className="main">
                            <div style={{margin: "16px 20px 16px 20px"}}> 
                                
                                {preview}
                                
                            </div>
                        </section>
                    </div>
                </div>
        </Layout>
        <BlogEntryForm/>
    </Fragment>
    );
}
