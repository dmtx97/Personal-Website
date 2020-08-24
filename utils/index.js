export function getSlugifiedTitle(blog_title){
    blog_title = blog_title.replace(/[^a-zA-Z0-9 /]/g, "")
    blog_title = blog_title.replace("/", "-")
    blog_title = blog_title.replace(/[^a-zA-Z0-9]/g, "-");
    return blog_title;
}

export function isValidEmail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(email)){
        return true;
    }

    else{
        alert("Please enter a vaild email address.");
        return false;
    }
}