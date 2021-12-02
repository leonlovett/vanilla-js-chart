import { MARGINS } from "../models/constants";
import { Point } from "./point";
import { Axis } from "./axis";

export class Chart {

    canvas = document.querySelector('#chart');
    ctx = this.canvas.getContext('2d');
    margins = MARGINS;

    constructor(data) {
        this.data = data;
    }

    drawChart() {
        this.setCanvasSize();
        this.drawXAxis();
        this.drawYAxis();
        this.drawPoints();
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth * .8;
        this.canvas.height = window.innerHeight * .9;
    }

    drawXAxis() {
        const xAxis = new Axis('horizontal', this.canvas, this.data.map(x => x.sortDate), this.ctx);
        xAxis.drawBorder();
        xAxis.calculateRanges();
        xAxis.drawScale();
    }

    drawYAxis() {
        const yAxis = new Axis('vertical', this.canvas, this.data.map(x => x.movingAvg), this.ctx);
        yAxis.drawBorder();
        yAxis.calculateRanges();
        yAxis.drawScale();
    }

    drawPoints() {
        const factor = (this.canvas.width - 90) / this.data.length;
        this.data.forEach((day, idx) => {
            const x = idx * factor + this.margins.left + factor;
            const point = new Point(this.ctx, this.canvas, x, day, this.data)
            point.drawPoint();
        })
    }
}