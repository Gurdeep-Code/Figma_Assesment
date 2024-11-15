import React from "react";

function StatItem() {
  const array = [
    { key: "6", sign: "+", title: "Specialised Courses" },
    { key: "4", sign: "+", title: "Continents" },
    { key: "5", sign: "+", title: "Top Universities" },
    { key: "98", sign: "%", title: "Student satisfactions" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-4 md:p-4 my-6 gap-3">
      {array.map((d, i) => {
        return (
          <div key={i} className="flex flex-col justify-center items-center">
            <p className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-800 font-bold mb-2">
              {d?.key || ""}
              <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-red-500">
                {d?.sign || ""}
              </span>
            </p>
            <p className="text-sm xl:text-lg 2xl:text-xl text-gray-500 ">
              {d?.title || ""}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default StatItem;
