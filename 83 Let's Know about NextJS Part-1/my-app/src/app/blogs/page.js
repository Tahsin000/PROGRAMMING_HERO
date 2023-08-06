import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};

const blogs = [
    {
        id: 1,
        year: 2016,
        title: "Title - 1" 
    },
    {
        id: 2,
        year: 2016,
        title: "Title - 2" 
    },
    {
        id: 3,
        year: 2016,
        title: "Title - 3" 
    },
]

const BlogsPage = () => {
  return <div className="container mx-auto">
    {
        blogs.map(item => <Link className="block border border-blue-500 p-3 my-2 " href={`/blogs/${item.year}/${item.id}`} key={item.id} >{item.title}</Link>)
    }
  </div>;
};

export default BlogsPage;
