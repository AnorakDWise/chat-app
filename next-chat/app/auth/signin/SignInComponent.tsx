"use client";

import { getProviders, signIn } from "next-auth/react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

const SignInComponent = ({ providers }: Props) => {
  return (
    <div className="bg-stone-800 text-medium md:text-phoneBig px-[1vw] py-[1vh] rounded-ease md:rounded-strong md:px-[3vw] drop-shadow-2xl hover:bg-stone-200 hover:text-stone-900 animate">
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
              })
            }
          >
            Connection avec <b>{provider.name}</b>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInComponent;
