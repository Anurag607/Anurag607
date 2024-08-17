import nextImage from "../public/technologies/next.png";
import djangoImage from "../public/technologies/django.svg";
import awsImage from "../public/technologies/aws.svg";
import postgresqlImage from "../public/technologies/postgresql.svg";
import postmanImage from "../public/technologies/postman.png";
import dockerImage from "../public/technologies/docker.png";
import javascriptImage from "../public/technologies/javascript.png";
import nodeImage from "../public/technologies/node.png";

import ecowiserImage from "../public/companies/ecowiser.png";
import nucastImage from "../public/companies/nucast.png";

import { Experience } from "../typings";

export const fetchExperiences = async (): Promise<Experience[]> => {
  const experiences: Experience[] = [
    {
      _type: "experience",
      company: "Ecowiser",
      companyImage: ecowiserImage.src,
      dateStarted: "2023-11-07",
      dateEnded: "2024-07-31",
      isCurrentlyWorkingHere: false,
      jobTitle: "Software Developer Intern",
      points: [
        "Optimizing the performance, SEO, and code readability of 2 NextJS applications through regular maintenance.",
        "Created CMS using Strapi headless CMS and implementing a sync worker fleet for populating database with sustainable products from 300+ brands filtered out and modified by a custom made LLM.",
        "Overseeing the backend of these applications in Django as well as the server deployments using Docker and AWS.",
        "Migrating 2 major projects from ReactJS to Next.JS, enhancing SEO capabilities as well as maintaining and updating existing web apps and browser extensions.",
        "Implemented Circuit Breaker Design Pattern in both applications for effective API calls as well as integrated Kissmetrics and Google Analytics for monitoring incoming website traffic.",
        "Implemented new features based on customer feedback resulting in an increase of website traffic from 500,000 to 700,000.",
      ],
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: djangoImage.src,
          progress: 70,
          title: "Django",
        },
        {
          _type: "technology",
          image: awsImage.src,
          progress: 50,
          title: "AWS",
        },
        {
          _type: "technology",
          image: postgresqlImage.src,
          progress: 70,
          title: "PostgreSQL",
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
      _type: "experience",
      company: "Nucast.io",
      companyImage: nucastImage.src,
      dateStarted: "2023-03-22",
      dateEnded: "2023-06-22",
      isCurrentlyWorkingHere: false,
      jobTitle: "Full Stack Developer Intern",
      points: [
        "Redesigned and implemented the UI and features of 4 projects using NextJS and Figma.",
        "Worked on Supabase to create new databases and maintain existing ones, and modify the rules for CRUD to increase security and reduce query response time by 25%.",
        "Developed Node.js-based Restful APIs for seamless Supabase client integration, overseeing 500+ daily requests. Ensured efficient CRUD operations, highlighting adept data management.",
      ],
      technologies: [
        {
          _type: "technology",
          image: nextImage.src,
          progress: 80,
          title: "NextJS",
        },
        {
          _type: "technology",
          image: javascriptImage.src,
          progress: 80,
          title: "Javascript",
        },
        {
          _type: "technology",
          image: nodeImage.src,
          progress: 80,
          title: "NodeJS",
        },
        {
          _type: "technology",
          image: postgresqlImage.src,
          progress: 70,
          title: "PostgreSQL",
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

  return experiences;
};
