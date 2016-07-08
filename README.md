# smash-life
Zero to Hero competitive Smash browser game

## Basics
Player is a person at a  __smash__ tournament
- Train while *at home* to prepare for tournament
  - Learn certain skills or matchups or pickup new characters
  - train them up to use in tournies
- Use skills learned in training to battle in the tournies
- Earn money to travel further and play against better opponents to learn faster
  - Sponsorships will do something (add later?)
- Goal is to win bigger tournies and raise your rankings

## Player
- Basics
  - name, gamertag, hometown
- Game knowledge
  - Mains
  - Matchups
  - Tech
  - Style of play
  - RPS skill (extremely small edge)
- Assets
  - Money
  - Fame?
    - Crowd favor
    - Subs for money
    - Get fame from characters (Yoshi ftw)
    - Social media presence?
- mechanics
  - Spend time to up stats for different things (fame, smash stuff, money)
    - spend time on IRL job to get money without going to tournies
      - Too much time spent in IRL job will decrease stats (you get worse)
        - All stats getting too turns you into a casual, Game Over
  - Go to tournies to learn and play to make money
  - Can be sponsored
    - No longer can run out of money
    - Can lose if you start to suck
- Ranks:
  - Casual (Game Over)
  - Local Scrub (Start)
  - Local Threat
  - Hidden Boss
  - PR Beast
  - Regional Hero
  - Established Pro
  - Top Contender
  - GOAT (top)

## Characters
- Have to learn specifics
  - Character specific tech
  - General tech
  - matchups
- can level up game stats
  - neutral game
  - punish game
  - edgegaurding
- leveling up stats can also be done indirectly by leveling up relevant skills to those core game stats

## Battling
[TODO]: Make combat interactive

### Basics
- Games start with RPS and stage picking
- Combat based on Neutral, then punish, then edgegaurding with a luck factor
  - Luck factor based a bit on fame and style skills (Mang0 inspired)

## Implementation
- Targeting Browsers
  - Since we don't want to run a server, JS seems the way to go (probably node.js with Browserify)
- Game progress stored locally as cookies
  - Can export / import game data
- Code repo hosted on GitHub
