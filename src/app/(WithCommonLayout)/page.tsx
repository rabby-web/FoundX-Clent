/* eslint-disable react/jsx-sort-props */
import Landing from "@/src/components/modules/home/Landing";
import ResentPosts from "@/src/components/modules/home/ResentPosts";

export default function Home() {
  return (
    <>
      <Landing />
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Your SVG path(s) go here */}
        <path d="M50 10 ... your path data here ..." />
      </svg>
      <ResentPosts />
    </>
  );
}
