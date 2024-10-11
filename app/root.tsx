import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useEffect } from "react";

import { getContacts } from "./data";
import appStylesHref from "./app.css?url";
import * as Route from "./+types.root";

export const links = () => [{ rel: "stylesheet", href: appStylesHref }];

export default function App({ loaderData }: Route.ComponentProps) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
