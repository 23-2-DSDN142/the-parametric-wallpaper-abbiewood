//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("#fadce3"); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

    
    strokeWeight(0.5); //line weight
    stroke (0); // colour of the line
    
      circle (50, 30,40) //top petal
      circle (30,50,40) //left petal
      circle (70,50,40) //right petal
      circle (50,70,40) //bottom petal


      fill ("#fff3d4"); //yellow colour
      circle (50,50,30); //centre

       
    
      }
