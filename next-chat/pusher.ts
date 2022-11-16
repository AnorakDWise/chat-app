import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1508103",
  key: "7186ca30dfb308dead5f",
  secret: "cb62a6898f71df444c81",
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher("7186ca30dfb308dead5f", {
  cluster: "eu",
  forceTLS: true,
});
