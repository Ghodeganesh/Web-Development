const images = document.querySelectorAll('.img1')
console.log(images)

const nature = "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"

// document.querySelector('.one').src=nature

images.forEach((image)=>{
    image.src=nature
})