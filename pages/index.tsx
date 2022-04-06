import type { NextPage } from "next";
import Head from "next/head";
import Monitor from "../components/dashborad/monitor";
import UserList from "../components/form/userList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bruno</title>
        <meta name="description" content="Bruno app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Monitor/>
      <UserList/>
    </div>
  );
};

export default Home;
