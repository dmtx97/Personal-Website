export function getSlugifiedTitle(blog_title){
    blog_title = blog_title.replace(/[^a-zA-Z0-9 /]/g, "")
    blog_title = blog_title.replace("/", "-")
    blog_title = blog_title.replace(/[^a-zA-Z0-9]/g, "-");
    return blog_title;
}