//your parameter variables go here!

//centre + details
let centreX = 50 // flower centre
let centreY = 50 
let centreSize = 50

//centre circle details
let detailX = 53
let detailY = 40
let circleSize = 8 //small circles around perimeter of centre

//main petals
let petalSize = 37
let mainpetalX = 50
let mainpetalY = 50

//outline around main petals
let outlineSize = 40
let outlineX = 50
let outlineY = 50

//outside extra petals
let outsidePetalSize = 36
let petalX = 32 
let petalY = 68

let complexFlowerMode = true;

let softColourMode = false;
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution (NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background("#CCDCD0"); //light pink colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

    
    strokeWeight(0.5); //line weight
    stroke ("#821931"); // colour of the line

    if(complexFlowerMode){
    //added petals
    fill ("#1C2A4A")
     circle (petalX,petalY-39, outsidePetalSize) //top left
     circle (petalX+ 37, petalY, outsidePetalSize) // bottom right
     circle (petalX, petalY + 1, outsidePetalSize) // bottom left
     circle (petalX+37, petalY-38, outsidePetalSize); //top right
     
    }

  
     //petal outline
     fill (255)
     circle (outlineX, outlineY-20, outlineSize) //
     circle (outlineX-20 , outlineY , outlineSize)
     circle (outlineX+20, outlineY, outlineSize)
     circle (outlineX, outlineY+20, outlineSize);

    //main petals
      fill ("#F0A9A2")
      circle (mainpetalX, mainpetalY-20, petalSize) //top petal
      circle (mainpetalX - 20, mainpetalY, petalSize) //left petal
      circle (mainpetalX + 20,mainpetalY, petalSize) //right petal
      circle (mainpetalX, mainpetalY + 20, petalSize); //bottom petal

      //line details on petals
      line (13, 50, 87 ,50) //
      line (50, 87, 50, 13); //


     //centre
      fill ("#fff3d4"); //yellow colour
      circle (centreX, centreY, centreSize); //centre


      if(softColourMode){

      //detail in centre of flower
      fill ("#DB652D") //light yellow
      circle (detailX - 2, detailY - 4, circleSize) 
      circle (detailX + 3, detailY - 3, circleSize)
      circle (detailX + 7, detailY, circleSize)
      circle (detailX + 10,detailY + 4, circleSize)
      circle (detailX + 11, detailY + 9, circleSize)
      circle (detailX + 11, detailY + 14, circleSize)
      circle (detailX + 9, detailY + 19, circleSize)
      circle (detailX + 5, detailY + 23, circleSize)
      circle (detailX, detailY + 25, circleSize)
      circle (detailX - 5, detailY + 25, circleSize)
      circle (detailX - 10, detailY + 23, circleSize) 
      circle (detailX - 14, detailY + 20, circleSize)
      circle (detailX - 17, detailY + 16, circleSize)
      circle (detailX - 18, detailY + 11, circleSize)
      circle (detailX - 17, detailY + 6, circleSize)
      circle (detailX - 15, detailY + 1, circleSize)
      circle (detailX - 11, detailY - 2 , circleSize)
      circle (detailX - 7 , detailY - 4, circleSize)

      fill ("#fff3d4"); //pink colour
    
       //top left cluster
      circle (6, 7, 5)
      circle (20, 10, 7)
      circle (10, 20, 3)

       //bottom left cluster
      circle (20, 90, 8)
      circle (8, 86, 4)
      circle (10, 70, 5)

      //top right cluster
      circle (93, 20, 8)
      circle (72, 10, 5)
      circle (90, 8, 4)

      //bottom right cluster
      circle (87, 82, 6)
      circle (92, 92, 5)
      circle (75, 88, 4)

      }

      else { 

      fill ("#1C2A4A")
      circle (detailX - 2, detailY - 4, circleSize) 
      circle (detailX + 3, detailY - 3, circleSize)
      circle (detailX + 7, detailY, circleSize)
      circle (detailX + 10,detailY + 4, circleSize)
      circle (detailX + 11, detailY + 9, circleSize)
      circle (detailX + 11, detailY + 14, circleSize)
      circle (detailX + 9, detailY + 19, circleSize)
      circle (detailX + 5, detailY + 23, circleSize)
      circle (detailX, detailY + 25, circleSize)
      circle (detailX - 5, detailY + 25, circleSize)
      circle (detailX - 10, detailY + 23, circleSize) 
      circle (detailX - 14, detailY + 20, circleSize)
      circle (detailX - 17, detailY + 16, circleSize)
      circle (detailX - 18, detailY + 11, circleSize)
      circle (detailX - 17, detailY + 6, circleSize)
      circle (detailX - 15, detailY + 1, circleSize)
      circle (detailX - 11, detailY - 2 , circleSize)
      circle (detailX - 7 , detailY - 4, circleSize)


      fill ("#1C2A4A"); //pink colour
    
       //top left cluster
      circle (6, 7, 4)
      circle (20, 10, 2)
      circle (10, 20, 3)

       //bottom left cluster
      circle (20, 90, 3)
      circle (8, 86, 4)
      circle (10, 70, 2)

      //top right cluster
      circle (93, 20, 3)
      circle (72, 10, 2)
      circle (90, 8, 4)

      //bottom right cluster
      circle (87, 82, 4)
      circle (92, 92, 2)
      circle (75, 88, 3)


      }

    }
