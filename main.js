let form = document.querySelector('form')
let input = document.querySelector('input')
let boxcontainer = document.querySelector('#div')
let rating = document.querySelector('#rating')
let review = document.querySelector('#review')
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')
let sum = 0
let ratingstore = 0;
let lilength = document.querySelector('ul').getElementsByTagName('li').length

const getRating = ((e)=>{
    li.forEach((item) => {
        ratingstore = e.target.innerText
        ratingstore = Number(ratingstore)
        if(item.classList.contains('liclass')){

            item.className='list-group-item border-0 rounded-circle bg-secondary-subtle text-center fs-4'
         }
         if(item.classList.contains('list-group-item')){
            e.target.className='liclass'
         }
    });

});
review.innerText = `${boxcontainer.children.length}Review`
ul.addEventListener('click', getRating)
const getfeedback = ((e) => {
    e.preventDefault();
    sum += ratingstore
    review.innerText = `${boxcontainer.children.length + 1}Review`
    rating.innerText = ` AvgRating: ${sum / (lilength)}`
    let div = document.createElement('div')
    div.className = 'card mt-4'
    div.innerHTML += `<p class="rating liclass" style="margin-left:-10px; margin-top:-15px; font-size:25px;">${ratingstore}</p>
    <p>${input.value}</p>`

    let button = document.createElement('delbtn')
    button.className = 'btn btn-sm float-end fw-semibold fs-5'
    button.innerText = 'X'
    div.appendChild(button)
    ratingstore = 0
    boxcontainer.appendChild(div)
    form.reset()

})


form.addEventListener('submit', getfeedback)
boxcontainer.addEventListener('click', (e) => {
    if (e.target.className.includes('btn')) {
        let div = e.target.parentNode
        boxcontainer.removeChild(div)
    }
    review.innerText=`${boxcontainer.children.length}Review`
    let div = document.querySelectorAll('.card')
    let lessrate=0
    console.log(div)
    div.forEach((item)=>{
        let data =item.querySelectorAll('.rating')
        data.forEach((elements)=>{
            lessrate+=Number(elements.innerText)
        })
    })

    rating.innerText=`AvgRating:${(lessrate/boxcontainer.children.length)}`
})



