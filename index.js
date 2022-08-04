const menuItems = document.querySelectorAll('.menu-items');
const container = document.querySelectorAll('.container');

menuItems.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        // console.log(e.target.id);
        const linkID = e.target.id;
        // console.log(linkID)

        container.forEach((section) => {
            // console.log(section.id)
            section.classList.remove('active');
            if(section.id === linkID) {
                section.classList.add('active');
            }
        });
    });
})
    