import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Downloads from '@site/src/components/Downloads';



export default function ChangeLog(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
<h2>Change Log</h2>
      <main>
        {/* <ChangeLog /> */}
      </main>
    </Layout>
  );
}