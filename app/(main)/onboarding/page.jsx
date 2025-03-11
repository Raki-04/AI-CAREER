import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";

const OnboardingPge = async () => {
   //check if user in already onboarded
   const { isOnboarded } = await getUserOnboardingStatus();

   if (isOnboarded) {
      redirect("/dashboard");
   }
   return <main>
      <OnboardingForm industries={industries} />
   </main>
};

export default OnboardingPge;
