import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {Helmet} from 'react-helmet';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
return (  
<div>
    <Helmet>
            <script>
                console.log('Hello from launch');
                var url= "daxstudio://";
                window.location = url + window.location.search;
                window.location = "/";
            </script>
    </Helmet>
</div>
);
}