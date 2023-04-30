import React, { useState } from "react";

import { Button } from "../components/button";
import Layout from "@theme/Layout";
import { TextInput } from "../components/text-input";

export default function Hello() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    const res = await fetch("http://localhost:8787", {
      body: JSON.stringify({
        email,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error, success } = await res.json();
    console.log(success);
    setLoading(false);
  }

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Layout title="Påmelding" description="Påmelding av lag til GPC 2024">
      <div
        style={{
          paddingTop: 30,
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            width: "550px",
            maxWidth: "95vw",
          }}
        >
          <h1>Påmelding til GPC 2024</h1>

          <p>
            Være med på GPC 2024, "The best games ever"? Meld på laget deres
            her.
          </p>
          <p>Vi anbefaler 2 - 5 personer pr lag.</p>

          <hr />
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Lag navn"
              name="teamName"
              value={name}
              onChange={setName}
            />

            <TextInput
              label="Epost (til lag ansvarlig)"
              name="email"
              type="email"
              value={email}
              onChange={setEmail}
            />

            <Button
              label="Send inn påmelding"
              type="submit"
              loading={loading}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
