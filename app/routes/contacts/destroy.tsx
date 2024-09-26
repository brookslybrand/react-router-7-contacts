import type * as Route from "./+types.destroy";
import { redirect } from "react-router";

import { deleteContact } from "~/data";

export const action = async ({ params }: Route.ActionArgs) => {
  await deleteContact(params.contactId);
  return redirect("/");
};
