const scrollReavealOptions = {
    distance: "50px",
    origin:"bottom",
    duration: 1000
}
const scrollReavealOptionsCompetenze = {
    distance: "50px",
    origin:"right",
    duration: 1000
}


ScrollReveal().reveal(".percorso-description h1",
{...scrollReavealOptions})
ScrollReveal().reveal(".percorso-description p",
{...scrollReavealOptions,
delay:500})
ScrollReveal().reveal(".percorso-image",
{...scrollReavealOptionsCompetenze,
delay:500})
ScrollReveal().reveal(".percorso-description a",
{...scrollReavealOptions,
delay:1000})
ScrollReveal().reveal("#competenze h2",
{...scrollReavealOptions,
delay:1000})
ScrollReveal().reveal(".competenze-item",
{...scrollReavealOptionsCompetenze,
delay:1000})
ScrollReveal().reveal("#perche h2",
{...scrollReavealOptions,
delay:1000})
ScrollReveal().reveal("#calendly h2",
{...scrollReavealOptions,
delay:1000})
ScrollReveal().reveal(".perche",
{...scrollReavealOptionsCompetenze,
delay:1000})
ScrollReveal().reveal(".candidati-container a",
{...scrollReavealOptions,
delay:1000})
ScrollReveal().reveal("#bandi h2",
{...scrollReavealOptions,
delay:1000})
ScrollReveal().reveal(".bando-logo",
{...scrollReavealOptionsCompetenze,
delay:1000})
ScrollReveal().reveal(".bando-description",
{...scrollReavealOptionsCompetenze,
delay:1300})