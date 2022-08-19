import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard = () => {
  const { user } = React.useContext(AuthContext);

  React.useEffect(() => {
    api.get("/me").then((response) => {
      console.log(response.data);
    }); 
  }, []);

  return <div>Dashboard: {user?.email}</div>;
};

export default Dashboard;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
});
