import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";

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
