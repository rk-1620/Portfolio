// const { compareSync } = require("bcrypt");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links");

// Create observer
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active from all
        navLinks.forEach(link => link.classList.remove("active"));

        // Get the matching nav link
        const activeLink = document.querySelector(
          `.links[href="#${entry.target.id}"]`
        );

        // Add active to matching link
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.3,
    // rootMargin: "-5% 0px -10% 0px" // Adjust depending on when you want the section to become active
  }
);
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('.links[href="#home-section"]').classList.add('active');
  }
})

// Observe each section
sections.forEach(section => observer.observe(section));

let links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-links-container');

toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
})



let projects = document.querySelectorAll('.project-card');
const tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn =>{
    btn.addEventListener('click',()=>{
        
        projects.forEach(card =>{
            // console.log("card", card)
            console.log("attribute", card.getAttribute('data-tags'))
            if(btn.innerHTML.toLowerCase() == 'all')
            {
                card.style.display = 'block';
            }
            else{
                // console.log(card);
                if(card.getAttribute('data-tags').includes(btn.innerHTML.toLocaleLowerCase()))
                {
                    card.style.display = 'block';
                }
                else{
                    card.style.display = 'none';
                }
            }
        })
        tags.forEach(item => item.classList.remove('active'));
        btn.classList.add('active');
    })
})

let project = document.querySelectorAll('.project-card');

project.forEach((card, index)=>{
    let closeBtn= card.querySelector('.close-btn');
    closeBtn.addEventListener('click', ()=>{
        project.forEach((item,i)=>{
                if(i != index){
                    item.classList.remove('blur');
                }
            })
        card.classList.remove('active');
    })

    card.addEventListener('click',(e)=>{
        if(e.target != closeBtn)
        {
            project.forEach((item,i)=>{
                if(i != index){
                    item.classList.add('blur')
                }
            })
            card.classList.add('active')
        }
        
    })
});

document.querySelector('.contact-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const form = document.getElementById('contact-form');
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // These must be your actual Google Form field names (entry.xxx)
  const formData = new FormData();
  formData.append('entry.1574589930', name);     // Replace with real entry ID
  formData.append('entry.781161722', email);    // Replace with real entry ID
  formData.append('entry.1928217364', message);  // Replace with real entry ID

  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSe-wkj4XygAdPJRRyh4PJ3wUvsc86jpQF18ailx_TOWspXcKA/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  }).then(() => {
    document.getElementById('form-status').textContent = '✅ Thank you! Your message has been sent.';
    setTimeout(() => {
        document.getElementById('form-status').textContent = '';
    }, 4000);
    form.reset(); // Optional: clear form fields
  }).catch((err) => {
    console.log(err)
    document.getElementById('form-status').textContent = '❌ Something went wrong. Please try again.';
  });
});

