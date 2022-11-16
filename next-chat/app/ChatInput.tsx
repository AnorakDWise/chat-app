"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const messageToSend = input;
    setInput("");
    const id = uuid();
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Gregy",
      profilePic:
        "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/315900663_102715459334921_85022070233134515_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nJRlkL0nVHAAX_sw1cz&_nc_ht=scontent-cdg2-1.xx&oh=00_AfAkkBxLtD2HvAD9ENenSHUVLECCCwCheajHaYV_bLsn4Q&oe=637AF711",
      email: "gregory442005@gmail.com",
    };
    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then((res) => res.json());
      return [data.message, ...messages!];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="m-auto center space-x-[0.5vw] fixed bottom-[1vh] z-50 w-screen"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-stone-800 hover:bg-stone-200 focus:bg-stone-200 w-4/12 px-[1vw] py-[1vh] rounded-ease text-plain outline-none placeholder:text-stone-700 hover:placeholder:text-stone-400 focus:placeholder:text-stone-400 animate text-stone-900 font-normal drop-shadow-xl hover:drop-shadow-2xl focus:drop-shadow-2xl"
        placeholder="Tapez votre message ici..."
      />
      <button type="submit" className="group" disabled={!input}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 30 30"
          className="w-[2.5vw] fill-stone-200 hover:fill-stone-400 animate group-disabled:fill-stone-800 group-disabled:hover:fill-stone-800 group-disabled:cursor-not-allowed drop-shadow-xl hover:drop-shadow-2xl focus:drop-shadow-2xl"
        >
          <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.707,13.707 C19.511,13.903,19.255,14,18.999,14H16v7c0,0.552-0.447,1-1,1s-1-0.448-1-1v-7h-2.999c-0.256,0-0.512-0.097-0.708-0.293 c-0.391-0.391-0.391-1.023,0-1.414l4-4C14.488,8.098,14.744,8,15,8s0.512,0.098,0.707,0.293l4,4 C20.098,12.684,20.098,13.316,19.707,13.707z"></path>
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
