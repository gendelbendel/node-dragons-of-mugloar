# Dragons of Mugloar node implementation #

This is a *work in progress solution* for the problem presented on [Dragons of Mugloar](http://www.dragonsofmugloar.com/).

This should come up with a solution at least 50%, as specified on the page, though it should ideally win 100% of the time.

An exercise in requirements gathering, reading limited documentation, and working around inconsistent behavior, as well as development as a whole.

## Setup ##
* Clone the repo
* `npm install`
* `npm test` to run tests
* `npm run lint` to run linter

## Dragon stats requirements ##
* Each stat can be no larger than 10 (more than 10 results in the following message: "Dragon died of performance enhancement drug overdose: More than 10 points given per stat")
* Each stat must be 0 or larger (below 0 results in the following message: "Dragon developed anorexia and went chasing after a career as a runway model: Less than 0 points given to a stat")
* Sum of all stats must be 20 (more than 20 results in the following message: "Dragon died of performance enhancement drug overdose: More than 20 points given", less than 20 results in the following message: "Dragon died of starvation: need all 20 points divided.")

## Stat map ##

Knight Attack = Dragon Scale Thickness
Knight Armor = Dragon Claw Sharpness
Knight Agility = Dragon Wing Strength
Knight Endurance = Dragon Fire Breath

## Weather codes ##
### NMR ###
Dragon's stats must be based on the Knight's stats to win the fight

### T E ###
Dragon's stats must be even distributed (5,5,5,5)

### HVA ###
Dragon's stats must have 0 in fireBreath and 10 in clawSharpness, other two stats can vary

### SRO ###
Don't send a dragon payload to the put, the dragon would die in the storm.

### FOG (FUNDEFINEDG) ###
Should be able to send any dragon stats; knights are useless in the fog.

## Bugs Discovered ##
* Inconsistent return results, between `GET /api/game/${gameId}` and `GET /api/game`: gameId is either a string or number respectively. The former is not a documented API endpoint, which may be part of the reason why this issue occurs (route not being updated, not being supported, etc)
* Inconsistent return results, between `GET /api/game/${gameId}` and `GET /api/game`: knight.name changes depending on which call you make. The former is not a documented API endpoint, which may be part of the reason why this issue occurs (route not being updated, not being supported, etc)
* When using `GET /api/game/${gameId}` gameId can be non-numerical. My intuition believes this may affect the above two bugs as well.
* The "FOG" weather report code seems to display as "FUNDEFINEDG" instead. Strange issue.

## Questions ##
* What is the varX-Rating used for on the `GET weather/api/report/${gameId}` page? The numbers seem to be associated with the weather code somehow.
* Name generation may be based on current location, though my guess is that it is probably related to the server's location, not the client's.
