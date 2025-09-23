import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/homepage/Footer';
import { ArticleView } from '@/components/article/ArticleView';
import { ArticleSidebar } from '@/components/article/ArticleSidebar';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';

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

// Helper functions
function extractKeywords(content: string): string[] {
  // Simple keyword extraction (you can enhance this with NLP libraries)
  const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can'];
  
  return content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.includes(word))
    .reduce((acc: string[], word) => {
      if (!acc.includes(word)) acc.push(word);
      return acc;
    }, [])
    .slice(0, 20); // Top 20 keywords
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const article = await getArticle(id);
  
  if (!article) {
    return {
      title: 'Article Not Found - Kurukshetra',
      description: 'The requested article could not be found.',
    };
  }

  const publishedTime = new Date(article.publishDate).toISOString();
  const modifiedTime = article.updatedDate ? new Date(article.updatedDate).toISOString() : publishedTime;

  return {
    title: `${article.title} - Kurukshetra`,
    description: article.description || article.shortDescription || article.title.slice(0, 160),
    keywords: [
      article.category.toLowerCase(),
      article.author.toLowerCase(),
      'kurukshetra',
      'dharma',
      'news',
      'truth',
      'authentic journalism',
      ...extractKeywords(article.content)
    ].join(', '),
    
    authors: [{ name: article.author, url: `/author/${slugify(article.author)}` }],
    category: article.category,
    
    openGraph: {
      title: article.title,
      description: article.description || article.shortDescription,
      url: `/news/${id}`,
      siteName: 'Kurukshetra',
      locale: 'en_IN',
      type: 'article',
      publishedTime,
      modifiedTime,
      expirationTime: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
      authors: [article.author],
      section: article.category,
      tags: extractKeywords(article.content),
      images: article.images?.map((img:any, index:any) => ({
        url: img.url,
        width: 1200,
        height: 630,
        alt: `${article.title} - Image ${index + 1}`,
        type: 'image/jpeg',
      })) || [],
    },
    
    twitter: {
      card: 'summary_large_image',
      site: '@kurukshetra',
      creator: `@${slugify(article.author)}`,
      title: article.title,
      description: article.description || article.shortDescription,
      images: article.images?.[0]?.url ? [article.images[0].url] : [],
    },
    
    alternates: {
      canonical: `/news/${id}`,
    },
    
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:author': article.author,
      'article:section': article.category,
      'article:tag': extractKeywords(article.content).join(','),
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const article = await getArticle(id);

  if (!article) {
    notFound();
  }

  // Generate article structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.description || article.shortDescription,
    "image": article.images?.map((img:any) => img.url) || [],
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/author/${slugify(article.author)}`
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Kurukshetra",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.updatedDate || article.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/news/${id}`
    },
    "articleSection": article.category,
    "keywords": extractKeywords(article.content).join(', '),
    "wordCount": article.content.split(' ').length,
    "inLanguage": "en-IN",
    "isAccessibleForFree": true,
    "hasPart": article.images?.map((img:any, index:any) => ({
      "@type": "ImageObject",
      "url": img.url,
      "caption": `${article.title} - Image ${index + 1}`
    })) || []
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="container mx-auto !px-4 !pt-6 !pb-12">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/article" },
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
    </>
  );
}