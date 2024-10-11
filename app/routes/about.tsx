import * as Route from "./+types.about";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function loader() {
  console.log("building the about page");
  await sleep(3000);
  return { message: "This is the about page." };
}

export default function About({ loaderData }: Route.ComponentProps) {
  const { message } = loaderData;
  return <div>{message}</div>;
}
