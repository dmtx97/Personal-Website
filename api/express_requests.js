import axios from 'axios';

const postOptions = {
  method: 'post',
}

const getOptions = {
  method: 'get',
}

export default class API{

  sendEmail(data){
    postOptions['url'] = '/api/contact-form';
    postOptions['data'] = data;
    axios(postOptions);
  }

  postBlogEntry(data){
    postOptions['url'] = '/api/post-blog-entry';
    postOptions['data'] = data;
    axios(postOptions);
  }

  async getBlogs(){
    getOptions['url'] = '/api/get-blogs';
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
}

