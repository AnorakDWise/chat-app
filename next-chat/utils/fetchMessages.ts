import { Message } from "../typings";

const fetcher = async () => {
  const res = await fetch("../pages/api/getMessages.ts");
  const data = await res.json();
  const messages: Message[] = data.messages;
  return messages;
};

export default fetcher;
