import styles from "./styles.module.css";

interface ExerciseTypeListProps {
  lng?: "en";
}

export function ExerciseTypeList({ lng }: ExerciseTypeListProps) {
  return (
    <ul>
      <ExerciseType
        description={
          lng === "en"
            ? "Exercise is solved with a timer, ATTENTION!! may be maximum time for execution"
            : "Øvelse løses på tid, OBS!! kan være maks tid for utførelse"
        }
        img={require("@site/static/img/time.png").default}
      />
      <ExerciseType
        description={
          lng === "en"
            ? "Carry out the exercise at the same time as us"
            : "Gjennomføre øvelsen på samme tid som oss"
        }
        img={require("@site/static/img/ideal-time.png").default}
      />
      <ExerciseType
        description={lng === "en" ? "Guessing game" : "Gjettelek"}
        img={require("@site/static/img/guess.png").default}
      />

      <ExerciseType
        description={
          lng === "en"
            ? "Exercises that can be measured in length"
            : "Øvelser som kan måles i lengde"
        }
        img={require("@site/static/img/length.png").default}
      />
      <ExerciseType
        description={
          lng === "en" ? "Exercises that give points" : "Øvelser som gir poeng"
        }
        img={require("@site/static/img/points.png").default}
      />
      <ExerciseType
        description={
          lng === "en"
            ? "Timed exercises, points are counted automatically by scanning QR codes"
            : "Øvelser som går på tid, poeng telles automatisk ved scanning av QR koder"
        }
        img={require("@site/static/img/points-max-time.png").default}
      />
    </ul>
  );
}

interface ExerciseTypeProps {
  img: string;
  description: string;
}
function ExerciseType({ description, img }: ExerciseTypeProps) {
  return (
    <li className={styles.exerciseTypeContainer}>
      <div className={styles.typeImageContainer}>
        <img className={styles.typeImage} src={img} />
      </div>
      <div>{description}</div>
    </li>
  );
}
