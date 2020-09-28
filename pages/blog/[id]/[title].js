import API from '../../../api/';
import { useEffect } from 'react';
import Layout from '../../../components/layout/Layout';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Contact from '../../../components/Contact';
import Archive from '../../../components/Archive';
import 'github-markdown-css';

const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} showLineNumbers={true} style={ tomorrow }>{value}</SyntaxHighlighter>;
};

export default function Blog({blog, blogs}){    
    
    return(
        <Layout>
                <div className="content" style={{paddingTop: "60px"}}>
                    <div className="mainparent">
                        <aside className="sidebarright">
                            <div className="column">
                                <div className="links">
                                    <Archive blogs = {blogs}/>
                                </div>
                                <div className="contact">
                                    <Contact/>
                                </div>
                            </div>
                        </aside>
                        <section className="main">
                            <div style={{margin: "16px 20px 16px 20px"}}> 
                                <div className="blog"> 
                                    <h1 className="title">{blog.title}</h1>
                                    <p className="description">{blog.decription}</p>
                                    <p className="post-date">{new Date(blog.date_recorded).toLocaleDateString('en-US', {timeZone: 'UTC'})}</p>

                                    <div className='markdown-body'>
                                        <ReactMarkdown 
                                        escapeHtml={false}
                                        source={blog.body}
                                        renderers={{ "code": CodeBlock}}
                                        />
                                    </div>
                                </div>
                            </div>                                
                        </section>
                    </div>
                    <style jsx>{`
                        .title{
                            font-size: 35px;
                            // color: #2D2B57;
                            // text-align: center;
                            margin-top: 0px;
                            margin-bottom: 0px;
                        }
                    `}</style>
                </div>
        </Layout>
    )
}

export async function getServerSideProps(context){

    const api = new API();
    const blog_id = context.query.id
    const res = await api.getBlog(blog_id)
    const blogs = await fetch('http://localhost:3000/api/get-blogs');
    const blog_response = await blogs.json()

    return{
        props: {
            blog: res,
            blogs: blog_response
        },
    }
}