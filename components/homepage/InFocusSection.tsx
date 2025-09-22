'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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

interface ApiResponse {
  data: Article[];
  pagination: {
    currentPage: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  type: string;
}

export function InFocusSection() {
  const [focusStory, setFocusStory] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopPicks = async () => {
      try {
        setLoading(true);
        // Fetch only 1 article for the main focus story
        const response = await fetch('/api/articles?type=top-picks&limit=1');
        if (!response.ok) {
          throw new Error('Failed to fetch top picks');
        }
        const data: ApiResponse = await response.json();
        if (data.data.length > 0) {
          setFocusStory(data.data[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTopPicks();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
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

          <div className="animate-pulse">
            <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-gray-200"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-3 w-4/5"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <div className="h-4 bg-gray-200 rounded w-24 mr-4"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </section>
        <HeroSection />
      </>
    );
  }

  if (error || !focusStory) {
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
            {error ? `Error loading top picks: ${error}` : 'No top picks available'}
          </p>
          <Link
            href="/focus/top-picks"
            className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
          >
            View all top picks →
          </Link>
        </section>
        <HeroSection />
      </>
    );
  }

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

        <Link href={`/news/${focusStory.id}`} className="group block">
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
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-3">
            {focusStory.title}
          </h3>

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
      <HeroSection />
    </>
  );
}
