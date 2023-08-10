# RPS Challenge

Instructions
-------

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by the deadline specified in Noodle

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

| Object                             | Properties   | Messages  | Returns |
| ---------------------------------- | ------------ | --------- | ------- |
| humanPlayer (inherits from player) | name @String | getName() | @String |


As a DFAT member
So that I can see my name
I would like a computer instance to be created to play against

| Object                          | Properties   | Messages  | Returns |
| ------------------------------- | ------------ | --------- | ------- |
| Computer (inherits from player) | name @String | getName() | @String |


As a DFAT member
So I can play rock/paper/scissors
I would like to be able to select my move

| Object                             | Properties   | Messages              | Returns |
| ---------------------------------- | ------------ | --------------------- | ------- |
| humanPlayer (inherits from player) | move @String | getMove()             | @String |
|                                    |              | setMove(move @String) | @void   |

As a DFAT member
So I can play rock/paper/scissors
The computer will select at random, their move

| Object                          | Properties   | Messages               | Returns |
| ------------------------------- | ------------ | ---------------------- | ------- |
| Computer (inherits from player) | move @String | getMove()              | @String |
|                                 |              | setMove(move @ object) | @void   |

As a DFAT member
So I can play rock/paper/scissors
the winner will be determine by comparing my move to the computer's

| Object | Properties | Messages                          | Returns |
| ------ | ---------- | --------------------------------- | ------- |
| Game   |            | determineWinner(player1, player2) | @String |

```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared and an option to play again

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer
```
| Object | Properties            | Messages                 | Returns  |
| ------ | --------------------- | ------------------------ | -------- |
| Game   | singlePlayer @boolean | setSinglePlayer(@string) | void     |
|        |                       | getSinglePlayer()        | @boolean |

```



Change the game so that two DFAT members can play against each other ( _yes there are two of them and they'll be playing on the same computer_ ).

#### Rock, Paper, Scissors, Spock, Lizard

```
| Object | Properties        | Messages             | Returns  |
| ------ | ----------------- | -------------------- | -------- |
| Game   | hardMode @boolean | setHardMode(@string) | void     |
|        |                   | getHardMode()        | @boolean |
```
Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )
