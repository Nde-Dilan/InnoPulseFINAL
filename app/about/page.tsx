import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Talent Connect Cameroon",
  description: "Learn more about our mission to empower tech talent in Cameroon.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Discover how Talent Connect Cameroon is bridging the gap between skilled professionals and global opportunities."
      />
     <AboutSectionOne />
     <AboutSectionTwo />
    </>
  );
};

export default AboutPage;