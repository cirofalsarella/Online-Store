import Carroseul from "../../../Components/carrousel"
import carrouselImage from "../../../assets/logo.png"
import teste from "../../../assets/mochila.png"


const Landing = () => {
  const Images = [
    <Image src={carrouselImage} boxSize={"200px"}/>,
    <Image src={teste} boxSize={"200px"}/>,
    <Image src={carrouselImage} boxSize={"200px"}/>,
    <Image src={carrouselImage} boxSize={"200px"}/>,
    <Image src={carrouselImage} boxSize={"200px"}/>,
    <Image src={carrouselImage} boxSize={"200px"}/>,
    <Image src={carrouselImage} boxSize={"200px"}/>,
  ]
  
  const size = 200
  return (
      <Carroseul images={Images} size={size}/>
    );
}

export default Landing;
