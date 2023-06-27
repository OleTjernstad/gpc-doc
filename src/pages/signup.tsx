import React, { useState } from "react";
import { TextArea, TextInput } from "../components/text-input";
import Translate, { translate } from "@docusaurus/Translate";

import { Button } from "../components/button";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./signup.module.css";

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

    setEmailError(undefined);
    setNameError(undefined);

    // reset when user retries
    setSuccess(false);
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
        language: translate({ id: "language", message: "no" }),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();
    console.log(data);

    if (data.message === "email_exits") {
      setEmailError("email_exits");
      setLoading(false);
      return;
    }
    if (data.message === "name_exits") {
      setNameError("name_exits");
      setLoading(false);
      return;
    }
    if (res.status === 200) {
      setSuccess(true);
    }
    setLoading(false);
  }

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Layout
      title={translate({ id: "signup.layout.title", message: "Påmelding" })}
      description={translate({
        id: "signup.layout.description",
        message: "Påmelding av lag til GPC 2024",
      })}
    >
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
          <h1>
            <Translate id="signup.title">Påmelding til GPC 2024</Translate>
          </h1>

          <p>
            <Translate id="signup.invite">
              Være med på GPC 2024, "The best games ever"? Meld på laget deres
              her.
            </Translate>
          </p>
          <p>
            <Translate id="signup.members">
              Vi anbefaler 2 - 5 personer pr lag.
            </Translate>
          </p>

          {success ? <SuccessAlert /> : null}

          <hr />
          <form onSubmit={handleSubmit}>
            <TextInput
              label={translate({ id: "signup.teamName", message: "Lag navn" })}
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
                <Translate id="signup.error.name-missing">
                  Lag navnet mangler
                </Translate>
              </div>
            ) : nameError === "name_exits" ? (
              <div
                style={{
                  color: "red",
                  paddingBottom: 20,
                }}
              >
                <Translate id="signup.error.name-exist">
                  Lag navnet er allerede registrert
                </Translate>
              </div>
            ) : null}

            <TextInput
              label={translate({
                id: "signup.email",
                message: "Epost (til lag ansvarlig)",
              })}
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
                <Translate id="signup.error.email-missing">
                  Epost mangler
                </Translate>
              </div>
            ) : emailError === "email_exits" ? (
              <div
                style={{
                  color: "red",
                  paddingBottom: 20,
                }}
              >
                <Translate id="signup.error.name-exist">
                  Epost er allerede registrert
                </Translate>
              </div>
            ) : null}

            <TextArea
              label={translate({
                id: "signup.members",
                message: "Hvem er dere? List gjerne opp geocaching nickene",
              })}
              name="members"
              value={members}
              onChange={setMembers}
            />

            <TextArea
              label={translate({
                id: "signup.accommodation",
                message:
                  "Ønsker dere å overnatte på eventplassen? (Telt, Bobil)",
              })}
              name="accommodation"
              value={accommodation}
              onChange={setAccommodation}
            />

            <Button
              label={translate({
                id: "signup.submit",
                message: "Send inn påmelding",
              })}
              type="submit"
              loading={loading}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}

function SuccessAlert() {
  return (
    <div className={clsx(styles.success, styles.alert)}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <svg
            width="50"
            height="50"
            id="Layer_1"
            // style={"enable-background:new 0 0 128 128;"}
            version="1.1"
            viewBox="0 0 128 128"
          >
            <g>
              <circle fill="#fff" cx="64" cy="64" r="64" />
            </g>
            <g>
              <path
                fill="#3EBD61"
                d="M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2   c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z"
              />
            </g>
          </svg>
        </div>
        <p>
          <Translate id="signup.success">
            Takk for påmelding, dere vil motta en bekreftelse på mottatt
            registering pr epost
          </Translate>
        </p>
      </div>
    </div>
  );
}
