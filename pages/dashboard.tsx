import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

const Dashboard = () => {
  const { user } = React.useContext(AuthContext);

  React.useEffect(() => {
    api
      .get("/me")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Dashboard: {user?.email}</div>;
};

export default Dashboard;
