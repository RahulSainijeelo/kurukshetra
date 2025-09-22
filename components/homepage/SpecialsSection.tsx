import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import img from "@/public/images/image.png"

export function SpecialsSection() {
  const specialsData = [
    {
      id: 1,
      title: "CGDS, The Spider Web – Legitimising India's Democracy:",
      subtitle: "New NGO report calls for US foreign funding nerve",
      image: "/api/placeholder/300/200",
      category: "EXPOSE",
      date: "6 September, 2025"
    },
    {
      id: 2,
      title: "Whenever Pizza orders spike around Arlington, Virginia",
      subtitle: "Some people disappear from somewhere, read what is the Pentagon Pizza Index",
      image: "/api/placeholder/300/200",
      date: "6 September, 2025"
    }
  ];

  return (
    <section className="bg-purple-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Specials</h2>
          <p className="text-purple-200 ml-4 text-sm">
            Our special offering of interviews, detailed reports, explainers, and more...
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/specials/main" className="group block bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={img}
                  alt="Special story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">
                  From Peer Chhangur to Hizbut-Tahrir module to Deoband...
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Another Islamic conversion racket run by Usman Ansari following the same anti-Hindu blueprint exposed
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>OpIndia Staff</span>
                  <span className="mx-2">•</span>
                  <span>7 September, 2025</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialsData.map((special) => (
              <Link key={special.id} href={`/specials/${special.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={img}
                      alt={special.title}
                      fill
                      className="object-cover"
                    />
                    {special.category && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-600 text-white">
                          {special.category}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {special.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {special.subtitle}
                    </p>
                    <p className="text-xs text-gray-500">{special.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
