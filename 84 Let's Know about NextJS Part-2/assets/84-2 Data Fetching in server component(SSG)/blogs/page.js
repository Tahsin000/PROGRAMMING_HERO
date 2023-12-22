// "use client"
import Link from "next/link";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};

const BlogsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"force-cache"});
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  const blogs = await res.json();
  console.log(blogs);
  // const router = useRouter();
  return (
    <div className="container mx-auto ">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="border border-blue-500 p-3 my-2">
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link className="inline-block " href={`/blogs/${id}`}>
            <button className="text-white px-2 py-1 bg-blue-500">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
