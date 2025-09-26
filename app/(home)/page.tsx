import { LatestReleaseSection } from "@/components/homepage/LatestReleaseSection";
import { InFocusSection } from "@/components/homepage/InFocusSection";
import { EditorsPicksSection } from "@/components/homepage/EditorsPicksSection";
import { NationSection } from "@/components/homepage/NationSection";
import { DharmaSection } from "@/components/homepage/DharmaSection";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/homepage/Footer";
import { Metadata } from 'next';

async function fetchLatestArticles() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/articles?type=latest&limit=3`, {
      next: { revalidate: 10 }
    });
    
    if (!response.ok) throw new Error('Failed to fetch latest articles');
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    return { data: [], error: 'Failed to load latest articles' };
  }
}

async function fetchTopPicks() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/articles?type=top-picks&limit=3`, {
      next: { revalidate: 10 }
    });
    
    if (!response.ok) throw new Error('Failed to fetch top picks');
    return await response.json();
  } catch (error) {
    console.error('Error fetching top picks:', error);
    return { data: [], error: 'Failed to load top picks' };
  }
}

async function fetchEditorsChoice() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/articles?type=editors-choice&limit=1`, {
      next: { revalidate: 10 }
    });
    
    if (!response.ok) throw new Error('Failed to fetch editor\'s choice');
    return await response.json();
  } catch (error) {
    console.error('Error fetching editor\'s choice:', error);
    return { data: [], error: 'Failed to load editor\'s choice' };
  }
}

async function fetchCategoryArticles(category: string, limit: number = 4) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/articles/category/${category}?limit=${limit}&page=1`, {
      next: { revalidate: 30 }
    });
    
    if (!response.ok) throw new Error(`Failed to fetch ${category} articles`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${category} articles:`, error);
    return { data: [], error: `Failed to load ${category} articles` };
  }
}

export const metadata: Metadata = {
  title: 'Kurukshetra - Truth in Journalism | Authentic News & Analysis',
  description: 'Discover authentic journalism at Kurukshetra. Get latest news, political analysis, dharmic content, and truth-driven reporting from India and around the world.',
  keywords: 'kurukshetra, news, journalism, politics, dharma, india, authentic news, analysis',
  openGraph: {
    title: 'Kurukshetra - Truth in Journalism',
    description: 'Discover authentic journalism and truth-driven reporting',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default async function HomePage() {
  // Fetch all data in parallel on the server
  const [
    latestArticles,
    topPicks,
    editorsChoice,
    nationArticles,
    dharmaArticles,
    historyArticles,
    politicsArticles,
    globeArticles
  ] = await Promise.all([
    fetchLatestArticles(),
    fetchTopPicks(),
    fetchEditorsChoice(),
    fetchCategoryArticles('bharat', 2),
    fetchCategoryArticles('dharm', 4),
    fetchCategoryArticles('history', 4),
    fetchCategoryArticles('politics', 4),
    fetchCategoryArticles('global', 4)
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col pt-2 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 container mx-auto px-4 py-8">
          <div className="lg:col-span-2 space-y-8">
            <LatestReleaseSection articles={latestArticles.data} error={latestArticles.error} />
          </div>
          <div className="lg:col-span-6 space-y-8">
            <InFocusSection topPicks={topPicks.data} error={topPicks.error} />
          </div>
          <div className="lg:col-span-4 space-y-8">
            <EditorsPicksSection article={editorsChoice.data?.[0]} error={editorsChoice.error} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 container mx-auto px-4 py-8">
          <div className="lg:col-span-12 !mt-2 space-y-8">
            <NationSection articles={nationArticles.data} error={nationArticles.error} />
            <DharmaSection 
              category="dharm" 
              title="DHARM" 
              articles={dharmaArticles.data} 
              error={dharmaArticles.error} 
            />
            <DharmaSection 
              category="history" 
              title="HISTORY" 
              articles={historyArticles.data} 
              error={historyArticles.error} 
            />
            <DharmaSection 
              category="politics" 
              title="POLITICS" 
              articles={politicsArticles.data} 
              error={politicsArticles.error} 
            />
            <DharmaSection 
              category="global" 
              title="GLOBAL" 
              articles={globeArticles.data} 
              error={globeArticles.error} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
