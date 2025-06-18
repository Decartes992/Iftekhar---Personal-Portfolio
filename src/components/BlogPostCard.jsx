import React from 'react';

const BlogPostCard = ({ post }) => {
  const formattedDate = new Date(post.data.pubDate || post.data.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/40 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-bg-dark-elevated"
      aria-label={`Read more about ${post.data.title}`}
    >
      <h3 className="text-2xl font-bold mb-3 text-text-headings dark:text-text-dark-headings group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">{post.data.title}</h3>
      <p className="text-text-muted dark:text-text-dark-muted text-sm mb-4">{formattedDate}</p>
      {post.data.description && <p className="text-text-secondary dark:text-text-dark-secondary mb-4 leading-relaxed">{post.data.description}</p>}
      {post.data.tags && post.data.tags.length > 0 && (
        <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-border dark:border-border-dark/50">
          {post.data.tags.map((tag) => (
            <span key={tag} className="text-xs bg-tag-bg dark:bg-tag-dark-bg text-tag-text dark:text-tag-dark-text px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};

export default BlogPostCard;