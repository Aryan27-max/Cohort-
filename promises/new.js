class RECTANGLE{
    constructor(width , height , color){
        this.width = width ;
        this.height = height ;
        this.color = color ;    
    }

    Area(){
        const area = this.width * this.height;
        return area ;
    }

    Paint(){
    const msg = `painting with color ${this.color}`;
    console.log(msg);
    return msg;
}

}

const rect = new RECTANGLE(2,4,"red")
const Area = rect.Area();
console.log(Area)
const Paint = rect.Paint();

