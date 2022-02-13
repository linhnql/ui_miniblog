import React, { useEffect, useState } from 'react';
import Blog from "./index";
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
      axios.get("http://localhost:8080/miniblog/backend/v1/blogs", {
        headers: {
            apikey: "2347edfd-c55c-4f59-96ee-600492f904f3",
            'Access-Control-Allow-Origin': '*'
        }
      }).then((item) => {
            console.log(item);
      });
    }, [page]);
    

    return(
        <div className="blog-list">
            {
                blogs.map((blog) => {
                    return <Blog key={blog.id} blog={blog}/>
                })
            }
        </div>
    )
}

export default BlogList;