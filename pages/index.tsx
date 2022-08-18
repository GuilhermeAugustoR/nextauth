import type { NextPage } from "next";
import React, { FormEvent } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button type="submit">Entrar</button>
    </form>
  );
};

export default Home;
