import { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import API from '../api/';
import { getSlugifiedTitle } from '../utils';
import Tooltip from '@material-ui/core/Tooltip';

export default function Archive(){
    const api = new API();
    const [blogArchive, setBlogArchive] = useState([<p>No featured posts. Please check later!</p>]);

    useEffect(()=>{
        const currentPath = window.location.pathname;

        api.getBlogs()
        .then((rows)=>{
            let objArr = []

            for(var i in rows){

                const blog_title = rows[i].title;
                const domain = `/blog/${rows[i].blog_id}/${getSlugifiedTitle(blog_title.toLowerCase())}`

                if(currentPath != domain && rows.length > 1){
                    objArr.push(
                        <div>
                            <div className="archive">


                                <a href={`http://localhost:3000${domain}`} className="archiveTitle">{rows[i].title}</a>

                            </div>
                            <hr/>
                                <style jsx>{`

                                    div:last-child hr {
                                        display: none;
                                    }

                                    .archive{
                                        margin-bottom: 10px;
                                        width: 350px;
                                    }
                                    .archiveTitle {
                                        // text-decoration: underline;
                                        color: #23132D;
                                        font-weight: 300;
                                        display: block;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                    }

                                    @media screen and (max-width: 1700px) {
                                        .archive{
                                            width: 100%;
                                        }
                                    }

                                    @media screen and (max-width: 600px) {
                                        
                                        .archiveTitle{
                                            white-space: normal;
                                        }
                                    }

                                `}</style>
                        </div>
                    )
                }
            }
            // quick fix
            if(rows.length > 1){
                setBlogArchive(objArr);
            }
        })
    }, []);

    return(
            <div className="archived-container">
            <h4 style={{fontWeight: "500", fontSize:"1rem", marginTop: "0px", marginBottom:"10px" }} >
                Featured Blog Posts
            </h4>

                <div>
                    {blogArchive} 
                </div>

                <style jsx>{`
    
                .archived-container{
                    box-sizing: inherit;
                    padding-top: 16px;
                    padding-bottom: 16px;
                    padding-right: 20px;
                    padding-left: 20px;
                    width: 100%;
                }
    
                
                `}</style>
            </div>


    );

    
    
}