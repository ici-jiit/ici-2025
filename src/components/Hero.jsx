
import img from "../assets/img/1.jpg";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={img}
        alt="Background"
        className="w-full h-96 object-cover opacity-50"
      />
      <div className="absolute bottom-0 left-0 text-white text-3xl font-bold p-8">
        <p>Some Hero Text Here</p>
      </div>
    </section>
  );
};
export default Hero;