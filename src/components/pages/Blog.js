import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from '../../data/data';


const Blog = () => {
    const {atiqk} = useParams();
    // const {title} = useParams();
    const [bodyData, setBodyData] = useState("");

    useEffect(()=>{
       const blogData = blogsData.filter((blog)=> blog.title1 === atiqk);
       setBodyData(blogData[0].body)
    }, [])

    return (
      <div className="container">
        <h2>{atiqk} page</h2>
        <p>{bodyData.slice(0,30)}</p>
      </div>
    );
};

export default Blog;