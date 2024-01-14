import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Nino Lamoureux - Front End Developer"
      description="Passionate front-end developer with a keen eye for responsive design and user experience.
      Let's bring your projects to life with some good vibes and energy! 🚀"
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
}
