'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/header';

interface Article {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  publishDate: string;
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
  type: string;
}

export default function TopPicksPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<ApiResponse['pagination'] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchArticles = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/articles?type=top-picks&page=${page}&limit=12`);
      if (!response.ok) throw new Error('Failed to fetch articles');
      
      const data: ApiResponse = await response.json();
      setArticles(data.data);
      setPagination(data.pagination);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(1);
  }, []);

  const handlePageChange = (page: number) => {
    fetchArticles(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto !px-2 !py-4">
        <div className="border-b border-gray-200 pb-5 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Top Picks</h1>
          {pagination && (
            <p className="text-gray-300 mt-2">
              Showing {((currentPage - 1) * pagination.limit) + 1} - {Math.min(currentPage * pagination.limit, pagination.totalCount)} of {pagination.totalCount} articles
            </p>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="aspect-[16/10] bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/article/${article.id}`} className="group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.images[0]?.url || '/api/placeholder/400/250'}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 text-xs font-medium rounded">
                        Top Pick
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
                            <span className="text-xs font-medium">
                              {article.author.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span>{article.author}</span>
                        </div>
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      
                      <div className="mt-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!pagination.hasPrev}
                  className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                {[...Array(pagination.totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 ||
                    page === pagination.totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 border rounded-md ${
                          page === currentPage
                            ? 'bg-orange-600 text-white border-orange-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 3 ||
                    page === currentPage + 3
                  ) {
                    return <span key={page} className="px-2">...</span>;
                  }
                  return null;
                })}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!pagination.hasNext}
                  className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {!loading && articles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Top Picks Available</h3>
            <p className="text-gray-600">Check back later for our top picks!</p>
          </div>
        )}
      </div>
    </main>
  );
}