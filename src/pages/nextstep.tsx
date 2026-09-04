import React, {useEffect} from 'react';

const redirectUrl =
  'https://1drv.ms/f/c/98546e1b65a78a74/IgBntWzuKht7TJP9h2m4X6hDAX02JG_ndK1yLARVDQJhZx8?e=LvWHFw';

export default function NextStep(): JSX.Element {
  useEffect(() => {
    window.location.replace(redirectUrl);
  }, []);

  return <a href={redirectUrl}>Continue to the next step</a>;
}