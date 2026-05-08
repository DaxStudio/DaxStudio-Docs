module.exports = async function myPlugin(context, options) {

  const Axios = require('axios');
  const marked = require('marked');

  const token = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'docusaurus-plugin-github-releases',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  return {
    name: 'docusaurus-plugin-github-releases',
    async loadContent() {
      try {
        const releases = await Axios.get(
          'https://api.github.com/repos/daxstudio/daxstudio/releases',
          { headers }
        );
        console.log(
          `Github Releases Loaded (${releases.data.length}${token ? ', authenticated' : ', unauthenticated'})`
        );
        return releases.data;
      } catch (err) {
        const status = err.response && err.response.status;
        const remaining =
          err.response && err.response.headers && err.response.headers['x-ratelimit-remaining'];
        console.warn(
          `[github-releases] Failed to load releases (status=${status}, rate-limit-remaining=${remaining}). ` +
            `${token ? '' : 'Set the GITHUB_TOKEN env var to raise the rate limit from 60/hr to 5000/hr. '}` +
            'Continuing with an empty release list.'
        );
        return [];
      }
    },
    async contentLoaded({content, actions}) {
      /* ... */
      const {createData, addRoute, setGlobalData} = actions;
      
      const releasesJsonPath = await createData(
        'releases.json',
        JSON.stringify(content)
      );

      setGlobalData({'latest_release': content[0] || null,'all_releases': content});
      
      // Add the '/friends' routes, and ensure it receives the friends props
      addRoute({
        path: '/changelog2',
        component: '@site/src/components/changelog.js',
        modules: {
          releases: releasesJsonPath,
        },
        exact: true,
      });

      addRoute({
        path: '/downloads',
        component: '@site/src/components/download-list.tsx',
        modules: {
          releases: releasesJsonPath,
        },
        exact: true,
      });

    },
    /* other lifecycle API */
  };
};

/*
module.export = async function friendsPlugin(context, options) {
    //var Axios = require('./core/Axios');
    return {

      name: 'docusaurus-friends-plugin',
      async contentLoaded({content, actions}) {
        
        const {createData, addRoute} = actions;
        var Axios = require('./core/Axios');
        // Create friends.json
        const friends = await Axios.get('https://api.github.com/repos/daxstudio/daxstudio/releases');
        const friendsJsonPath = await createData(
          'friends.json',
          JSON.stringify(friends),
        );
        },
        // Add the '/friends' routes, and ensure it receives the friends props
        // addRoute({
        //   path: '/friends',
        //   component: '@site/src/components/Friends.js',
        //   modules: {
        //     friends: friendsJsonPath,
        //   },
        //   exact: true,
        // });
      }
    };
  */