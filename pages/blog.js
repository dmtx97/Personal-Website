import Contact from '../components/Contact';
import Links from '../components/Links';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { useEffect, useState, Fragment } from 'react';
import BlogEntryForm from "../components/CreateBlog";
import { getSlugifiedTitle } from "../utils";
import ReactMarkdown from 'react-markdown';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DeleteBlog from '../components/DeleteBlog';
import 'github-markdown-css';

const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} showLineNumbers={true} style={ tomorrow }>{value}</SyntaxHighlighter>;
    };

//make this admin page instead... copy for front end view
export default function Blogs({blogPreviews}){

    const [deleteModalStatus, setDeleteModalStatus] = useState(false);
    const preview = [];
    const handleEdit = (id) =>{
        console.log("editing: ", id);
    }

    const handleDelete = (id) =>{
        console.log(deleteModalStatus)
        setDeleteModalStatus(true);
        console.log("deleting: ", id)
    }

    for(let i in blogPreviews){
        
        const blog_title = blogPreviews[i].title.toLowerCase();
        let uploadDate = new Date((blogPreviews[i].date_recorded)).toLocaleDateString('en-US', {timeZone: 'UTC'});
        let description = blogPreviews[i].description;

        preview.push(
            <div key={blogPreviews[i].blog_id}>

                <div className="preview">

                    <div className="head">
                        <h1 style={{marginTop: "16px", marginBottom: "2px"}}>
                            <Link href="/blog/[id]/[title]" as={`/blog/${blogPreviews[i].blog_id}/${getSlugifiedTitle(blog_title)}`}>
                                    <a className="blog-title" >{blogPreviews[i].title}</a>
                            </Link>
                        </h1>

                        <div className="modifyicons">
                            <EditIcon onClick={()=>handleEdit(blogPreviews[i].blog_id)} style={{cursor: "pointer", verticalAlign:"middle", marginRight: "4px", transform: "translatey(4px)", color: "#808080"}}/> 
                            <DeleteIcon onClick={()=>handleDelete(blogPreviews[i].blog_id)} style={{ cursor:"pointer", verticalAlign:"middle", marginLeft: "4px", transform: "translatey(4px)", color: "#808080"}}/> 
                        </div>
                    </div>

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
                        font-weight: 500;
                        // color: "#2D2B57";
                    }

                    .head h1{
                        display: inline;
                    }

                    .modifyicons{
                        float: right;
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
        <DeleteBlog deleteModalStatus={deleteModalStatus}/>
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
