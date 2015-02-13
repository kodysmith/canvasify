document.canvasify = {
        image: function(imageEl){
            var canvas = document.createElement('canvas');
            canvas.style = imageEl.style;

            var ctx = canvas.getContext('2d');
            var img = new Image;
            img.onload = function(){
                ctx.drawImage(img,0,0); // Or at whatever offset you like
            };
            img.src = imageEl.src; //"http://images.mndigital.com/artists/000/024/353/a.jpeg";
            return canvas;
        },
        averageColor: function(canvas){

            var data = canvas.context.getImageData(10, 190, 1, 1).data;
            var color = new Color([data[0], data[1], data[2]]);
        },
      }
