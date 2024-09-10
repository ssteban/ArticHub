document.getElementById("Inicio").addEventListener("click", function() {
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("modal_inicio").style.display = "block";
    document.getElementById("container").classList.add("blur-background");
});

document.getElementById("olvide_contra").addEventListener("click", function(){
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "block";
    document.getElementById("container").classList.add("blur-background");

})

document.getElementById("Registrarse").addEventListener("click", function(){
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("registroContainer").style.display = "block";
    document.getElementById("container").classList.add("blur-background");
})

document.querySelectorAll(".close-modal").forEach(function(element) {
    element.addEventListener("click", function() {
        document.getElementById("modal_inicio").style.display = "none";
        document.getElementById("modal_contra").style.display = "none";
        document.getElementById("registroContainer").style.display = "none";
        document.getElementById("container").classList.remove("blur-background");
    });
});

//menu movil
document.getElementById("InicioM").addEventListener("click", function() {
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("modal_inicio").style.display = "block";
    document.getElementById("menu").style.display= "none"
    document.getElementById("container").classList.add("blur-background");
});

document.getElementById("olvide_contra").addEventListener("click", function(){
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "block";
    document.getElementById("menu").style.display= "none"
    document.getElementById("container").classList.add("blur-background");

})

document.getElementById("RegistrarseM").addEventListener("click", function(){
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("registroContainer").style.display = "block";
    document.getElementById("menu").style.display= "none"
    document.getElementById("container").classList.add("blur-background");
})

document.querySelectorAll(".close-modal").forEach(function(element) {
    element.addEventListener("click", function() {
        document.getElementById("modal_inicio").style.display = "none";
        document.getElementById("modal_contra").style.display = "none";
        document.getElementById("registroContainer").style.display = "none";
        document.getElementById("container").classList.remove("blur-background");
    });
});
//fin menu movil

document.getElementById("menu_boton").addEventListener("click", function(){
    let estilo=document.getElementById("menu").style.display;
    if (estilo=="none"){
        document.getElementById("menu").style.display="block";
    }else{
        document.getElementById("menu").style.display="none";
    }
})

document.getElementById("boton_iniciar").addEventListener("click", function() {
    event.preventDefault();
    console.log('Sirve')
});



const articles = [
    {
        title: "54 Best Songs About the End...",
        description: "Call it the apocalypse, Armageddon, or the end of time. Make a playlist of pop, rock, country, and R&B songs about the end of the world.",
        author: "Elaina Baker",
        time: "5 horas",
    },
    {
        title: "Wonder Woman (2017)...",
        description: "This Review of Wonder Woman (2017) is Grateful For a DCU Movie That Doesn’t Suck.",
        author: "Noel Penaflor",
        time: "6 horas",
    },
    {
        title: "4 of John Wick's Favorite...",
        description: "Before, During or After YOU Watch John Wick Chapter 4, Hear HIS Heartfelt Thoughts On His Favorite Horror Movies!",
        author: "Noel Penaflor",
        time: "6 horas",
    },
    {
        title: "The Rise of AI in Healthcare...",
        description: "Explore how artificial intelligence is revolutionizing the healthcare industry, from diagnostics to patient care.",
        author: "Dr. Sarah Lee",
        time: "7 horas",
    },
    {
        title: "Top 10 Travel Destinations...",
        description: "Planning your next vacation? Check out our list of the top 10 travel destinations for 2024.",
        author: "Emily Smith",
        time: "8 horas",
    },
    {
        title: "The Future of Renewable Energy...",
        description: "An in-depth look at the latest advancements in renewable energy technologies and their impact on the environment.",
        author: "Michael Green",
        time: "9 horas",
    },
    {
        title: "How to Stay Fit During Winter...",
        description: "Winter can be challenging for fitness enthusiasts. Here are some tips to keep you active and healthy during the colder months.",
        author: "Alex Johnson",
        time: "10 horas",
    },
    {
        title: "10 Books You Must Read in 2024...",
        description: "A curated list of must-read books for 2024, covering genres from fiction to self-help.",
        author: "Rachel Adams",
        time: "11 horas",
    },
    {
        title: "Understanding Cryptocurrency...",
        description: "Cryptocurrency is taking the world by storm. Learn the basics of digital currencies and how to invest wisely.",
        author: "David Wilson",
        time: "12 horas",
    },
    {
        title: "The Impact of Social Media on Mental Health...",
        description: "A discussion on the effects of social media on mental health and how to use it responsibly.",
        author: "Jessica Brown",
        time: "13 horas",
    },
    {
        title: "Healthy Eating on a Budget...",
        description: "Eating healthy doesn't have to be expensive. Discover tips for maintaining a nutritious diet without breaking the bank.",
        author: "Chris Evans",
        time: "14 horas",
    },
    {
        title: "The Evolution of Gaming...",
        description: "From Pong to VR, take a journey through the history of video games and their cultural impact.",
        author: "Samantha Carter",
        time: "15 horas",
    },
    {
        title: "Mindfulness for Beginners...",
        description: "An introduction to mindfulness practices and how they can improve your mental well-being.",
        author: "Lisa Moore",
        time: "16 horas",
    },
    {
        title: "The Science Behind Sleep...",
        description: "Why is sleep so important? Explore the science behind sleep and how to improve your sleep quality.",
        author: "Daniel White",
        time: "17 horas",
    },
    {
        title: "The Benefits of Yoga...",
        description: "Discover the physical and mental benefits of practicing yoga, and how to get started.",
        author: "Natalie Young",
        time: "18 horas",
    },
    {
        title: "How to Build a Personal Brand...",
        description: "Learn the steps to creating a personal brand that stands out in a crowded market.",
        author: "Tom Harris",
        time: "19 horas",
    },
    {
        title: "The Art of Public Speaking...",
        description: "Public speaking can be intimidating. Here are some tips to become a confident and effective speaker.",
        author: "Laura Martinez",
        time: "20 horas",
    },
    {
        title: "Exploring Space: The Final Frontier...",
        description: "An overview of recent space exploration missions and what lies ahead in the quest to understand our universe.",
        author: "James Taylor",
        time: "21 horas",
    },
];


/*Cargar y mostrar articulos en forma de tarjeta*/ 
let currentIndex = 0;
const articlesContainer = document.getElementById('articles');
const loadMoreButton = document.getElementById('loadMore');

function loadArticles() {
    const articlesToLoad = Math.min(3, articles.length - currentIndex);
    for (let i = 0; i < articlesToLoad; i++) {
        const article = articles[currentIndex];
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <p><strong>Por:</strong> ${article.author} - <em>${article.time}</em></p>
        `;
        articlesContainer.appendChild(articleDiv);
        currentIndex++;
    }
    if (currentIndex >= articles.length) {
        loadMoreButton.style.display = 'none';
    }
}

loadMoreButton.addEventListener('click', loadArticles);

loadArticles();
/*Fin mostrar articulos en forma de tarjeta*/







