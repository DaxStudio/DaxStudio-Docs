import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {Installer,Portable} from '@site/src/components/Downloads';
import styles from './index.module.css';
import {Helmet} from 'react-helmet';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={siteConfig.themeConfig.navbar['logo'].src} width="200" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      

      </div>
    </header>
  );
}



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The ultimate tool for working with DAX Queries">
        
      <HomepageHeader />
      
      <div className='container'>
        <div className={clsx(styles.heroBanner)}>
          <div className='row justify-content-md-center'>
          {/* <div className="{styles.buttons}"> */}
          <div className='container'><div className='row'><div className='col'> Download the latest release of DAX Studio here:<br/><br/></div></div></div>

          <div className='col col--2'/>
            <div className='col '> <Installer/></div> 
            <div className='col '><Portable/></div>
            <div className='col col--2'/>
          {/* </div> */}
          </div>
          <br/>
          <div className='container'>The details of the new features and fixes included in this release are available in the <a href="/changelog/latest">changelog</a></div>
          
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
