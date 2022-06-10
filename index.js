

document.querySelectorAll('.mon-box').forEach((item) => {
    item.addEventListener('mouseover', () => {

        document.querySelectorAll('.active').forEach((block) => {
            block.classList.add('block')
            

        })



    });
    item.addEventListener('mouseout', () => {
        document.querySelectorAll('.active').forEach((remove) => {
            remove.classList.remove('block')

        });



    });

});
