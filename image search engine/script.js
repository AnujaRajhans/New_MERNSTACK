const accessKey = "iUOvW_1d92FGcU1sGbNLpwywQVjww7R31Hv-cpuCHCI";
const searchForm=document.getElementById('search-form');
const searchBox=document.getElementById('search-box');
const searchResult=document.getElementById('search-result');
const showMoreBtn=document.getElementById('show-more-btn');
let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    https://api.unsplash.com/search/photos?page=1&query=office&client_id=iUOvW_1d92FGcU1sGbNLpwywQVjww7R31Hv-cpuCHCI
   const response=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
   const responseText= await fetch(url);
   const data=await responseText.json();
    console.log(data);
}
searchForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        page=1;
        searchImages();
    }
)
