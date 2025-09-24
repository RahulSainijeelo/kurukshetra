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

export function NationSection() {
  const [nationArticles, setNationArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNationArticles = async () => {
      try {
        setLoading(true);
        // Fetch from the category API for Nation articles, limit to 2
        const response = await fetch('/api/articles/category/nation?limit=2&page=1');
        if (!response.ok) {
          throw new Error('Failed to fetch nation articles');
        }
        const data: ApiResponse = await response.json();
        setNationArticles(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNationArticles();
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
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 px-6 py-3 rounded-lg shadow-lg border-l-4 border-lime-400">
            <h2 className="text-2xl font-bold text-white tracking-wide flex items-center">
              <span className="mr-2">🇮🇳</span>
              BHARAT
              <span className="ml-2 text-sm bg-lime-400 text-green-800 px-2 py-1 rounded-full font-semibold">
                LATEST
              </span>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
              <div className="relative aspect-[16/10] bg-gray-200"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-200 rounded mb-2"></div>
                <div className="h-5 bg-gray-200 rounded mb-2 w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded mb-3 w-full"></div>
                <div className="flex items-center">
                  <div className="h-3 bg-gray-200 rounded w-20 mr-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error || nationArticles.length === 0) {
    return (
      <section className="bg-white">
        <div className="relative mb-6">
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 px-6 py-3 rounded-lg shadow-lg border-l-4 border-lime-400">
            <h2 className="text-2xl font-bold text-white tracking-wide flex items-center">
              <span className="mr-2">🇮🇳</span>
              BHARAT
              <span className="ml-2 text-sm bg-lime-400 text-green-800 px-2 py-1 rounded-full font-semibold">
                LATEST
              </span>
            </h2>
          </div>
        </div>
        <p className="text-gray-600 text-center py-8">
          {error ? `Error loading nation articles: ${error}` : 'No nation articles available'}
        </p>
        <div className="text-center">
          <Link 
            href="/nation" 
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-green-700 hover:to-emerald-700 transition-all shadow-md"
          >
            View all nation articles →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="relative mb-6">
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 px-6 py-3 rounded-lg shadow-lg border-l-4 border-lime-400">
          <h2 className="text-2xl font-bold text-white tracking-wide flex items-center">
            <span className="mr-2">🇮🇳</span>
            NATION
            <span className="ml-2 text-sm bg-lime-400 text-green-800 px-2 py-1 rounded-full font-semibold">
              LATEST
            </span>
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nationArticles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`} className="group">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.images[0]?.url || '/api/placeholder/400/250'}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                  NATION
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {article.description}
                  </p>
                )}
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {article.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="mr-4 font-medium">{article.author}</span>
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
          href="/nation" 
          className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:from-green-700 hover:to-emerald-700 transition-all shadow-md"
        >
          View all nation articles →
        </Link>
      </div>
    </section>
  );
}
