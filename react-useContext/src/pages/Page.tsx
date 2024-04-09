import { Layout } from "../layouts/Layout";
import { Sidebar } from "../components/SideBar";
import { MainPart } from "./MainPart";

export const Page = () => {
    return (
      <Layout>
        <Sidebar />
        <MainPart />
      </Layout>
    );
  };
  