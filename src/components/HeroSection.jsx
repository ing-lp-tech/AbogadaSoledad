import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import logoSoledadNavBar from "../assets/logoSoledadNavBar.jpg";
import soledadPrincipal from "../assets/soledadPrincipal.jpg";
import portadaSoledad1 from "../assets/portadaSoledad1.jpg";
import portadaSoledad2 from "../assets/portadaSoledad2.jpg";

const HeroSection = ({ id }) => {
  return (
    <div id={id} className="flex flex-col items-center mt-6 lg:mt-10">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-blue-50">
          <div className="text-center md:text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-6xl tracking-wide">
              {" "}
              Soto Siles Soledad
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text pb-2">
              {" "}
              Abogada
            </h1>

            <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
              Te acompaño en tus problemas jurídicos buscando siempre la mejor
              solución, con explicaciones en un lenguaje sencillo y haciéndote
              partícipe del paso a paso. El caso es tuyo, y las decisiones
              también.
            </p>
          </div>

          {/* Imagen */}
          <img
            className="w-full max-w-md md:max-w-lg mt-8 md:mt-0"
            src={soledadPrincipal}
            alt="Logo"
          />
        </div>
        {/* <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              for developers
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools. Get started today and turn your
            imagination into immersive reality!
          </p>
          <img className="h-100 w-50 mr-2" src={soledadPrincipal} alt="Logo" />
        </div> */}

        <div className="flex justify-center my-10">
          <img className="h-14 w-40 mr-2" src={logoSoledadNavBar} alt="Logo" />
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <img
          className="w-full max-w-md md:max-w-lg mt-8 md:mt-0"
          src={portadaSoledad1}
          alt="Logo"
        /> */}
        <img
          className="w-full max-w-md md:max-w-lg mt-8 md:mt-0"
          src={portadaSoledad2}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default HeroSection;
