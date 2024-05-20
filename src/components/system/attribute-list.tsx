import { TypeItem } from "./exercise-type-list";
import styles from "./styles.module.css";

interface AttributeListProps {
  lng?: "en";
}

export function AttributeList({ lng }: AttributeListProps) {
  return (
    <ul>
      <TypeItem
        description={
          lng === "en"
            ? "The task can be found in the information"
            : "Oppgave hentes i informasjonen"
        }
        img={require("@site/static/img/information.png").default}
      />
      <TypeItem
        description={lng === "en" ? "Mystery Task" : "Mystery oppgave"}
        img={require("@site/static/img/mystery.png").default}
      />
      <TypeItem
        description={
          lng === "en"
            ? "Task requires the use of UV light"
            : "Oppgave krever bruk av UV lykt"
        }
        img={require("@site/static/img/uv.png").default}
      />
      <TypeItem
        description={
          lng === "en"
            ? "Task requires the use of a compass"
            : "Oppgave krever bruk av kompass"
        }
        img={require("@site/static/img/compass.png").default}
      />
    </ul>
  );
}
