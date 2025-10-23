import { Header } from "@/components/layout/header";
import { Footer } from "@/components/homepage/Footer";
import { CategoryHero } from "@/components/category/CategoryHero";
import { CategoryArticleList } from "@/components/category/CategoryArticleList";
import { CategorySidebar } from "@/components/category/CategorySidebar";
import { CategoryPagination } from "@/components/category/CategoryPagination";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

async function getCategoryArticles(category: string, page: number) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(
      `${baseUrl}/api/articles/category/${category}?page=${page}&limit=10`,
      { 
        cache: 'no-store',
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      articles: data.data || [],
      pagination: data.pagination || { totalPages: 1, currentPage: page, hasNext: false, hasPrev: false },
      error: null
    };
  } catch (error) {
    console.error('Error fetching category articles:', error);
    return {
      articles: [],
      pagination: { totalPages: 1, currentPage: page, hasNext: false, hasPrev: false },
      error: 'Failed to load articles'
    };
  }
}

async function getSidebarData(category: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const [trendingRes, relatedRes] = await Promise.all([
      fetch(`${baseUrl}/api/articles?type=trending&limit=5`, {
        next: { revalidate: 300 }
      }),
      fetch(`${baseUrl}/api/articles/category/${category}?limit=5&page=1`, {
        next: { revalidate: 300 }
      })
    ]);

    const trending = trendingRes.ok ? await trendingRes.json() : { data: [] };
    const related = relatedRes.ok ? await relatedRes.json() : { data: [] };

    return {
      trending: trending.data || [],
      related: related.data || [],
      error: null
    };
  } catch (error) {
    console.error('Error fetching sidebar data:', error);
    return {
      trending: [],
      related: [],
      error: 'Failed to load sidebar content'
    };
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const currentPage = parseInt(resolvedSearchParams.page || "1");
  const categoryName = resolvedParams.category;
  const [articleData, sidebarData] = await Promise.all([
    getCategoryArticles(categoryName, currentPage),
    getSidebarData(categoryName)
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 !pt-6 pb-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: getCategoryDisplayName(categoryName), href: `/${categoryName}` }
          ]} 
        />
        
        <CategoryHero category={categoryName} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <CategoryArticleList 
              articles={articleData.articles}
              category={categoryName} 
              error={articleData.error}
            />
            <CategoryPagination 
              currentPage={currentPage} 
              totalPages={articleData.pagination.totalPages}
              category={categoryName}
              hasNext={articleData.pagination.hasNext}
              hasPrev={articleData.pagination.hasPrev}
            />
          </div>
          <div className="lg:col-span-1">
            <CategorySidebar/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function getCategoryDisplayName(category: string) {
  const categoryMap: { [key: string]: string } = {
    'politics': 'Politics',
    'bollywood-sports': 'Bollywood & Sports',
    'dharm': 'Dharm',
    'bharat': 'Bharat',
    'global': 'Global',
    'history': 'History',
    'about': 'About'
  };
  return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category;
  const displayName = getCategoryDisplayName(categoryName);
  
  const categoryDescriptions: { [key: string]: string } = {
    'politics': 'Policy battles for civilizational sovereignty. Analyzing political warfare against Bharat.',
    'dharm': "Defending Sanatan Dharm. Exposing conversion mafias and philosophical assaults.",
    'bharat':"Ground zero of the civilizational war. Covering Bharat's current battles - from cultural attacks to Dharmic resurgence.",
    'global': "Geopolitical forces shaping Bharat's destiny. Tracking international policies and power games that impact Sanatan Dharm.",
    'history':"Reclaiming Bharat's stolen heritage. Decolonizing our civilizational narrative.",
    'bollywood-sports': 'Entertainment news and sports coverage.',
  };
  
  return {
    title: `${displayName} - Latest News & Articles | Kurukshetra`,
    description: categoryDescriptions[categoryName] || `Read the latest ${displayName.toLowerCase()} news and articles. Stay updated with comprehensive coverage and analysis.`,
    keywords: `${displayName.toLowerCase()}, news, articles, kurukshetra, journalism, india`,
    openGraph: {
      title: `${displayName} - Latest News & Articles`,
      description: categoryDescriptions[categoryName] || `Latest ${displayName.toLowerCase()} news and articles`,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${categoryName}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayName} - Latest News & Articles`,
      description: categoryDescriptions[categoryName] || `Latest ${displayName.toLowerCase()} news and articles`,
    },
  };
}
