import {Pokemon} from "../interfaces/Pokemon"

// const dataRow = document.querySelector("[data-pokemon-row]");
export function PokemonCard(i:Pokemon):HTMLDivElement {
  const {name,link,description,image} = i
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<div class="card">
            <img
              src="${image}"
              class="card-img-top"
              alt="${name}"
              loading="lazy"
            />
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">"${description}"</p>
              ${link?`<a href="${link}" class="btn btn-primary">Visit</a>`:""}
            </div>
          </div>`;
  // dataRow.appendChild(div);
  return div;
}
