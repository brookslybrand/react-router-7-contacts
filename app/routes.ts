import {
  route,
  layout,
  index,
  type RoutesConfig,
} from "@react-router/dev/routes";

export const routes: RoutesConfig = [
  index("routes/home.tsx"),
  route("/contacts/:contactId", "routes/contact.tsx"),
  route("/contacts/:contactId/edit", "routes/edit-contact.tsx"),
  route("/contacts/:contactId/destroy", "routes/destroy-contact.tsx"),
];
