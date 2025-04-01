"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Award, Brain, HomeIcon, BookOpenText, Github } from "lucide-react";

const FloatingCoin = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{
        y: [-20, -30, -20],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-10"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        style={{
          width: 40,
          height: 40,
          color: "white",
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        whileHover={{ scale: 1.1 }}
        className="bg-neutral-700 dark:bg-neutral-700"
      >
        {icon}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full bg-white opacity-0"
        whileHover={{ opacity: 0.3, scale: 1.5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export const FooterWithCarousel = () => {
  const pathname = usePathname();
  const [positionIndexes, setPositionIndexes] = React.useState([0, 1, 2, 3, 4]);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const cardData = [
    {
      title: "Home",
      description: "Página inicial",
      icon: <HomeIcon className="w-6 h-6" />,
      route: "/",
    },
    {
      title: "Habilidades",
      description: "Minhas habilidades",
      icon: <Brain className="w-6 h-6" />,
      route: "/skills",
    },
    {
      title: "Blog",
      description: "Meus posts",
      icon: <BookOpenText className="w-6 h-6" />,
      route: "/blog",
    },
    {
      title: "Projetos",
      description: "Meus projetos",
      icon: <Github className="w-6 h-6" />,
      route: "/projects",
    },
    {
      title: "Certificações",
      description: "Minhas certificações",
      icon: <Award className="w-6 h-6" />,
      route: "/certifications",
    },
  ];

  // Efeito para definir a posição inicial com base na rota atual
  React.useEffect(() => {
    const currentIndex = cardData.findIndex((card) => card.route === pathname);
    if (currentIndex !== -1) {
      const movesNeeded = (5 - currentIndex) % 5;
      const updatedIndexes = positionIndexesIniciais.map(
        (prevIndex) => (prevIndex + movesNeeded) % 5
      );
      setPositionIndexes(updatedIndexes);
    }
  }, [pathname]);

  const handleCardClick = (clickedIndex: number) => {
    const clickedCardPosition = positionIndexes[clickedIndex];
    const movesNeeded = (5 - clickedCardPosition) % 5;

    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + movesNeeded) % 5
      );
      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];
  const positionIndexesIniciais = [0, 1, 2, 3, 4];

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-50%", scale: 0.9, zIndex: 3, opacity: 1 },
    left: { x: "-90%", scale: 0.8, zIndex: 1, opacity: 1 },
    right: { x: "90%", scale: 0.8, zIndex: 1, opacity: 1 },
    right1: { x: "50%", scale: 0.9, zIndex: 3, opacity: 1 },
  };

  return (
    <div className="mx-auto flex items-center flex-col justify-center fixed bottom-4 left-0 right-0 z-50">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="absolute w-48"
          onClick={() => handleCardClick(index)}
        >
          <Link href={card.route} passHref legacyBehavior>
            <Card className="bg-neutral-800 dark:bg-white cursor-pointer h-40 w-48 relative">
              <FloatingCoin icon={card.icon} />
              <CardHeader className="text-center text-white dark:text-black">
                <CardTitle>{card.title}</CardTitle>
                <CardDescription className="text-neutral-400 dark:text-neutral-600">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
