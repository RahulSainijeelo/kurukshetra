import Link from "next/link";

interface Article {
  id: string;
  title: string;
  timeAgo?: string;
  publishDate: string;
}

interface LatestReleaseSectionProps {
  articles: Article[];
  error?: string;
}

export function LatestReleaseSection({ articles, error }: LatestReleaseSectionProps) {
  if (error) {
    return (
      <section className="bg-white">
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest articles</h2>
        </div>
        <p className="text-red-600">Error: {error}</p>
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