'use client';

import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "./HeroSection";

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

interface InFocusSectionProps {
  topPicks: Article[];
  error?: string;
}

export function InFocusSection({ topPicks, error }: InFocusSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (error || !topPicks || topPicks.length === 0) {
    return (
      <>
        <section className="bg-white">
          <div className="relative mb-6">
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 px-6 py-3 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white tracking-wide">
                🔥 TOP PICKS
              </h2>
            </div>
          </div>
          <p className="text-gray-600">
            {error || 'No top picks available'}
          </p>
          <Link
            href="/focus/top-picks"
            className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
          >
            View all top picks →
          </Link>
        </section>
        <HeroSection articles={[]} />
      </>
    );
  }

  const focusStory = topPicks[0];
  const heroArticles = topPicks.slice(1, 3);

  return (
    <>
      <section className="bg-white">
        <div className="relative mb-6">
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 px-6 py-3 rounded-lg shadow-lg border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold text-white tracking-wide flex items-center">
              <span className="mr-2">🔥</span>
              TOP PICKS
              <span className="ml-2 text-sm bg-yellow-400 text-orange-800 px-2 py-1 rounded-full font-semibold">
                FEATURED
              </span>
            </h2>
          </div>
        </div>

        <Link href={`/article/${focusStory.id}`} className="group block">
          <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg shadow-md border border-gray-200">
            <Image
              src={focusStory.images[0]?.url || '/api/placeholder/400/250'}
              alt={focusStory.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              TOP PICK
            </div>
            {focusStory.category && (
              <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                {focusStory.category}
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-3">
            {focusStory.title}
          </h3>

          {focusStory.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {focusStory.description}
            </p>
          )}

          <div className="flex items-center text-sm text-gray-600">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-2 flex items-center justify-center shadow-sm">
              <span className="text-xs font-bold text-white">
                {focusStory.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="mr-4 font-medium">{focusStory.author}</span>
            <span className="text-gray-500">{formatDate(focusStory.publishDate)}</span>
          </div>
        </Link>

        <Link
          href="/focus/top-picks"
          className="inline-block mt-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-orange-700 hover:to-red-700 transition-all shadow-md"
        >
          View all top picks →
        </Link>
      </section>

      {heroArticles.length > 0 && (
        <HeroSection articles={heroArticles} />
      )}
    </>
  );
}
