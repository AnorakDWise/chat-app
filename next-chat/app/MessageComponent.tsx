import { Message } from "../typings";
import Image from "next/image";

type Props = {
  message: Message;
};

const MessageComponent = ({ message }: Props) => {
  const isUser = false;

  return (
    <div
      className={`flex justify-start items-start my-[0.75vh] space-x-[0.5vw] max-w-full ${
        isUser && "flex-row-reverse"
      }`}
    >
      <Image
        src={message.profilePic}
        width={100}
        height={100}
        className={`rounded-full border-none avatarSize ${
          isUser && "ml-[0.5vw]"
        }`}
        alt="Profile avatar"
      />
      <div
        className={`flex flex-col ${
          isUser ? "items-end" : "items-start"
        } justify-center space-y-[0.25vh]`}
      >
        <p
          className={`text-small ${
            isUser ? "mr-[0.5vw]" : "ml-[0.5vw]"
          } font-light`}
        >
          {message.username}
        </p>
        <div
          className={`flex justify-start items-end space-x-[0.25vw] flex-wrap ${
            isUser && "flex-row-reverse"
          }`}
        >
          <p
            className={`${
              isUser
                ? "bg-stone-800 text-stone-200"
                : "bg-stone-200 text-stone-900"
            } font-normal px-[0.5vw] py-[0.5vh] rounded-ease break-words`}
          >
            {message.message}
          </p>
          <p
            className={`text-small text-stone-700 italic ${
              isUser && "pr-[0.5vw]"
            }`}
          >
            Enovyé il y a {message.created_at}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
