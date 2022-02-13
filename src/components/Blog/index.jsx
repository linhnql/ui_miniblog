import React from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.scss";

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
        <div className={style["blog__body__info"]}>June 25, 2020 | ART</div>
        <span>
          The rich text elements allows you to create and format headings,
          paragraph, blockquotes, image. and video all in one place onstead of
          having to add and format.<span> </span>
          <Link className={style["blog__body__info"]} to="/id">
            Read more...
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Blog;
