import React from 'react';
import { useParams } from 'react-router-dom';

function BlogContent({ blogs }) {
  const { id } = useParams();
  let blog = {};

  // Ensure that blogs.data is defined and filter the blog based on the id
  if (blogs && blogs.data) {
    let arr = blogs.data.filter(blog => blog.id == id);
    blog = arr[0] || {}; // Use the first blog or an empty object if not found
  }

  console.log("Blog Object");
  console.log(blog);

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            {blog.coverImg && (
              <img src={`http://localhost:1337${blog.coverImg.url}`} className='img-fluid w-100' alt="" />
            )}
            <h1>{blog.blogTitle}</h1>
            <p>{blog.blogDesc}</p>
            <div>
              {blog.blogContent && blog.blogContent.map((item, index) => (
                <div key={index}>
                  {item.children.map((child, childIndex) => {
                    if (child.type === "text") {
                      return (
                        <p key={childIndex} style={{ fontWeight: child.bold ? "bold" : "normal" }}>
                          {child.text}
                        </p>
                      );
                    } else if (child.type === "h1") {
                      return <h1 key={childIndex}>{child.text}</h1>;
                    }
                    return null;
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            {blog.aurthorImg && (
              <img src={`http://localhost:1337${blog.aurthorImg.formats.large.url}`} className='img-fluid w-100' alt="" />
            )}
            <h3>{blog.aurthorName}</h3>
            <h5>{blog.aurthorDesc}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;