import React, { useState } from "react";
import { TextArea, TextInput } from "../components/text-input";

import { Button } from "../components/button";
import Layout from "@theme/Layout";

export default function Hello() {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<
    "missing" | "name_exits" | undefined
  >(undefined);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<
    "missing" | "email_exits" | undefined
  >(undefined);
  const [success, setSuccess] = useState<boolean>(false);
  const [accommodation, setAccommodation] = useState<string>("");
  const [members, setMembers] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    if (!name) setNameError("missing");

    if (!email) setEmailError("missing");

    if (emailError !== undefined || nameError !== undefined) {
      setLoading(false);
      return;
    }

    const res = await fetch("http://localhost:8787", {
      body: JSON.stringify({
        email,
        name,
        accommodation,
        members,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      setSuccess(true);
    }
    if (data.message === "email_exits") {
      setEmailError("email_exits");
    }
    if (data.message === "name_exits") {
      setNameError("name_exits");
    }
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

          {success ? (
            <p>
              Takk for påmelding, dere vil motta en bekreftelse på mottatt
              registering pr epost
            </p>
          ) : null}

          <hr />
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Lag navn"
              name="teamName"
              value={name}
              onChange={setName}
            />
            {nameError && nameError === "missing" ? (
              <div
                style={{
                  color: "red",
                  paddingBottom: 20,
                }}
              >
                Lag navnet mangler
              </div>
            ) : nameError === "name_exits" ? (
              <div
                style={{
                  color: "red",
                  paddingBottom: 20,
                }}
              >
                Lag navnet er allerede registrert
              </div>
            ) : null}

            <TextInput
              label="Epost (til lag ansvarlig)"
              name="email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            {emailError && emailError === "missing" ? (
              <div
                style={{
                  color: "red",
                  paddingBottom: 20,
                }}
              >
                Epost mangler
              </div>
            ) : emailError === "email_exits" ? (
              <div
                style={{
                  color: "red",
                  paddingBottom: 20,
                }}
              >
                Epost er allerede registrert
              </div>
            ) : null}

            <TextArea
              label="Hvem er dere? List gjerne opp geocaching nickene"
              name="members"
              value={members}
              onChange={setMembers}
            />

            <TextArea
              label="Ønsker dere å overnatte på eventplassen? (Telt, Bobil)"
              name="accommodation"
              value={accommodation}
              onChange={setAccommodation}
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
