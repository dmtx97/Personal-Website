import API from '../../../api/express_requests';
import { useEffect } from 'react';
import Layout from '../../../components/layout/Layout';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Contact from '../../../components/Contact';
import Archive from '../../../components/Archive';
// import "../../../style/pages/blogs.scss";
import 'github-markdown-css';

const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} showLineNumbers={true} style={ tomorrow }>{value}</SyntaxHighlighter>;
    };

export default function Blog({blog}){    
    
    return(
        <Layout>
                <div className="content" style={{paddingTop: "60px"}}>
                    <div className="mainparent">
                        <aside className="sidebarright">
                            <div className="column">
                                <div className="links">
                                    <Archive/>
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
                                    <p className="post-date">Posted on {new Date(blog.date_recorded).toLocaleDateString()}</p>

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
                        // .main {
                        //     background: white;
                        //     box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
                        //     border-radius: 4px;
                        //     color: #333;
                        //     font-size: 16px;
                        //     -webkit-font-smoothing: antialiased;
                        //     -moz-osx-font-smoothing: grayscale;  
                        // }

                        .title{
                            font-size: 35px;
                            // color: #2D2B57;
                            // text-align: center;
                            margin-top: 0px;
                            margin-bottom: 0px;
                        }

                        // @media screen and (max-width: 1700px){

                        //     .content{
                        //         padding: 0;
                        //     }
                        //     .content {
                        //         margin-top: 10px;
                        //         margin-left: 50px;
                        //         margin-right: 50px;
                        //         //fix marginal issue for blog content
                        //     }

                        //     .blog .title{
                        //         font-size: 2.2em;
                        //         text-align: left;
                        //     }
                        // }

                        // @media screen and (max-width: 600px){
                        //     .content {
                        //         margin-left: 15px;
                        //         margin-right: 15px;
                        //     }
        
                        //     .post-date{
                        //         margin: 0;
                        //     }

                        //     .blog{
                        //         margin: auto;
                        //     }
                        // }

                    `}</style>
                </div>
        </Layout>
    )
}

export async function getServerSideProps(context){

    const api = new API();
    const blog_id = context.query.id
    const res = await api.getBlog(blog_id)

    return{
        props: {
            blog: res
        },
    }
}