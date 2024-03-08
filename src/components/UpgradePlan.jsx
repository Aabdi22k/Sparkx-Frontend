import React from "react";

const UpgradePlan = () => {
  return (
    <div className="w-full space-y-2 p-6 bg-crimson grid h-full rounded-lg items-center justify-items-center ">
      {/** Upgrade Plan Text */}
      <div className="grid grid-flow-row gap-2 justify-items-center text-center">
        <span className="flex gap-2 text-lg justify-center items-center">
          Upgrade Your <div className="px-3 py-1 rounded-lg bg-n8">Plan</div>
        </span>
        <span className="text-sm">
          "Unlock lightning-fast responses and unleash your creativity.”
        </span>
      </div>
      {/** Upgrade Plan Button */}
      <div className="w-full px-2 py-3 flex justify-center items-center rounded-lg text-center bg-n8 ">
        <span className="text-sm text-n2">Upgrade Plan</span>
      </div>
    </div>
  );
};

export default UpgradePlan;
