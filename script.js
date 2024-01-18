function getAPI(){
// Виведення даних на сторінку
const response = document.getElementById("apiResponce");

//Отримання даних зі сторони клієнта(Назва сайту, розмір зображення)
const site = document.forms["Fname"]["fname"].value.toString();
const size = document.forms["Fname"]["fname2"].value;

// Додавання списку даних
response.innerHTML = "";
response.innerHTML += `<img src="https://www.google.com/s2/favicons?domain=${site}&sz=${size}" alt="" style="border: 2px solid black;">`;
}
async function getDogImage() {
    try{
      // Дані, які отримуються: генерація фотографій собак 
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        // Виведення даних на сторінку
        const div = document.getElementById("apiResponce");
        const data = await response.json();
        // Додавання списку даних
        div.innerHTML = "";
        div.innerHTML += `<img src="${data.message}" alt="" style="border: 2px solid black; height: 500px;">`;
    } catch (error) {
        console.error('Error fetching data:', error.message);
      }

}

async function getСalendar() {
    try{
        //Отримання даних зі сторони клієнта(Код країни, рік)
        const cod = document.forms["Fname"]["fname"].value.toString();
        const year = document.forms["Fname"]["fname2"].value;

        // Дані, які отримуються: генерація календаря певної країни за певний рік (Код країни, рік)
        const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${cod}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }

        // Виведення даних на сторінку
        const div = document.getElementById("apiResponce");
        const data = await response.json();

        // Додавання списку даних
        div.innerHTML = "";
        div.innerHTML += "<tr><th>Дата</th><th>Назва</th><th>Англійська<br> назва</th><th>Код<br> країни</th><th>Фіксований<br> день?</th><th>У всьому світі?</th><th>Рік <br> заснування</th><th>Вид <br>державного<br> вихідного</th></tr>";
        if (data && data.length > 0) {
          for (let i = 0; i < data.length; i++) {
              div.innerHTML += `<tr> <th> ${data[i].date} </th> <th> ${data[i].localName} </th> <th> ${data[i].name} </th> <th> ${data[i].countryCode} </th> 
              <th> ${data[i].fixed} </th> <th> ${data[i].global } </th>  <th> ${data[i].launchYear} </th> <th> ${data[i].types} </th> </tr>`;
          }
          };

    } catch (error) {
        console.error('Error fetching data:', error.message);
      }

}