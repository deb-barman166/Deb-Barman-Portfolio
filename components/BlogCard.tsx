import React from 'react';
import { BlogPost } from '../types';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface Props {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<Props> = ({ post, index }) => {
  return (
    <div 
      className="flex flex-col h-full bg-gamma-card/20 border border-gamma-border/50 rounded-lg p-6 hover:bg-gamma-card/40 transition-all duration-300 group cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center justify-between mb-4 text-xs font-mono text-gamma-muted">
        <span className="text-gamma-accent">{post.category}</span>
        <div className="flex items-center space-x-3">
            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gamma-primary transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow">
        {post.excerpt}
      </p>
      
      <div className="flex items-center text-gamma-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
        Read Article <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </div>
  );
};

export default BlogCard;