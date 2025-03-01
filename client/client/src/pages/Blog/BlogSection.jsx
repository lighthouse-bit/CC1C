import React from "react";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

const BlogSection = () => {
  const latestPosts = [
    {
      id: 1,
      title: "Advocating for Policies and Initiatives That Combat Gender-Based Violence and Discrimination",
      image: blog2,
      author: "Michael Ogbonna",
      date: "27th Jan, 2025",
    },
    {
      id: 2,
      title: "Advocating for Policies and Initiatives That Combat Gender-Based Violence and Discrimination",
      image: blog2,
      author: "Michael Ogbonna",
      date: "27th Jan, 2025",
    },
    {
      id: 3,
      title: "Advocating for Policies and Initiatives That Combat Gender-Based Violence and Discrimination",
      image: blog2,
      author: "Michael Ogbonna",
      date: "27th Jan, 2025",
    },
  ];

  return (
    <div className="mt-12 mx-auto px-6 max-w-6xl mb-20">
      {/* Blog Header */}
      <h1 className="text-xl font-bold text-blue-900 uppercase">Blog</h1>
      <hr className="my-2 border-gray-300" />

      {/* Featured Blog Post */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <img src={blog1} alt="Feature" className="w-full h-auto rounded-lg" />
        <div>
          <h3 className="text-lg font-bold text-blue-900">
            Promoting Women’s Empowerment and Leadership in Climate Resilience and Peace Building
          </h3>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet.
            Sed lectus interdum lectus tellus quam viverra.
          </p>
          <div className="flex items-center mt-4">
            <img src={blog3} alt="Author" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="text-blue-900 font-semibold">Michael Ogbonna</p>
              <p className="text-gray-500 text-sm">27th Jan, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="flex justify-between items-center mt-10">
        <h3 className="text-lg font-bold text-gray-900">Latest Posts</h3>
        <a href="#" className="text-blue-600 font-medium hover:underline">See All</a>
      </div>

      {/* Latest Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {latestPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
            <div className="p-4">
              <h4 className="text-blue-900 font-bold text-sm leading-tight">
                {post.title}
              </h4>
              <p className="text-gray-700 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet...
              </p>
              <div className="flex items-center mt-4">
                <img src={blog3} alt="Author" className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <p className="text-blue-900 font-semibold text-sm">{post.author}</p>
                  <p className="text-gray-500 text-xs">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
