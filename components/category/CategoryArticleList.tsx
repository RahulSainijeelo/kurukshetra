'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Article {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  publishDate: string;
  timeAgo?: string;
  images: Array<{
    url: string;
    deleteUrl: string;
    preference?: string;
  }>;
}

interface ApiResponse {
  data: Article[];
  pagination: {
    currentPage: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  category: string;
}

interface CategoryArticleListProps {
  category: string;
  page: number;
}

export function CategoryArticleList({ category, page }: CategoryArticleListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<ApiResponse['pagination'] | null>(null);

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/articles/category/${category}?page=${page}&limit=10`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setArticles(data.data || []);
        setPagination(data.pagination);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryArticles();
  }, [category, page]);

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="aspect-video bg-gray-200"></div>
              </div>
              <div className="p-6 md:w-2/3">
                <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded mb-3 w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
        <p className="text-gray-600">No articles available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Show pagination info */}
      {pagination && (
        <div className="text-sm text-gray-600 mb-6">
          Showing {((pagination.currentPage - 1) * pagination.limit) + 1} - {Math.min(pagination.currentPage * pagination.limit, pagination.totalCount)} of {pagination.totalCount} articles
        </div>
      )}

      {articles.map((article, index) => (
        <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <Link href={`/news/${article.id}`} className="group">
            <div className="md:flex">
              {/* Article Image */}
              <div className="md:w-1/3">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.images[0]?.url || '/api/placeholder/400/250'}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6 md:w-2/3">
                <div className="mb-3">
                  <Badge className="bg-orange-100 text-orange-800">
                    {article.category}
                  </Badge>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-xs font-medium">
                        {article.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium mr-4">{article.author}</span>
                  </div>
                  <span>{article.timeAgo}</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
