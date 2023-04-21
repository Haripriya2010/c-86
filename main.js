var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 block_width = 30;
block_height = 30;

function new_image()
{
	
	fabric.Image.fromURL ( "BirthdayImage.jpg",function(IMG) 
    
    {
         block_Image_object.scaleToWidth(700);
         block_Image_object.scaleToHeight(510);
         block_Image_object.se({
            top:0,
            left:0
         });
         canvas.add(block_Image_object);

     } )   
    
}




function playSound(){
	x.play();
}

function new_image(get_image){
    fabric.Image.fromURL( get_image,function(Img) 
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:0,
            left:0
        });

    canvas.add(block_image_object);

    });
}
