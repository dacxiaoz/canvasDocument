import Canvas from './document'

interface IOptions{
    html: string,
}

class CanvasDocument {
    canvas: Canvas
    id: string 

    constructor(id:string, options: IOptions){
        this.parseHtmlToDom(options.html)
        const canvas = <HTMLCanvasElement>document.getElementById(id)
        if(canvas){
            this.canvas = new Canvas(canvas)
            this.id = id
        }else{
            throw 'id必传'
        }
    }
    parseHtmlToDom(html: string){
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const temp = doc.querySelectorAll('html')
        console.log("doc",doc, temp)
    }
    getCtx(){
        return this.canvas.ctx
    }
}

export default CanvasDocument