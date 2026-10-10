const skinDetails = {
  normal: {
    title: "Normal Skin",
    intro: "Normal skin is often fairly balanced: it may feel comfortable through the day and is not usually very oily or very dry.",
    signs: ["Usually feels comfortable after cleansing.", "May have few dry or shiny areas.", "Texture and appearance can still change with seasons."],
    care: ["Use a gentle cleanser.", "Apply a moisturiser that feels comfortable.", "Use broad-spectrum sunscreen during the day."],
    note: "“Normal” does not mean perfect skin. Keep routines gentle and change products gradually."
  },
  dry: {
    title: "Dry Skin",
    intro: "Dry skin may not hold moisture as well as other skin types. It can feel tight, rough or flaky, especially after washing.",
    signs: ["Tight or rough feeling.", "Flaky patches may appear.", "May feel more uncomfortable in cold or dry weather."],
    care: ["Choose a gentle, non-stripping cleanser.", "Apply moisturiser after washing while skin is slightly damp.", "Avoid very hot water and harsh scrubbing."],
    note: "If dryness is severe, painful or persistent, ask a qualified healthcare professional for advice."
  },
  oily: {
    title: "Oily Skin",
    intro: "Oily skin produces more sebum (natural skin oil). It may look shiny, especially around the forehead, nose and chin.",
    signs: ["Shine may appear during the day.", "Pores may be more noticeable.", "Blemishes can occur, though not everyone with oily skin gets acne."],
    care: ["Wash gently; avoid repeatedly scrubbing or over-washing.", "Consider lightweight, non-comedogenic products.", "Use moisturiser and sunscreen even if skin is oily."],
    note: "Trying to remove all oil can irritate skin and make it feel worse. Introduce new products one at a time."
  },
  combination: {
    title: "Combination Skin",
    intro: "Combination skin has more than one pattern at once. The forehead, nose and chin may be oily while cheeks feel normal or dry.",
    signs: ["Shine may be stronger in the T-zone.", "Cheeks may feel comfortable or dry.", "Needs can vary across different parts of the face."],
    care: ["Use a gentle cleanser for the whole face.", "Apply moisturiser as needed to different areas.", "Choose sunscreen suitable for your skin's comfort."],
    note: "You do not need a separate product for every area. Start simple and notice how your skin responds."
  },
  sensitive: {
    title: "Sensitive Skin",
    intro: "Sensitive skin is a description of how skin reacts, rather than a single medical diagnosis. Some products or environmental factors may cause discomfort.",
    signs: ["May sting, itch, flush or feel irritated.", "Fragrance or certain products may trigger reactions.", "Sensitivity can occur alongside dry, oily or combination skin."],
    care: ["Choose fragrance-free products where possible.", "Patch-test new products according to their label.", "Stop using a product that causes a reaction and seek advice if symptoms persist."],
    note: "A patch test cannot guarantee a product will never cause a reaction. For ongoing or severe symptoms, consult a healthcare professional."
  }
};

const modal = document.getElementById("detail-modal");
const closeButton = document.getElementById("modal-close");
const doneButton = document.getElementById("modal-done");
let previousFocus = null;

function fillList(id, items) {
  const list = document.getElementById(id);
  list.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function openDetails(type) {
  const detail = skinDetails[type];
  if (!detail) return;
  previousFocus = document.activeElement;
  document.getElementById("modal-title").textContent = detail.title;
  document.getElementById("modal-intro").textContent = detail.intro;
  document.getElementById("modal-note").textContent = detail.note;
  fillList("modal-signs", detail.signs);
  fillList("modal-care", detail.care);
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeButton.focus();
}

function closeDetails() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (previousFocus) previousFocus.focus();
}

document.querySelectorAll(".skin-card").forEach((card) => {
  card.addEventListener("click", () => openDetails(card.dataset.type));
});
closeButton.addEventListener("click", closeDetails);
doneButton.addEventListener("click", closeDetails);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeDetails();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeDetails();
});
