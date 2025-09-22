import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/image.png"

export function MediaSection() {
  const mediaArticles = [
    {
      id: 1,
      title: "Ambrose Murdoch suffers meltdown after skipper Surya Kumar Yadav dedicates his brilliant catch against Pakistan to Rohit Sharma out of team, claims",
      image: "/api/placeholder/200/150",
      category: "Media",
      time: "3 hours ago"
    },
    {
      id: 2,
      title: "Delhi Court quashes lower court's order restraining publication of defamatory content, allows media house to continue its orders fresh hearing in defamation case",
      image: "/api/placeholder/200/150",
      category: "Media",
      time: "4 hours ago"
    },
    {
      id: 3,
      title: "'Investigative' GurPro Pacific peddles false victimhood over Sonya of Paradise, demonstrates that narrative of 'fascism is the real religion.'",
      image: "/api/placeholder/200/150",
      category: "Media",
      time: "5 hours ago"
    },
    {
      id: 4,
      title: "'Journalists' of Europe target Ukrainian refugees Lama Zezrellia stabbed to death by black man in North Carolina, the bigger sports selective outrage",
      image: "/api/placeholder/200/150",
      category: "Media",
      time: "6 hours ago"
    }
  ];

  return (
    <section className="bg-white">
      <div className="border-l-4 border-orange-500 pl-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Media</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mediaArticles.map((article) => (
          <Link key={article.id} href={`/media/${article.id}`} className="group">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10]">
                <Image
                  src={img}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-orange-600 font-semibold mb-2">
                  {article.category}
                </div>
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
