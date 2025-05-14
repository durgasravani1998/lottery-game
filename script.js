console.log("Hello This is Durga Sravani");
let gifts = [
  "₹100 Cash",
  "Toy car",
  "Chocolate box",
  "₹500 Cash",
  "Smart Phone Cover",
  "Book",
  "Head Phones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sun Glasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lampe",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Key Chain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "Chocolate Box",
  "Travel Pillow",
  "Mini Backpack",
  "shuttle bats",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];

let pickNumberBtn = document.getElementById("pickNumberBtn");
let resultBtn = document.getElementById("result");
const tick = new Audio("tap.wav");
const completedSound = new Audio("gamecompleted.wav");
pickNumberBtn.addEventListener("click", function () {
  for (let i = 1; i <= 50; i++) {
    // console.log(i);
    document.getElementById(i).classList.remove("winningBox");
  }
  resultBtn.textContent = "Please wait...";
  // setTimeout(()=>{

  // let randomNum=Math.random()*10;
  // let drawnNumber = Math.floor(randomNum)+1;
  // let gift=gifts[drawnNumber-1]
  // resultBtn.textContent = `You have got ${drawnNumber}, and you won ${gift}`;
  // document.getElementById(drawnNumber).classList.add('winningBox');
  // },5000);

  let secondsCount = 0;
  const intervalId = setInterval(() => {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secondsCount += 1;
    const randomBox = Math.floor(Math.random() * 50) + 1;
    console.log(randomBox);
    for (let i = 1; i <= 50; i++) {
      if (i === randomBox) {
        document.getElementById(randomBox).classList.add("highlightedBox");
      } else {
        document.getElementById(i).classList.remove("highlightedBox");
      }
    }

    if (secondsCount === 5) {
      let randomNum = Math.random() * 50;
      let drawnNumber = Math.floor(randomNum) + 1;
      let gift = gifts[drawnNumber - 1];
      resultBtn.textContent = `You have got ${drawnNumber}, and you won ${gift}`;
      document.getElementById(randomBox).classList.remove("highlightedBox");
      document.getElementById(drawnNumber).classList.add("winningBox");
      completedSound.pause();
      completedSound.currentTime = 0;
      completedSound.play();
      clearInterval(intervalId);
    }
  }, 1000);
});

//html content

gifts.forEach((element, index, array) => {
  let boxElement = `<div class="box" id=${index + 1}> ${
    index + 1
  }. ${element} </div>`;
  let lotterysheetContainer = document.getElementById("lotterySheetContainer");
  lotterysheetContainer.insertAdjacentHTML("beforeend", boxElement);
});

``;
