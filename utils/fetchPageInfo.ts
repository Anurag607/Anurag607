import profilePic from "../public/profile.jpeg";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const pageInfo: PageInfo = {
    _type: "pageInfo",
    address:
      "NBCC Tower, Block A, East Kidwai Nagar, New Delhi 110023, New Delhi",
    backgroundInformation:
      "My name is Anurag Goswami. I'm currently a student at Indian Institute of Information Technology, Design and Manufacturing, Jabalpur studying Computer Science and Engineering. I love solving problems by developing easy-to-use applications and learning about the different technologies used in real world to make our lives easier. I was born and raised in Noida, Delhi NCR where I developed a strong interest in the way technology affects the behaviour of the scoiety as well as a love for anything sweet and sour. I love listening to music, eat new food and meet new people. And if you'd like to chat or challenge me to a friendly game of badminton, let me know!",
    email: "anurag79002@gmail.com",
    role: "Software Developer",
    heroImage: profilePic.src,
    name: "Anurag Goswami",
    phoneNumber: "+91-9937511593",
    profilePic: profilePic.src,
  };

  return pageInfo;
};
