import { MARGINS } from "../models/constants";

export class Axis {

    margins = MARGINS;

    currencyOptions = {
        style: 'currency',
        currency: 'usd'
    }

    region = 'en-us';

    min;
    mid;
    max;

    constructor(orientation, canvas, allValues, ctx) {
        this.orientation = orientation;
        this.canvas = canvas;
        this.allValues = allValues;
        this.ctx = ctx;
    }

    drawBorder() {
        const xBegin = 100;
        const yBegin = this.canvas.height - 2;
        const xEnd = this.orientation === 'vertical' ? 100 : this.canvas.width;
        const yEnd = this.orientation === 'vertical' ? 0 : this.canvas.height - 2;
        this.ctx.beginPath();
        this.ctx.moveTo(xBegin, yBegin);
        this.ctx.lineTo(xEnd, yEnd);
        this.ctx.stroke();
    }

    calculateRanges() {
        if (this.orientation === 'vertical') {
            this.min = new Number(0).toLocaleString(this.region, this.currencyOptions);
            this.max = Math.max(...this.allValues).toLocaleString(this.region, this.currencyOptions);
            this.mid = (Number.parseFloat(this.max.replace('$', '')) / 2).toLocaleString(this.region, this.currencyOptions);    
        }
    }

    drawScale() {
        const begin = this.orientation === 'vertical' ? 30 : this.canvas.width;
        const end = this.orientation === 'vertical' ? this.canvas.height : 100;
        this.ctx.font = '18px serif';
        this.ctx.fillText(this.min, begin, end);
        this.ctx.fillText(this.mid, begin, ((end + 20) / 2));
        this.ctx.fillText(this.max, begin, 20);
    }
}