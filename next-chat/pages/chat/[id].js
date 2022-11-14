import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import { db } from "../../firebase";
import {
  collection,
  doc,
  orderBy,
  getDoc,
  getData,
  getDocs,
  query,
} from "firebase/firestore";

const Chat = () => {
  return (
    <Container className="bg-stone-900">
      <Head></Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
};

export default Chat;

export async function getServerSideProps(context) {
  const chatID = context.query.id;
  const chatIDRef = collection(db, "chats");
  const messageID = collection(db, "messages");
  const ref = doc(chatIDRef, chatID);
  const messagesRes = await getDocs(
    query(ref, messageID, orderBy("timestamp", "asc"))
  );

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  const chatRes = await getData(ref);
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatContainer = styled.div`
  margin: 0 auto;
  overflow: scrollbar;
`;
