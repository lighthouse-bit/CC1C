import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import founder3 from "../../assets/founder3.jpg"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched blog data:", data);
        if (!data.success || !Array.isArray(data.blogs)) {
          throw new Error("Invalid response format");
        }
        setBlogs(data.blogs);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (blogs.length === 0) return <p className="text-center">No blog posts available.</p>;

  return (
    <div className="mt-12 mx-auto px-6 max-w-6xl mb-20">
      <h1 className="text-xl font-bold text-blue-900 uppercase">Blog</h1>
      <hr className="my-2 border-gray-300" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {blogs.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
            <div className="p-4">
              <h4 className="text-blue-900 font-bold text-sm leading-tight">{post.title}</h4>
              <p className="text-gray-700 text-sm mt-2">
                {post.content ? post.content.substring(0, 100) : ""}...
              </p>
              <div className="flex items-center mt-4">
                <img 
                src={post.authorImage}
                alt={post.author} 
                className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-blue-900 font-semibold text-sm">{post.author}</p>
                <p className="text-gray-500 text-xs ml-2">{new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
