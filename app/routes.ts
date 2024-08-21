import { route, type RoutesConfig } from "@react-router/dev/routes";
import { remixRoutes } from "@react-router/remix-v2-routes";

export const routes: RoutesConfig = [...(await remixRoutes())];
