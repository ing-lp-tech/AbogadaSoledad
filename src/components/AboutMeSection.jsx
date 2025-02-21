import React from "react";
import soledadUnlam from "../assets/soledadUnlam.jpg"; // Reemplaza con la ruta de tu imagen

const AboutMeSection = () => {
  return (
    <div id="sobre-mi" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Imagen */}
          <div className="lg:w-1/2 lg:order-2">
            <img
              className="w-full h-auto rounded-lg shadow-xl"
              src={soledadUnlam}
              alt="Soto Siles Soledad"
            />
          </div>

          {/* Texto */}
          <div className="lg:w-1/2 lg:order-1 lg:pr-12 mt-10 lg:mt-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              SOBRE MÍ
            </h2>

            {/* Sección 1: Abogada */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Abogada
              </h3>
              <p className="text-lg text-gray-600">
                Desde pequeña supe que quería ser abogada. Hoy, graduada de la
                Universidad Nacional de La Matanza (UNLaM), vivo mi sueño de
                defender los derechos de las personas y guiarlas hacia
                soluciones justas. Además, comparto mi pasión por el derecho
                como docente, formando a las futuras generaciones de abogados.
              </p>
            </div>

            {/* Sección 2: Matrícula PBA y CABA */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Matrícula PBA y CABA
              </h3>
              <p className="text-lg text-gray-600">
                Con matrícula habilitante en la Provincia de Buenos Aires (PBA)
                y la Ciudad Autónoma de Buenos Aires (CABA), estoy preparada
                para ejercer en ambas jurisdicciones. Si necesitás asesoramiento
                en otras provincias, no dudes en consultarme. ¡Estoy aquí para
                ayudarte!
              </p>
            </div>

            {/* Sección 3: Derecho laboral y de familia */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Derecho laboral y de familia
              </h3>
              <p className="text-lg text-gray-600">
                El derecho laboral es mi pasión. Me inspira trabajar por un
                equilibrio justo entre empleadores y trabajadores, defendiendo
                los derechos de quienes construyen el futuro con su esfuerzo. En
                el derecho de familia, busco soluciones que prioricen el
                bienestar emocional y económico de las familias, especialmente
                de los más vulnerables: los niños.
              </p>
            </div>

            {/* Sección 5: Mi familia */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Mi familia
              </h3>
              <p className="text-lg text-gray-600">
                Mi hogar está lleno de amor, risas y patitas. Comparto mi vida
                con mi familia humana y nuestras adorables mascotas, quienes me
                inspiran a ser mejor cada día. Ellos son mi refugio y mi mayor
                motivación.
              </p>
            </div>

            {/* Sección 6: Trabajamos en equipo */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Trabajamos en equipo
              </h3>
              <p className="text-lg text-gray-600">
                Detrás de Soto Siles Legal hay un equipo comprometido y
                apasionado. Juntos, combinamos experiencia, dedicación y
                creatividad para ofrecerte soluciones jurídicas integrales. No
                estás solo/a en este proceso; estamos contigo en cada paso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
