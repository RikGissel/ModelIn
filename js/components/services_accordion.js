const accordions = document.querySelector('.accordion-wrapper')
accordions.innerHTML += 
`<button class="accordion">Design Projects</button>
  <div class="panel">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque eveniet
      deleniti id, tenetur ullam ipsam vitae sunt, laudantium temporibus
      consequatur architecto a magni sit tempora ea error veritatis aperiam.
      Illum.
    </p>
  </div>

  <button class="accordion">Set and interior</button>
  <div class="panel">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque eveniet
      deleniti id, tenetur ullam ipsam vitae sunt, laudantium temporibus
      consequatur architecto a magni sit tempora ea error veritatis aperiam.
      Illum.
    </p>
  </div>

  <button class="accordion">Decoration</button>
  <div class="panel">
    <p>
        Offering you a full range of interior and furniture design services. Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world. In my projects I strive to create a perfect interior for you. I often ask about your habits, preferences, hobbies, and other activities.
    </p>
  </div>

  <button class="accordion">Supervision</button>
  <div class="panel" style="border-bottom: 1px solid #000000;">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque eveniet
      deleniti id, tenetur ullam ipsam vitae sunt, laudantium temporibus
      consequatur architecto a magni sit tempora ea error veritatis aperiam.
      Illum.
    </p>
  </div>`

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
