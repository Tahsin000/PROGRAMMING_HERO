// "use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};

const blogs = [
  {
    id: 1,
    year: 2016,
    title: "Title - 1",
  },
  {
    id: 2,
    year: 2016,
    title: "Title - 2",
  },
  {
    id: 3,
    year: 2016,
    title: "Title - 3",
  },
];

const BlogsPage = () => {
  // const router = useRouter();
  return (
    <div className="container mx-auto">
      {blogs.map(({id, year, title}) => (
        <Link
          className="block border border-blue-500 p-3 my-2 "
          href={{
            pathname: `/blogs/${year}/${id}`,
            params: {
              query:{
                title:title,
              },
            },
          }}
          // onClick={()=>router.push(`/blogs/${year}/${id}?title=${title}`)}
          key={id}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
