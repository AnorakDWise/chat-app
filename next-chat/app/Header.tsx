import Link from "next/link";
import LogOutButton from "./LogOutButton";

const Header = () => {
  const session = true;

  if (session) {
    return (
      <header className="m-auto w-screen center space-y-[3vh] sticky top-[1vh] z-50">
        <div className="bg-stone-800 rounded-ease px-[1vw] py-[1vh] drop-shadow-2xl animate center space-x-[15vw]">
          <div className="center space-x-[1vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              className="w-[3vw] fill-stone-200 rounded-full"
            >
              <path d="M 15 3 C 11.686 3 9 5.686 9 9 L 9 10 C 9 13.314 11.686 16 15 16 C 18.314 16 21 13.314 21 10 L 21 9 C 21 5.686 18.314 3 15 3 z M 14.998047 19 C 10.992047 19 5.8520469 21.166844 4.3730469 23.089844 C 3.4590469 24.278844 4.329125 26 5.828125 26 L 24.169922 26 C 25.668922 26 26.539 24.278844 25.625 23.089844 C 24.146 21.167844 19.004047 19 14.998047 19 z"></path>
            </svg>
            <div className="text-plainflex justify-center items-start flex-col">
              <p className="font-light text-stone-300">Salut,&nbsp;</p>
              <p className="font-medium text-stone-200">Gregy!</p>
            </div>
          </div>
          <LogOutButton />
        </div>
      </header>
    );
  }

  return (
    <header className="m-auto w-screen flex flex-col justify-center items-center space-y-[3vh] sticky top-[1vh] z-50">
      <div className="bg-stone-800 rounded-ease px-[1vw] py-[1vh] drop-shadow-2xl animate center">
        <h2 className="font-normal text-big text-stone-200">
          Bienvenue à <span className="font-medium">NextChat</span>
        </h2>
      </div>

      <Link
        href="/auth/signin"
        className="bg-stone-800 hover:bg-stone-200 text-stone-200 hover:text-stone-900 px-[1vw] py-[1vh] rounded-ease drop-shadow-xl hover:drop-shadow-2xl text-plain animate font-medium"
      >
        Connecter
      </Link>
    </header>
  );
};

export default Header;
