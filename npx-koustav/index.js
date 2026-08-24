#!/usr/bin/env node

const green = "\x1b[32m";
const bright = "\x1b[92m";
const reset = "\x1b[0m";
const dim = "\x1b[2m";

const lines = [
  `${bright}✔curiosity confirmed.${reset}`,
  "",
  "oh, so you're curious?",
  "i respect your time, so i'll keep this short.",
  "",
  "name? Koustav Roy",
  "aspiring data analyst",
  "",
  "strengths?",
  `${green}• analytical thinking${reset}`,
  `${green}• problem solving${reset}`,
  `${green}• storytelling with data${reset}`,
  "",
  "looks cool doesnt it? almost The Matrix-esque?",
  "",
  "my stack?",
  `${green}Excel • SQL • Python • Power BI • Tableau${reset}`,
  `${green}statistics • data visualization${reset}`,
  "",
  "proof",
  `${green}• building projects while learning and growing${reset}`,
  `${green}• runner-up at Smart Bengal Hackathon 2023${reset}`,
  `${green}• content designer and social media designer${reset}`,
  `${green}• currently completing a Data Analyst course at IIT Roorkee${reset}`,
  "",
  "you want to know me MORE?",
  "ummmm",
  "i think it's best if you explore my work",
  "",
  'call "me"',
  `${green}email: koustavdatascience@gmail.com${reset}`,
  `${green}linkedin: https://www.linkedin.com/in/koustav-roy-443b34230${reset}`,
  `${green}github: https://github.com/koustavdatascience${reset}`,
  "",
  "also my portfolio.",
  `${green}https://koustav-portfolio-eight.vercel.app${reset}`,
  "",
  `${dim}This is me.${reset}`,
  "Who are you?",
];

console.log(lines.join("\n"));
