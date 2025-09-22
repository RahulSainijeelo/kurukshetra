import { Header } from "@/components/layout/header";
import { Footer } from "@/components/homepage/Footer";
import { CategoryHero } from "@/components/category/CategoryHero";
import { CategoryArticleList } from "@/components/category/CategoryArticleList";
import { CategorySidebar } from "@/components/category/CategorySidebar";
import { CategoryPagination } from "@/components/category/CategoryPagination";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

async function getCategoryPagination(category: string, page: number) {
  try {
    const response = await fetch(
      `/api/articles/category/${category}?page=${page}&limit=10`,
      { cache: 'no-store' }
    );
    
    if (!response.ok) return { totalPages: 1 };
    
    const data = await response.json();
    return { totalPages: data.pagination?.totalPages || 1 };
  } catch (error) {
    console.error('Error fetching pagination:', error);
    return { totalPages: 1 };
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  // Await the params and searchParams since they're Promises in App Router
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const currentPage = parseInt(resolvedSearchParams.page || "1");
  const categoryName = resolvedParams.category;
  
  // Get pagination info on server side
  const { totalPages } = await getCategoryPagination(categoryName, currentPage);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 pt-6 pb-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: getCategoryDisplayName(categoryName), href: `/${categoryName}` }
          ]} 
        />
        
        <CategoryHero category={categoryName} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <CategoryArticleList category={categoryName} page={currentPage} />
            <CategoryPagination 
              currentPage={currentPage} 
              totalPages={totalPages}
              category={categoryName}
            />
          </div>
          <div className="lg:col-span-1">
            <CategorySidebar />
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
    'opinions': 'Opinions', 
    'news-reports': 'News Reports',
    'media': 'Media',
    'bollywood-sports': 'Bollywood & Sports',
    'dharm': 'Dharm',
    'nation': 'Nation',
    'globe': 'Globe',
    'history': 'History',
    'about': 'About'
  };
  return categoryMap[category] || category;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category;
  const displayName = getCategoryDisplayName(categoryName);
  
  return {
    title: `${displayName} - Latest News & Articles`,
    description: `Read the latest ${displayName.toLowerCase()} news and articles. Stay updated with comprehensive coverage and analysis.`,
  };
}
