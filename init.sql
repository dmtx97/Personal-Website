CREATE TABLE IF NOT EXISTS blogs (
    blog_id SERIAL,
    title character varying(200) NOT NULL,
    description character varying(500),
    date_recorded date NOT NULL,
    body text NOT NULL,
    CONSTRAINT "blogs_pkey" PRIMARY KEY (blog_id)
);

CREATE TABLE IF NOT EXISTS user (
    FirstName character varying(50) NOT NULL
    LastName character varying(50) NOT NULL
    Email character varying(50) NOT NULL,
    PasswordHash text NOT NULL
);