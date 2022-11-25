import { getProviders } from "next-auth/react";
import SignInComponent from "./SignInComponent";

const signInPage = async () => {
  const providers = await getProviders();
  return (
    <main className="m-auto w-screen h-screen center flex-col absolute left-0 right-0 top-0 bottom-0 text-stone-200">
      <h1 className="text-fuckingHuge font-medium md:text-bigAsUrMom">
        NextChat
      </h1>
      <SignInComponent providers={providers} />
    </main>
  );
};

export default signInPage;
