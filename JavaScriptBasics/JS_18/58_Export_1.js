import testapchecki,{pi ,circle_area} from './58_Export.js'

// import * as myCircleFns from  './58_Export.js';

function sphere_SurfaceArea(radius){
      return (4* circle_area(radius));
      // return (4 * myCircleFns.circle_area(radius));
}

function sphere_volume(radius){
      return ((4/3) * pi * Math.pow(radius,3));
};

testapchecki();

export { sphere_volume};


