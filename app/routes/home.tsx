import { Link } from "react-router";

export default function Index() {
  return (
    <>
      <p id="index-page">
        This is a demo for Remix.
        <br />
        Check out <a href="https://remix.run">the docs at remix.run</a>.
      </p>
      <Link to="/about">About</Link>
    </>
  );
}
