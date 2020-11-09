

function addImage(keyword,index){
    const image = document.createElement('img');
    image.src =`https://source.unsplash.com/400x300?${keyword}&sig=${index}`;

    const gallery = document.querySelector(".gallery");
    gallery.appendChild(image)

} 
function removeAllPhoto(){
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = '';
}


function searchPhoto(event){
    const keyword = event.target.value;
    if(event.key === "Enter" && keyword){
        removeAllPhoto();
        for(let i=0;i<15;i++){
            addImage(keyword,i);
        }
    }
}

function handleUpdate() {
    const suffix = this.dataset.sizing ||'';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
function main(){
        const inputControl = document.querySelectorAll('.controls input');
        inputControl.forEach((input) => {input.addEventListener('change',handleUpdate);});
        inputControl.forEach((input) => {input.addEventListener('mousemove',handleUpdate);});
        
        const inputElement = document.querySelector('.search');
        inputElement.addEventListener('keydown',searchPhoto);
    
}
main();