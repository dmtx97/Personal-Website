CREATE TABLE IF NOT EXISTS blogs (
    blog_id SERIAL,
    title character varying(200) NOT NULL,
    description character varying(500),
    date_recorded date NOT NULL,
    body text NOT NULL,
    CONSTRAINT "blogs_pkey" PRIMARY KEY (blog_id)
);

CREATE TABLE IF NOT EXISTS daniel (
    firstName character varying(50) NOT NULL,
    lastName character varying(50) NOT NULL,
    email character varying(320) NOT NULL UNIQUE,
    passwordHash text NOT NULL
);