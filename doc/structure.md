# Structure
The structure and organization of the smash-life game

## Game Classes
- GameDriver
- Player
  - name
  - gamertag
  - mains
  - money
  - ranking
  - Fame
  - fundamental stats
  - character stats
  - local area
  - matchup (on a character by character basis) (still necessary? -dc)
  - all matches (wins and loses)
- Player::HumanPlayer
- Player::AIPlayer
- SmashGame
- Character
  - name
  - punishibility
  - killability (weight)
  - recovery (edgegaurdability)
  - core stat modifiers
  - luck (for some chars)
- Stages
- Fame
- Stat groups
- Stat
- Tournament
- Match
- Local
- Regional
- National
- Major
- Minigame
- Minigame::RPS
- Minigame::IRL_job (maybe not now)
