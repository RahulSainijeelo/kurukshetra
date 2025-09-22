import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/homepage/Footer';
import { ArticleView } from '@/components/article/ArticleView';
import { ArticleSidebar } from '@/components/article/ArticleSidebar';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

// Fetch article data on the server side
async function getArticle(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/articles/${id}`,
      { 
        cache: 'no-store',
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const article = await response.json();
    return article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const article = await getArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 pt-6 pb-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: article.title.slice(0, 50) + "...", href: `/article/${id}` }
          ]} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <ArticleView article={article} />
          </div>
          <div className="lg:col-span-1">
            <ArticleSidebar currentArticleId={id} category={article.category} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const article = await getArticle(id);
  
  if (!article) {
    return {
      title: 'Article Not Found - Kurukshetra',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} - Kurukshetra`,
    description: article.description || article.shortDescription || article.title.slice(0, 160),
    keywords: [article.category, article.author, 'news', 'kurukshetra'].join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description || article.shortDescription,
      images: article.images && article.images.length > 0 ? [article.images[0].url] : [],
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description || article.shortDescription,
      images: article.images && article.images.length > 0 ? [article.images[0].url] : [],
    },
  };
}