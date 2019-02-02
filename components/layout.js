import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Clover API' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='defaultLanguage' content='fr' />
      <meta name='availableLanguages' content='fr, en' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>

    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </a>
        <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
      </div>
    </nav>

    {children}

    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Cool stuff</a></li>
            <li><a className="text-muted" href="#">Random feature</a></li>
            <li><a className="text-muted" href="#">Team feature</a></li>
            <li><a className="text-muted" href="#">Stuff for developers</a></li>
            <li><a className="text-muted" href="#">Another one</a></li>
            <li><a className="text-muted" href="#">Last time</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Resource</a></li>
            <li><a className="text-muted" href="#">Resource name</a></li>
            <li><a className="text-muted" href="#">Another resource</a></li>
            <li><a className="text-muted" href="#">Final resource</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Business</a></li>
            <li><a className="text-muted" href="#">Education</a></li>
            <li><a className="text-muted" href="#">Government</a></li>
            <li><a className="text-muted" href="#">Gaming</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Team</a></li>
            <li><a className="text-muted" href="#">Locations</a></li>
            <li><a className="text-muted" href="#">Privacy</a></li>
            <li><a className="text-muted" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </div>
);
