import Chart from "react-apexcharts";
import TitleAndContent from "../../components/TitleAndContent";
import { SLIDE_TYPE_DESCRIPTIONS, SLIDE_TYPE_TITLES } from "../../constants";

const BAR_CHART = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

const DONUT_CHART = {
  options: {},
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
};

const ChartSlide = () => {
  return (
    <div className="flex flex-col gap-20">
      <TitleAndContent
        title={SLIDE_TYPE_TITLES.CHART}
        content={SLIDE_TYPE_DESCRIPTIONS.CHART}
      />
      <div className="flex flex-row items-center">
        <Chart
          options={BAR_CHART.options}
          series={BAR_CHART.series}
          type="bar"
          width="500"
        />
        <Chart
          options={DONUT_CHART.options}
          series={DONUT_CHART.series}
          type="donut"
          width="380"
        />
      </div>
    </div>
  );
};

export default ChartSlide;
