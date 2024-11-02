let data = [
  {
    id: 1,
    name: "cement",
    costtype: "perbag",
    items: [
      {
        name: "Bharathi Cement",
        detail: "",
        price: 390,
        image: "cement/1.jpeg",
        rating: 4,
        pid: "c0",
      },
      {
        name: "Ultratech Cement",
        detail: "",
        price: 385,
        image: "cement/2.webp",
        rating: 4.5,
        pid: "c1",
      },
      {
        name: "Ambuja Cement",
        detail: "",
        price: 360,
        image: "cement/3.webp",
        rating: 4.2,
        pid: "c2",
      },
      {
        name: "Raasi Cement",
        detail: "",
        price: 355,
        image: "cement/4.webp",
        rating: 3.8,
        pid: "c3",
      },
      {
        name: "Dalmia Cement",
        detail: "",
        price: 340,
        image: "cement/5.webp",
        rating: 4,
        pid: "c4",
      },
    ],
  },
  {
    id: 2,
    name: "tiles",
    costtype: "per sqft",
    items: [
      {
        name: "Endless Canova Statuario",
        detail: "",
        price: 126,
        image: "tiles/1.avif",
        rating: 3.8,
        pid: "t0",
      },
      {
        name: "Amazonite Aqua Marble",
        detail: "",
        price: 127,
        image: "tiles/2.avif",
        rating: 4.4,
        pid: "t1",
      },
      {
        name: "Antique Riano Blue LT",
        detail: "",
        price: 126,
        image: "tiles/3.avif",
        rating: 4,
        pid: "t2",
      },
      {
        name: "Breccia Blue Gold Vein",
        detail: "",
        price: 130,
        image: "tiles/4.avif",
        rating: 4.1,
        pid: "t3",
      },
      {
        name: "Natural Rotowood Silver",
        detail: "",
        price: 132,
        image: "tiles/5.avif",
        rating: 4.2,
        pid: "t4",
      },
      {
        name: "Rustica Foggy Smoke",
        detail: "",
        price: 126,
        image: "tiles/6.avif",
        rating: 3.9,
        pid: "t5",
      },
    ],
  },
  {
    id: 3,
    name: "paints",
    costtype: "container",
    items: [
      {
        name: "Nippon Paint Walltron",
        detail: "Summer Cool Roof",
        price: 1827,
        image: "paints/1.jpg",
        rating: 3.9,
        pid: "p0",
      },
      {
        name: "ZASHIND Nerolac Paint White",
        detail: "Weatherproof & Washable",
        price: 610,
        image: "paints/2.jpg",
        rating: 4,
        pid: "p1",
      },
      {
        name: "Asian Paints Tractor Emulsion",
        detail: " Smooth Wall Finish ",
        price: 1650,
        image: "paints/3.jpg",
        rating: 4.3,
        pid: "p2",
      },
      {
        name: "BERGER Bison",
        detail: "Acrylic Distemper Color-White",
        price: 860,
        image: "paints/4.jpg",
        rating: 3.9,
        pid: "p3",
      },
      {
        name: "Dulux Promise Interior Emulsion Paint",
        detail: "Brighter & Longer-Lasting",
        price: 852,
        image: "paints/5.jpg",
        rating: 4.1,
        pid: "p4",
      },
      {
        name: "Dulux Velvet",
        detail: "Touch Pearl GLO Interior Emulsion Paint ",
        price: 791,
        image: "paints/6.jpg",
        rating: 4.1,
        pid: "p5",
      },
    ],
  },
  {
    id: 4,
    name: "furniture",
  },
  {
    id: 5,
    name: "steel",
  },
];
let cart = [];
let itembtns = document.querySelectorAll(".item");
let content = document.querySelector(".content");
let hem;
itembtns.forEach((ele) => {
  ele.addEventListener("click", () => {
    itembtns.forEach((e) => {
      e.classList = "item";
    });
    ele.classList = "item active";
    hem = data[ele.dataset.r];
    let html = ``;
    hem.items.forEach((k) => {
      html += `<div class="vetri">
            <div class="img">
                <img src="${k.image}">
            </div>
            <div class="prod">
            <div class="productdata">
                <h3>${k.name}</h3>
                <h4></h4>
                <h2 class="price">Price : ₹${k.price}-${hem.costtype}</h2>
                <h2 class="ratings">Ratings : ${k.rating}/5</h2>
            </div>
            <div class="addto">
                <input type="number" class="quant" value="1">
                <div class="addtocart" data-hemid = "${k.pid}">Add to Cart</div>
            </div>
            </div>
        </div>`;
    });
    content.innerHTML = html;
    document.querySelectorAll(".addtocart").forEach((f) => {
      f.addEventListener("click", () => {
        handlecart(f.dataset.hemid);
      });
    });
  });
});

document.querySelector(".cart").addEventListener("click", () => {
  document.querySelector(".cartcont").style.display = "flex";
});
document.querySelector(".closecart").addEventListener("click", () => {
  document.querySelector(".cartcont").style.display = "none";
});

function updatecart() {
  if (cart.length != 0) {
    let rhtml = ``;
    let cost =0;
    cart.forEach((r) => {
      rhtml += `<div class="vetriee">
            <div class="hemimg">
                <img src="${r.image}"  alt="">
            </div>
            <div class="hemdata">
                <h3 class="hem1">${r.name}</h3>
                <h4 class="hem2">Quantity : ${r.quantity}</h4>
                <h4 class="hem3">Price : ${r.price}</h4>
                <div class="delete" data-heid="${r.pid}">Delete</div>
            </div>
        </div>
        </div>`;
        cost+=r.price*r.quantity;
    });
    document.querySelector(".cartitems").innerHTML = rhtml;
    document.querySelector(".totalcost").innerHTML = `Total cost : ${cost} Rupees`;
    document.querySelectorAll(".delete").forEach((p) => {
      p.addEventListener("click", () => {
        console.log(p);
        deleteitemincart(p.dataset.heid);
      });
    });
} else {
      document.querySelector(".totalcost").innerHTML = "Total cost : 0 Rupees";
    document.querySelector(".cartitems").innerHTML = "* No Items in the cart";
  }
}
updatecart();
function handlecart(id) {
  let already = false;
  cart.forEach((temp) => {
    if (temp.pid == id) {
      already = true;
    }
  });
  if (already) {
    cart.forEach((temp1) => {
      if (temp1.pid == id) {
        temp1.quantity++;
      }
    });
    updatecart();
  } else {
    let abc = {};
    data.forEach((t) => {
      if (t.items == undefined) {
      } else {
        t.items.forEach((r) => {
          if (r.pid == id) {
            abc = {
              name: r.name,
              price: r.price,
              image: r.image,
              pid: r.pid,
              quantity: 1,
            };
            cart.push(abc);
          }
        });
      }
    });
  }
  console.log(cart);
  updatecart();
}

function deleteitemincart(id) {
  cart.forEach((it) => {
    if (it.pid == id) {
      it.quantity--;
    }
    let filteredcart = cart.filter((num) => num.quantity != 0);
    cart = filteredcart;
    updatecart();
  });
}
