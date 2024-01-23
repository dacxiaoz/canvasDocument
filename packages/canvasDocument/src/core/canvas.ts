import Canvas from './document'


class CanvasDocument {
    canvas: Canvas
    id: string 

    constructor(id:string){
        const canvas = <HTMLCanvasElement>document.getElementById(id)
        if(canvas){
            this.canvas = new Canvas(canvas)
            this.id = id
        }else{
            throw 'id必传'
        }
    }
}

export default CanvasDocument