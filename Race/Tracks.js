function inner(x,y){
    this.x=x;
    this.y=y;
    this.r=305;//275

    this.display= function() {
    stroke (255,0,0);
    fill(r,g,b);
    ellipse(this.x,this.y,this.r*2,this.r*2);
    }
}
function outer(x,y){
    this.x=x;
    this.y=y;
    this.r=380;//350

    this.display=function(){
        stroke(255,0,0);
        fill(255,255,255);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
}

 
      
