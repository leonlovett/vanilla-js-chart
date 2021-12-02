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
        const yBegin = this.canvas.height - this.margins.bottom;
        const xEnd = this.orientation === 'vertical' ? 100 : this.canvas.width;
        const yEnd = this.orientation === 'vertical' ? this.margins.top : this.canvas.height - this.margins.bottom;
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
        if (this.orientation === 'horizontal') {
            this.max = this.formatDate(this.allValues[0]);
            this.mid = this.formatDate(this.allValues[Math.floor((this.allValues.length - 1) / 2)]);
            this.min = this.formatDate(this.allValues[this.allValues.length - 1]);
        }
    }

    formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    drawScale() {
        const minCoordinates = {
            x: this.orientation === 'vertical' ? 30 : 100,
            y: this.orientation === 'vertical' ? this.canvas.height - this.margins.bottom : this.canvas.height - this.margins.bottom + 20
        }
        const midCoordinates = {
            x: this.orientation === 'vertical' ? 30 : this.canvas.width / 2,
            y: this.orientation === 'vertical' ? this.canvas.height / 2 : this.canvas.height - this.margins.bottom + 20
        }
        const maxCoordinates = {
            x: this.orientation === 'vertical' ? 30 : this.canvas.width - 80,
            y: this.orientation === 'vertical' ? this.margins.bottom : this.canvas.height - this.margins.bottom + 20
        }
        this.ctx.font = '18px serif';
        this.ctx.fillText(this.min, minCoordinates.x, minCoordinates.y);
        this.ctx.fillText(this.mid, midCoordinates.x, midCoordinates.y);
        this.ctx.fillText(this.max, maxCoordinates.x, maxCoordinates.y);
    }
}