"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { recycling_article_image1 } from "@/app/assets/images";

const ArticlePage = () => {
  const router = useRouter();

  const article = {
    title:
      "How Kyrus is Revolutionizing Waste Management and Empowering Communities",
    image: recycling_article_image1,
    content: [
      {
        text: "In a world where waste is piling up faster than we can handle, finding innovative solutions to manage, recycle, and reduce waste is more critical than ever. Enter Kyrus, a game-changing platform that's redefining how we think about waste, recycling, and sustainability. But what makes Kyrus stand out? It's not just about managing waste—it's about turning trash into treasure.",
      },
      {
        header: "The Waste Problem",
        text: "Globally, we produce over 2 billion tons of waste every year, and much of it ends up in landfills or polluting our oceans. Despite advances in recycling, many people and businesses still struggle with proper waste disposal, and valuable recyclable materials are often overlooked. In a world that's facing growing environmental challenges, we need to rethink how we manage waste—and that's where Kyrus comes in.",
      },
      {
        header: "The Kyrus Solution",
        text: [
          "Kyrus was created to make waste management simple, accessible, and rewarding for everyone. Whether you're an individual looking to recycle at home, a business aiming to reduce your carbon footprint, or a recycling company needing better connections with clients, Kyrus has you covered.",
          "The platform seamlessly connects people, businesses, and recycling companies, making it easier to manage waste and recycle efficiently. But what really sets Kyrus apart is its unique reward system—users earn Kyrus for recycling, which can be redeemed for rewards or even converted into real currency. It's a win-win: you help the planet and earn something in return",
        ],
      },
      {
        header: "How It Works",
        text: [
          "Using Kyrus is easy. Simply download the app, sign up, and start tracking your waste. The platform helps you locate nearby recycling centers, schedule pickups, or find drop-off points. As you recycle, you earn Kyrus based on the type and amount of waste you manage. These coins can be accumulated over time and exchanged for goods, services, or donations to environmental causes",
          "Kyrus empowers both individuals and businesses to become more conscious of their waste, turning recycling from a chore into an opportunity to make a difference.",
        ],
      },
      {
        header: "Making an Impact",
        text: [
          "Kyrus isn't just about waste management—it's about creating a culture of sustainability. By rewarding users for recycling, we're encouraging behavior that helps reduce landfill waste, conserve resources, and lower carbon emissions. Every piece of recycled material counts toward a greener, cleaner world.",
          "Beyond individual users, Kyrus also partners with businesses and organizations to help them reach their sustainability goals. Whether it's reducing operational waste or organizing community recycling drives, Kyrus offers tailored solutions that make a real impact.",
        ],
      },
      {
        header: "The Future of Kyrus",
        text: [
          "As more people become aware of the environmental crisis, the need for smart, sustainable solutions grows. Kyrus is leading the charge, showing that waste management doesn't have to be complicated or costly—it can be simple, rewarding, and impactful.",
          "In the coming months, Kyrus plans to expand its reach, connecting even more communities, businesses, and recycling services. We're also working on innovative new features, such as waste tracking analytics, to help users understand their impact and make even smarter recycling decisions.",
        ],
      },
      {
        header: "Join the Movement",
        text: "Kyrus is more than a platform—it's a movement. Together, we can transform how we view and handle waste, creating a more sustainable future for generations to come. Ready to start turning trash into treasure? Join the Kyrus community today and be a part of the solution.",
      },
    ],
  };

  const comments = [
    { name: "John Doe", text: "I enjoyed reading this, very insightful" },
    { name: "John Doe", text: "I enjoyed reading this, very insightful" },
    { name: "John Doe", text: "I enjoyed reading this, very insightful" },
  ];

  return (
    <div className="w-full mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-600 font-bold">Kyrus Recycling Ventures</h3>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200"
        >
          Go back
        </button>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 font-italic">{article.title}</h1>

      {/* Image */}
      <div className="mb-6">
        <Image
          src={article.image}
          alt="Article Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          unoptimized
          className="w-full h-auto rounded object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="text-gray-700 leading-7">
        {article.content.map((section, index) => (
          <div key={index} className="mb-6">
            {section.header && (
              <h2 className="text-2xl font-bold mb-2 text-green-600">
                {section.header}
              </h2>
            )}
            {Array.isArray(section.text) ? (
              section.text.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{section.text}</p>
            )}
          </div>
        ))}
      </div>

      {/* Comment Section */}
      <div className="mt-8">
        <div className="mb-6 mx-4">
          <textarea
            className="w-full p-4 border bg-gray-200 text-black border-gray-300 rounded-xl"
            placeholder="Leave a comment"
            rows="4"
          ></textarea>
        </div>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{comment.name}</p>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
