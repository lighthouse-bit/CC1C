import React, { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mt-12 mx-auto px-6 max-w-6xl mb-20">
      <h1 className="text-xl font-bold text-blue-900 uppercase">Blog</h1>
      <hr className="my-2 border-gray-300" />

      {/* Error Handling */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-700">Loading blogs...</p>
      ) : (
        <>
          {/* Featured Blog Post (First Blog) */}
          {blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <img src={blogs[0].image} alt="Feature" className="w-full h-auto rounded-lg" />
              <div>
                <h3 className="text-lg font-bold text-blue-900">{blogs[0].title}</h3>
                <p className="text-gray-700 mt-2">{blogs[0].content.substring(0, 150)}...</p>
                <div className="flex items-center mt-4">
                  <img src={blogs[0].authorImage || "/default-author.png"} alt="Author" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="text-blue-900 font-semibold">{blogs[0].author}</p>
                    <p className="text-gray-500 text-sm">{new Date(blogs[0].created_at).toDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Latest Posts Section */}
          <div className="flex justify-between items-center mt-10">
            <h3 className="text-lg font-bold text-gray-900">Latest Posts</h3>
            <a href="#" className="text-blue-600 font-medium hover:underline">See All</a>
          </div>

          {/* Latest Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {blogs.slice(1).map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-auto" />
                <div className="p-4">
                  <h4 className="text-blue-900 font-bold text-sm leading-tight">{post.title}</h4>
                  <p className="text-gray-700 text-sm mt-2">{post.content.substring(0, 100)}...</p>
                  <div className="flex items-center mt-4">
                    <img src={post.authorImage || "/default-author.png"} alt="Author" className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <p className="text-blue-900 font-semibold text-sm">{post.author}</p>
                      <p className="text-gray-500 text-xs">{new Date(post.created_at).toDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogSection;
