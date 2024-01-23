export default class Document {
    ctx: CanvasRenderingContext2D 
    constructor(canvas: HTMLCanvasElement){
      this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    }
}