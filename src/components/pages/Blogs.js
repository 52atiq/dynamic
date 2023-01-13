import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../../data/data';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData)
    // console.log(blogs)

    const truncateString = (str, num) =>{
        if(str.length > num){
            return str.slice(0,num) + "..."
        } else{
            return str
        }
    }

    return (
        <div className='container'>
            <h2> Blog page </h2>
           
            <section className='grid xl:grid-cols-3 gap-4'>
                {blogs.map((blog) =>{
                    const {id, title1, body} = blog

                    return <article key={id} className="bg-teal-700 p-3">
                        <h3 className='text-2xl text-bold '>{title1}</h3>
                        <p>{truncateString(body, 30)}</p>
                        <Link className='text-white ' to={title1}> Learn More</Link>
                        
                    </article>
                })}
            </section>
        </div>
    );
};

export default Blogs;