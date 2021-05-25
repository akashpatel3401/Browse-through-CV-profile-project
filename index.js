console.log("This is a Project 5")
    //Data is an array of object which contains information about the candidates

const data = [{
        name: 'Akash',
        age: 20,
        city: 'Visnagar',
        Language: "Python",
        Framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: 'Ankit',
        age: 22,
        city: 'Visnagar',
        Language: "Python",
        Framework: "Django",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: 'Dhruv',
        age: 18,
        city: 'Visnagar',
        Language: "Html",
        Framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
        name: 'Anand',
        age: 20,
        city: 'Mehsana',
        Language: "Flask",
        Framework: "Dj",
        image: "https://randomuser.me/api/portraits/men/70.jpg"
    },
    {
        name: 'jaymin',
        age: 24,
        city: 'Visnagar',
        Language: "Pytn",
        Framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        name: 'Ap',
        age: 29,
        city: 'Visnagar',
        Language: "Python",
        Framework: "scikit-learn",
        image: "https://randomuser.me/api/portraits/men/66.jpg"
    }
];


//Cv Iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

const candidates = cvIterator(data);

//button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age}</li>
                            <li class="list-group-item">${currentCandidate.city}</li>
                            <li class="list-group-item">${currentCandidate.Language}</li>
                            <li class="list-group-item">${currentCandidate.Framework}</li>
                        </ul>`;
    } else {
        alert('End of the list');
        window.location.reload()
    }
}