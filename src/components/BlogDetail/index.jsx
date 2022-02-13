import React from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import axios from 'axios';

const BlogDetail = () => {
  return (
    <div className={style["detail"]}>
      <img
        src="https://chamsocxehoi.org/wp-content/uploads/2020/11/Photographer.jpg"
        alt="image"
      />
      <div className={style["detail__body"]}>
        <div className={style["detail__body__header1"]}>
          Facilis eveniet dolor ipsa maxime veniam eum assumenda deleniti fuga
        </div>
        <p className={style['detail__body__info']}>June 25, 2020 | ART</p>
        <hr />
        <p>
          The rich text elements allows you to create and format headings,
          paragraph, blockquotes, image. and video all in one place onstead of
          having to add and format them individually. Just double-click and
          easily create content.
        </p>
        <div className={style["detail__body__header2"]}>
          Something else here
        </div>
        <p className={style['detail__body__last-text']}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          corrupti? Soluta sed quidem unde minus. Facilis eveniet dolor ipsa
          maxime veniam eum assumenda deleniti fuga aperiam corporis commodi,
          cum consequatur?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quibusdam quidem, ea excepturi quod, porro, ut id voluptate dicta
          placeat suscipit vero nam voluptas ab distinctio nobis voluptatibus
          nemo facere!
        </p>
        <Link className={style["detail__body__touch"]} to="/">
        ← All posts
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
