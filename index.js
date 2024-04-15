import results from "./100data.js";
let root = document.querySelector(".facultys__list");
let nextPage = document.querySelector(".next__page");
let searchBar = document.querySelector(".search");
let hampress = document.querySelector(".hampress");
let hamrelease = document.querySelector(".hamrelease");
let hampage = document.querySelector(".hampage");


hampress.addEventListener('click',()=>{
  hampress.style.display = 'none'
  hamrelease.style.display = 'block'
  hampage.style.display = 'block'
})
hamrelease.addEventListener('click',()=>{
  hampress.style.display = 'block'
  hamrelease.style.display = 'none'
  hampage.style.display = 'none'
})

results.forEach((user) => {
  let template = `
      <div class="profile" data-id="${user.login.uuid}">
        <div class="dp">
          <img src="${user.picture.medium}" alt="" />
        </div>
        <div class="details">
          <h4 class="faculty__name">${user.name.title} ${user.name.first} ${user.name.last}</h4>
          <p class="faculty__details">${user.destination}</p>
        </div>
      </div>`;

  root.innerHTML += template;
});

let profileList = document.querySelectorAll(".profile");
let faculty_id;
profileList.forEach((faculty) => {
  faculty.addEventListener("click", () => {
    root.style.display = "none";
    nextPage.style.display = "block";
    faculty_id = faculty.dataset["id"];
    let staff = results.find((staff) => staff.login.uuid === faculty_id);

    nextPage.innerHTML = `
    <div class="facultys__data">
    <div class="backward gobackbtn">
    <i class="fa-solid fa-circle-arrow-left"></i>
  </div>
          <div class="profile__">
            <div class="dp__">
              <img src="${staff.picture.medium}" alt="" />
            </div>
            <div class="details__">
              <h2 class="faculty__name_">${staff.name.title} ${staff.name.first} ${staff.name.last}</h2>
              <p class="faculty__details_">${staff.email}</p>
              <p class="faculty__details_"></p>
              <p class="faculty__details_">Location : ECE dept 2<sup>nd</sup> floor</p>
            </div>
          </div>
          <div class="contact">
        <a href="https://wa.me/+919600533113?text="><button class="emil"><i class="fa-regular fa-envelope"></i> Message</button></a>
      <a href="tel:9600533113"><button class="call" ><i class="fa-solid fa-phone"></i> Phone</button></a>
      </div>
          <div class="timetable">
          <table border="1px">
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
            </tr>
            <tr>
              <td  class="day">Mon</td>
              <td>CSE A 311</td>
              <td></td>
              <td></td>
              <td>CSE B 312</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="day">Tue</td>
              <td></td>
              <td>CSE B 312</td>
              <td></td>
              <td>CSE A 311</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="day">Wed</td>
              <td colspan="4" style="text-align: center;">LIC</td>
              <td></td>
              <td></td>
              <td>CSE A 311</td>
            </tr>
            <tr>
              <td class="day">Thu</td>
              <td></td>
              <td>CSE B 312</td>
              <td></td>
              <td></td>
              <td colspan="3" style="text-align: center;">EDC</td>
              
            </tr>
            <tr>
              <td class="day">Fri</td>
              <td></td>
              <td></td>
              <td></td>
              <td>CSE B 312</td>
              <td colspan="3" style="text-align: center;">EMB</td>
             
            </tr>
            <tr>
              <td class="day">Sat</td>
              <td></td>
              <td>CSE B 312</td>
              <td></td>
              <td>CSE A 311</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
         
        </div>
        <div class="backbtn">
          <button class="back backward">Back</button>
        </div>

        </div>
       `;

    let backbtn = document.querySelectorAll(".backward");
    backbtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        root.style.display = "flex";
        nextPage.style.display = "none";
      });
    });
  });
});

searchBar.addEventListener("input", (e) => filterData(e.target.value));

function filterData(searchTerm) {
  let profile = document.querySelectorAll(".profile");

  profile.forEach((list) => {
    console.log(list);
    console.log(list.innerText.toLowerCase());
    if (list.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      list.classList.remove("hide_list");
      list.classList.add("show_list");
    } else {
      list.classList.add("hide_list");
    }
  });
}
