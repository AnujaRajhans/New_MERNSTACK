product=[{id:1,name:"samsung",description:"smartphone",price:30000,img:'../'},
        {id:2,name:"apple",description:"smartphone",price:80000},
        {id:3,name:"realme",description:"smartphone",price:15000}];

    ContProd=document.getElementById("containerproduct");
    product.forEach(element => {
        NewProd=document.createElement('div');
        NewProd.classname='card';
        NewProd.style.width='18rem';
        NewProd.innerHTML=`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text">${element.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
        ContProd.appendChild(NewProd);
    });
