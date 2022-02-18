import React, { useEffect, useState, useMemo } from "react";
import Blog from "./index";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import style from './styles.module.scss'
import { Link } from "react-router-dom";

let PageSize = 4;

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  const baseURL = `http://localhost:8082/miniblog/backend/v1/blogs`;
  const headers = {
    apikey: "2347edfd-c55c-4f59-96ee-600492f904f3",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    console.log(lastPageIndex);
    return blogs.slice(firstPageIndex, lastPageIndex);
  }, [blogs, currentPage]);

  useEffect(() => {
    axios.get(baseURL, { headers }).then((response) => {
      setBlogs( response.data);
    });
  }); 
  
  return (
    <div className={style["list"]}>
      {currentData.map((blog) => {
        return (
          <Blog 
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            intro={blog.intro}
            createdAt={blog.createdAt}
            category={blog.category}
          />
        );
      })}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={blogs.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <Link className={style['button']} to="/blogs"><span className={style['tooltip']}>Add blog</span></Link>
    </div>
  );
};

export default BlogList;
