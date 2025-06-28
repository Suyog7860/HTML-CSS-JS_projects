// var arr = [
//     {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
// ]

// function showTheCards(){
//     var clutter = "";
//     arr.forEach(function(obj){
//         clutter += `<div class="box">
//         <img class="cursor-pointer" src="${obj.image}" alt="image">
//         <div class="caption">Lorem ipsum </div>
//     </div>`;
//     })

//     document.querySelector(".container")
//     .innerHTML = clutter;
// }

// function handleSearchFunctionality(){
//     var input = document.querySelector("#searchinput");
    

//     input
//     .addEventListener("focus", function(){
//         document.querySelector(".overlay").style.display = "block";
//     })

//     input
//     .addEventListener("blur", function(){
//         document.querySelector(".overlay").style.display = "none";
//     })

//     input
//     .addEventListener("input", function(){
//         const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
//         var clutter = "";
//         filteredArray.forEach(function(obj){
//             clutter += `<div class="res flex px-8 py-3">
//             <i class="ri-search-line font-semibold mr-5"></i>
//             <h3 class="font-semibold">${obj.name}</h3>
//         </div>`
//         })
//     document.querySelector(".searchdata").style.display = "block";
//         document.querySelector(".searchdata").innerHTML = clutter;
//     })
// }

// handleSearchFunctionality();
// showTheCards();


// 1 array hoga jisme objects honge aur har objects me hoga kuch data like image hogi, 1 name hoga

var arr = [
    {name : "Petals of roses", image : "https://images.unsplash.com/photo-1579591040020-5704f25f2473?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvc2VzfGVufDB8fDB8fHww"},
    {name : "Lovely Nature", image : "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name : "sport", image : "https://plus.unsplash.com/premium_photo-1685366454253-cb705836c5a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnR8ZW58MHx8MHx8fDA%3D"},
    {name : "happy family", image : "https://media.istockphoto.com/id/1457398261/photo/multi-generation-family-playing-soccer-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=8ea8o3fQapK5GG45pfbvU4oRYj0Dsb6_as84zkr2PqY="},
    {name : "Food", image : "https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name : "corporate life", image : "https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlJTIwbGlmZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "nature", image: "https://plus.unsplash.com/premium_photo-1664124888904-435121e89c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "universe", image: "https://images.unsplash.com/photo-1750962395469-33a3a671cfcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"},
    {name: "juices", image: "https://plus.unsplash.com/premium_photo-1750792816635-637e7b1154b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"},
    {name: "china", image: "https://images.unsplash.com/photo-1750672951701-b9dcb289ea29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "strawberry", image: "https://images.unsplash.com/photo-1749587452499-ea1fd591e63f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D"}
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
    clutter += `<div class="box">
    <img class="cursor-pointer" src="${obj.image}" alt="image">
    <div class="caption">Lorem ipsum </div>
    </div> `;
    })
    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){

    var input = document.querySelector("#searchinput");

    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input",function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
               <i class="ri-search-line font-semibold mr-5"></i>
               <h3 class="font-semibold">${obj.name}</h3>
               </div>`
        })

        document.querySelector(".searchdata").style.display = "block"; 
        document.querySelector(".searchdata").innerHTML = clutter;
          
    })
}

handleSearchFunctionality();
 // Call the function to display the cards
showTheCards();


// level-2 video time =>  42:20