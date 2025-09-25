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

interface DharmaSectionProps {
  category: string;
  title: string;
  tag?: string;
  emoji?: string;
  articles: Article[];
  error?: string;
}

export function DharmaSection({ category, title, tag, emoji, articles, error }: DharmaSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Get color scheme with complete class names
  const getColorScheme = () => {
    const schemes = {
      dharm: { 
        underlineColor: 'bg-orange-600',
        tagBg: 'bg-orange-600 bg-opacity-10',
        tagText: 'text-orange-600',
        buttonBg: 'bg-orange-600 hover:bg-orange-700',
        hoverBg: 'hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50',
        iconBg: 'bg-orange-600',
        textHover: 'group-hover:text-orange-600',
        categoryBg: 'bg-orange-600'
      },
      history: { 
        underlineColor: 'bg-purple-600',
        tagBg: 'bg-purple-600 bg-opacity-10',
        tagText: 'text-purple-600',
        buttonBg: 'bg-purple-600 hover:bg-purple-700',
        hoverBg: 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50',
        iconBg: 'bg-purple-600',
        textHover: 'group-hover:text-purple-600',
        categoryBg: 'bg-purple-600'
      },
      politics: { 
        underlineColor: 'bg-red-600',
        tagBg: 'bg-red-600 bg-opacity-10',
        tagText: 'text-red-600',
        buttonBg: 'bg-red-600 hover:bg-red-700',
        hoverBg: 'hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50',
        iconBg: 'bg-red-600',
        textHover: 'group-hover:text-red-600',
        categoryBg: 'bg-red-600'
      },
      globe: { 
        underlineColor: 'bg-blue-600',
        tagBg: 'bg-blue-600 bg-opacity-10',
        tagText: 'text-blue-600',
        buttonBg: 'bg-blue-600 hover:bg-blue-700',
        hoverBg: 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50',
        iconBg: 'bg-blue-600',
        textHover: 'group-hover:text-blue-600',
        categoryBg: 'bg-blue-600'
      },
      default: { 
        underlineColor: 'bg-gray-600',
        tagBg: 'bg-gray-600 bg-opacity-10',
        tagText: 'text-gray-600',
        buttonBg: 'bg-gray-600 hover:bg-gray-700',
        hoverBg: 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50',
        iconBg: 'bg-gray-600',
        textHover: 'group-hover:text-gray-600',
        categoryBg: 'bg-gray-600'
      }
    };
    return schemes[category as keyof typeof schemes] || schemes.default;
  };

  const colorScheme = getColorScheme();

  if (error || !articles || articles.length === 0) {
    return (
      <section className="bg-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            {emoji && <span className="mr-3 text-2xl">{emoji}</span>}
            {title}
            {tag && (
              <span className={`ml-3 text-xs ${colorScheme.tagBg} ${colorScheme.tagText} px-2 py-1 rounded-full font-semibold uppercase tracking-wide`}>
                {tag}
              </span>
            )}
          </h2>
          <div className={`w-16 h-1 ${colorScheme.underlineColor} mt-2`}></div>
        </div>
        <p className="text-gray-600 text-center py-8">
          {error || `No ${title.toLowerCase()} articles available`}
        </p>
        <div className="text-center">
          <Link
            href={`/category/${category}`}
            className={`inline-block ${colorScheme.buttonBg} text-white px-4 py-2 rounded-lg font-medium text-sm transition-all`}
          >
            View all {title.toLowerCase()} articles →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
          {emoji && <span className="mr-3 text-2xl">{emoji}</span>}
          {title}
          {tag && (
            <span className={`ml-3 text-xs ${colorScheme.tagBg} ${colorScheme.tagText} px-2 py-1 rounded-full font-semibold uppercase tracking-wide`}>
              {tag}
            </span>
          )}
        </h2>
        <div className={`w-16 h-1 ${colorScheme.underlineColor} mt-2`}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`} className="group">
            <div className={`flex space-x-4 p-3 rounded-lg ${colorScheme.hoverBg} transition-all duration-300`}>
              <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md shadow-md border border-gray-200">
                <Image
                  src={article.images[0]?.url || '/api/placeholder/200/150'}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute top-1 right-1 ${colorScheme.categoryBg} text-white px-1 py-0.5 rounded text-xs font-bold`}>
                  {category === 'dharm' ? 'धर्म' : 
                   category === 'history' ? 'HIST' :
                   category === 'politics' ? 'POL' :
                   category === 'globe' ? 'GLB' : 
                   title.slice(0, 3)}
                </div>
              </div>
              <div className="flex-1">
                <h3 className={`text-sm font-semibold text-gray-900 line-clamp-3 ${colorScheme.textHover} transition-colors mb-2`}>
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {article.description}
                  </p>
                )}
                <div className="flex items-center text-xs text-gray-500">
                  <div className={`w-4 h-4 ${colorScheme.iconBg} rounded-full mr-2 flex items-center justify-center`}>
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

      <div className="text-center mt-6">
        <Link
          href={`/category/${category}`}
          className={`inline-block ${colorScheme.buttonBg} text-white px-6 py-3 rounded-lg font-medium text-sm transition-all`}
        >
          View all {title.toLowerCase()} articles →
        </Link>
      </div>
    </section>
  );
}
