import Layout from "@theme/Layout";
import React from "react";
import { TextInput } from "../components/text-input";

export default function Hello() {
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
          <TextInput
            label="Lag navn"
            name="teamName"
            value=""
            onChange={console.log}
          />

          <TextInput
            label="Epost (til lag ansvarlig)"
            name="email"
            type="email"
            value=""
            onChange={console.log}
          />
        </div>
      </div>
    </Layout>
  );
}
