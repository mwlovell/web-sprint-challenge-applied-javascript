import axios from "axios";

const Tabs = (topics) => {

  const tabContainer = document.createElement("div");
  const tabOne = document.createElement("div");
  const tabTwo = document.createElement("div");
  const tabThree = document.createElement("div");

  tabContainer.appendChild(tabOne);
  tabContainer.appendChild(tabTwo);
  tabContainer.appendChild(tabThree);
  tabOne.textContent = 'javascript';
  tabTwo.textContent = 'bootstrap';
  tabThree.textContent = 'technology';
  tabOne.classList.add("tab");
  tabTwo.classList.add("tab");
  tabThree.classList.add("tab");

  tabContainer.classList.add("topics");

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
}


const tabsAppender = (selector) => {

  
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  
const selector = ".entry";
const entryPoint = document.querySelector(selector);


const getTabs = ("topics", Tabs) => {
  axios.get(`http://localhost:5000/api/topics`)
    .then(resp => {
      resp.data.message.forEach(imageURL => {
        const Card = tabsAppender({ topics, Tabs });
        entryPoint.appendChild(Card);
      })
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => console.log("DONE"))
}

const getTabsTopics = () => {
  axios.get(" http://localhost:5000/api/topics")
    .then(resp => {
      const topics = Object.keys(resp.data.topics);
      for (let i = 0; i < topics.length; i++) {
        getDogs(topics[i], 1);
      }
    })
    .catch(err => console.error(err))
}







export { Tabs, tabsAppender }
