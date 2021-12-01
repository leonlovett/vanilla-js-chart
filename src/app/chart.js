import { MARGINS } from "../models/constants";
import { Point } from "./point";

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
        this.canvas.width = window.innerWidth - 3;
        this.canvas.height = window.innerHeight - 3;
    }

    drawXAxis() {
        this.ctx.beginPath();
        this.ctx.moveTo(100, this.canvas.height - this.margins.top);
        this.ctx.lineTo(this.canvas.width, this.canvas.height - this.margins.bottom);
        this.ctx.stroke();
    }

    drawYAxis() {
        this.ctx.beginPath();
        this.ctx.moveTo(100, this.canvas.height - this.margins.bottom);
        this.ctx.lineTo(100, 50);
        this.ctx.stroke();

        const closingValues = this.data.map(x => x.movingAvg)
        const max = Math.round(Math.max(...closingValues));

        this.ctx.font = '18px serif'
        this.ctx.fillText(0, 80, this.canvas.height - this.margins.top / 2)
        this.ctx.fillText(max, 60, 55)
    }

    drawPoints() {
        const factor = (this.canvas.width - 100) / this.data.length;
        this.data.forEach((day, idx) => {
            const x = idx * factor + this.margins.left;
            const point = new Point(this.ctx, this.canvas, x, day, this.data)
            point.drawPoint();
        })
    }
}