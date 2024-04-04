import results from "./100data.js";
let root = document.querySelector(".facultys__list");
let nextPage = document.querySelector(".next__page")

results.forEach((user) => {
  let template = `
      <div class="profile" data-id="${user.login.uuid}">
        <div class="dp">
          <img src="${user.picture.medium}" alt="" />
        </div>
        <div class="details">
          <h4 class="faculty__name">${user.name.title} ${user.name.first} ${user.name.last}</h4>
          <p class="faculty__details">ECE Faculty</p>
        </div>
      </div>`;

  root.innerHTML += template;
});

let profileList = document.querySelectorAll(".profile");
let faculty_id;
profileList.forEach((faculty) => {
  faculty.addEventListener("click", () => {
    root.style.display = 'none'
    nextPage.style.display = 'block'
    faculty_id = faculty.dataset["id"];
    let staff = results.find((staff) => staff.login.uuid === faculty_id);
    
    nextPage.innerHTML = `
    <div class="facultys__data">
          <div class="profile__">
            <div class="dp__">
              <img src="${staff.picture.medium}" alt="" />
            </div>
            <div class="details__">
              <h2 class="faculty__name_">${staff.name.title} ${staff.name.first} ${staff.name.last}</h2>
              <p class="faculty__details_">${staff.email}</p>
              <p class="faculty__details_"></p>
              <p class="faculty__details_">2nd floor dsp lab</p>
            </div>
          </div><div class="timetable">
          <table border="1px">
            <tr>
              <th id="out"></th>
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
              <td>A</td>
              <td></td>
              <td></td>
              <td>B</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="day">Tue</td>
              <td></td>
              <td>B</td>
              <td></td>
              <td>A</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="day">Wed</td>
              <td colspan="4" style="text-align: center;">LIC</td>
              <td></td>
              <td></td>
              <td>A</td>
            </tr>
            <tr>
              <td class="day">Thu</td>
              <td></td>
              <td>B</td>
              <td></td>
              <td></td>
              <td colspan="3" style="text-align: center;">EDC</td>
              
            </tr>
            <tr>
              <td class="day">Fri</td>
              <td></td>
              <td></td>
              <td></td>
              <td>B</td>
              <td colspan="3" style="text-align: center;">EMB</td>
             
            </tr>
            <tr>
              <td class="day">Sat</td>
              <td></td>
              <td>B</td>
              <td></td>
              <td>A</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="btns">
          <a href=""><button class="emil">Message</button></a>
          <button class="back">Go Back</button>
        </div>

        </div>`;

      let backbtn = document.querySelector('.back')
      backbtn.addEventListener('click',()=>{
        root.style.display = 'block'
        nextPage.style.display = 'none'
      })
  });
});
