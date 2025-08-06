let projectData = [
    {
        image: 'images/blog.png',
        name: 'Blogging website',
        detail: 'A responsive and interactive blogging platform built using HTML, CSS, and JavaScript. Designed to publish articles, share project insights, and deliver a clean reading experience across all devices.',
        github: 'https://github.com/rk-1620/mern-blog-frontend',
        live: 'https://mern-blog-frontend-jet.vercel.app/',
        tags: '#javascript, #fullstack, #css',
        user:'rakeshkr@gmail.com',
        pwd:'Rk@12345',
    },
    {
        image: 'images/expense.png',
        name: 'expense tracker',
        detail: 'A simple and intuitive expense tracker application that helps users manage their daily spending. It offers a clean UI for adding, viewing, and deleting transactions in real-time.',
        github: 'https://github.com/rk-1620/new-expense-tracker-frontend',
        live: 'https://new-expense-tracker-frontend-chi.vercel.app/',
        tags: '#javascript, #css',
        user:'asd@gmail.com',
        pwd:'awsS@#$%Fd',
    },
    // {
    //     image: 'images/project-3.png',
    //     name: 'project three',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#javascript'
    // },
    // {
    //     image: 'images/project-4.png',
    //     name: 'project four',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#fullstack, #css'
    // },
    // {
    //     image: 'images/project-5.png',
    //     name: 'project five',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#fullstack'
    // },
    // {
    //     image: 'images/project-6.png',
    //     name: 'project six',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#css'
    // },
    // {
    //     image: 'images/project-7.png',
    //     name: 'project seven',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#javascript'
    // },
    // {
    //     image: 'images/project-8.png',
    //     name: 'project eight',
    //     detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
    //     github: '#',
    //     live: '#',
    //     tags: '#css'
    // },
]

// creating project cards in frontend

function copyToClipboard(button, text) {
    console.log(text);
    navigator.clipboard.writeText(text).then(() => {
      const msgSpan = button.nextElementSibling;
      msgSpan.style.opacity = 1;
      
      setTimeout(() => {
        msgSpan.style.opacity = 0;
      }, 1000);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
}


const createProjectCards =(data)=>{
    let projectContainer=document.querySelector('.project-container');
    projectContainer.innerHTML +=`
    <div class="project-card" data-tags="${data.tags}">
        <div class="project-wrapper">
            <div class="project-thumbnail">
                <img src="images/close.png" class="close-btn">
                <img src="${data.image}" class="project-img">
                <span class="tags"> ${data.tags}</span>
            </div>
            <div class="project-body">
                <h1 class="project-name"> "${data.name}"</h1>
                <p class="project-detail">"${data.detail}"</p>
                <a href="${data.github}" target="_blank" class="btn">github</a>
                <a href="${data.live}" target="_blank" class="btn">See Live</a>

                 <!-- Copy Buttons -->
                <div class="copy-wrapper">
                    <button class="btn copy-btn" onclick="copyToClipboard(this, '${data.user}')">Copy User ID</button>
                    <span class="copy-msg">Copied!</span>
                </div>
                <div class="copy-wrapper">
                    <button class="btn copy-btn" onclick="copyToClipboard(this, '${data.pwd}')">Copy Password</button>
                    <span class="copy-msg">Copied!</span>
                </div>
            </div>
        </div>
    </div>
    `;
}

projectData.forEach(data=>createProjectCards(data));