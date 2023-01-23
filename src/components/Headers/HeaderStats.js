import React from "react";

// components

import CardStats from "src/components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="New Applicants"
                  statTitle="100"
                  statArrow="up"
                  statPercent="3.48"
                  statIconName="far fa-chart-bar"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="50"
                  statArrow="down"
                  statPercent="3.48"
                  statIconName="fas fa-chart-pie"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Eligible"
                  statTitle="30"
                  statArrow="down"
                  statPercent="1.10"
                  statIconName="fas fa-users"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-black"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
