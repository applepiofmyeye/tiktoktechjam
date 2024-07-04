import { Typography } from "@/components/typography";
import Image from "next/image";
import { redirect } from "next/navigation";
import NavigationBar from "./_components/NavigationBar";

export default function Home() {
  return (
    <>
      <Typography variant={"display-lg"} weight={"semibold"}>
        welcome to my project
      </Typography>
      <Typography as="h2" variant={"title-md"}>
        how to navigate this website:
      </Typography>
      <Typography>open on browser, etc etc</Typography>
      <Typography>open on browser, etc etc</Typography>
      <Typography>open on browser, etc etc</Typography>
      <NavigationBar />
    </>
  );
}
