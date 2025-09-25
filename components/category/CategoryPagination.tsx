'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryPaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export function CategoryPagination({ 
  currentPage, 
  totalPages, 
  category, 
  hasNext = false, 
  hasPrev = false 
}: CategoryPaginationProps) {
  if (totalPages <= 1) return null;

  const generatePageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-12 py-8">
      {/* Previous Button */}
      {hasPrev && currentPage > 1 ? (
        <Link 
          href={`/${category}?page=${currentPage - 1}`}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-orange-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Link>
      ) : (
        <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </div>
      )}

      {/* First page */}
      {pageNumbers[0] > 1 && (
        <>
          <Link
            href={`/${category}?page=1`}
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-orange-600 transition-colors"
          >
            1
          </Link>
          {pageNumbers[0] > 2 && (
            <span className="px-2 py-2 text-gray-500">...</span>
          )}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`/${category}?page=${page}`}
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
            page === currentPage
              ? 'text-white bg-orange-600 border border-orange-600'
              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-orange-600'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Last page */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="px-2 py-2 text-gray-500">...</span>
          )}
          <Link
            href={`/${category}?page=${totalPages}`}
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-orange-600 transition-colors"
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Next Button */}
      {hasNext && currentPage < totalPages ? (
        <Link 
          href={`/${category}?page=${currentPage + 1}`}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-orange-600 transition-colors"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      ) : (
        <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      )}
    </div>
  );
}
