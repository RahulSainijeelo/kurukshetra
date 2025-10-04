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

interface HeroSectionProps {
  articles: Article[];
  loading?: boolean;
}

export function HeroSection({ articles, loading = false }: HeroSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long', 
      year: 'numeric'
    });
  };

  // Fallback data if no articles are provided
  const fallbackData = {
    id: "fallback",
    title: "From spiritual discipline to political transformation: The story of Ajey, a cinematic tribute to Yogi Adityanath's journey from monk to leader",
    images: [{ url: "/images/hero-main.jpg", deleteUrl: "" }],
    category: "Opinions",
    author: "Dr. Prosenjit Nath",
    publishDate: "2024-09-20",
    description: "The cinematic portrayal explores the transformation from spiritual discipline to political leadership..."
  };

  // Use provided articles or fallback to demo data
  const displayArticles = articles.length > 0 && articles.slice(0, 2);

  if (loading) {
    return (
      <section className="bg-white py-6 md:py-8">
        <div className="space-y-4">
          {[1, 2].map((idx) => (
            <div key={idx} className="flex space-x-4 animate-pulse">
              <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-200"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-6 md:py-8">
      <div className="space-y-6">
        {displayArticles && displayArticles.map((article:any, idx:any) => (
          <Link key={`${article.id}-${idx}`} href={`/article/${article.id}`} className="group block">
            <div className="flex space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md shadow-sm border border-gray-200">
                <Image
                  src={article.images?.[0]?.url || '/api/placeholder/200/120'}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {article.category && (
                  <div className="absolute top-1 right-1 bg-orange-600 text-white px-1 py-0.5 rounded text-xs font-bold">
                    {article.category.slice(0, 3).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors mb-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center text-xs text-gray-500 space-x-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-1 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {article.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <span>{formatDate(article.publishDate)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        {/* View more link only if we have real articles */}
        {articles.length > 0 && (
          <div className="text-center pt-4">
            <Link 
              href="/focus/top-picks"
              className="text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              More top picks →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
