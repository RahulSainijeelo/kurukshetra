import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import img from "@/public/images/image.png"

export function HeroSection() {
  const heroData = {
      id:23,
      title: "From spiritual discipline to political transformation: The story of Ajey, a cinematic tribute to Yogi Adityanath's journey from monk to leader",
      image: "/images/hero-main.jpg",
      category: "Opinions",
      author: "Dr. Prosenjit Nath",
      date: "20 September, 2025",
      excerpt: "The cinematic portrayal explores the transformation from spiritual discipline to political leadership..."
  };
  const articles = [heroData,heroData]
  return (
    <section className="bg-white py-6 md:py-8">
{articles.map((article,idx) => (
          <Link key={idx} href={`/bollywood-sports/${article.id}`} className="group">
            <div className="flex space-x-4">
              <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={img}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500">{article.date}</p>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
