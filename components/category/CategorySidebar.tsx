import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function CategorySidebar() {
  const latestNews = [
    {
      id: 1,
      title: "TMC MP Saket Gokhale comes up with fresh false claims, alleges COVID-19 vaccines were not free and calls PM CARES Fund a 'personal scam'",
      image: "/api/placeholder/120/80",
      date: "20 September, 2025"
    },
    {
      id: 2,
      title: "Muslims unleash chaos alleging FIR on putting up 'I love Muhammad' banner in Kanpur, conveniently hide the fact that they destroyed Hindu religious posters",
      image: "/api/placeholder/120/80", 
      date: "20 September, 2025"
    },
    {
      id: 3,
      title: "What are Trump's Gold, Platinum, and Corporate cards? Costs, benefits, eligibility, and why critics are seething",
      image: "/api/placeholder/120/80",
      date: "20 September, 2025"
    }
  ];

  return (
    <aside className="space-y-8">
      
      {/* Latest News Section */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="border-l-4 border-orange-500 bg-gray-50 px-4 py-3">
          <h3 className="text-xl font-bold text-gray-900">Latest Articles</h3>
        </div>
        
        <div className="p-4 space-y-4">
          {latestNews.map((news) => (
            <Link key={news.id} href={`/article/${news.id}`} className="group block">
              <div className="flex space-x-3">
                <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors mb-1">
                    {news.title}
                  </h4>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}



  // <div className="bg-gray-100 p-6 rounded-lg text-center">
  //       <div className="relative w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
  //         <Image
  //           src="/api/placeholder/300/256"
  //           alt="Advertisement"
  //           fill
  //           className="object-cover"
  //         />
  //       </div>
  //       <p className="text-xs text-gray-500 mt-2">Advertisement</p>
  //     </div>
  //     <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
  //       <div className="border-l-4 border-orange-500 bg-gray-50 px-4 py-3">
  //         <h3 className="text-xl font-bold text-gray-900">Popular Tags</h3>
  //       </div>
        
  //       <div className="p-4">
  //         <div className="flex flex-wrap gap-2">
  //           {['Politics', 'Election', 'BJP', 'Congress', 'Modi', 'Parliament', 'Supreme Court', 'Economy'].map((tag) => (
  //             <Link key={tag} href={`/tag/${tag.toLowerCase()}`}>
  //               <Badge variant="outline" className="text-xs hover:bg-orange-50 hover:border-orange-300 transition-colors">
  //                 {tag}
  //               </Badge>
  //             </Link>
  //           ))}
  //         </div>
  //       </div>
  //     </div>