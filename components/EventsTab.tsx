import SmBgPurple from "@/Buttons/SmBgPurple";
import { useRouter } from "next/navigation";
import React from "react";

const EventsTab = ({ date }: { date: number }) => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/event-register");
  };

  return (
    <div className="flex flex-col border p-2 mt-4">
      <div className="border px-3 py-2 flex flex-col gap-1">
        <h1 className="text-lg font-bold">
          {date} <span className="text-sm font-normal">April 2022</span>
        </h1>
        <span className="text-sm">SAP Business Object</span>
        <span className="text-sm">Venue : College Campus</span>
      </div>
      <div className="flex justify-end">
        <SmBgPurple
          buttonText="Register"
          extraClasses="bg-drk-pk text-white mt-2"
          onClick={handleRegister}
        />
      </div>
    </div>
  );
};

export default EventsTab;
