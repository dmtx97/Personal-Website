import { useEffect, useState } from "react";

import API from '../api/express_requests';
import { getSlugifiedTitle } from '../utils';

export default function Archive(){
    const api = new API();
    const [blogArchive, setBlogArchive] = useState({domains:[]})


    useEffect(()=>{

        api.getBlogs()
        .then((rows)=>{


            let objArr = []
            for(var i in rows){
                const blog_title = rows[i].title;
                objArr.push({
                    "Title" : rows[i].title,
                    "Domain" : `blog/${rows[i].blog_id}/${getSlugifiedTitle(blog_title.toLowerCase())}`
                })
            }            
            setBlogArchive({domains : objArr});
        })
    }, []);

    // console.log(blogArchive.domains[0]["Title"]);

    return(

        <h4>hello</h4> 


    );

    
    
}