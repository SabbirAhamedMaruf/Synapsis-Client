import { GoPackage } from "react-icons/go";
import { PiChatDots, PiGearSix } from "react-icons/pi";

export const synapsisRoutes = [
  {
    title: "Chat",
    redirect_url: "/",
    icon: PiChatDots,
  },
  {
    title: "Models",
    redirect_url: "/models",
    icon: GoPackage,
  },
  {
    title: "Settings",
    redirect_url: "/settings",
    icon: PiGearSix,
  },
];
