import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import Image from "next/image";

const Header = async () => {
  const session = await unstable_getServerSession();

  if (session) {
    return (
      <header className="m-auto w-screen center space-y-[3vh] sticky top-[1vh] z-50">
        <div className="bg-stone-800 rounded-ease px-[1vw] py-[1vh] drop-shadow-2xl animate center space-x-[15vw]">
          <div className="center space-x-[1vw]">
            <Image
              width={100}
              height={100}
              className="avatarSize rounded-full"
              src={session.user?.image!}
              alt="Avatar"
            />
            <div className="text-plainflex justify-center items-start flex-col">
              <p className="font-light text-stone-300">Salut,&nbsp;</p>
              <p className="font-medium text-stone-200">
                {session.user?.name}!
              </p>
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
        Connection
      </Link>
    </header>
  );
};

export default Header;
