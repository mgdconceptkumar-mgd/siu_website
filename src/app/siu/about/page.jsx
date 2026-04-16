import { Wrapper } from "@/layout";
import HeaderSIU from "@/layout/headers/header-siu";
import Footer from "@/layout/footers/footer";
import AboutMain from "@/components/siu/about";

export const metadata = {
  title: "About Us | Study in UAE™ (SIU)",
  description: "Learn about Study in UAE™ (SIU), the unified next-generation education platform designed to simplify access to higher education in the UAE.",
};

const AboutPage = () => {
  return (
    <Wrapper>
      <HeaderSIU />
      <AboutMain />
      <Footer />
    </Wrapper>
  );
};

export default AboutPage;
