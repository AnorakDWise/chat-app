import styled from "styled-components";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, where, query } from "firebase/firestore";
import Chat from "./Chat";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const userChatRef = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const [chatsSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt(
      "Please enter an email address with which you wish to chat."
    );

    if (!input) return;

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    )
      addDoc(collection(db, "chats"), {
        users: [user.email, input],
      });
  };

  const chatAlreadyExists = (recipientEmail) => {
    return !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );
  };

  return (
    <Container className="bg-stone-800">
      <ActionBar className="bg-stone-700">
        <Button className="animate" onClick={() => auth.signOut()}>
          <UserAvatar src={user.photoURL} />
        </Button>

        <ButtonsBar>
          <Button className="animate" onClick={createChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              className="w-[2.5vw] mr-[0.5vw]"
            >
              <linearGradient
                id="D9K307v_SDf9hRla0hO9Ga_dexjIv2Gi0JQ_gr1"
                x1="12.686"
                x2="35.58"
                y1="249.408"
                y2="212.159"
                gradientTransform="matrix(1 0 0 -1 0 254)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#33bef0"></stop>
                <stop offset="1" stop-color="#0a85d9"></stop>
              </linearGradient>
              <path
                fill="url(#D9K307v_SDf9hRla0hO9Ga_dexjIv2Gi0JQ_gr1)"
                d="M42,8H6c-1.105,0-2,0.895-2,2v26c0,1.105,0.895,2,2,2h8v7.998	c0,0.891,1.077,1.337,1.707,0.707L24.412,38H42c1.105,0,2-0.895,2-2V10C44,8.895,43.105,8,42,8z"
              ></path>
              <radialGradient
                id="D9K307v_SDf9hRla0hO9Gb"
                cx="38.234"
                cy="38.213"
                r="12.174"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0"></stop>
                <stop offset=".979" stop-opacity="0"></stop>
              </radialGradient>
              <path
                fill="url(#undefined)"
                d="M44,36v-8.376C42.232,26.598,40.187,26,38,26c-6.617,0-12,5.383-12,12h16	C43.105,38,44,37.105,44,36z"
              ></path>
              <linearGradient
                id="D9K307v_SDf9hRla0hO9Gc_dexjIv2Gi0JQ_gr2"
                x1="31.263"
                x2="44.348"
                y1="29.422"
                y2="46.082"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#21ad64"></stop>
                <stop offset="1" stop-color="#088242"></stop>
              </linearGradient>
              <circle
                cx="38"
                cy="38"
                r="10"
                fill="url(#D9K307v_SDf9hRla0hO9Gc_dexjIv2Gi0JQ_gr2)"
              ></circle>
              <path
                fill="#fff"
                d="M38.5,43h-1c-0.276,0-0.5-0.224-0.5-0.5v-9c0-0.276,0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5v9	C39,42.776,38.776,43,38.5,43z"
              ></path>
              <path
                fill="#fff"
                d="M33,38.5v-1c0-0.276,0.224-0.5,0.5-0.5h9c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-9	C33.224,39,33,38.776,33,38.5z"
              ></path>
            </svg>
          </Button>
          <Button className="animate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              className="w-[2.5vw] ml-[0.5vw]"
            >
              <linearGradient
                id="xEzlwym2ki3z7leW_Htafa_KzesLA1YPU25_gr1"
                x1="21.302"
                x2="27.254"
                y1="21.302"
                y2="27.254"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#32bdef"></stop>
                <stop offset="1" stop-color="#1ea2e4"></stop>
              </linearGradient>
              <circle
                cx="24"
                cy="24"
                r="4"
                fill="url(#xEzlwym2ki3z7leW_Htafa_KzesLA1YPU25_gr1)"
              ></circle>
              <linearGradient
                id="xEzlwym2ki3z7leW_Htafb_KzesLA1YPU25_gr2"
                x1="7.302"
                x2="13.254"
                y1="21.302"
                y2="27.254"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#32bdef"></stop>
                <stop offset="1" stop-color="#1ea2e4"></stop>
              </linearGradient>
              <circle
                cx="10"
                cy="24"
                r="4"
                fill="url(#xEzlwym2ki3z7leW_Htafb_KzesLA1YPU25_gr2)"
              ></circle>
              <linearGradient
                id="xEzlwym2ki3z7leW_Htafc_KzesLA1YPU25_gr3"
                x1="35.302"
                x2="41.254"
                y1="21.302"
                y2="27.254"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#32bdef"></stop>
                <stop offset="1" stop-color="#1ea2e4"></stop>
              </linearGradient>
              <circle
                cx="38"
                cy="24"
                r="4"
                fill="url(#xEzlwym2ki3z7leW_Htafc_KzesLA1YPU25_gr3)"
              ></circle>
            </svg>
          </Button>
        </ButtonsBar>
      </ActionBar>
      <Search>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-[2.5vw]"
        >
          <path
            fill="#199be2"
            d="M35.983,32.448l-3.536,3.536l7.87,7.87c0.195,0.195,0.512,0.195,0.707,0l2.828-2.828	c0.195-0.195,0.195-0.512,0-0.707L35.983,32.448z"
          />
          <radialGradient
            id="KGt2acGa95QyN2j07oBX6a"
            cx="20.024"
            cy="20.096"
            r="19.604"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".693" stop-color="#006185" />
            <stop offset=".921" stop-color="#35c1f1" />
          </radialGradient>
          <polygon
            fill="url(#KGt2acGa95QyN2j07oBX6a)"
            points="31.601,28.065 28.065,31.601 32.448,35.983 35.983,32.448"
          />
          <linearGradient
            id="KGt2acGa95QyN2j07oBX6b"
            x1="8.911"
            x2="31.339"
            y1="8.911"
            y2="31.339"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#a3ffff" />
            <stop offset=".223" stop-color="#9dfbff" />
            <stop offset=".53" stop-color="#8bf1ff" />
            <stop offset=".885" stop-color="#6ee0ff" />
            <stop offset="1" stop-color="#63daff" />
          </linearGradient>
          <circle cx="20" cy="20" r="16" fill="url(#KGt2acGa95QyN2j07oBX6b)" />
        </svg>
        <SearchInput
          placeholder="Search in chats"
          className="bg-stone-700 text-stone-200 placeholder:text-stone-600 hover:placeholder:text-stone-700 focus:placeholder:text-stone-700 hover:bg-stone-600 focus:bg-stone-600 font-medium animate"
        />
      </Search>
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  margin: 0 auto;
  width: 28.5vw;
  height: 90vh;
  border-radius: 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  filter: drop-shadow(0 0 1vw rgb(0 0 0 / 25%));
`;

const ActionBar = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.5vw;
  padding-right: 1vw;
  padding-left: 1vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-top: 1vh;
  filter: drop-shadow(0 0 1vw rgb(0 0 0 / 25%));
  position: sticky;
  z-index: 1+;
`;

const ButtonsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  &:hover {
    filter: brightness(75%);
  }
`;

const Search = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1vw;
  padding-left: 1vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
`;

const SearchInput = styled.input`
  width: 20vw;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  padding-left: 1vw;
  border-radius: 0.75vw;
  font-size: 1vw;
  outline: none;

  &::placeholder {
    transition: all 0.2s ease-in-out;

    &:hover {
      transition: all 0.2s ease-in-out;
    }
  }
`;

const UserAvatar = styled.img`
  width: 3vw;
  height: 3vw;
  border-radius: 5vw;
`;
