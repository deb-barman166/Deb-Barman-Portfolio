import React, { useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Folder, Share2, Facebook, Twitter, Linkedin, Instagram, Image as ImageIcon } from 'lucide-react';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const [showShare, setShowShare] = useState(false);

  const shareUrl = project.link && project.link !== '#' ? project.link : window.location.href;
  const shareTitle = `Check out this project: ${project.title}`;

  const handleShare = (platform: string) => {
    let url = '';
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'instagram':
        navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard for Instagram sharing!");
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
    setShowShare(false);
  };

  return (
    <div 
      className="group relative bg-gamma-card/40 border border-gamma-border rounded-xl overflow-visible hover:border-gamma-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gamma-primary/10 animate-fade-in-up flex flex-col"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gamma-primary to-gamma-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10 rounded-t-xl"></div>

      {/* Image / Placeholder Area */}
      <div className="h-48 w-full relative rounded-t-xl overflow-hidden border-b border-gamma-border/50">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative group-hover:bg-gray-900/80 transition-colors">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(66,133,244,0.1),transparent)]"></div>
            <div className="text-gamma-border/20 group-hover:text-gamma-primary/20 transition-colors">
               <ImageIcon className="w-16 h-16" />
            </div>
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>
        )}
        
        {/* Overlay gradient for text readability transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-gamma-card/90 to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-gamma-bg/50 backdrop-blur rounded-lg border border-gamma-border group-hover:border-gamma-primary/30 transition-colors -mt-10 z-10 shadow-lg">
            <Folder className="w-6 h-6 text-gamma-primary" />
          </div>
          <div className="flex space-x-3 items-center relative">
             {/* Share Menu */}
             <div className="relative">
                <button 
                  onClick={() => setShowShare(!showShare)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                
                {showShare && (
                  <div className="absolute top-8 right-0 bg-gamma-card border border-gamma-border p-2 rounded-lg shadow-xl z-50 flex flex-col gap-2 min-w-[40px] animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                    <button onClick={() => handleShare('facebook')} className="text-gray-400 hover:text-[#1877F2] transition-colors" title="Share on Facebook">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-gray-400 hover:text-[#1DA1F2] transition-colors" title="Share on Twitter">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-gray-400 hover:text-[#0077b5] transition-colors" title="Share on LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('instagram')} className="text-gray-400 hover:text-pink-500 transition-colors" title="Copy Link for Instagram">
                      <Instagram className="w-5 h-5" />
                    </button>
                  </div>
                )}
             </div>

            {project.github && (
              <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gamma-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gamma-muted text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gamma-border/30">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-mono text-gamma-primary/80 bg-gamma-primary/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;