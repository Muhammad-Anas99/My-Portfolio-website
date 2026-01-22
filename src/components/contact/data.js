import locationImage from "../../Images/map.png";
import mailImage from "../../Images/mail.png";
import whatsAppImage from "../../Images/whatsapp.png";
import linkedInImage from "../../Images/linkedIn.png";
import facebookImage from "../../Images/facebook.png";
import instagramImage from "../../Images/Instagram_logo_2016.svg.webp";

const handleHireMeClick = () => {
  window.open("mailto:zohaibsoomro0101@gmail.com", "_blank");
};

const handleWhatsApp = () => {
  const phoneNumber = "+923017633400"; // Replace with the recipient's phone number
  const message = "Hello! ❤️"; // Replace with your desired message

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  window.open(url);
};

export const contactdata = [
  {
    id: 1,
    title: "Location",
    title2: "Karachi, Pakistan",
    img: locationImage,
    locationhover: true,
  },
  {
    id: 2,
    title: "Mail",
    title2: "flashycoder@gmail.com",
    img: mailImage,
    click: handleHireMeClick,
  },
  {
    id: 3,
    title: "WhatsApp",
    title2: "0302 1206595",
    img: whatsAppImage,
    click: handleWhatsApp,
  },
  {
    id: 4,
    title: "LinkedIn",
    title2: "M.Anas",
    img: linkedInImage,
    link: "https://www.linkedin.com",
    hover: true,
  },
  {
    id: 5,
    title: "Facebook",
    title2: "Anas Khalid",
    img: facebookImage,
    link: "https://www.facebook.com/profile.php?id=61563022020119",
    hover: true,
  },
  {
    id: 6,
    title: "Instagram",
    title2: "How.Website.Dev",
    img: instagramImage,
    link: "https://www.instagram.com/how.website.dev/",
    hover: true,
  },
];
