import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import image from "@/public/images/image.png"
export function NewsReportsSection() {
  const newsReports = [
    {
      id: 1,
      title: "Rahul's imaginary villains and PM Modi's stature: Why the 'Priest King' leader is the choice of Indian GenZ",
      image: "/api/placeholder/300/200",
      category: "News Reports"
    },
    {
      id: 2,
      title: "Election Commission delists 474 Registered Unrecognised Political Parties for not contesting any election in 6 years, 359 more identified",
      image: "/api/placeholder/300/200",
      category: "News Reports"
    },
    {
      id: 3,
      title: "Japanese agency Rating & Investment Information upgrades India's long-term sovereign credit rating to BBB+, third such upgrade this year",
      image: "/api/placeholder/300/200",
      category: "News Reports"
    },
    {
      id: 4,
      title: "As Rahul Gandhi slams Election Commission, here is a fact-check of his claims: Ground reality",
      image: "/api/placeholder/300/200",
      category: "News Reports"
    }
  ];

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsReports.map((report) => (
          <Link key={report.id} href={`/news-reports/${report.id}`} className="group">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
              <div className="relative aspect-[16/10]">
                <Image
                  src={image}
                  alt={report.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 text-white text-xs">
                    {report.category}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-4 group-hover:text-orange-600 transition-colors">
                  {report.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
