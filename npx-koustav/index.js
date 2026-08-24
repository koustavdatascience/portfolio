#!/usr/bin/env node

const green = "\x1b[32m";
const bright = "\x1b[92m";
const reset = "\x1b[0m";
const CHAR_DELAY_MS = Number(process.env.KOUSTAV_TYPE_DELAY ?? 60);
const LINE_PAUSE_MS = Number(process.env.KOUSTAV_LINE_PAUSE ?? 450);
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

  "my stack?",
  `${green}Excel • SQL • Python • Power BI • Tableau${reset}`,
  `${green}statistics • data visualization${reset}`,
  "",
  "what i've been up to",
  `${green}• Content Designer at The Graduate Dropout${reset}`,
  `${green}• Independent builder of small digital products and experiments${reset}`,
  `${green}• Runner-up, Smart Bengal Hackathon 2023${reset}`,
  `${green}• Currently pursuing a Postgraduate Programme in Data Analytics at IIT Roorkee${reset}`,
  "",
  "you want to know me MORE?",
  "",
  "when i'm not working,",
  "i'm usually behind a camera, playing guitar,",
  "listening to alternative rock, or discovering a new design trend.",
  "",
  "former music club coordinator in college.",
  "lover of long rides, travel, aquariums,",
  "badminton, and swimming.",
  "",
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
];

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function typeLine(line) {
  let index = 0;

  while (index < line.length) {
    if (line[index] === "\x1b") {
      const ansiMatch = line.slice(index).match(/^\x1b\[[0-9;]*m/);
      if (ansiMatch) {
        process.stdout.write(ansiMatch[0]);
        index += ansiMatch[0].length;
        continue;
      }
    }

    process.stdout.write(line[index]);
    index += 1;
    await sleep(CHAR_DELAY_MS);
  }

  process.stdout.write("\n");
  await sleep(LINE_PAUSE_MS);
}

async function main() {
  for (const line of lines) {
    await typeLine(line);
  }
}

main();
