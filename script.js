const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newq");
let realData = "";
const getNewQuotes = () => {
  let rennum = Math.floor(Math.random() * 10);
  quotes.innerText = realData[rennum].text;
  author.innerText = realData[rennum].author;
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();

    getNewQuotes();
  } catch (error) {
    alert("refresh the page");
  }
};

getQuotes();
