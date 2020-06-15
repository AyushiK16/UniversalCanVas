class User{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.drawing = middlePoints;
    }
    getPoints(){
        var drawingPoints = database.ref('drawing/middlePoints');
        drawingPoints.on("value", function(data){
            drawingPoints = data.val();
        })
    }
    update(){
        var newDrawing = "drawing/middlePoints";
        database.ref(newDrawing).set({
            drawing: this.drawing
        })
    }
    
}