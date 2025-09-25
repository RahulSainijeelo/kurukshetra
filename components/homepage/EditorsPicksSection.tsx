'use client';

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  images: Array<{
    url: string;
    deleteUrl: string;
    preference?: string;
  }>;
  description?: string;
  category?: string;
}

interface EditorsPicksSectionProps {
  article: Article | null;
  error?: string;
}

export function EditorsPicksSection({ article, error }: EditorsPicksSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  if (error || !article) {
    return (
      <section className="bg-white">
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Editor's Picks</h2>
        </div>
        <p className="text-gray-600">
          {error || 'No editor\'s picks available'}
        </p>
        <Link 
          href="/focus/editors-choice" 
          className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
        >
          View all editor's picks →
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="border-l-4 border-orange-500 pl-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Editor's Picks</h2>
      </div>
      
      <Link href={`/article/${article.id}`} className="group block">
        <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg">
          <Image
            src={article.images[0]?.url || '/api/placeholder/400/250'}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-blue-600 text-white">
              {article.category}
            </Badge>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-3">
          {article.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4">{article.author}</span>
          <span>{formatDate(article.publishDate)}</span>
        </div>
      </Link>

      <Link 
        href="/focus/editors-choice" 
        className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
      >
        View all editor's picks →
      </Link>
    </section>
  );
}
