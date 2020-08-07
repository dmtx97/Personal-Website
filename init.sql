CREATE TABLE IF NOT EXISTS blogs (
    blog_id SERIAL,
    title character varying(200) NOT NULL,
    description character varying(500),
    date_recorded date NOT NULL,
    body text NOT NULL,
    CONSTRAINT "blogs_pkey" PRIMARY KEY (blog_id)
);