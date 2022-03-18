const main = document.querySelector('main');

const firstJoke = "People think 'icy' is the easiest word to spell. Come to think of it, I see why.";
const secondJoke = "Want to hear a roof joke? The first one is on the house.";
const thirdJoke = "Some people eat snails. They must not like fast food.";

const template = `
    <section>
        <h1>My Jokes</h1>
        <ol>
            <li>${firstJoke}</li>
            <li>${secondJoke}</li>
            <li>${thirdJoke}</li>
        </ol>
    </section>
`;

main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "That's all folks!";
main.appendChild(p);
