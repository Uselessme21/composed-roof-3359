const sidemenu= document.querySelector('aside');

const menubtn = document.querySelector('#menu-btn');

const closebtn = document.querySelector('#close-btn');

const themeToggler = document.querySelector('.theme-toggler');
// show
menubtn.addEventListener('click',()=>{
    sidemenu.style.display='block'
})
// hide

closebtn.addEventListener('click',()=>{
    sidemenu.style.display='none'
})

// change theme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})

// const orders =[
//     {
//         productName:"shirts",
//         productNumber:23,
//         paymentStatus:"paid",
//         shipping:"pending"
//     },
//     {
//         productName:"shirts",
//         productNumber:23,
//         paymentStatus:"paid",
//         shipping:"pending"
//     },
//     {
//         productName:"shirts",
//         productNumber:23,
//         paymentStatus:"paid",
//         shipping:"Declined"
//     },
//     {
//         productName:"shirts",
//         productNumber:23,
//         paymentStatus:"paid",
//         shipping:"pending"
//     },
//     {
//         productName:"shirts",
//         productNumber:23,
//         paymentStatus:"paid",
//         shipping:"Delivered"
//     },
//     {
//         productName:"shirts",
//         productNumber:23,
//         paymentStatus:"paid",
//         shipping:"pending"
//     }
// ]

// orders.forEach((order) => {
//     const tr = document.createElement('tr');
//     const trContent=`
//     <td>${order.productName}</td>
//     <td>${order.productNumber}</td>
//     <td>${order.paymentStatus}</td>
//     <td class="${order.shipping==='Declined'? 'danger' :order.shipping==='pending'? 'warning':'primary'}">${order.shipping}</td>
//     <td class='primary'>Details</td>
//     `;
//     tr.innerHTML=trContent;
//     document.querySelector('table>tbody').appendChild(tr);

// });