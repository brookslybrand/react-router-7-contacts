import {
  route,
  layout,
  index,
  type RouteConfig,
} from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("routes/home.tsx"),
  route("/contacts/:contactId", "routes/contacts/details.tsx"),
  route("/contacts/:contactId/edit", "routes/contacts/edit.tsx"),
  route("/contacts/:contactId/destroy", "routes/contacts/destroy.tsx"),
];
