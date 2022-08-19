import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Img: '/img/easy-to-use.png',
    description: (
      <>
        DAX Studio was designed with a clean, modern user interface that supports both a light and dark mode and provides rich metadata about your data model.
      </>
    ),
  },
  {
    title: 'Connect to any data model',
    Img: '/img/any-data-source.png',
    description: (
      <>
        DAX Studio can connect to all the different 'flavours' of tabular models
        PowerPivot for Excel,  Power BI Desktop, Azure Analysis Services and 
        Power BI Premium XMLA endpoints
      </>
    ),
  },
  {
    title: 'Powerful performance tuning tools',
    Img: '/img/performance-tuning.png',
    description: (
      <>
        You can use features like Server Timings, View Metric and Benchmarking 
        to profile and understand the performance of your DAX code
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
