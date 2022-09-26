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
    
    const span = document.createElement('span');
    span.className = 'span';
    span.innerHTML = 'HP: 100';
    blocInfo.append(span);

    const image = document.createElement('img');
    image.className = 'image';
    let img=getImage();
    image.src = img;
    blocInfo.append(image);

    function health(){
        let healthy = 100;
        feed.addEventListener('click', eat);
        function eat(){
            healthy = healthy + 20;
            if (healthy > 80){
                healthy = 100;
            }
            span.innerHTML = `HP: ${healthy}`;
        }
        return  function (){
            if (healthy > 0){
                healthy = healthy - 1;
                span.innerHTML = `HP: ${healthy}`;
            }
            else{
                blocInfo.append('icons/Sorry.png')
            }
        }             
    }
    const firstInterval = setInterval(health(), 1000);
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


