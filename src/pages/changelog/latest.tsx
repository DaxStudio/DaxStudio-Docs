import React from 'react';
import Layout from '@theme/Layout';
import {usePluginData} from '@docusaurus/useGlobalData';
import {marked} from 'marked';
import clsx from 'clsx';
import styles from './changelog.module.css';

function fixGithubIssueLinks(oldHTML) {
    const regex = /(?:#)(\d{1,4})(?=\s+)/gi;
    return oldHTML.replace(regex, "<a href=\"https://github.com/daxstudio/daxstudio/issues/$1\">#$1<\/a>");
}

function Release({tag_name, body}) {
    return (
      <div >
        <div className="">
          <h2 className={styles.version}>{tag_name}</h2>
          <div dangerouslySetInnerHTML={{__html: fixGithubIssueLinks( marked.parse(body))}}></div>
        </div>
      </div>
    );
  }

export default function Home(): JSX.Element {
    const data: any = usePluginData('docusaurus-plugin-github-releases');
    const releases = [data.all_releases[0]];
    return(
        <Layout>
            <main>
                <section >
                    <div className="container">
                        <div className="row">
                            <h1>Latest Change Log</h1>
                        </div>
                        <div className='row'>
                            {releases.map((props, idx) => (
                                <Release key={idx} {...props} />
                            ))}
                        </div>
                        <br/>
                        <div>See <a href='/changelog/full'> here</a> for the full changelog.</div>
                    </div>
                    
                </section>
                
            </main>
        </Layout>
    );
    }