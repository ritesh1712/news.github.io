// select id's and classes on DOM
const menuBar = document.getElementById("menuBar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const bottomBar = document.getElementById("bottomBar");
const language = document.getElementById("language");
const moreLanguage = document.getElementById("moreLanguage");
const content_box = document.getElementById("content-box");
const headLine = document.getElementById("headLine");
const heading = document.getElementById("heading");
const barkingNews = document.getElementById("barkingNews");
const home = document.getElementById("home");
const india = document.getElementById("india");
const technology =document.getElementById("technology")

// const more=document.getElementById("more");
// const less=document.getElementById("less");

// menu show 
menuBtn.addEventListener('click', () => {
    menuBar.classList.add("responcive")
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    // bottomBar.style.display = "none";
    
})

// menu hide
closeBtn.addEventListener('click', () => {
    
    menuBar.classList.remove("responcive")
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    // bottomBar.style.display = "block";
    
})


// language show and hide 
language.addEventListener('click', () => {
    
    if (moreLanguage.style.display == "block") {
        
        moreLanguage.style.display = "none";
        // less.style.display="none";
        // more.style.display="block";
        
    }
    else {
        moreLanguage.style.display = "block";
        // less.style.display="block";
        // more.style.display="none";
        // MoreLmoreLanguageIcon.style.display="none";
    }
    
})


//  url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=e34999aaefc14fca9ecfa2931ca89c9c"
// fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e34999aaefc14fca9ecfa2931ca89c9c") //techcrunch
// fetch("https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=e34999aaefc14fca9ecfa2931ca89c9c")
// fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e34999aaefc14fca9ecfa2931ca89c9c")
// fetch("https://newsapi.org/v2/top-headlines?q=trump&apiKey=e34999aaefc14fca9ecfa2931ca89c9c")
// fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e34999aaefc14fca9ecfa2931ca89c9c") //bbc

// Fetching the API

// let url="https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=e34999aaefc14fca9ecfa2931ca89c9c"
let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e34999aaefc14fca9ecfa2931ca89c9c"
fetchData(url);
let newData;
function fetchData(url){
    fetch(url)
    .then(function (res) {
        return res.text()
    }).then(function (data) {
        newData = JSON.parse(data).articles
        showNews(newData);
    });
}

home.addEventListener('click', () => {
    menuBar.classList.remove("responcive")
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    url="https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=e34999aaefc14fca9ecfa2931ca89c9c"
   fetchData(url);
    heading.innerText="top news"
    })
    barkingNews.addEventListener('click', () => {
        menuBar.classList.remove("responcive")
        closeBtn.style.display = "none";
        menuBtn.style.display = "block";
        url="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e34999aaefc14fca9ecfa2931ca89c9c"
        fetchData(url);
        heading.innerText="barking news"
        
    })
    india.addEventListener('click', () => {
        menuBar.classList.remove("responcive")
        closeBtn.style.display = "none";
        menuBtn.style.display = "block";
        url ="https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=e34999aaefc14fca9ecfa2931ca89c9c"
        fetchData(url);
        heading.innerText="india news"
        
    })
    technology.addEventListener('click', () => {
        menuBar.classList.remove("responcive")
        closeBtn.style.display = "none";
        menuBtn.style.display = "block";
        url ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e34999aaefc14fca9ecfa2931ca89c9c"
        fetchData(url);
        heading.innerText="technology news"    
    })
        

// data show on website 
function showNews(newData) {
    let html = "";
    let line = "";
    newData.forEach(element => {
        let news = ` <div class="flex justify-center items-center flex-col p-4 m-6 border-2 border-black shadow-2xl">
            <div>
            <img src="${element["urlToImage"]}" class="h-68 w-96 m-2" alt="">
            </div>
            <div>
            <h1 class="text-center text-2xl font-semibold uppercase p-2">${element["title"]}</h1>
                 <p class="text-xl p-2">${element["content"]}.<a href="${element['url']}" target="_blank" class="text-blue-500" >read more </a></p>
                 </div>
                 </div>        
                 `
        let headLine_news = `
                 <div class="h-60 bg-black w-1"></div>
                 <div class="text-xl m-2 cursor-pointer font-bold">
                 <div class="flex justify-center items-center">
                 <img src="${element["urlToImage"]}" class="h-68 w-72 m-2" alt="">
                 </div>
                 <h3>${element["title"]}</h3>
                 </div>
                 `
        html += news;
        line += headLine_news;

    });
    content_box.innerHTML = html;
    headLine.innerHTML = line;

}

const searchBtn=document.getElementById("searchBtn")
const search=document.getElementById("search");
let country;

let countryShortForm= ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
search.addEventListener('input',()=>{  
    countryShortForm.forEach(element => {
        if(element.includes(search.value)){
            country=element;
        }
    });
    console.log(country)
    url=`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=e34999aaefc14fca9ecfa2931ca89c9c`
    fetchData(url)
})

