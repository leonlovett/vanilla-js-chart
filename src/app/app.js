import * as chartData from '../data/ibm.json'
import { Chart } from "./chart";

let data = Object.assign([], chartData);
transformData();

const chart = new Chart(data);
chart.drawChart();

window.addEventListener('resize', () => {
    chart.drawChart();
});

function transformData() {
    data = data.map(price => {
        price.sortDate = new Date(price.Date);
        return price
    })
    data = data.sort((a, b) => b.sortDate - a.sortDate);
    calculateAverages();
}

function calculateAverages() {
    data.forEach((day, idx) => {
        const start = idx <= 19 ? 0 : idx - 20;
        const dayRange = data.slice(start, idx).map(x => x.Close)
        let total;
        if (dayRange.length > 0) total = dayRange.reduce((prev, curr) => prev + curr)
        day.movingAvg = total / dayRange.length;
    })
    data.splice(0, 1);
}

