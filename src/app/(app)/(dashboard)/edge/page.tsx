import React from "react";
import DailyPlanner from "@/components/app/edge/components/DailyPlanner";

function page() {
  return (
    <main className="flex flex-col gap-5 p-6 edge">
      <DailyPlanner />
    </main>
  );
}

export default page;
