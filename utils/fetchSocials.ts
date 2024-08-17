import { Social } from "../typings";

export const fetchSocials = async () => {
  const socials: Social[] = [
    {
      _type: "social",
      title: "github",
      url: "https://github.com/Anurag607",
    },
    {
      _type: "social",
      title: "linkedin",
      url: "https://www.linkedin.com/in/anurag7902/",
    },
    {
      _type: "social",
      title: "twitter",
      url: "https://www.linkedin.com/in/anurag7902/",
    },
    {
      _type: "social",
      title: "instagram",
      url: "https://instagram.com/anurag_gsw/",
    },
    {
      _type: "social",
      title: "facebook",
      url: "https://www.facebook.com/anurag.goswami.39395",
    },
  ];

  return socials;
};
