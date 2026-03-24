const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer")
console.log(treesContainer);

async function loadCategories() {
    // async await
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    // console.log(data);
    // console.log(categoriesContainer);
    data.categories.forEach((category) => {
        // console.log(category);
        const btn = document.createElement("button");
        btn.className = "btn btn-soft btn-success w-full"
        btn.textContent = category.category_name;
        categoriesContainer.appendChild(btn);
    });
}

async function loadTrees() {
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    // console.log(data)
    displayTrees(data.plants);
}

function displayTrees(trees) {
    console.log(trees);
    trees.forEach(tree => {
        console.log(tree);
        const card = document.createElement("div")
        card.className = "card bg-white shadow-sm";
        card.innerHTML = `
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Card Title</h2>
                            <p class="line-clamp-2">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div class="badge badge-soft badge-success">Success</div>
                            <div class="justify-between items-center flex">
                                <h2 class="font-bold text-xl text-green-500">$500</h2>
                                <button class="btn btn-soft btn-success">Buy Now</button>
                            </div>
                        </div>
        `
        treesContainer.appendChild(card);
    })
}

loadCategories();
loadTrees();