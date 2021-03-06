import { Session } from 'meteor/session';

export function randomArrItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getPageTitle(nextState) {
  // get page title
  // grab text after first `/` in URL
  let pathname = nextState.location.pathname;
  if (pathname.includes('presentations') && pathname.includes('students')) {
    pathname = pathname.split('/')[5];
  } else if (pathname.includes('sections') && pathname.includes('presentations')) {
    pathname = pathname.split('/')[3];
  } else {
    pathname = pathname.split('/')[1];
  }
  // remove all `/` from URL
  let pageTitle = pathname.replace(/\//g, '').toUpperCase();
  // are we on the home page? then pageTitle is LOGIN
  if (pageTitle.length === 0)
    pageTitle = 'LOGIN';
  // console.log(pathname);
  Session.set('pageTitle', pageTitle);
}
