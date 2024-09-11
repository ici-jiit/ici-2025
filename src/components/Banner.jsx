import img from "../assets/img/Final_Banner.png"
const Banner = () => {
  return (
    <div className="w-full">
      <img
        src={img}
        alt="Final Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
export default Banner;