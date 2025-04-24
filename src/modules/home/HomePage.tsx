import { HowAreYou } from "./components/HowAreYou";
import { OptionsDoingToday } from "./components/OptionsDoingToday";
import { ProgressDay } from "./components/ProgressDay";
import { HomeLayout } from "../layouts/HomeLayout";

export const HomePage = () => {
  return (
    <HomeLayout>
      <div>
        <HowAreYou />

        <OptionsDoingToday />

        <ProgressDay />
      </div>
    </HomeLayout>
  );
};
