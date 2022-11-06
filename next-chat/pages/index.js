import Head from "next/head";
import "@fontsource/space-grotesk";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

export default function Home() {
  return (
    <div className="m-auto w-screen h-screen bg-stone-900">
      <Head>
        <title>NextChat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Sidebar />
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 99vw;
  height: 100vh;
  background: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
