# esbuild-plugin-progress

A plugin to add a progress spinner to esbuild

---

[![npm version](https://badge.fury.io/js/%40olton%2Fesbuild-plugin-progress.svg)](https://badge.fury.io/js/%40olton%2Fesbuild-plugin-progress)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Installation
```bash
npm i -D @olton/esbuild-plugin-progress
```

## Usage
```js
import { build } from 'esbuild';
import progress from '@olton/esbuild-plugin-progress';

await build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/index.js',
  plugins: [progress()],
});

```

## Options
Progress plugin has the following options:
- `color` - color of the spinner (default: `cyan`, values: `black` | `red` | `green` | `yellow` | `blue` | `magenta` | `cyan` | `white` | `gray`)
- `text` - text to display after the spinner (default: `Building...`)
- `failText` - text to display after the spinner when build failed (default: `Build failed with %s errors.`)
- `successText` - text to display after the spinner when build succeeded (default: `Build completed in %s ms.`)
- `spinner` - spinner type (default: `dots`, values: `dots` | `dots2` | `dots3` | `dots4` | `dots5` | `dots6` | `dots7` | `dots8` | `dots9` | `dots10` | `dots11` | `dots12` | `dots13` | `dots14` | `dots8bit` | `dotsCircle` | `sand` | `line` | `line2` | `pipe` | `simpleDots` | `simpleDotsScrolling` | `star` | `star2` | `flip` | `hamburger` | `growVertical` | `growHorizontal` | `balloon` | `balloon2` | `noise` | `bounce` | `boxBounce` | `boxBounce2` | `triangle` | `binary` | `arc` | `circle` | `squareCorners` | `circleQuarters` | `circleHalves` | `squish` | `toggle` | `toggle2` | `toggle3` | `toggle4` | `toggle5` | `toggle6` | `toggle7` | `toggle8` | `toggle9` | `toggle10` | `toggle11` | `toggle12` | `toggle13` | `arrow` | `arrow2` | `arrow3` | `bouncingBar` | `bouncingBall` | `smiley` | `monkey` | `hearts` | `clock` | `earth` | `material` | `moon` | `runner` | `pong` | `shark` | `dqpb` | `weather` | `christmas` | `grenade` | `point` | `layer` | `betaWave` | `fingerDance` | `fistBump` | `soccerHeader` | `mindblown` | `speaker` | `orangePulse` | `orangeBluePulse` | `timeTravel` | `aesthetic` | `dwarfFortress` )

> You can see all available spinners [here](https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json)

```js
import { build } from 'esbuild';
import progress from '@olton/esbuild-plugin-progress';

await build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/index.js',
  plugins: [
      progress({
          color: 'green',
          text: 'Building project...',
          failText: 'Fuck! Build failed with %s errors.',
          saccessText: `Yes, yes, yes! I'm hero!` 
      }),
  ],
});
```

---

## License
This software is released under the MIT License.

---

Copyright (c) 2024 by Serhii Pimenov
