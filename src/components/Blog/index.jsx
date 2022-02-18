import React from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import Moment from "react-moment";

const Blog = (blog) => {
  return (
    <div className={style["blog"]}>
      <div className={style["blog__img"]}>
        <img src={blog.image} alt="image" />
      </div>
      
      <div className={style["blog__body"]}>
        <Link className={style["blog__body__title"]} to={`/blogs/${blog.id}`}>
          {blog.title}
        </Link>

        <div className={style["blog__body__info"]}>
          <Moment date={blog.createdAt} format="DD MMM, YYYY" /> |{" "}
          {blog.category}
        </div>

        <span>
          {blog.intro}
          <span> </span>
        </span>

        <Link className={style["blog__body__read"]} to={`/blogs/${blog.id}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default Blog;
