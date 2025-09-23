'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

interface Article {
  id: string;
  title: string;
  timeAgo?: string;
  publishDate: string;
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
  type: string;
}

export function LatestReleaseSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        setLoading(true);
        // Fetch only 3 articles for homepage display
        const response = await fetch('/api/articles?type=latest&limit=3');
        if (!response.ok) {
          throw new Error('Failed to fetch latest news');
        }
        const data: ApiResponse = await response.json();
        setArticles(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  if (loading) {
    return (
      <section className="bg-white">
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Release</h2>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="py-3 border-b border-gray-100 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white">
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest news</h2>
        </div>
        <p className="text-red-600">Error loading latest news: {error}</p>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="border-l-4 border-orange-500 pl-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest articles</h2>
      </div>
      
      <div className="space-y-4">
        {articles.map((article) => (
          <Link 
            key={article.id} 
            href={`/article/${article.id}`} 
            className="group block py-3 border-b border-gray-100 last:border-b-0"
          >
            <h5 className="text-gray-900 font-medium group-hover:text-orange-600 transition-colors mb-1 leading-relaxed">
              {article.title}
            </h5>
            <p className="text-sm text-gray-500">
              {article.timeAgo || 'Recently published'}
            </p>
          </Link>
        ))}
        
        {articles.length > 0 && (
          <Link 
            href="/article/latest" 
            className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
          >
            View all latest articles →
          </Link>
        )}
      </div>
    </section>
  );
}