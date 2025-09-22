'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

export function DharmaSection() {
  const [dharmaArticles, setDharmaArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDharmaArticles = async () => {
      try {
        setLoading(true);
        // Fetch from the category API for Dharma articles, limit to 4
        const response = await fetch('/api/articles/category/dharm?limit=4&page=1');
        if (!response.ok) {
          throw new Error('Failed to fetch dharma articles');
        }
        const data: ApiResponse = await response.json();
        setDharmaArticles(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDharmaArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="bg-white">
        <div className="relative mb-6">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-6 py-3 rounded-lg shadow-lg border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold text-white tracking-wide flex items-center">
              <span className="mr-2">🕉️</span>
              DHARMA
              <span className="ml-2 text-sm bg-yellow-400 text-amber-800 px-2 py-1 rounded-full font-semibold">
                SPIRITUAL
              </span>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex space-x-4 animate-pulse">
              <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-200"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error || dharmaArticles.length === 0) {
    return (
      <section className="bg-white">
        <div className="relative mb-6">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-6 py-3 rounded-lg shadow-lg border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold text-white tracking-wide flex items-center">
              <span className="mr-2">🕉️</span>
              DHARMA
              <span className="ml-2 text-sm bg-yellow-400 text-amber-800 px-2 py-1 rounded-full font-semibold">
                SPIRITUAL
              </span>
            </h2>
          </div>
        </div>
        <p className="text-gray-600 text-center py-8">
          {error ? `Error loading dharma articles: ${error}` : 'No dharma articles available'}
        </p>
        <div className="text-center">
          <Link 
            href="/dharm" 
            className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
          >
            View all dharma articles →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="relative mb-6">
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-6 py-3 rounded-lg shadow-lg border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-white tracking-wide flex items-center">
            <span className="mr-2">🕉️</span>
            DHARMA
            <span className="ml-2 text-sm bg-yellow-400 text-amber-800 px-2 py-1 rounded-full font-semibold">
              SPIRITUAL
            </span>
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dharmaArticles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`} className="group">
            <div className="flex space-x-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300">
              <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md shadow-md border border-gray-200">
                <Image
                  src={article.images[0]?.url || '/api/placeholder/200/150'}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-1 right-1 bg-amber-600 text-white px-1 py-0.5 rounded text-xs font-bold">
                  धर्म
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-3 group-hover:text-amber-600 transition-colors mb-2">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {article.description}
                  </p>
                )}
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {article.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="mr-3 font-medium">{article.author}</span>
                  <span className="text-gray-400">{formatDate(article.publishDate)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <Link 
          href="/dharm" 
          className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
        >
          View all dharma articles →
        </Link>
      </div>
    </section>
  );
}
