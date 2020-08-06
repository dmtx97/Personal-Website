import Contact from '../components/Contact';
import Links from '../components/Links';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
// import "../style/pages/blogs.scss";
import { useEffect, useState, Fragment } from 'react';
import BlogEntryForm from "../components/CreateBlog";
import { getSlugifiedTitle } from "../utils";
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
// import "../style/pages/blogs.scss";

const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} showLineNumbers={true} style={ tomorrow }>{value}</SyntaxHighlighter>;
    };

export default function Blogs({blogPreviews}){

    const preview = [];
    for(var i in blogPreviews){
        
        const blog_title = blogPreviews[i].title.toLowerCase();
        let uploadDate = new Date((blogPreviews[i].date_recorded)).toLocaleDateString();
        let description = blogPreviews[i].description;

        preview.push(
            <div key={blogPreviews[i].blog_id}>

                <div className="preview">
                    <h1 style={{marginTop: "16px", marginBottom: "2px"}}>
                        <Link href="/blog/[id]/[title]" as={`/blog/${blogPreviews[i].blog_id}/${getSlugifiedTitle(blog_title)}`}>
                                <a className="blog-title" >{blogPreviews[i].title}</a>
                        </Link>
                    </h1>

                    <p style={{marginTop:"0px", color: "gray"}}>{description}</p>
                    <p style={{marginBottom:"16px" , color:"gray"}}>{uploadDate}</p>
                    
                    <div className='markdown-body'>
                        <ReactMarkdown 
                        escapeHtml={false}
                        source={blogPreviews[i].body}
                        renderers={{ "code": CodeBlock}}
                        />
                    </div>

                </div>
                <hr/>
                <style jsx>{`
                    div:last-child hr {
                        display: none;
                    }

                    .preview{
                        // max-height:250px;
                        margin-top: 16px;
                    }

                    .blog-title{
                        font-size: 30px;
                        font-weight: 300;
                        // color: "#2D2B57";
                    }

                    @media screen and (max-width: 600px) {
                        .blog-title{
                            font-size: 25px;
                        }
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
                                <h1 style={{color: "black", fontSize:"35px", marginTop:"16px"}}>POSTS</h1>
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

export async function getServerSideProps(context) {
    
    const res = await fetch('http://localhost:3000/api/get-blogs');
    const blogPreviews = await res.json()
    
    return {
        props: { blogPreviews }
    };   
}
