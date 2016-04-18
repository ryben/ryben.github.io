var camera;
var scene;
var renderer;
var earth, mSun, stars;
var light, lightMars, lightJupiter, ambient;
var asteroids = [];

init();
animate();
  
function init() {
  
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 10000);

    

    light = new THREE.PointLight( 0xffffff );
    lightMars = new THREE.PointLight( 0xffffff );
    lightJupiter = new THREE.PointLight( 0xffffff );
    ambient = new THREE.AmbientLight( 0x110011 );

    // var light2 = new THREE.DirectionalLight( 0xffffff );
    light.channel = 123;
    lightMars.channel = 12;
    lightJupiter.channel = 1;


    // light.position.set( 1, 1, 1 ).normalize();
    // lightMars.position.set( 1, 1, 1 ).normalize();
    // lightJupiter.position.set( 1, 1, 1 ).normalize();
    // light2.position.set( -1, -1, 1 ).normalize();
    scene.add(light);
    scene.add(ambient);


    var earthSize = 10;
    var sunSize = 75;
    var marsSize = 8;
    var jupiterSize = 35;
  	
    var earthGeometry = new THREE.BoxGeometry( earthSize, earthSize, earthSize);
    var marsGeometry = new THREE.BoxGeometry( marsSize, marsSize, marsSize);
    var jupiterGeometry = new THREE.BoxGeometry( jupiterSize, jupiterSize, jupiterSize);
    var sunGeometry = new THREE.BoxGeometry( sunSize, sunSize, sunSize);

    // var starMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );


    // var sunMaterial = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
  	// var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/crate.jpg') } );

    // var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/earth.jpg') } );

    var bricks = [new THREE.Vector2(0, .666), new THREE.Vector2(.5, .666), new THREE.Vector2(.5, 1), new THREE.Vector2(0, 1)];
    var clouds = [new THREE.Vector2(.5, .666), new THREE.Vector2(1, .666), new THREE.Vector2(1, 1), new THREE.Vector2(.5, 1)];
    var crate = [new THREE.Vector2(0, .333), new THREE.Vector2(.5, .333), new THREE.Vector2(.5, .666), new THREE.Vector2(0, .666)];
    var stone = [new THREE.Vector2(.5, .333), new THREE.Vector2(1, .333), new THREE.Vector2(1, .666), new THREE.Vector2(.5, .666)];
    var water = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, .333), new THREE.Vector2(0, .333)];
    var wood = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, .333), new THREE.Vector2(.5, .333)];


    var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/earth.jpg') } );
    earthGeometry.faceVertexUvs[0] = [];
    earthGeometry.faceVertexUvs[0][0] = [ bricks[0], bricks[1], bricks[3] ];
    earthGeometry.faceVertexUvs[0][1] = [ bricks[1], bricks[2], bricks[3] ];
    earthGeometry.faceVertexUvs[0][2] = [ clouds[0], clouds[1], clouds[3] ];
    earthGeometry.faceVertexUvs[0][3] = [ clouds[1], clouds[2], clouds[3] ];
    earthGeometry.faceVertexUvs[0][4] = [ crate[0], crate[1], crate[3] ];
    earthGeometry.faceVertexUvs[0][5] = [ crate[1], crate[2], crate[3] ];
    earthGeometry.faceVertexUvs[0][6] = [ stone[0], stone[1], stone[3] ];
    earthGeometry.faceVertexUvs[0][7] = [ stone[1], stone[2], stone[3] ];
    earthGeometry.faceVertexUvs[0][8] = [ water[0], water[1], water[3] ];
    earthGeometry.faceVertexUvs[0][9] = [ water[1], water[2], water[3] ];
    earthGeometry.faceVertexUvs[0][10] = [ wood[0], wood[1], wood[3] ];
    earthGeometry.faceVertexUvs[0][11] = [ wood[1], wood[2], wood[3] ];








    var sunMaterial = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('images/sun.jpg') } );
    sunGeometry.faceVertexUvs[0] = [];
    sunGeometry.faceVertexUvs[0][0] = [ bricks[0], bricks[1], bricks[3] ];
    sunGeometry.faceVertexUvs[0][1] = [ bricks[1], bricks[2], bricks[3] ];
    sunGeometry.faceVertexUvs[0][2] = [ clouds[0], clouds[1], clouds[3] ];
    sunGeometry.faceVertexUvs[0][3] = [ clouds[1], clouds[2], clouds[3] ];
    sunGeometry.faceVertexUvs[0][4] = [ crate[0], crate[1], crate[3] ];
    sunGeometry.faceVertexUvs[0][5] = [ crate[1], crate[2], crate[3] ];
    sunGeometry.faceVertexUvs[0][6] = [ stone[0], stone[1], stone[3] ];
    sunGeometry.faceVertexUvs[0][7] = [ stone[1], stone[2], stone[3] ];
    sunGeometry.faceVertexUvs[0][8] = [ water[0], water[1], water[3] ];
    sunGeometry.faceVertexUvs[0][9] = [ water[1], water[2], water[3] ];
    sunGeometry.faceVertexUvs[0][10] = [ wood[0], wood[1], wood[3] ];
    sunGeometry.faceVertexUvs[0][11] = [ wood[1], wood[2], wood[3] ];





    var marsMaterial = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/mars.jpg') } );
    marsGeometry.faceVertexUvs[0] = [];
    marsGeometry.faceVertexUvs[0][0] = [ bricks[0], bricks[1], bricks[3] ];
    marsGeometry.faceVertexUvs[0][1] = [ bricks[1], bricks[2], bricks[3] ];
    marsGeometry.faceVertexUvs[0][2] = [ clouds[0], clouds[1], clouds[3] ];
    marsGeometry.faceVertexUvs[0][3] = [ clouds[1], clouds[2], clouds[3] ];
    marsGeometry.faceVertexUvs[0][4] = [ crate[0], crate[1], crate[3] ];
    marsGeometry.faceVertexUvs[0][5] = [ crate[1], crate[2], crate[3] ];
    marsGeometry.faceVertexUvs[0][6] = [ stone[0], stone[1], stone[3] ];
    marsGeometry.faceVertexUvs[0][7] = [ stone[1], stone[2], stone[3] ];
    marsGeometry.faceVertexUvs[0][8] = [ water[0], water[1], water[3] ];
    marsGeometry.faceVertexUvs[0][9] = [ water[1], water[2], water[3] ];
    marsGeometry.faceVertexUvs[0][10] = [ wood[0], wood[1], wood[3] ];
    marsGeometry.faceVertexUvs[0][11] = [ wood[1], wood[2], wood[3] ];



    var jupiterMaterial = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/jupiter.jpg') } );
    jupiterGeometry.faceVertexUvs[0] = [];
    jupiterGeometry.faceVertexUvs[0][0] = [ bricks[0], bricks[1], bricks[3] ];
    jupiterGeometry.faceVertexUvs[0][1] = [ bricks[1], bricks[2], bricks[3] ];
    jupiterGeometry.faceVertexUvs[0][2] = [ clouds[0], clouds[1], clouds[3] ];
    jupiterGeometry.faceVertexUvs[0][3] = [ clouds[1], clouds[2], clouds[3] ];
    jupiterGeometry.faceVertexUvs[0][4] = [ crate[0], crate[1], crate[3] ];
    jupiterGeometry.faceVertexUvs[0][5] = [ crate[1], crate[2], crate[3] ];
    jupiterGeometry.faceVertexUvs[0][6] = [ stone[0], stone[1], stone[3] ];
    jupiterGeometry.faceVertexUvs[0][7] = [ stone[1], stone[2], stone[3] ];
    jupiterGeometry.faceVertexUvs[0][8] = [ water[0], water[1], water[3] ];
    jupiterGeometry.faceVertexUvs[0][9] = [ water[1], water[2], water[3] ];
    jupiterGeometry.faceVertexUvs[0][10] = [ wood[0], wood[1], wood[3] ];
    jupiterGeometry.faceVertexUvs[0][11] = [ wood[1], wood[2], wood[3] ];





  
    // var meshFaceMaterial = new THREE.MeshFaceMaterial( materials );

    // mesh = new THREE.Mesh(earthGeometry,  meshFaceMaterial);

    mSun = new THREE.Mesh(sunGeometry,  sunMaterial);
    earth = new THREE.Mesh(earthGeometry,  material);
    mars = new THREE.Mesh(marsGeometry,  marsMaterial);
    jupiter = new THREE.Mesh(jupiterGeometry,  jupiterMaterial);

    earth.position.x = 75;
    mars.position.x = 150;
    jupiter.position.x = -600;

    earth.lightChannel = 123;
    mars.lightChannel = 12;
    jupiter.lightChannel = 1;

    addStars(stars, scene);


    scene.add( stars );
    scene.add( mSun );
    scene.add( earth );
    scene.add( mars );
    scene.add( jupiter );
    
  	
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  
    window.addEventListener( 'resize', onWindowResize, false );

    camera.position.set(0 ,0, 200);
    // camera.lookAt(mSun.position);

    var vector = new THREE.Vector3( 0, 0, -1 );
    var lookAt = vector.applyQuaternion( camera.quaternion );

    point = {
        x: mSun.position.x,
        y: mSun.position.y,
        z: mSun.position.z
    }

    render();
}






function changeView(axis, x){
    var centerX = camera.position.x;
    var centerY = camera.position.y;
    var centerZ = camera.position.z;
    var point2x = point.x;
    var point2y = point.y;
    var point2z = point.z;

    var newX = point2x;
    var newY = point2y;
    var newZ = point2z;

    if (axis == "x"){
        newX = centerX + (point2x-centerX)*Math.cos(x) - (point2z-centerZ)*Math.sin(x);
        newZ = centerZ + (point2x-centerX)*Math.sin(x) + (point2z-centerZ)*Math.cos(x);
    } 

    if (axis == "y"){
        newY = centerY + (point2y-centerY)*Math.cos(x) - (point2z-centerZ)*Math.sin(x);
        newZ = centerZ + (point2y-centerY)*Math.sin(x) + (point2z-centerZ)*Math.cos(x);
    }


    if (x > 6.28 ) x = 0;

    point.x = newX;
    point.y = newY;
    point.z = newZ;
    camera.lookAt(point);

}


function addStars(stars, scene){
    var starSizeAve = 8;
    var starSideCount = 100;

    for (a=0 ; a<starSideCount ; a++){
        var size = Math.random() * starSizeAve;
        var starGeometry = new THREE.BoxGeometry( size, size, size);
        var starMaterial = new THREE.MeshBasicMaterial( { ambient: 0xffff, color: 0xffffff, specular: 0xffff, shininess: 30 } );
        stars = new THREE.Mesh(starGeometry,  starMaterial);
        var x = Math.random() * 3000 - 1500;
        var y = Math.random() * 3000 - 1500;
        var z = Math.random() * -1000 - 1000;
        stars.position.set(x,y,z);
        scene.add(stars);
    }

    for (a=0 ; a<starSideCount ; a++){
        var size = Math.random() * starSizeAve;
        var starGeometry = new THREE.BoxGeometry( size, size, size);
        var starMaterial = new THREE.MeshBasicMaterial( { ambient: 0xffff, color: 0xffffff, specular: 0xffff, shininess: 30 } );
        stars = new THREE.Mesh(starGeometry,  starMaterial);
        var x = Math.random() * 3000 - 1500;
        var y = Math.random() * 3000 - 1500;
        var z = Math.random() * 1000 + 1000;
        stars.position.set(x,y,z);
        scene.add(stars);
    }

    for (a=0 ; a<starSideCount ; a++){
        var size = Math.random() * starSizeAve;
        var starGeometry = new THREE.BoxGeometry( size, size, size);
        var starMaterial = new THREE.MeshBasicMaterial( { ambient: 0xffff, color: 0xffffff, specular: 0xffff, shininess: 30 } );
        stars = new THREE.Mesh(starGeometry,  starMaterial);
        var z = Math.random() * 3000 - 1500;
        var y = Math.random() * 3000 - 1500;
        var x = Math.random() * 1000 + 1000;
        stars.position.set(x,y,z);
        scene.add(stars);
    }

    for (a=0 ; a<starSideCount ; a++){
        var size = Math.random() * starSizeAve;
        var starGeometry = new THREE.BoxGeometry( size, size, size);
        var starMaterial = new THREE.MeshBasicMaterial( { ambient: 0xffff, color: 0xffffff, specular: 0xffff, shininess: 30 } );
        stars = new THREE.Mesh(starGeometry,  starMaterial);
        var z = Math.random() * 3000 - 1500;
        var y = Math.random() * 3000 - 1500;
        var x = Math.random() * -1000 - 1000;
        stars.position.set(x,y,z);
        scene.add(stars);
    }


}
  


function revolve(endPoint, startPoint, speed){
    // var upVector = new THREE.Vector3( -3, 8, 4 );
    var upVector = new THREE.Vector3( 0, 1, 0 );
    var axis = startPoint.position.clone().sub(upVector).normalize();
    // endPoint.position.applyAxisAngle( axis, -.005 );
    endPoint.position.applyAxisAngle( new THREE.Vector3( 0, 1, 0 ), speed );
    

    //Just for fun, we'll rotate the cubes too

}



var forward=false, backward=false, left=false, right=false, down=false, up=false;
function moveCamera(speed){
    if (forward)  camera.translateZ(-speed);
    if (backward)  camera.translateZ(speed);
    if (left)   camera.translateX(-speed);
    if (right)   camera.translateX(speed);
    if (up)   camera.translateY(speed);
    if (down)   camera.translateY(-speed);
    
    var vector = new THREE.Vector3( 0, 0, -1 );
    var lookAt = vector.applyQuaternion( camera.quaternion );

    point.x = camera.position.x + lookAt.x;
    point.y = camera.position.y + lookAt.y;
    point.z = camera.position.z + lookAt.z;
}

var lookRight=false;
var lookLeft=false;
var lookUp=false;
var lookDown=false;
function panCamera(){
    if (lookRight) changeView("x", 0.01);
    if (lookLeft) changeView("x", -0.01);
    if (lookUp) changeView("y", 0.01);
    if (lookDown) changeView("y", -0.01);
}



function animate() {
    //body rotations
    earth.rotation.y += .05;
    mars.rotation.y += .04;
    mSun.rotation.x += .001;
    jupiter.rotation.y -= .07;

    //revolution
    revolve(earth, mSun, 0.005);
    revolve(mars, mSun, 0.001);
    revolve(jupiter, mSun, 0.0007);

    light.position.set( -earth.position.x, -earth.position.y - 10, -earth.position.z ).normalize();
    lightMars.position.set( -mars.position.x, -mars.position.y - 10, -mars.position.z ).normalize();
    lightJupiter.position.set( -jupiter.position.x, -jupiter.position.y - 10, -jupiter.position.z ).normalize();

    //move camera
    moveCamera(1);
    panCamera();
  
    render();
    requestAnimationFrame( animate );
}
  
function render() {
    renderer.render( scene, camera );
}
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}









var mouseDown = false;
document.body.onmousedown = function(e) { 
  mouseDown = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

var mouseX=0, mouseY=0;

document.onmousemove = mouseMove; 

function mouseMove(ev){ 
    ev           = ev || window.event; 
    var mousePos = mouseCoords(ev); 
    xChange = mousePos.x - mouseX;
    yChange = mousePos.y - mouseY;

    if (mouseDown){
        changeView("x", xChange / 1000);
        changeView("y", -yChange / 1000);
    }

    mouseX = mousePos.x;
    mouseY = mousePos.y;
} 
   
function mouseCoords(ev){ 
    if(ev.pageX || ev.pageY){ 
        return {x:ev.pageX, y:ev.pageY}; 
    } 

    return { 
    x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
    y:ev.clientY + document.body.scrollTop  - document.body.clientTop 
    }; 
} 

window.onkeydown = function(e){
    var key = e.keyCode ? e.keyCode : e.which
    if (key == 87) forward = true;
    if (key == 83) backward = true;
    if (key == 65) left = true;
    if (key == 68) right = true;
    if (key == 32) up = true;
    if (key == 67) down = true;

    if (key == 39)  lookRight = true;
    if (key == 37)  lookLeft = true;
    if (key == 38)  lookUp = true;
    if (key == 40)  lookDown = true;

    if (key == 82)  {
        camera.lookAt(mSun.position);
        camera.position.set(0,0,200);
    }


}
window.onkeyup = function(e){
    var key = e.keyCode ? e.keyCode : e.which
    if (key == 87) forward = false;
    if (key == 83) backward = false;
    if (key == 65) left = false;
    if (key == 68) right = false;
    if (key == 32) up = false;
    if (key == 67) down = false;

    if (key == 39)  lookRight = false;
    if (key == 37)  lookLeft = false;
    if (key == 38)  lookUp = false;
    if (key == 40)  lookDown = false;
}