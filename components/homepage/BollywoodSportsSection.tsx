import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/image.png"
export function BollywoodSportsSection() {
  const articles = [
    {
      id: 1,
      title: "Bollywood actress suffers meltdown after skipper Surya Kumar Yadav dedicates his brilliant catch against Pakistan to Rohit Sharma",
      image: "/api/placeholder/150/100",
      time: "4 hours ago"
    },
    {
      id: 2,
      title: "LJP commander Iqra Raisuddin opposes Tejashwi Yadav's 'undemocratic' selection of Manohar Molla name in Hindu Organisation",
      image: "/api/placeholder/150/100",
      time: "5 hours ago"
    },
    {
      id: 3,
      title: "Delhi HC backstopped Potentials for operating permits following their defamation while others are just Hype",
      image: "/api/placeholder/150/100",
      time: "6 hours ago"
    },
    {
      id: 4,
      title: "US authorities close investigation in Shyamkant killing, confirms that no illegal drugs and aliens were involved",
      image: "/api/placeholder/150/100",
      time: "7 hours ago"
    }
  ];

  return (
    <section className="bg-white">
      <div className="border-l-4 border-orange-500 pl-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Bollywood, Sports & more</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/bollywood-sports/${article.id}`} className="group">
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
                <p className="text-xs text-gray-500">{article.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
