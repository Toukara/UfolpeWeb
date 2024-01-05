const url = "https://ufolep62tt.org/points-joueurs-2023-2024";

import axios from "axios";
import {JSDOM} from "jsdom";

async function fetchData() {
  const data = await axios.get(url);

  const dom = new JSDOM(data.data);
  const {document} = dom.window;
  const table = document.querySelector("table");

  const rows = Array.from(table.querySelectorAll("tr:not([class])"));
  rows.shift();
  rows.pop();

  const players = [];

  rows.map((row, i) => {
    if (i === 0) return;
    const cells = Array.from(row.querySelectorAll("td"));
    const cellsTrimmed = cells.map((cell) => cell.textContent.trim());

    const player = {
      CLUB: cellsTrimmed[0],
      FULL_NAME: cellsTrimmed[1],
      POINTS_FORWARD: cellsTrimmed[2],
      POINTS_BACKWARD: cellsTrimmed[3],
      FFTT: {
        FORWARD_POINTS: cellsTrimmed[4],
        BACKWARD_POINTS: cellsTrimmed[5],
        CLUB: cellsTrimmed[6],
      },
      MUTATION: cellsTrimmed[7],
    };

    players.push(player);
  });

  return players;
}

export {fetchData};
