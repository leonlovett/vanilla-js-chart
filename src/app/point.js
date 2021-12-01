import { MARGINS } from "../models/constants";

export class Point {

    margins = MARGINS;
    
    constructor(ctx, canvas, x, value, data) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.x = x;
        this.value = value;
        this.data = data;
    }

    drawPoint() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.getYPoint(this.value.movingAvg), 2, 0, Math.PI * 2);
        this.ctx.fill();
    }

    getYPoint(value) {
        const closingValues = this.data.map(x => x.movingAvg)
        const max = Math.round(Math.max(...closingValues));
        const chartHeight = this.canvas.height - this.margins.top - this.margins.bottom;
        const factor = value / (max);
        return this.canvas.height - chartHeight * factor;
    }
}