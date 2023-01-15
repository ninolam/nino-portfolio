import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Nino Lamoureux - Front End Developer"
      description="Développeur web français avec plusieurs années d'expériences, spécialisé dans le Front End et principalement en React/Nextjs"
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
}
