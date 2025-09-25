import Link from 'next/link';
import { Home, Search, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/homepage/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Kurukshetra',
  description: 'The page you are looking for could not be found. Return to Kurukshetra homepage to explore our latest articles and news.',
  robots: {
    index: false,
    follow: true,
  },
};

const NotFound = () => {
  const quickLinks = [
    {
      title: 'Latest News',
      description: 'Stay updated with our latest articles',
      href: '/',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: 'Politics',
      description: 'Political news and analysis',
      href: '/politics',
      icon: Search,
      color: 'bg-red-500'
    },
    {
      title: 'Dharm',
      description: 'Spiritual and dharmic content',
      href: '/dharm',
      icon: Search,
      color: 'bg-orange-500'
    },
    {
      title: 'Nation',
      description: 'National news and updates',
      href: '/nation',
      icon: Search,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Lottie Animation */}
          <div className="w-full max-w-md mx-auto mb-8">
            
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
              Oops! The page you&apos;re looking for seems to have vanished into the digital realm.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Don&apos;t worry, even the best explorers sometimes take a wrong turn. 
              Let&apos;s get you back to discovering the truth with Kurukshetra.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                <Home className="mr-2 h-5 w-5" />
                Back to Homepage
              </Button>
            </Link>
          </div>
      

          {/* Fun Fact */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-orange-50 border border-orange-200 rounded-lg px-6 py-4">
              <p className="text-orange-800 font-medium">
                💡 Fun Fact: The term &quot;404&quot; comes from room 404 at CERN, where the web was born!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;