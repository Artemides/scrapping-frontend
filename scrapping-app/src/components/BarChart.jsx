import React from "react";
import { Pie } from "react-chartjs-2";
export const BarChart = () => {
  const onLoad = () => {
    const data = fetch("http://localhost:4000/slides-scrap")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      console.log(data);
  };
  onLoad();
  return (
    <Pie
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false,
      }}
      data={{
        labels: [
          "Slide1",
          "Slide2",
          "Slide3",
          "Slide4",
          "Slide5",
          "Slide6",
          "Slide7",
        ],
        datasets: [
          {
            label: "Slides Comparision",
            data: [10, 11, 12, 13, 14, 15, 16],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderRadius: 10,
            borderWidth: 3,
            hoverBackgroundColor: "rgba(255, 99, 132, 1)",
          },
        ],
      }}
    />
  );
};
