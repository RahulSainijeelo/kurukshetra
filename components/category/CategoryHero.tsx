import Image from "next/image";

interface CategoryHeroProps {
  category: string;
}

export function CategoryHero({ category }: CategoryHeroProps) {
  const categoryConfig = getCategoryConfig(category);

  return (
    <section className="py-1">
      {/* Advertisement Banner */}
      {/* {category === 'politics' && (
        <div className="mb-2">
          <div className="relative w-full h-24 md:h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg overflow-hidden">
            <Image
              src="/api/placeholder/1200/128"
              alt="Advertisement"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )} */}

      {/* Category Header */}
      <div className="text-center mb-2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-0 p-0">
          {categoryConfig.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {categoryConfig.description}
        </p>
      </div>
    </section>
  );
}

function getCategoryConfig(category: string) {
  const configs = {
    politics: {
      title: "Politics",
      description: "News and views regarding the political landscape of India. From national political parties to regional news, we try and cut through the noise to explain how Indian politics is shaping up."
    },
    opinions: {
      title: "Opinions",
      description: "Expert opinions and editorial pieces on current affairs, policy decisions, and social issues affecting India and the world."
    },
    "news-reports": {
      title: "News Reports", 
      description: "In-depth reporting and breaking news stories from across India and around the world."
    },
    media: {
      title: "Media",
      description: "Analysis of media coverage, press freedom issues, and commentary on journalism in the digital age."
    }
  };
  
  return configs[category as keyof typeof configs] || {
    title: category.charAt(0).toUpperCase() + category.slice(1),
    description: "Latest news and updates from this category."
  };
}
