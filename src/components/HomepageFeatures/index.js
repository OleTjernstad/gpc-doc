import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Sted",
    Svg: require("@site/static/img/undraw_navigation_re_wxx4.svg").default,
    description: <>Skansen Grendehus, Flisa</>,
  },

  {
    title: "",
    description: <></>,
  },
  {
    title: "Dato",
    Svg: require("@site/static/img/undraw_booking_re_gw4j.svg").default,
    description: <>17.august 2024</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
