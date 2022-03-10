let app=document.querySelector('#root')
let container=document.createElement('div')
container.setAttribute('class','container')
app.appendChild(container)
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then((res)=>{
    return res.json()
})
.then(data=>{
    data.forEach(makeup => {
        console.log("makeup",makeup);
        let card=document.createElement('div')
        container.appendChild(card)
        let brand=document.createElement('h1')
        brand.textContent=makeup.brand
        card.appendChild(brand)
        let name=document.createElement('p')
        name.textContent=`Product name: ${makeup.name}`
        card.appendChild(name)
        let image_link=document.createElement('img')
        image_link.src=makeup.image_link
        card.appendChild(image_link)
        let price=document.createElement('p')
        price.textContent=`Price: ${makeup.price}`
        card.appendChild(price)
        let description=document.createElement('p')
        description.textContent=` Description: ${makeup.description}`
        card.appendChild(description)
        let rating=document.createElement('p')
        rating.textContent=` Rating ${makeup.rating} stars`
        card.appendChild(rating)
        let product_type=document.createElement('p')
        product_type.textContent=` Product type: ${makeup.product_type}`
        card.appendChild(product_type)
        // set attributes
        card.setAttribute('class','card')
        
    });
    ;})
