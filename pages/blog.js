import Contact from '../components/Contact';
import Links from '../components/Links';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import "../style/pages/blogs.scss";
import { useEffect, useState, Fragment } from 'react';
import BlogEntryForm from "../components/CreateBlog";

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

export async function getServerSideProps(context) {
    const fs = require('fs');

    const res = await fetch('http://localhost:3000/api/get-blogs');
    const blogPreviews = await res.json()
    let blogArr = {domains: []}

    for(var i in blogPreviews){
        const blog_title = blogPreviews[i].title.toLowerCase();
        blogArr.domains.push(`blog/${blogPreviews[i].blog_id}/${getSlugifiedTitle(blog_title)}`);
    }

    var json = JSON.stringify(blogArr);
    fs.writeFile('blog-domains.json', json, 'utf8', (err)=>{
        if(err) return console.log(err);
        console.log('file written');
    });

    return {
        props: { blogPreviews }
    };   
}

function getSlugifiedTitle(blog_title){
    blog_title = blog_title.replace(/[^a-zA-Z0-9 /]/g, "")
    blog_title = blog_title.replace("/", "-")
    blog_title = blog_title.replace(/[^a-zA-Z0-9]/g, "-");
    return blog_title;
}