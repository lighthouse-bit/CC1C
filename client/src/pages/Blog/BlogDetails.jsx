import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched blog details:", data);
        if (!data.success || !data.blog) throw new Error("Blog not found");
        setBlog(data.blog); 
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setError("Blog post not found.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!blog) return <p className="text-center text-red-500">No blog found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-12 px-6 mb-20">
      <Link to="/blog" className="text-blue-600 hover:underline">&larr; Back to Blog</Link>

      <h1 className="text-3xl font-bold text-blue-900 mt-4">{blog.title}</h1>
      <p className="text-gray-600 mt-2">By {blog.author || "Unknown"} - {new Date(blog.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      {blog.image && (
        <img src={blog.image} alt={blog.title} className="w-full mt-4 rounded-lg" />
      )}

      <p className="text-gray-800 mt-6 leading-relaxed whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
