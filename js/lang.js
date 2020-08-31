var lang = $("#lang");
var home = $("#home");
var about = $("#about");
var services = $("#services");
var projects = $("#projects");
var comments = $("#comments");
var contact = $("#contact");
var me = $("#me");
var hire = $("#hire");
var cv = $("#cv");
var intro1 = $("#intro1");
var intro2 = $("#intro2");
var intro3 = $("#intro3");
var intro4 = $("#intro4");
var intro5 = $("#intro5");
var review = $("#review");
var ex1 = $("#ex1");
var ex2 = $("#ex2");
var ex3 = $("#ex3");
var call = $("#call");
var ser1 = $("#ser1");
var ser2 = $("#ser2");
var ser3 = $("#ser3");
var ser4 = $("#ser4");
var ser5 = $("#ser5");
var ser6 = $("#ser6");
var ser7 = $("#ser7");
var ser8 = $("#ser8");
var ser9 = $("#ser9");
var ser10 = $("#ser10");
var pr1 = $("#pr1");
var pr2 = $("#pr2");
var pr3 = $("#btn1");
var pr4 = $("#pr4");
var pr5 = $("#pr5");
var pr6 = $("#pr6");
var pr7 = $("#pr7");
var com1 = $("#com1");
var com2 = $("#com2");
var com3 = $("#com3");
var com4 = $("#com4");
var com5 = $("#com5");
var com6 = $("#com6");
var com7 = $("#com7");
var com8 = $("#com8");

var sub1 = $("#sub1");
var sub2 = $("#sub2");
var sub3 = $("#sub3");
var fol1 = $("#fol1");
var fol2 = $("#fol2");

function setLangTR() {
  home.text("ANA");
  about.text("hakkında");
  services.text("HİZMETLER");
  projects.text("PROJELER");
  comments.text("YORUMLAR");
  contact.text("İLETİŞİM");
  lang.text("EN");
  me.text("BEN MOHAMMAD İLYAS KOHİSTANI");
  hire.text("E-posta Göndermek");
  cv.text("CV Alın");
  intro1.text("KENDİMİ");
  intro2.text("TANITAYIM");
  intro3.text("");
  intro4.text("");
  intro5.text("");
  review.text("CV'Yİ İNCELE");
  ex1.text("Yıllık");
  ex2.text("Çalışma");
  ex3.text("Deneyimi");
  call.text("ŞİMDİ ARA");
  ser1.text("HİZMETLERİMİZ");
  ser2.text("");
  ser3.text("");
  ser4.text("");
  ser5.text("");
  ser6.text("");
  ser7.text("");
  ser8.text("");
  ser9.text("");
  ser10.text("");

  pr1.text("SON YAPILAN PROJELER");
  pr2.text("KALİTELİ İŞ");
  pr3.text("TÜM");
  pr4.text("POPÜLER");
  pr5.text("EN SON");
  pr6.text("TAKİP ETME");
  pr7.text("YAKLAŞAN");
  com1.text("MÜŞTERİLER BENİM HAKKIMDA DİYOR");
  com2.text("");
  com3.text("");
  com4.text("");
  com5.text("");
  com6.text("");
  com7.text("");
  com8.text("");

  sub1.text("HERHANGİ BİR YERDEN GÜNCELLEME ALIN");
  sub2.text("En son güncellemelerimizi almak için abone olun.");
  sub3.text("Abone ol");

  fol1.text("BENİ TAKİP ET");
  fol2.text("Telif-hakki © 2019 Tüm hakları saklıdır");

  lang.attr("href", "#tr");
}

function setLangEN() {
  home.text("HOME");
  about.text("ABOUT");
  services.text("SERVICES");
  projects.text("PROJECTS");
  comments.text("COMMENTS");
  contact.text("CONTACT");
  lang.text("TR");
  me.text("I AM MOHAMMAD ILYAS KOHISTANI");
  hire.text("Send Mail");
  cv.text("Get CV");
  intro1.text("LET ME");
  intro2.text("INTRODUCE");
  intro3.text("MYSELF");
  intro4.text(
    "I’ve been working with computers since I was about 17. I got into programming about 18 when I discovered HTML, then CSS and Javascript, PHP/MySQL, Java, VB applications, Network setup, and so on."
  );
  intro5.text(
    "I am a passionate full-stack PHP web developer with over three years of experience developing web based applications. Developed a highly customize-able, risk assessment system focused on design modularity and code flexibility. Handled all steps of the development lifecycle; from requirements gathering/estimating to customer support and enhancements. Worked as part of a remote team utilizing an array of communications tools to ensure seamless results."
  );
  review.text("REVIEW CV");
  ex1.text("Years");
  ex2.text("Working");
  ex3.text("Experience");
  call.text("CALL NOW");
  ser1.text("SERVICE OFFERS");
  ser2.text(
    "I provide custom software design and development services to clients from all around the world, transforming big ideas into exceptional products."
  );
  ser3.text("WEB DEVELOPMENT");
  ser4.text(
    "Do you need a company website or personal blog? We are building bespoke software solutions to meet the specific needs of your business that off-the-shelf software can't."
  );
  ser5.text("UI/UX DESIGN");
  ser6.text(
    "We do everything you might need to bring a successful digital product to life: user research, product strategy, user interface, and user experience design, usability testing, prototyping, web design and development."
  );
  ser7.text("MOBILE APPS");
  ser8.text(
    "Using solid expertise in mobile apps development, our team will help you create practical and seamless experiences on any device and get the best of mobile technology for your business."
  );
  ser9.text("DEPLOYMENT");
  ser10.text(
    "Need a new web hosting service for your company website or personal blog? We've tested the best options on the market and We have best plan for you."
  );

  pr1.text("RECENTLY DONE PROJECTS");
  pr2.text("QUALITY WORK");
  pr3.text("ALL");
  pr4.text("POPULAR");
  pr5.text("LATEST");
  pr6.text("FOLLOWING");
  pr7.text("UPCOMING");
  com1.text("CLIENTS SAY ABOUT ME");
  com2.text(
    '"Good communication skills directly correlate with good development skills. A great programmer is able to understand problems clearly, break them down into hypotheses, and propose solutions in a coherent manner. We can see this all in Mohammad Ilyas Kohistani."'
  );
  com3.text(
    "An ambitious problem solver and innovative opimized solution seeker."
  );
  com4.text(
    " A great programmer cares about their product’s success. He is positive, willing to go the distance to get the job done and bring his best every day."
  );
  com5.text(
    "I have known Ilyas Kohistani over the last 4 years and always a pleasure working with him on any project."
  );
  com6.text(
    "An ambitious problem solver and innovative opimized solution seeker."
  );
  com7.text(
    " A great programmer cares about their product’s success. He is positive, willing to go the distance to get the job done and bring his best every day."
  );
  com8.text(
    "I have known Ilyas Kohistani over the last 4 years and always a pleasure working with him on any project."
  );

  sub1.text("GET UPDATE FROM ANYWHERE");
  sub2.text("Subscribe down to get our latest updates.");
  sub3.text("Subscribe");

  fol1.text("FOLLOW ME");
  fol2.text("Copyright ©2019 All rights reserved");

  lang.attr("href", "#en");
}

$(document).ready(function () {
  $.get(
    "http://ip-api.com/json",
    function (response) {
      if (response.country === "Turkey") {
        setLangTR();
      }
    },
    "jsonp"
  );

  lang.click(function () {
    if (lang.text() === "TR") {
      setLangTR();
    } else {
      setLangEN();
    }
  });
});
