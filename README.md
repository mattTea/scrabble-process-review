Scrabble Process Review
=======================

## Requirements

Given a word, compute the scrabble score for that word.

------

## Letter Values

You'll need these:

Letter | Value
------------------------- | -----
A, E, I, O, U, L, N, R, S, T | 1
D, G | 2
B, C, M, P | 3
F, H, V, W, Y | 4
K | 5
J, X | 8
Q, Z | 10

Examples "cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2x1 + 2x3 + 2 + 1

= 3 + 2 + 6 + 3

= 14

```ruby
Acceptance Criteria
scrabble = Scrabble.new('')
scrabble.score # => 0

scrabble = Scrabble.new(" \t\n")
scrabble.score # => 0

scrabble = Scrabble.new(nil)
scrabble.score # => 0

scrabble = Scrabble.new('a')
scrabble.score # => 1

scrabble = Scrabble.new('f')
scrabble.score # => 4

scrabble = Scrabble.new('street')
scrabble.score # => 6

scrabble = Scrabble.new('quirky')
scrabble.score # => 22

scrabble = Scrabble.new('OXYPHENBUTAZONE')
scrabble.score # => 41
```

------

## Problem breakdown

1. Scrabble is a function that takes a word and should return an integer score

2. Should return '1' for scrabble("a")

3. Should return '5' for scrabble("k")

4. Should return correct score for 2 letter word
  - Loop through each letter in a word and get the letter score for that word
  - Add score for each letter together

5. Handle longer word

6. Handle empty string

------

Reached this point in 30 mins [screen recording here](https://drive.google.com/open?id=1WWJgWAqvJDrJ3NBcnIq4kpUCrHEgLybl)

------

7. Handle white space

------

Reached this point a few mins later

------

8. Handle 'nil'

9. Handle capitalisation

------

## To download

1. Clone this repo
2. Copy path to `SpecRunner.html` to the browser to see the tests run
