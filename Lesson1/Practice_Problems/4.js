//What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

/*
I evaluate from left to right:
['ant', 'bear', 'caterpillar'].pop() is goign to
take the last element 'catapillar', and return it, so next it is:
'caterpillar'.length which returns 11.
*/