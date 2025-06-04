import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";

export const contactInfo = [
  {
    title: "Location",
    value: "Patna, Bihar, India",
    icon: FaMapMarkerAlt,
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Email",
    value: "yuvraj@mehta.com",
    icon: FaEnvelope,
    gradient: "from-purple-600 to-purple-400",
    link: "mailto:yuvraj@mehta.com",
  },
  {
    title: "Phone",
    value: "+91 9876543210",
    icon: FaPhoneAlt,
    gradient: "from-green-600 to-green-400",
    link: "tel:+919876543210",
  },
  {
    title: "LinkedIn",
    value: "yuvraj-mehta",
    icon: FaLinkedin,
    gradient: "from-blue-700 to-blue-500",
    link: "https://linkedin.com/in/yuvraj-mehta",
  },
];
