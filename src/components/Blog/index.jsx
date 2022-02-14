import React from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import Moment from 'react-moment';

const Blog = (blog) => {
  return (
    <div className={style["blog"]}>
      <img
        src={blog.image}
        alt="image"
      />
      <div className={style["blog__body"]}>
        <div className={style["blog__body__title"]}>
          {blog.title}
        </div>
        {console.log(blog.id)}
        <div className={style["blog__body__info"]}><Moment date={blog.createdAt} format='DD MMM, YYYY' /> | {blog.category} </div>
        <span> 
          { blog.intro }
          <span> </span>
          <Link className={style["blog__body__info"]} to={`/blogs/${blog.id}`}>
            Read more...
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Blog;
