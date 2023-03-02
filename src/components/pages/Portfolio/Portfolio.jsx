import React from "react";
import Sidebar from "../../UI/Sidebar/Sidebar";
import TopNav from "../../UI/TopNav/TopNav";
import styles from "./Portfolio.module.scss";
import Hero from "../../UI/Hero/Hero";
import globalStyles from "../../../styles/main.module.scss";
import vector from "../../../assets/icons/vector.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {

  //Fake data for pie chart
  const data = {
    labels: [],
    datasets: [
      {
        label: "Portfolio Value",
        data: [45, 10, 45],
        backgroundColor: ["#2AB795", "#C18E60", "#37433A"],
        borderColor: ["#2AB795", "#C18E60", "#37433A"],
      },
    ],
  };

  const options = {};
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = 'bolder 24px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText(`Total Portfolio Value: $200`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y);
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        {/* Sidebar Section */}
        <Sidebar />
        {/* Nav/Hero Section */}
        <main className={styles.mainSection}>
          {/* Top Navigation */}
          <TopNav />
          {/* Hero Section */}
          <Hero>
            <div className={styles.tanSquare}>
              <div className="row">
                <div className="details">
                  <ol className={styles.valueText}>Total Portfolio Value</ol>
                  <ol className={styles.dollarAmount}>$200.00</ol>
                  <ol className={styles.stocksOptions}>
                    Stocks & Options
                    <span className={styles.wordSpace}>26.35%</span>
                    <span className={styles.moneyColorGreen}>$52.7</span>
                  </ol>
                  <hr className={styles.line}></hr>
                  <ol className={styles.stocksOptions}>
                    Cryptocurrencies
                    <span className={styles.wordSpace}>2.09%</span>
                    <span className={styles.moneyColorTan}>$4.18</span>
                  </ol>
                  <hr className={styles.line}></hr>
                  <ol className={styles.stocksOptions}>
                    Brokerage Cash
                    <span className={styles.wordSpace}> 71.65%</span>
                    <span className={styles.moneyAmount}>$143.24</span>
                  </ol>
                  <hr className={styles.line}></hr>
                </div>

                <div className={styles.doughnutGraph}>
                  <Doughnut
                    data={data}
                    options={options}
                    plugins={[textCenter]}
                  ></Doughnut>
                </div>
              </div>

              <div className={styles.profileLowerSection}>
                <span>
                  <button className={globalStyles.settingsButton}>
                    <span className={styles.pls}>
                      Portfolio Lower Section{" "}
                      <img src={vector} alt="vector"></img>
                    </span>
                  </button>
                </span>

              </div>
            </div>
          </Hero>
        </main>
      </div>
    </>
  );
};

export default Portfolio;






