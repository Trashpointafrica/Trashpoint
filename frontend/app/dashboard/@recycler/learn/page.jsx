import React from "react";
import Image from "next/image";
import {
  glassOnly,
  metalsOnly,
  plasticsOnly,
  papersOnly,
  cartonsOnly,
  polythene,
  recycling_article_image1,
  recycling_article_image2,
  recycling_article_image3,
} from "@/app/assets/images";

const Learn = () => {
  const categories = [
    {
      title: "PET Plastic",
      description:
        "Polyethylene terephthalate (PET) belongs to the family of polyesters. It is recyclable and is among those plastics which are an important part of your everyday life.",
      image: plasticsOnly,
    },
    {
      title: "Glass",
      description: "Lorem ipsum dolor sit amet consectetur. Enim viverra et sit magna quisque amet tincidunt nec. Velit eget odio mi sed. Lacus arcu id volutpat magna senectus.",
      image: glassOnly,
    },
    {
      title: "Metals",
      description: "Metal waste, including steel and iron materials...",
      image: metalsOnly,
    },
    {
      title: "Paper",
      description: "Lorem ipsum dolor sit amet consectetur. Enim viverra et sit magna quisque amet tincidunt nec. Velit eget odio mi sed. Lacus arcu id volutpat magna senectus.",
      image: papersOnly,
    },
    {
      title: "Carton",
      description: "Lorem ipsum dolor sit amet consectetur. Enim viverra et sit magna quisque amet tincidunt nec. Velit eget odio mi sed. Lacus arcu id volutpat magna senectus.",
      image: cartonsOnly,
    },
    {
      title: "Polythene",
      description:
        "Lorem ipsum dolor sit amet consectetur. Enim viverra et sit magna quisque amet tincidunt nec. Velit eget odio mi sed. Lacus arcu id volutpat magna senectus.",
      image: polythene,
    },
  ];

  const articles = [
    {
      user: "Kyrus Recycling Ventures",
      title:
        "How Kyrus is Revolutionizing Waste Management and Empowering Communities",
      description:
        "In a world where waste is piling up faster than we can handle, finding innovative solutions to manage, recycle, and reduce waste is more critical than ever. Enter Kyrus, a game-changing platform that is redefining how we think about waste,...",
      image: recycling_article_image1,
      date: "Aug 21, 2024",
      readTime: "2 Mins",
    },
    {
      user: "Kyrus Recycling Ventures",
      title:
        "How Kyrus is Revolutionizing Waste Management and Empowering Communities",
      description:
        "In a world where waste is piling up faster than we can handle, finding innovative solutions to manage, recycle, and reduce waste is more critical than ever. Enter Kyrus, a game-changing platform that is redefining how we think about waste,...",
      image: recycling_article_image2,
      date: "Sep 5, 2024",
      readTime: "3 Mins",
    },
    {
      user: "Kyrus Recycling Ventures",
      title:
        "How Kyrus is Revolutionizing Waste Management and Empowering Communities",
      description:
        "In a world where waste is piling up faster than we can handle, finding innovative solutions to manage, recycle, and reduce waste is more critical than ever. Enter Kyrus, a game-changing platform that is redefining how we think about waste,...",
      image: recycling_article_image3,
      date: "Jul 30, 2024",
      readTime: "4 Mins",
    },
  ];

  return (
    <div className="w-full mx-auto">
      {/* Waste Categories Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our waste categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className=" grid grid-cols-2 gap-4"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                unoptimized
                className="w-full sm:w-1/3 h-48 sm:h-auto object-cover rounded-md"
              />
              <div className="flex flex-col pl-2">
                <h3 className="text-xl font-bold mt-4">{category.title}</h3>
                <p className="text-gray-600 mt-2 pr-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-0 mb-6">
            <div className="flex flex-col sm:flex-row items-stretch">
              {/* Article Image */}
              <Image
                src={article.image}
                width={0}
                height={0}
                alt="article"
                sizes="100vw"
                unoptimized
                style={{ width: "100%", height: "auto" }}
                className="w-full sm:w-1/3 h-40 sm:h-auto object-cover rounded-md"
              />
              {/* Article Content */}
              <div className="sm:ml-6 mt-4 py-4 sm:mt-0 flex flex-col justify-between h-full">
                <div className="flex flex-col items-start mt-0 gap-2 mb-8">
                  <h2 className="text-2xl font-bold">{article.user}</h2>
                  <div className="text-sm text-gray-500 mt-2">
                    {article.date} · {article.readTime}
                  </div>
                </div>
                <h3 className="text-2xl pr-4 font-bold text-blue-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xl mt-2 border-b-2 border-gray-200 pb-4 mr-8">
                  {article.description}
                </p>
                <button className="text-green-600 font-semibold mt-4 flex items-end w-full ml-[85%]">
                  Read On
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
