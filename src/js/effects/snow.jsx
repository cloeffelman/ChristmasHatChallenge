$(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
      window.setTimeout(callback, 1000 / 60);
  };
  window.requestAnimationFrame = requestAnimationFrame;
});

var snowObj = new Object();

snowObj.flakes = [];
snowObj.flakeCount = 400;

snowObj.snow = function() {
  var canvas = document.getElementById("snow"),
      ctx = canvas.getContext("2d"),
      mX = -100,
      mY = -100;

  canvas.width = $("#snow").width();
  canvas.height = $("#snow").height();

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < snowObj.flakeCount; i++) {
      var flake = snowObj.flakes[i],
          x = mX,
          y = mY,
          minDist = 150,
          x2 = flake.x,
          y2 = flake.y;

      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
          dx = x2 - x,
          dy = y2 - y;

      if (dist < minDist) {
          var force = minDist / (dist * dist),
              xcomp = (x - x2) / dist,
              ycomp = (y - y2) / dist,
              deltaV = force / 2;

          flake.velX -= deltaV * xcomp;
          flake.velY -= deltaV * ycomp;

      } else {
          flake.velX *= .98;
          if (flake.velY <= flake.speed) {
              flake.velY = flake.speed
          }
          flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
      }

      ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;

      if (flake.y >= canvas.height || flake.y <= 0) {
          reset(flake);
      }


      if (flake.x >= canvas.width || flake.x <= 0) {
          reset(flake);
      }

      ctx.beginPath();
      //ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
  }
  requestAnimationFrame(snowObj.snow);
};

function reset(flake) {
  var canvas = document.getElementById("snow");
  flake.x = Math.floor(Math.random() * canvas.width);
  flake.y = 0;
  flake.size = (Math.random() * 3) + 2;
  flake.speed = (Math.random() * 1) + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = (Math.random() * 0.5) + 0.3;
}

snowObj.init = function() {
  var canvas = document.getElementById("snow");
  for (var i = 0; i < snowObj.flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas.width),
          y = Math.floor(Math.random() * canvas.height),
          size = (Math.random() * 3) + 2,
          speed = (Math.random() * 1) + 0.5,
          opacity = (Math.random() * 0.5) + 0.3;

      snowObj.flakes.push({
          speed: speed,
          velY: speed,
          velX: 0,
          x: x,
          y: y,
          size: size,
          stepSize: (Math.random()) / 30,
          step: 0,
          opacity: opacity
      });
  }

  snowObj.snow();
};

window.addEventListener("resize",function(){
  var canvas = document.getElementById("snow")
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

module.exports = snowObj
