const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const amount = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${amount}`);
});
