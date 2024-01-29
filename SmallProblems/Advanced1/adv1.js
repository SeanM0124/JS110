/*
Let's build another program using madlibs.
We made a similar program in the Easy exercises,
but this time the requirements are a bit different.

Build a madlibs program that takes a text "template" as input,
plugs in a selection of randomized nouns,
verbs, adjectives, and adverbs into that text, and then returns it.
You can build your lists of nouns, verbs, adjectives,
and adverbs directly into your program.
Your program should read this text and, for each line, place random words
of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your
solution—it's about choosing the structure of the text templates.
Choose the right way to structure your templates and
this problem becomes much easier.
Consequently, this exercise is a bit more open-ended since the input
is also something that you'll define for yourself.
*/
const texts = {
  adjectives: 'quick lazy sleepy noisy hungry'.split(' '),
  nouns: 'fox dog head leg tail cat'.split(' '),
  verbs: 'jumps lifts bites licks pats'.split(' '),
  adverbs: 'easily lazily noisily excitedly'.split(' ')
};

const template1 = 'The adj1 brown noun1 adv1 verb1 the adj2 yellow noun2, who adv2 verb2 his noun3 and looks around.';
const template2 = "The noun1 verb1 the noun2's noun3";

function madlibs(template) {
  let array = template.split(' ');

  let num = 1;
  while (num < 10) {
    for (let count = 0; count < array.length; count++) {
      if (array[count] === `adj${num}`) {
        array[count] = texts.adjectives
      }


    }
    num++;
  }
  console.log(madlib);
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".


/*
Create a function that finds all words that hold the exact same letters as
the given letter


*/

