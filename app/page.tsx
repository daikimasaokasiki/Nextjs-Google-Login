'use client';

import { useAuth } from "./context/auth";
import { login, logout } from "./lib/auth";
import { useState } from "react";

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };
  return (
    <div>
      {user === null && !waiting && <button onClick={signIn}>ログイン</button>}
      {user && (
        <div>
          <p>こんにちは、{user?.name}さん</p>
          <button onClick={logout}>ログアウト</button>
        </div>
      )}
    </div>
  );
}
