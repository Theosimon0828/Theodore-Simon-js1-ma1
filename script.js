const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1
const cat = {
    complain: function() {
        console.log("Mweow!");
    }

};
cat.complain();

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");
console.dir(heading.classList);

heading.className = "heading subheading";
console.log(heading.className);

//Question 5
const paragraphs = document.querySelectorAll("p");
    //console.log(paragraphs);
for (let i=0; i<paragraphs.length; i++){
    //console.log(paragraphs[i]);
    paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
    //console.dir(resultsContainer);
resultsContainer.style.backgroundColor = "yellow";

//Question 7
const list = function(){
    for(let i=0; i<cats.length; i++)
        console.log(cats[i].name);
}
list();

//Question 8
const createCats = function(cats){

}