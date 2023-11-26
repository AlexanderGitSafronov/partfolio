const worksH2 = document.querySelectorAll(".btn__works h2");
const links = document.querySelectorAll(".img__works");

worksH2.forEach((item, idx) => {
  item.addEventListener("click", () => {
    if (idx === 0) {
      linkVisit(idx);
    }
    if (idx === 1) {
      linkVisit(idx);
    }
    if (idx === 2) {
      linkVisit(idx);
    }
    if (idx === 3) {
      linkVisit(idx);
    }
    if (idx === 4) {
      linkVisit(idx);
    }
  });
});
function linkVisit(idx) {
  links.forEach((item) => {
    item.classList.add("close");
    links[idx].classList.remove("close");
  });
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// ТЕЛЕГРАМ

const TOKEN = "6082700545:AAFbuZoez-lgQ5SDX2lUcOwUAHE_hI1fyOQ";
const CHAT_ID = "-1001811810827";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Номер: </b> ${this.cellphone.value}\n`;
  message += `<b>Адрес: </b> ${this.desc.value}`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.cellphone.value = "";
      this.desc.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
});
