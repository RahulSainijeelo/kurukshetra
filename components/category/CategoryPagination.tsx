'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CategoryPaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
}

export function CategoryPagination({ currentPage, totalPages, category }: CategoryPaginationProps) {
  const router = useRouter();

  if (totalPages <= 1) return null;

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={`/${category}?page=${currentPage - 1}`}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
        >
          Previous
        </Link>
      )}

      {/* Page Numbers */}
      {generatePageNumbers().map((page, index) => (
        <div key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <Link
              href={`/${category}?page=${page}`}
              className={`px-4 py-2 border rounded-md transition-colors ${
                page === currentPage
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'border-gray-300 hover:bg-gray-50 text-gray-700'
              }`}
            >
              {page}
            </Link>
          )}
        </div>
      ))}

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={`/${category}?page=${currentPage + 1}`}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
        >
          Next
        </Link>
      )}
    </div>
  );
}
