import SimpleImageSlider from "react-simple-image-slider"

const image = [
    {url: "https://casolutions.cl/img/arbol.jpg" },
    {url: "https://casolutions.cl/img/arrayan.jpg" },
    {url: "https://casolutions.cl/img/flores.jpg" },
    {url: "https://casolutions.cl/img/paisaje1.jpg" },
    {url: "https://casolutions.cl/img/paisaje2.jpg" },
    {url: "https://casolutions.cl/img/paisaje3.jpg" },
    {url: "https://casolutions.cl/img/paisaje4.jpg" },
    ];

    const Slider = () => {
        return (
    <div>
      <SimpleImageSlider
        width="40%"
        height="40%"
        images={image}
        showBullets={true}
        showNavs={true}
      />
    </div>
    );
  }
export default Slider
