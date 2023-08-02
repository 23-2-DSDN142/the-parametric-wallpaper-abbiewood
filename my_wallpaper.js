//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let flowerX = 150;
let flowerY = 150;
let petalSize = 100;
let centerPetal = petalSize / 1.2;
let petalDistance = petalSize / 2;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("#fadce3"); //light pink colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

    
    strokeWeight(0.5); //line weight
    stroke (0); // colour of the line
    
    //added petals
     circle (32, 29, 30)
     circle (69, 68, 30)
     circle (32, 69, 30)
     circle (69, 32, 30);


     //petal outline
     circle (50, 30, 40)
     circle (30, 50, 40)
     circle (70, 50, 40)
     circle (50, 70, 40);

    //main petals
      circle (50,30,35) //top petal
      circle (30,50,35) //left petal
      circle (70,50,35) //right petal
      circle (50,70,35); //bottom petal

      line (13, 50, 87 ,50) //
      line (50, 87, 50, 13); //


     //centre
      fill ("#fff3d4"); //yellow colour
      circle (50,50,30); //centre
    
      //detail in centre of flower
      circle (51, 36, 5)
      circle (56, 37, 5)
      circle (60, 40, 5)
      circle (63, 44, 5)
      circle (64, 49, 5)
      circle (64, 54, 5)
      circle (62, 59, 5)
      circle (58, 63, 5)
      circle (53, 65, 5)
      circle (48, 65, 5)
      circle (43, 63, 5)
      circle (39, 60, 5)
      circle (36, 56, 5)
      circle (35, 51, 5)
      circle (36, 46, 5)
      circle (38, 41, 5)
      circle (42, 38, 5)
      circle (46, 36, 5);

    
      }
