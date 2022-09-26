document
        .querySelector('#create')
        .addEventListener('click', create);
function create(){
    let display = document.createElement('div');
    display.className = 'display';
    tamagochs.append(display);
    
    const blocInfo = document.createElement('div');
    blocInfo.className = 'blocInfo';
    display.append(blocInfo);
    
    const feed = document.createElement('button');
    feed.className = 'feedButton';
    feed.innerHTML = 'Покормить';
    display.append(feed);
    
    const line = document.createElement('div');
    line.className = 'line';
   // line.innerHTML = 'HP: 100';
    blocInfo.append(line);

    const image = document.createElement('img');
    image.className = 'image';
    let img=getImage();
    image.src = img;
    blocInfo.append(image);

    function health(){
        let healthy = 100;
        feed.addEventListener('click', eat);
        function eat(){
            if(healthy>0){
                healthy = healthy + 20;
                if (healthy > 80){
                    healthy = 100;
                }
            }
            
            line.style.width=healthy+'px';
        }
        return  function (){
            if (healthy > 0){
                healthy = healthy -0.1;
                line.style.width=healthy+'px';
            }
            else{
                image.src='icons/Sorry.png';
            }
        }             
    }
    const firstInterval = setInterval(health(), 10);
}

function getImage(){
    let image=[];
    image[0]='icons/peng.png';
    image[1]='icons/Bear.png';
    image[2]='icons/dog.jpg';
    image[3]='icons/dinosaur.jpg';
    image[4]='icons/croc.jpg';
    let i=Math.floor(Math.random() * image.length);
    return image[i]
}


