import { useEffect, useState } from "react";
import Link from 'next/link';
import API from '../api/express_requests';
import { getSlugifiedTitle } from '../utils';

export default function Archive(){
    const api = new API();
    // const [blogArchive, setBlogArchive] = useState({domains:[]})
    const [blogArchive, setBlogArchive] = useState([]);


    useEffect(()=>{
        const currentPath = window.location.pathname;

        api.getBlogs()
        .then((rows)=>{
            let objArr = []
            for(var i in rows){
                const blog_title = rows[i].title;
                const domain = `/blog/${rows[i].blog_id}/${getSlugifiedTitle(blog_title.toLowerCase())}`

                if(currentPath != domain){
                    objArr.push(
                        <div>
                            <div className="archive">
                                <a href={`http://localhost:3000${domain}`} className="archiveTitle">{rows[i].title}</a>
                                {/* <hr/> */}
                                <style jsx>{`
                                    .archive{
                                        margin-bottom: 5px;
                                    }
                                    .archiveTitle {
                                        color: #808080;
                                    }
                                `}</style>
                            </div>
                        </div>
                    )
                }
            }            
        setBlogArchive(objArr);
        })
    }, []);

    return(
        <div>
            <div className="archived-container">
            <h4 style={{fontWeight: "300", fontSize:"1rem", marginTop: "0px", marginBottom:"10px" }} >
                Featured Blog Posts
            </h4>
                <h4 className="list">{blogArchive}</h4> 
            </div>
            <style jsx>{`
            .archived-container{
                padding-top: 16px;
                padding-bottom: 16px;
                padding-right: 20px;
                padding-left: 20px;
            }

            .list{
                font-weight: 300;
                font-size: 12px;
                margin: 0;
            }
            
            `}</style>
        </div>


    );

    
    
}