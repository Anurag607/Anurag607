import cowriteImage from "../public/projects/cowrite.png";
import coinfolioImage from "../public/projects/coinfolio.png";
import poketcgImage from "../public/projects/poketcg.png";
import notewaveImage from "../public/projects/notewave.png";
import xlineImage from "../public/projects/xline.jpg";
import zevonImage from "../public/projects/zevon.png";

import nextImage from "../public/technologies/next.png";
import typescriptImage from "../public/technologies/typescript.png";
import nodeImage from "../public/technologies/node.png";
import mongoImage from "../public/technologies/mongo.png";
import postmanImage from "../public/technologies/postman.png";
import dockerImage from "../public/technologies/docker.png";
import cypressImage from "../public/technologies/cypress.jpg";
import firebaseImage from "../public/technologies/firebase.webp";
import cssImage from "../public/technologies/css.png";
import tailwindImage from "../public/technologies/tailwind.png";
import supabaseImage from "../public/technologies/supabase.webp";
import stripeImage from "../public/technologies/stripe.svg";

import { Project } from "../typings";

export const fetchProjects = async (): Promise<Project[]> => {
  const projects: Project[] = [
    {
      _type: "project",
      title: "CoWrite",
      linkToBuild: "https://co-write-rosy.vercel.app",
      image: cowriteImage.src,
      summary:
        "A comprehensive text editor that integrates advanced document management, real-time collaboration, cloud storage, and over 15 editing tools. It includes the CodeForge application for collaborative code editing and compilation, supporting nearly 40 languages through Judge0. Both applications are further enhanced by the integration of Google’s Gemini AI.",
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: typescriptImage.src,
          progress: 80,
          title: "Typescript",
        },
        {
          _type: "technology",
          image: nodeImage.src,
          progress: 80,
          title: "NodeJS",
        },
        {
          _type: "technology",
          image: mongoImage.src,
          progress: 70,
          title: "MongoDB",
        },
        {
          _type: "technology",
          image: postmanImage.src,
          progress: 90,
          title: "Postman",
        },
        {
          _type: "technology",
          image: dockerImage.src,
          progress: 50,
          title: "Docker",
        },
      ],
    },
    {
      _type: "project",
      title: "PokeTCG",
      linkToBuild: "https://poketcg.vercel.app/",
      image: poketcgImage.src,
      summary:
        "This is a NFT trading card game based on the Pokemons. The game is created using ThirdWeb on the Polygon blockchain and utilizes technologies such as ReactJS, NodeJS, SocketIO, Solidity, and Tailwind CSS.",
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: tailwindImage.src,
          progress: 90,
          title: "TailwindCSS",
        },
        {
          _type: "technology",
          image: typescriptImage.src,
          progress: 80,
          title: "Typescript",
        },
        {
          _type: "technology",
          image: nodeImage.src,
          progress: 80,
          title: "NodeJS",
        },
        {
          _type: "technology",
          image: mongoImage.src,
          progress: 70,
          title: "MongoDB",
        },
        {
          _type: "technology",
          image: postmanImage.src,
          progress: 90,
          title: "Postman",
        },
        {
          _type: "technology",
          image: dockerImage.src,
          progress: 50,
          title: "Docker",
        },
      ],
    },
    {
      _type: "project",
      title: "xLine",
      linkToBuild: "https://xline.vercel.app/",
      image: xlineImage.src,
      summary:
        "xLine is a real time chat application made using Next.JS 13, Firebase, Cypress, Cloudinary. It has a responsive UI which is user friendly. It supports features such as Login, Signup, Password Reset, Text/Emoji Messaging, Image Messaging, Group Creation, Adding users to a group, Removing user from a group, Assigning/Removing a user as an admin in a group, Updating your profile picture, Updating your chat box background, Replying to messages.",
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: cssImage.src,
          progress: 80,
          title: "CSS",
        },
        {
          _type: "technology",
          image: nodeImage.src,
          progress: 80,
          title: "NodeJS",
        },
        {
          _type: "technology",
          image: typescriptImage.src,
          progress: 80,
          title: "Typescript",
        },
        {
          _type: "technology",
          image: firebaseImage.src,
          progress: 80,
          title: "Firebase",
        },
        {
          _type: "technology",
          image: postmanImage.src,
          progress: 90,
          title: "Postman",
        },
        {
          _type: "technology",
          image: cypressImage.src,
          progress: 60,
          title: "Cypress",
        },
      ],
    },
    {
      _type: "project",
      title: "Zevon",
      linkToBuild: "https://zevon.vercel.app/",
      image: zevonImage.src,
      summary:
        "Zevon is a user-friendly online retail platform built with Next.js, SCSS, and TypeScript. It offers easy sign-up, login, and product filtering by gender, color, category, and price. Secure Stripe payments and dedicated dashboards benefit both buyers and sellers, with robust forms ensuring safe entry of credit card and address details. Powered by Node.js, Express.js, and PostgreSQL, Zevon combines functionality with a seamless user experience.",
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: cssImage.src,
          progress: 80,
          title: "CSS",
        },
        {
          _type: "technology",
          image: nodeImage.src,
          progress: 80,
          title: "NodeJS",
        },
        {
          _type: "technology",
          image: typescriptImage.src,
          progress: 80,
          title: "Typescript",
        },
        {
          _type: "technology",
          image: supabaseImage.src,
          progress: 70,
          title: "Supabase",
        },
        {
          _type: "technology",
          image: postmanImage.src,
          progress: 90,
          title: "Postman",
        },
        {
          _type: "technology",
          image: stripeImage.src,
          progress: 60,
          title: "Stripe",
        },
      ],
    },
    {
      _type: "project",
      title: "NoteWave",
      linkToBuild: "https://notewave.vercel.app",
      image: notewaveImage.src,
      summary:
        "A community note-keeping application built using React, Typescript, Firebase and Tailwind CSS. It allows users to add, edit, and remove their notes as well as search for them based on title and email id or filter them based on their color category. NoteWave also features a minimal, responsive UI that is easy on the eyes and easy to navigate, as well as a dark mode for all those night owls out there!",
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: tailwindImage.src,
          progress: 90,
          title: "TailwindCSS",
        },
        {
          _type: "technology",
          image: typescriptImage.src,
          progress: 80,
          title: "Typescript",
        },
        {
          _type: "technology",
          image: nodeImage.src,
          progress: 80,
          title: "NodeJS",
        },
        {
          _type: "technology",
          image: mongoImage.src,
          progress: 70,
          title: "MongoDB",
        },
        {
          _type: "technology",
          image: postmanImage.src,
          progress: 90,
          title: "Postman",
        },
      ],
    },
    {
      _type: "project",
      title: "CoinFolio",
      linkToBuild: "https://coinfolio-tan.vercel.app/",
      image: coinfolioImage.src,
      summary:
        "A crypto currency tracker made using coingecko api, nextjs and apex charts featuring a watchlist and drag and drop functionality.",
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: tailwindImage.src,
          progress: 90,
          title: "TailwindCSS",
        },
        {
          _type: "technology",
          image: typescriptImage.src,
          progress: 80,
          title: "Typescript",
        },
        {
          _type: "technology",
          image: nodeImage.src,
          progress: 80,
          title: "NodeJS",
        },
        {
          _type: "technology",
          image: postmanImage.src,
          progress: 90,
          title: "Postman",
        },
      ],
    },
  ];

  return projects;
};
