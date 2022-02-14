import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState } from "react";
import Moment from 'react-moment';

const BlogDetail = () => {
  const [blog, setBlog] = useState();
  const {id} = useParams();

  const baseURL = `http://localhost:8080/miniblog/backend/v1/blogs/${id}`;
  const headers = {
      'apikey': "2347edfd-c55c-4f59-96ee-600492f904f3",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  }
    
  useEffect(() => {
    axios.get(baseURL, { headers })
        .then((response) => {
          setBlog(response.data);
        });
    }, [id]);

  return (
    <div className={style["detail"]}>
      <img
        src={blog?.image}
        alt="image"
      />
      <div className={style["detail__body"]}>
        <div className={style["detail__body__header1"]}>{blog?.title}
        </div>
        <p className={style['detail__body__info']}>
        <Moment date={blog?.createdAt} format='DD MMM, YYYY' /> | {blog?.category} </p>
        <hr />
        <p className={style['detail__body__last-text']}>
          {blog?.detail}
        </p>
        <Link className={style["detail__body__touch"]} to="/">
        ← All posts
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
