import htmlImage from "../public/technologies/html.png";
import cssImage from "../public/technologies/css.png";
import javascriptImage from "../public/technologies/javascript.png";
import reactImage from "../public/technologies/react.png";
import nextImage from "../public/technologies/next.png";
import nodeImage from "../public/technologies/node.png";
import mongoImage from "../public/technologies/mongo.png";
import postmanImage from "../public/technologies/postman.png";
import dockerImage from "../public/technologies/docker.png";
import typescriptImage from "../public/technologies/typescript.png";
import postgresqlImage from "../public/technologies/postgresql.svg";
import awsImage from "../public/technologies/aws.svg";
import djangoImage from "../public/technologies/django.svg";
import bashImage from "../public/technologies/bash.png";
import cImage from "../public/technologies/c.png";
import pythonImage from "../public/technologies/python.png";
import gitImage from "../public/technologies/git.png";
import firebaseImage from "../public/technologies/firebase.webp";
import mysqlImage from "../public/technologies/mysql.png";
import flutterImage from "../public/technologies/flutter.png";
import dartImage from "../public/technologies/dart.png";
import cypressImage from "../public/technologies/cypress.jpg";
import tailwindImage from "../public/technologies/tailwind.png";
import supabaseImage from "../public/technologies/supabase.webp";

import { Skill } from "../typings";

export const fetchSkills = async (): Promise<Skill[]> => {
  const skills: Skill[] = [
    {
      _type: "skill",
      image: htmlImage.src,
      progress: 90,
      title: "HTML",
    },
    {
      _type: "skill",
      image: cssImage.src,
      progress: 90,
      title: "CSS",
    },
    {
      _type: "skill",
      image: javascriptImage.src,
      progress: 90,
      title: "JavaScript",
    },
    {
      _type: "skill",
      image: reactImage.src,
      progress: 90,
      title: "React",
    },
    {
      _type: "skill",
      image: nextImage.src,
      progress: 80,
      title: "NextJS",
    },
    {
      _type: "skill",
      image: nodeImage.src,
      progress: 80,
      title: "NodeJS",
    },
    {
      _type: "skill",
      image: mongoImage.src,
      progress: 70,
      title: "MongoDB",
    },
    {
      _type: "skill",
      image: postmanImage.src,
      progress: 90,
      title: "Postman",
    },
    {
      _type: "skill",
      image: dockerImage.src,
      progress: 50,
      title: "Docker",
    },
    {
      _type: "skill",
      image: typescriptImage.src,
      progress: 80,
      title: "TypeScript",
    },
    {
      _type: "skill",
      image: postgresqlImage.src,
      progress: 70,
      title: "PostgreSQL",
    },
    {
      _type: "skill",
      image: awsImage.src,
      progress: 50,
      title: "AWS",
    },
    {
      _type: "skill",
      image: djangoImage.src,
      progress: 70,
      title: "Django",
    },
    {
      _type: "skill",
      image: bashImage.src,
      progress: 80,
      title: "Bash",
    },
    {
      _type: "skill",
      image: cImage.src,
      progress: 80,
      title: "C/C++",
    },
    {
      _type: "skill",
      image: pythonImage.src,
      progress: 80,
      title: "Python",
    },
    {
      _type: "skill",
      image: gitImage.src,
      progress: 80,
      title: "Git",
    },
    {
      _type: "skill",
      image: firebaseImage.src,
      progress: 80,
      title: "Firebase",
    },
    {
      _type: "skill",
      image: mysqlImage.src,
      progress: 80,
      title: "MySQL",
    },
    {
      _type: "skill",
      image: flutterImage.src,
      progress: 80,
      title: "Flutter",
    },
    {
      _type: "skill",
      image: dartImage.src,
      progress: 80,
      title: "Dart",
    },
    {
      _type: "skill",
      image: cypressImage.src,
      progress: 60,
      title: "Cypress",
    },
    {
      _type: "skill",
      image: tailwindImage.src,
      progress: 90,
      title: "TailwindCSS",
    },
    {
      _type: "skill",
      image: supabaseImage.src,
      progress: 70,
      title: "Supabase",
    },
  ];

  return skills;
};
