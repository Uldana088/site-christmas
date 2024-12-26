const Arrivals = document.getElementById("cards-container");
const product = [
{
  image: "https://sc04.alicdn.com/kf/H3fd0fbd8d114470dbc2e39dc2bc2cc643.jpg",
  name: "Wine Bottle",
  price: "$102.00 GBP",
},
{
  image:
  "https://i.pinimg.com/736x/25/cb/88/25cb8826d5f0d5e80d7d3c6d78703f76.jpg",
  name: "Santa Bag",
  price: "$250.00 GBP",
  },
{
  image:
  "https://i.pinimg.com/736x/c5/fe/29/c5fe299ac07403712eef8dcaadba068d.jpg",
  name: "Santa Cap",
  price: "$180.00 GBP",
},
{
  image:
  "https://qvc.scene7.com/is/image/QVC/h/90/h475790_ab6.102?$aemprodgallery80$",
  name: "Fried Gloves",
  price: "$100.00 GBP",
},
{
  image:
    "https://i.pinimg.com/736x/cd/93/de/cd93decb447abd864fe147fd31cf314f.jpg",
    name: "Door Decating",
    price: "$115.00 GBP",
},
{
  image:
  "https://i.pinimg.com/736x/31/a4/5f/31a45fd2af1ec9eb60cbc36aace5dc17.jpg",
    name: "Tree Candle",
    price: "$340.00 GBP",
},
{
  image:
  "https://i.pinimg.com/736x/b2/28/fc/b228fc10d8cc4708bb574e856ff65927.jpg",
  name: "Santa",
  price: "$498.00 GBP",
},
{
  image:
  "https://i.pinimg.com/736x/45/9a/4b/459a4b77e6e3ac37f6f90f909a4522ce.jpg",
  name: "Light",
  price: "$129.00 GBP",
},

]; 
product.forEach((item) => {
  const card = document.createElement("div");
  const imgArrivals = document.createElement("img");
  const nameArrivals = document.createElement("h2");
  const priceArrivals = document.createElement("h4");

  imgArrivals.src = item.image;
  nameArrivals.textContent = item.name;
  priceArrivals.textContent = item.price;

  card.appendChild(imgArrivals);
  card.appendChild(nameArrivals);
  card.appendChild(priceArrivals);

  card.classList.add("Cards");
  nameArrivals.classList.add("CardName");
  imgArrivals.classList.add("CardImg");

  products.appendChild(card)


  card.classList.add("allcard");

  card.addEventListener("mouseenter", () => {
    card.style.background = "rgba(179, 188, 176, 0.45)";
    card.style.transition = "all 0.5s";
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "none";
  });
  products.appendChild(card);
});

///////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const deadline = new Date('2024-12-31T23:59:59');
  
  const elDays = document.querySelector('.timer__days');
  const elHours = document.querySelector('.timer__hours');
  const elMinutes = document.querySelector('.timer__minutes');
  const elSeconds = document.querySelector('.timer__seconds');
  
  const declensionNum = (num, words) => {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  };

  const updateTimer = () => {

    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

    if (diff === 0) {
      clearInterval(timerId);
    }
  };

  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});
//////////////////////////////////////////////////////////////////////
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
  }
});

//////////////////////////////////////////////////////////

const NUMBER_OF_SNOWFLAKES = 500;
const MAX_SNOWFLAKE_SIZE = 2;
const MAX_SNOWFLAKE_SPEED = 1;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('scroll', () => {
    canvas.style.top = `${window.scrollY}px`;
});

animate()


////////////////////////////////////////////////////
document.querySelector('.subscribe-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
});
