/**
 * Created by salvatorerandazzo on 4/26/16.
 */

var renderer = new PIXI.WebGLRenderer(800, 600);    // Initial Container
var stage = new PIXI.Container();                   // Stage
var loader = PIXI.loader;

document.body.appendChild(renderer.view);           // Appending the renderer to the body of the page

loader.add('tank', '/assets/temp/tank.png');


loader.once('complete', render);

loader.load();

var tank = null;

function render (loader, resources) {
    tank = new PIXI.Sprite(resources.tank.texture);

    tank.position.x = 400;
    tank.position.y = 300;

    stage.addChild(tank);

    keyEvent();

    animate();
}

var animate = function () {
    requestAnimationFrame(animate);

    renderer.render(stage);
}
// var left = keyboard(37),

function keyEvent () {
    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 38) {
            console.log('position')
            tank.y -= 10;
        }
    }, false)
};
