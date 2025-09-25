'use client';

import Image from "next/image";
import Link from "next/link";

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

interface NationSectionProps {
  articles: Article[];
  error?: string;
}

export function NationSection({ articles, error }: NationSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (error || !articles || articles.length === 0) {
    return (
      <section className="bg-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="mr-3 text-2xl">🇮🇳</span>
            BHARAT
          </h2>
          <div className="w-16 h-1 bg-green-600 mt-2"></div>
        </div>
        <p className="text-gray-600 text-center py-8">
          {error || 'No nation articles available'}
        </p>
        <div className="text-center">
          <Link 
            href="/category/nation" 
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
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
          <span className="mr-3 text-2xl">🇮🇳</span>
          BHARAT
        </h2>
        <div className="w-16 h-1 bg-green-600 mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
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
                  BHARAT
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

      <div className="text-center mt-6">
        <Link 
          href="/category/nation" 
          className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:from-green-700 hover:to-emerald-700 transition-all shadow-md"
        >
          View all nation articles →
        </Link>
      </div>
    </section>
  );
}
