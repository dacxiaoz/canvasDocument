window.addEventListener('load',()=>{
    const CanvasDocument = new window.CanvasDocument('canvas', {html:'<body><div style="background:red;">111</div></body>'})
    console.log('DCanvas', CanvasDocument)
})