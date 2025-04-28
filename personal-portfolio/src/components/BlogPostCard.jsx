import React from 'react';

const BlogPostCard = ({ post }) => {
  const formattedDate = new Date(post.data.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <a href={`/blog/${post.slug}`} className="block border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <h3 className="text-xl font-semibold mb-2">{post.data.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{formattedDate}</p>
      {post.data.description && <p className="text-gray-700">{post.data.description}</p>}
    </a>
  );
};

export default BlogPostCard;