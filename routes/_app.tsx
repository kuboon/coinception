import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Coinception</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="navbar bg-base-100 shadow-sm">
          <a className="btn btn-ghost text-xl">Coinception</a>
        </div>
        <Component />
        <footer className="footer footer-center p-4 bg-base-200 text-base-content">
          COPYRIGHT ©2025, Coinception ～大原のうえつけ～. ALL RIGHTS RESERVED.
        </footer>
      </body>
    </html>
  );
}
