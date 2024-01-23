


interface Options {

}

class CanvasHtml {

    id:string 
    options: Options

    constructor(canvasId:string, options:Options= {}){
        this.id = canvasId
        this.options = options
    }
    static register() {
        
    }
}

export default CanvasHtml