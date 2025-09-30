
import logo from "../assets/logo.png";

const Header = () => {
  const today = new Date();
  const optionsDay = { weekday: "long" };
  const optionsRest = { year: "numeric", month: "long", day: "numeric" }; // Sunday
  const day = today.toLocaleDateString("en-US", optionsDay); // Sunday
  const restOfDate = today.toLocaleDateString("en-US", optionsRest);

  // Remove day from restOfDate because it might include it
  const rest = restOfDate.replace(day + ", ", ""); // "November 27, 2025"
  console.log();
  return (
    <div className="flex justify-content-center align-items-center flex-column mt-5 ">
      <img src={logo} alt="logo" />
      <p className="text-[var(--color-font-primarytext)] mt-2 text-xl ">
        Journalism Without Fear or Favour
      </p>

      <div>
        <span className="text-xl font-bold">{day},</span>{" "}
        <span className="text-xl" style={{ color: "gray" }}>
          {rest}
        </span>
      </div>
    </div>
  );
};

export default Header;
