async function loadCategories(){
    // async await
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    console.log(data);
}

loadCategories()