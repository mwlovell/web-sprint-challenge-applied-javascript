const Header = (title, date, temp) => {

  // const dogCard = document.createElement("div"); // <div></div>
  // const image = document.createElement("img"); // <img />
  // const heading = document.createElement("h3");

    const header = document.createElement('div');
    const headDate = document.createElement('span');
    const headTitle = document.createElement('h1');
    const headTemp = document.createElement('span');

    // dogCard.appendChild(image); // <div><img /></div>
    // dogCard.appendChild(heading); // <div><img /><h3></h3></div>


    header.appendChild(headDate);
    header.appendChild(headTitle);
    header.appendChild(headTemp);

    // heading.textContent = `Breed: ${breed}`;
    // image.src = imageURL;
    // dogCard.classList.add("dog-card");
    // image.classList.add("dog-image");

    headDate.textContent = `${date}`;
    headTemp.textContent = `${temp}`;
    headTitle.textContent = `${title}`;


    return header
}






  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }


