import { Button } from "@/components/ui/button";
import Features from "./components/features/Features";
import Landing from "./components/landing/Landing";
import TeammateCards from "./components/teammatesCard/TeammateCards";


export default function Home() {
  return (
    <div className=" ">
      <Landing />
      <Features />
      <TeammateCards />
    </div>
  );
}
