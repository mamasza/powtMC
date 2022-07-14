const data =[
    { title:"Różowy",
      src: "1.webp",
    },
    { title:"niebieski",
      src: "2.webp",
    },
    { title:"chmurki",
      src: "3.webp",
    }
]


function changeHTMLInfo(index){
    
    const title = data[index].title;
    const titleDOM = document.querySelector("h2")
    titleDOM.innerHTML = title
    
    const image = data[index].src
    const imageDOM = document.querySelector("img")
    imageDOM.src = "/img/"+image
    
    

    const lewaDOM = document.querySelector('.leftArr');
    lewaDOM.onclick =function(){
       
        index--;
        if (index < 0) index = 2
        changeHTMLInfo(index);
       
    }
    const prawaDOM = document.querySelector(".rightArr");
    prawaDOM.onclick = function(){
        index++;
        if (index>2) {index = 0}
        changeHTMLInfo(index);
    }
}
let currSLide = 2
changeHTMLInfo(currSLide)
