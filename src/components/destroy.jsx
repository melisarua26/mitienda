import { redirect } from "react-router-dom";
import { useLocalForage } from "../hooks/useLocalForage";

export async function action({ params }) {
  await useLocalForage({action: 'delete',
  id: params.contactId});
  return redirect("/");
}