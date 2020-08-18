import axios from 'axios';
import Cookie from 'js-cookie';

const postOptions = {
  method: 'post',
}

const getOptions = {
  method: 'get',
}

const deleteOptions = {
  method: 'delete',
}

const cookie = Cookie.get("authToken");

export default class API{


  sendEmail(data){
    postOptions['url'] = '/api/contact-form';
    postOptions['data'] = data;
    axios(postOptions);
  }
  
  verifyUser(data){
    postOptions['url'] = 'api/verifyuser';
    postOptions['data'] = data;
    axios(postOptions).then( res =>{
      if(res.status != 200){
        alert("Incorrect Password/Login");
        console.log(res.data.message)
      }

      else{
        Cookie.set("authToken", res.data.authToken);
        console.log(res.data.authToken)
        window.location = "/blog-portal"
      }
    });
  }

  //BLOG
  async getBlogs(){

    getOptions['url'] = 'http://localhost:3000/api/get-blogs';

    try {
      const res = await axios(getOptions);
      return res.data;
    }
    catch (error) {
      return error;
    }
  }

  async getBlog(blog_id){
    //getServerSideProps tries to create custom server
    getOptions['url'] = `http://localhost:3000/api/get-blog/${blog_id}`;
    try {
      const res = await axios(getOptions);
      return res.data;
    }
    catch (error) {
      return error;
    }
  }

  postBlogEntry(data){
    postOptions['url'] = '/api/post-blog-entry';
    postOptions['data'] = data;
    postOptions['headers'] = {"Authorization" : `Bearer ${cookie}`}
    axios(postOptions)
    .then(setTimeout(()=>{
      window.location.reload()
    }, 200))
  }

  updateBlogEntry(blog_id, data){
    postOptions['url'] = `/api/update-blog-entry/${blog_id}`;
    postOptions['data'] = data;
    postOptions['headers'] = {"Authorization" : `Bearer ${cookie}`}
    axios(postOptions)
    .then(setTimeout(()=>{
      window.location.reload()
    }, 200))
  }

  deleteBlogEntry(blog_id){
    deleteOptions['url'] = `/api/delete-blog-entry/${blog_id}`;
    deleteOptions['headers'] = {"Authorization" : `Bearer ${cookie}`}
    axios(deleteOptions)
    .then(setTimeout(()=>{
      window.location.reload()
    }, 200))
  }
}

