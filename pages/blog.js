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

// import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} showLineNumbers={true}>{value}</SyntaxHighlighter>;
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
    let blogArr = {
        domains: [
        ]
    }
    for(var i in vals){
        
        const blog_title = vals[i].title.toLowerCase();
        const slugifiedTitle = (blog_title) => {
            // In case I am using forward slashes in title to signify ongoing blog posts I exclude forward slash then replace with dash
            blog_title = blog_title.replace(/[^a-zA-Z0-9 /]/g, "")
            blog_title = blog_title.replace("/", "-")
            blog_title = blog_title.replace(/[^a-zA-Z0-9]/g, "-");
            return blog_title;
        }
        
        let uploadDate = new Date((vals[i].date_recorded)).toLocaleDateString();
        let description = vals[i].description;



        blogArr.domains.push(`/blog/${vals[i].blog_id}/${slugifiedTitle(blog_title)}`);

        // arr.push({"domain" : `/blog/${vals[i].blog_id}/${slugifiedTitle(blog_title)}`})



        preview.push(
            <div key={vals[i].blog_id}>

                <div className="preview">
                    <h1 style={{marginTop: "16px", marginBottom: "2px"}}>
                        <Link href="/blog/[id]/[title]" as={`/blog/${vals[i].blog_id}/${slugifiedTitle(blog_title)}`}>
                                <a className="blog-title" >{vals[i].title}</a>
                        </Link>
                    </h1>

                    <p style={{marginTop:"0px", color:"gray"}}>{uploadDate}</p>
                    <p style={{marginBottom:"16px"}}>{description}</p>

                </div>
                <hr/>
                <style jsx>{`
                    div:last-child hr {
                        display: none;
                    }

                    .preview{
                        max-height:250px;
                        margin-top: 16px;
                    }

                    .blog-title{
                        font-size: 35px;
                        color: "#2D2B57";
                    }

                    @media screen and (max-width: 600px) {
                        .blog-title{
                            font-size: 25px;
                        }
                    }

                    // .bodytest{
                    //     position: relative;
                    //     height: 200px;
                    //     overflow: hidden;
                    //     margin-bottom: 20px;
                    // }

                    // .fadeout {
                    //     bottom: 0;
                    //     height: 100px;
                    //     background: linear-gradient(
                    //         rgba(255, 255, 255, 0) 0%,
                    //         rgba(255, 255, 255, 1) 100%
                    //     );
                    //     position: absolute;
                    //     width: 100%;
                    // } 

                `}</style>
            </div>
        );
    }

    console.log(blogArr);

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

