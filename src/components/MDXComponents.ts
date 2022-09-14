// Components
import DownloadButton from "@/ui/DownloadButton";
import GridComponents from "@/ui/GridComponents";
import HeroTitle from "@/ui/HeroTitle";
import { CircleLoader, DotsLoader } from "@/ui/Loader";
import SimpleModal from "@/ui/modal";
import { NestedSplash, RevealSplash, SimpleSplash } from "@/ui/splash";
import {
  BlendBackgroundTextAnimation,
  GradientTextAnimation,
  LetterAnimation,
} from "@/ui/text";
import ThemeButton from "@/ui/themeButton";

const MDXComponents = {
  // Splash
  SimpleSplash,
  NestedSplash,
  RevealSplash,

  // Text
  LetterAnimation,
  GradientTextAnimation,
  BlendBackgroundTextAnimation,

  // Modal
  SimpleModal,

  GridComponents,

  HeroTitle,
  //Theme Button

  ThemeButton,

  //Loaders
  CircleLoader,
  DotsLoader,

  DownloadButton,
};

export default MDXComponents;
