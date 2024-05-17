import styles from "./styles.module.css";

interface ExerciseTypeListProps {}

export function ExerciseTypeList({}: ExerciseTypeListProps) {
  return (
    <ul>
      <ExerciseType
        description="Øvelse løses på tid, OBS!! kan være maks tid for utførelse"
        img={require("@site/static/img/time.png").default}
      />
      <ExerciseType
        description="Gjettelek, komme nærmest mulig"
        img={require("@site/static/img/guess.png").default}
      />
      <ExerciseType
        description="Gjennomføre øvelsen på samme tid som oss"
        img={require("@site/static/img/ideal-time.png").default}
      />
      <ExerciseType
        description="Øvelser som kan måles i lengde"
        img={require("@site/static/img/length.png").default}
      />
      <ExerciseType
        description="Øvelser gir poeng"
        img={require("@site/static/img/points.png").default}
      />
      <ExerciseType
        description="Øvelser som går på tid, poeng telles automatisk ved scanning av QR koder"
        img={require("@site/static/img/points-max-time.png").default}
      />
      <ExerciseType
        description="Øvelser som gjøres på tid, start og stopp med QR koder"
        img={require("@site/static/img/time.png").default}
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
