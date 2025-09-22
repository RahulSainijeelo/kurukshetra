'use client';

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Calendar, User, Eye, Share2, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  author: string;
  category: string;
  description?: string;
  shortDescription?: string;
  content: string;
  publishDate: string;
  images?: Array<{
    url: string;
    deleteUrl: string;
    preference?: string;
  }>;
  views?: number;
}

interface ArticleViewProps {
  article: Article;
}

export function ArticleView({ article }: ArticleViewProps) {
  const [viewCount, setViewCount] = useState(article.views || 0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Increment view count when article is loaded
    const incrementView = async () => {
      try {
        await fetch(`/api/articles/${article.id}/view`, {
          method: 'POST',
        });
        setViewCount(prev => prev + 1);
      } catch (error) {
        console.error('Error incrementing view count:', error);
      }
    };

    incrementView();
  }, [article.id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description || article.shortDescription,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: Implement bookmark functionality with backend
  };

  return (
    <article className="bg-white">
      {/* Featured Image */}
      {article.images && article.images.length > 0 && (
        <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={article.images[0].url} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4">
          <Badge className="bg-orange-500 text-white mb-4 text-sm px-3 py-1">
            {article.category}
          </Badge>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
          {article.description || article.shortDescription}
        </p>
        
        {/* Article Meta */}
        <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {article.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{article.author}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{formatDate(article.publishDate)}</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-500">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{viewCount.toLocaleString()} views</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
              className="flex items-center space-x-1"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
            <Button 
              variant={isBookmarked ? "default" : "outline"}
              size="sm" 
              onClick={toggleBookmark}
              className="flex items-center space-x-1"
            >
              <BookmarkPlus className="w-4 h-4" />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <ContentPreview content={article.content} />
      </div>
      
      {/* Additional Images Gallery */}
      {article.images && article.images.length > 1 && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {article.images.slice(1).map((image, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={image.url} 
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Article Footer */}
      <footer className="border-t border-gray-200 pt-8">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {article.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">About {article.author}</h4>
              <p className="text-gray-600">Contributing Author at Kurukshetra</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {article.author} is a dedicated journalist committed to bringing truth and authentic narratives 
            to light. Their work focuses on uncovering facts and presenting them with integrity and clarity.
          </p>
        </div>
      </footer>
    </article>
  );
}

// Content Preview Component (same as StageThree)
function ContentPreview({ content }: { content: string }) {
  useEffect(() => {
    // Load Twitter widget script after component mounts
    if (window.twttr) {
      window.twttr.widgets.load();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.head.appendChild(script);
    }
  }, [content]);

  if (!content) {
    return <p className="text-gray-500 italic">No content available.</p>;
  }

  // Process the content for preview (same logic as StageThree)
  let processedContent = content
    // Handle YouTube embeds
    .replace(/\[YOUTUBE\](https:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))\[\/YOUTUBE\]/g, 
      (match, url, videoId) => {
        return `<div class="my-8">
          <div class="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-lg overflow-hidden border shadow-sm">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/${videoId}" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              class="w-full h-full">
            </iframe>
          </div>
        </div>`;
      })
    // Handle Twitter embeds with actual Twitter widget
    .replace(/\[TWITTER\](https:\/\/(?:twitter\.com|x\.com)\/(\w+)\/status\/(\d+))\[\/TWITTER\]/g,
      (match, url, username, tweetId) => {
        return `<div class="my-8 flex justify-center">
          <blockquote class="twitter-tweet" data-theme="light" data-width="550" data-dnt="true">
            <p lang="en" dir="ltr">Loading tweet...</p>
            <a href="${url}">View Tweet</a>
          </blockquote>
        </div>`;
      })
    // Handle basic markdown formatting
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-800">$1</em>')
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-orange-300 pl-6 py-2 my-6 bg-orange-50 italic text-gray-700 rounded-r-lg">$1</blockquote>')
    .replace(/^- (.*$)/gim, '<li class="list-disc ml-6 mb-1 text-gray-800">$1</li>');

  // Convert line breaks to paragraphs
  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const htmlContent = paragraphs.map(paragraph => {
    if (paragraph.includes('<div class="my-8">') || 
        paragraph.includes('<blockquote') || 
        paragraph.includes('<li class="list-disc')) {
      return paragraph;
    }
    return `<p class="mb-6 leading-relaxed text-gray-800 text-lg">${paragraph.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="twitter-content"
    />
  );
}

// TypeScript declaration for Twitter widget
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  }
}