//Bài 1
arr =[1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
//hàm tìm số lần lặp của 1 khóa k
const count = (array,k) => {
    let ct = 0;
    array.forEach((a) => {(a == k)?ct+=1:"";});
      return ct;
    }

const maxdup = (array) =>{
//tạo 1 mảng với các khóa ko trùng lặp    
    const newarr =[];
    array.forEach((a) => {newarr.includes(a)?"":newarr.push(a);});

let key = [newarr[0]];
let max = 0;
//sử dụng các phần tử của mảng mới tạo để làm khóa cho hàm count ở trên , với mảng áp dụng là mảng gốc rồi tìm kết quả lớn nhất
newarr.forEach((a) => {count(array,a)>max?((max = count(array,a))&&(key = a)):""})
const kq= {
    value:key,
    count:max
}
return kq;
};
console.log(maxdup(arr));

//Bài 2

const name = document.querySelector(".name");
const phone = document.querySelector(".phone");
const add = document.querySelector(".addbtn");
const findvl = document.querySelector(".findvl");
const find = document.querySelector(".find");
const del = document.querySelector(".del");
const list = document.querySelector(".listcontact");
const findlist = document.querySelector(".findlist");
const findmenu = document.querySelector(".findmenu");

//hiển thị danh bạ được lưu trũ
const show = () => {
    let users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];
    list.innerHTML = ``;
    users.map((d) => {
      const contact = document.createElement("div");
      contact.classList.add("contact");
      contact.innerHTML = `
      <div>${d.name}</div>
      <div>${d.phone}</div>
       `;
      list.appendChild(contact);
    });
}
show();

//thêm liên hệ mới
add.onclick=()=>{
	const users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];
    const newuser ={};
	newuser.name = `${name.value}`;
	newuser.phone = `${phone.value}`;
    const newusers = [...users,newuser];
	localStorage.setItem("users", JSON.stringify(newusers));
    show();
}

//tìm kiếm
find.onclick = () => {
    const a = findvl.value.toLowerCase().trim();
    if (a!==``){
    findlist.classList.add("Active");
      findmenu.innerHTML = ``;
      const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
      users.map((d)=>{
        if ((d.name.toLowerCase().trim()).includes(a)||(d.phone.toLowerCase().trim()).includes(a)){
           const finded = document.createElement("div");
           finded.classList.add("contact");
          finded.innerHTML = `<div>${d.name}</div>
          <div>${d.phone}</div>`;
          findmenu.appendChild(finded);
      }
    });
    if(findmenu.innerHTML==``){findmenu.innerHTML=`Không tìm thấy kết quả phù hợp`}
  }
  };

//xóa các liên hệ trùng số đt  
del.onclick = () => {
    const users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];
     for(i=0;i<users.length;i++){
            for(x=i+1;x<users.length;x++){
            if (users[i].phone==users[x].phone){
                users.splice(x,1);
            }
        }
        }
        localStorage.setItem("users", JSON.stringify(users));
        show();
}

//còn cái sắp xếp mình chưa làm xong ^_^