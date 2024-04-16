//How to display obj cont from js to html dynamically

    drinks = [{id:1,dname:'Cold Coffee',dprice:80,img:'../Assignments/cold.jpg'},
          {id:2,dname:'Cappucino',dprice:200,img:'../Assignments/cp.jpg'},
          {id:3,dname:'Latte',dprice:150,img:'../Assignments/latte.webp'}];
          ContDrinks= document.getElementById('cafee');
          drinks.forEach(element => {
            NewCafe=document.createElement('div');
            NewCafe.classname='card';
            NewCafe.style.width='25rem';
            NewCafe.innerHTML=`<div class="card p-5 m-5">
            <img class="card-img-top" src="${element.img}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${element.dname}</h5>
            <p class="card-text">${element.dprice}</p>
            <a href="#" class="btn btn-primary" type="button" onclick="AddToCart(${element.id});" >Add to cart</a><br><br>
            <input type="number" id="quant" value="1">
            </div>
        </div>`;
        ContDrinks.appendChild(NewCafe);
          });

// Show menu in modal
        empmenu = [];
        function showmenu(){
          var totalPrice=0;
          food=document.getElementById('smenu');
          food.innerHTML='';
          empmenu.forEach(element => {
              NewFood=document.createElement('div');
              NewFood.innerHTML=`<h4>Name:${element.dname}</h4> 
              <p>Price:${element.dprice}</p>`;
                    food.appendChild(NewFood);
                    totalPrice += element.dprice;
                    document.getElementById("tp").innerHTML=totalPrice;
            });
          }

// Add to cart cha code
          function AddToCart(id){    
            addedfood = drinks.find(p=>p.id===id);
            empmenu.push(addedfood);
            console.log(empmenu.length);
            document.getElementById("count").innerHTML = empmenu.length;
            showmenu();

          }

