import Translate, { translate } from "@docusaurus/Translate";

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
    img: "/img/gpc2024.png",
    alt: "GPC logo",
    description: <></>,
  },
  {
    title: "Dato",
    Svg: require("@site/static/img/undraw_booking_re_gw4j.svg").default,
    description: (
      <Translate id="homepage.feature.date">17.august 2024</Translate>
    ),
  },
];

function Feature({ Svg, title, description, img, alt }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : img ? (
          <img className={styles.featureImg} src={img} alt={alt ? alt : ""} />
        ) : null}
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
