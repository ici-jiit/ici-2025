import img from "../assets/img/newBanner.png"
const Banner = () => {
  return (
    <div className="w-full pt-[4.75rem]" id="wrapper">
      <img
        src={img}
        alt="Final Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
export default Banner;