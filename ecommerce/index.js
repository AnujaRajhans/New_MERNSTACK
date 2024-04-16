product=[{id:1,name:"samsung",description:"smartphone",price:30000,img:'../Assignments/unnamed.webp'},
        {id:2,name:"apple",description:"smartphone",price:80000,img:'../Assignments/imgmg.webp'},
        {id:3,name:"realme",description:"smartphone",price:15000,img:'../Assignments/iam.webp'}];

    ContProd=document.getElementById("containerproduct");
    product.forEach(element => {
        NewProd=document.createElement('div');
        NewProd.classname='card';
        NewProd.style.width='18rem';
        NewProd.innerHTML=`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${element.img}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text">${element.price}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            <
            </div>
        </div>`;
        ContProd.appendChild(NewProd);
    });


    empcomm=[];
    function showcomm(){
        var totalPrice=0;
        smartp = document.getElementById('cartt');
        smartp.innerHTML('');
        empcomm.forEach(element => {
            NewData=document.createElement('div');
            NewData.innerHTML=`<h4>Name:${element.name}</h4> 
            <p>Price:${element.price}</p>`;
                smartp.appendChild(NewData);
                totalPrice += element.price;
                document.getElementById("ct").innerHTML=totalPrice;
          });
        }

        function AddToCart(id){    
            addedcart = product.find(p=>p.id===id);
            empcomm.push(addedcart);
            console.log(empcomm.length);
            document.getElementById("count").innerHTML = empcomm.length;
            showcomm();
          }
