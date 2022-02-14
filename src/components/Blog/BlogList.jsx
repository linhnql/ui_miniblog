import React, { useEffect, useState } from 'react';
import Blog from "./index";
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const baseURL = `http://localhost:8080/miniblog/backend/v1/blogs`;
    const headers = {
        'apikey': "2347edfd-c55c-4f59-96ee-600492f904f3",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    useEffect(() => {
        axios.get(baseURL, { headers })
            .then((response) => {
                setBlogs(response.data);
            });
        }, []);

    console.log(blogs)

    return(
        <div className="blog-list">
            {
                blogs.map((blog) => {
                    console.log(blog);
                    return  <Blog key={blog.id} id={blog.id} image={blog.image} title={blog.title} intro={blog.intro} createdAt={blog.createdAt} category={blog.category} />
                })
            }
        </div>
    )
}

export default BlogList;