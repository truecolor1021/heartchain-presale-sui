// import React from "react";
// import Chart from "react-apexcharts";

// type ChartOptions = {
//   chart: {
//     type: string;
//     toolbar: {
//       show: boolean;
//     };
//   };
//   xaxis: {
//     categories: string[];
//   };
// };

// type ChartData = {
//   name: string;
//   data: number[];
// }[];

// const ChartTemplate: React.FC = () => {
//   const chartOptions: ChartOptions = {
//     chart: {
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//     },
//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     },
//   };

//   const chartData: ChartData = [
//     {
//       name: "Sales",
//       data: [30, 40, 35, 50, 49, 60],
//     },
//   ];

//   return (
//     <div className="w-full p-4 bg-white rounded-lg shadow-md">
//       <Chart
//         options={chartOptions}
//         series={chartData}
//         type="line"
//         height={350}
//       />
//     </div>
//   );
// };

// export default ChartTemplate;
