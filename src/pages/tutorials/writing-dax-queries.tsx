import { Redirect } from '@docusaurus/router';
import React from 'react';

export default function Page(): JSX.Element {

    return(
        <Redirect to={'/docs/tutorials/writing-dax-queries'} />    
    );
}