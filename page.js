// first- get the values from the form
//             post them to server
//                 show on the screen ===
//                      add process of deleting and updating (FE & BE)
//     STYLING

// let nameobj=  document.getElementById('name').value
// let priceobj= document.getElementById('price').value
// let catobj=   document.getElementById('cat').value

let submits = document.getElementById("form");
submits.addEventListener("submit", postData);

async function postData(e) {
  e.preventDefault();

  let names = e.target.name.value;
  let price = e.target.price.value;
  let cat = e.target.cat.value;

  let obj = { names, price, cat };
try {
  let response= 
  await axios
    .post(
      "https://crudcrud.com/api/640ac91e62db40898029bbee2dd86f43/Seller",
      obj
    )
    // .then((response) => {
      
      showonScreen(response.data);
      console.log(response);
    // })
}
    catch(error) {
      console.log(error);
    };
  form.reset();
}

document.addEventListener("DOMContentLoaded", async () => {
  
  try{
  let getter=
  await axios
      .get("https://crudcrud.com/api/640ac91e62db40898029bbee2dd86f43/Seller")

      for (let i = 0; i < getter.data.length; i++) {
        showonScreen(getter.data[i]);
      }
      console.log(getter);
    }
    
    catch(error) {
      console.log(error);
    };
});

function showonScreen(obj) {
  var delbtn = document.createElement("button");
  delbtn.setAttribute("id", obj._id) 
  delbtn.appendChild(document.createTextNode("Remove"));
  delbtn.addEventListener('click', deletion)
  
  delbtn.style.cssText =
    "border-radius: 20px; margin: 10px; padding:4px 10px; border: 2px solid rgb(225 0 40); color: white; background: rgb(225 0 40); cursor: pointer;";

  //let child = `<li id="${obj._id}"> ${obj.names} has been listed for Rs ${obj.price} ${delbtn}`;
 
 
  if (obj.cat === "Food") 
  {
    var fparent = document.getElementById("flist");
    var fchild= document.createElement("li")
    fchild.appendChild(document.createTextNode(`${obj.names} has been listed for Rs ${obj.price} `))
     fchild.appendChild(delbtn)
   
    fparent.appendChild(fchild)
    
   // fparent.innerHTML += child;
  }
   else if (obj.cat === "Cloth") 
  {
    var cparent = document.getElementById("clist");
    var cchild= document.createElement("li")
    cchild.appendChild(document.createTextNode(`${obj.names} has been listed for Rs ${obj.price} `))
     cchild.appendChild(delbtn)
     cparent.appendChild(cchild)
  } else 
  {
    var eparent = document.getElementById("elist");
    var echild= document.createElement("li")
    echild.appendChild(document.createTextNode(`${obj.names} has been listed for Rs ${obj.price} `))
     echild.appendChild(delbtn)
     eparent.appendChild(echild)
   // eparent.innerHTML += child;
  }

  async function deletion(e) {
    var id= e.target.getAttribute('id')
    //console.log(e.target.getAttribute('id'), "  = E")
    try{
    let deleter= 
    await axios
      .delete(`"https://crudcrud.com/api/640ac91e62db40898029bbee2dd86f43/Seller${id}`)
    
        console.log(deleter);
    }  
      catch(error) {
        console.log(error);
      };
      
    if (obj.cat === "Food") {
      console.log(fparent.removeChild(fchild));
    } else if (obj.cat === "Cloth") {
      cparent.removeChild(cchild);
    } else {
      eparent.removeChild(echild);
    }
  };
}
