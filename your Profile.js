let tbody = document.querySelector(".tbody");
let api = "http://localhost:3000/post";
let Edit = document.querySelector(".Edit");
let inpEdit1 = document.querySelector(".inpEdit1");
let inpEdit2 = document.querySelector(".inpEdit2");
let inpEdit3 = document.querySelector(".inpEdit3");
let ED = document.querySelector(".ED");
let fail = document.querySelector(".fail");
let Change = document.querySelector(".Change");
let avatar = document.querySelector(".avatar");
let Post = document.querySelector(".Post");
let PostDialog = document.querySelector(".PostDialog");
let inpPost1 = document.querySelector(".inpPost1");
let inpPost2 = document.querySelector(".inpPost2");
let inpPost3 = document.querySelector(".inpPost3");
let Post2 = document.querySelector(".Post2");
let Close2 = document.querySelector(".Close2");
let EDclose = document.querySelector(".EDclose");

Post.onclick = () => {
  PostDialog.showModal()
};
Close2.onclick = () => {
  PostDialog.close()
};
EDclose.onclick = () => {
  Edit.close()
};

Post2.onclick =  PostUser

async function addUser(user) {
  try {
    let { data } = await axios.post(api, user);
  } catch (error) {
    console.log(error);
  }
}

inpPost1.onchange = ( event ) => {

  let file = event . target.files[0];
  let read = new FileReader ()
  read.readAsDataURL ( file )
  Post2.onclick = () => {
    let obj = {
      image : read.result,
      name: inpPost2.value,
      price: inpPost3.value,
    }
    addUser( obj )
  }
}

function PostUser() {
    let obj = {
      image: inpPost1.value,
      name: inpPost2.value,
      price: inpPost3.value,
    };
    addUser(obj);
}

async function ChangeUser(user) {
  try {
    let { data } = await axios.post(api, user);
    getData();
  } catch (error) {
    console.log(error);
  }
}

fail.onchange = (event) => {
  let file = event.target.files[0];
  let read = new FileReader();
  read.readAsDataURL(file);
  Change.onclick = () => {
    avatar.src = read.result;
  };
};

async function getData() {
  try {
    let { data } = await axios.get(api);
    get(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

function get(data) {
  tbody.innerHTML = "";
  data.forEach((elem) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let Img = document.createElement("img");
    Img.src = elem.image;
    Img.style.width = "50%";
    Img.style.marginTop = "5%";
    td.append(Img);
    td.style.width = "10%";
    td.style.textAlign = "center";
    let td2 = document.createElement("td");
    let Name = document.createElement("h2");
    Name.innerHTML = elem.name;
    td2.append(Name);
    td2.style.width = "10%";
    td2.style.textAlign = "center";

    let td3 = document.createElement("td");
    let Price = document.createElement("h2");
    Price.innerHTML = elem.price;
    td3.append(Price);
    td3.style.width = "10%";
    td3.style.textAlign = "center";

    let td4 = document.createElement("td");
    let btnDel = document.createElement("button");
    btnDel.classList.add("btndel");
    btnDel.innerHTML = "Delete";
    btnDel.onclick = () => {
      deleteUser(elem.id);
    };

    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.classList.add("btnEdit");
    btnEdit.onclick = () => {
      editOpen(elem);
    };

    td4.style.width = "10%";
    td4.style.textAlign = "center";

    td4.append(btnDel, btnEdit);
    
    tr.append(td, td2, td3, td4);
    td.style.borderBottom="1px solid black";
    td2.style.borderBottom="1px solid black";
    td3.style.borderBottom="1px solid black";
    td4.style.borderBottom="1px solid black";
    // tr.style.boxShadow = " 0px 5px 40px 0px gray"
    tbody.appendChild(tr);
  });
}

async function deleteUser(id) {
  try {
    let { data } = await axios.delete(`${api}/${id}`);
  } catch (error) {
    console.log(error);
  }
}

async function editUser(id, user) {
  try {
    let { data } = await axios.put(`${api}/${id}`, user);
  } catch (error) {
    console.log(error);
  }
}

function editOpen(elem) {
  Edit.showModal();
  (inpEdit1.src = elem.image),
    (inpEdit2.value = elem.name),
    (inpEdit3.value = elem.price),
    (ED.onclick = () => {
      let obj = {
        image: inpEdit1.src,
        name: inpEdit2.value,
        price: inpEdit3.value,
      };
      editUser(elem.id, obj);
      Edit.close();
    });
}
