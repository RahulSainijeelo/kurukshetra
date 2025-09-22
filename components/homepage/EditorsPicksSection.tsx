'use client';

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

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

export function EditorsPicksSection() {
  const [editorsPick, setEditorsPick] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEditorsChoice = async () => {
      try {
        setLoading(true);
        // Fetch only 1 article for the main editor's pick
        const response = await fetch('/api/articles?type=editors-choice&limit=1');
        if (!response.ok) {
          throw new Error('Failed to fetch editor\'s choice');
        }
        const data: ApiResponse = await response.json();
        if (data.data.length > 0) {
          setEditorsPick(data.data[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchEditorsChoice();
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
      <section className="bg-white">
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Editor's Picks</h2>
        </div>
        
        <div className="animate-pulse">
          <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-gray-200">
            <div className="absolute top-3 left-3">
              <div className="w-20 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="h-5 bg-gray-200 rounded mb-2"></div>
          <div className="h-5 bg-gray-200 rounded mb-3 w-4/5"></div>
          <div className="flex items-center space-x-4">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !editorsPick) {
    return (
      <section className="bg-white">
        <div className="border-l-4 border-orange-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Editor's Picks</h2>
        </div>
        <p className="text-gray-600">
          {error ? `Error loading editor's picks: ${error}` : 'No editor\'s picks available'}
        </p>
        <Link 
          href="/focus/editors-choice" 
          className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
        >
          View all editor's picks →
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="border-l-4 border-orange-500 pl-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Editor's Picks</h2>
      </div>
      
      <Link href={`/news/${editorsPick.id}`} className="group block">
        <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg">
          <Image
            src={editorsPick.images[0]?.url || '/api/placeholder/400/250'}
            alt={editorsPick.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-blue-600 text-white">
              {editorsPick.category}
            </Badge>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-3">
          {editorsPick.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4">{editorsPick.author}</span>
          <span>{formatDate(editorsPick.publishDate)}</span>
        </div>
      </Link>

      <Link 
        href="/focus/editors-choice" 
        className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm"
      >
        View all editor's picks →
      </Link>
    </section>
  );
}
