// React Router generated types for route:
// routes/contacts/destroy.tsx

import * as T from "react-router/types"

export type Params = {
  contactId: string
}

type Route = typeof import("./destroy")

export type LoaderData = T.CreateLoaderData<Route>
export type ActionData = T.CreateActionData<Route>

export type LoaderArgs = T.CreateServerLoaderArgs<Params>
export type ClientLoaderArgs = T.CreateClientLoaderArgs<Params, Route>
export type ActionArgs = T.CreateServerActionArgs<Params>
export type ClientActionArgs = T.CreateClientActionArgs<Params, Route>

export type HydrateFallbackProps = T.CreateHydrateFallbackProps<Params>
export type DefaultProps = T.CreateDefaultProps<Params, LoaderData, ActionData>
export type ErrorBoundaryProps = T.CreateErrorBoundaryProps<Params, LoaderData, ActionData>