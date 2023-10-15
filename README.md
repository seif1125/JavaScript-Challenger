<div><p><span>Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.</span></p><p><span>Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).</span></p><h3><span>Examples</span></h3><pre><code>binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10</code></pre><h3><span>Notes</span></h3><ul><li><span>Numbers will always be below 1024 (not including 1024).</span></li><li><span>The </span><code>&amp;&amp;</code><span> operator could be useful.</span></li><li><span>The strings will always go to the length at which the most left bit's value gets bigger than the number in </span><code>decimal</code><span>.</span></li><li><span>If a binary conversion for </span><code>0</code><span> is attempted, return </span><code>"0"</code><span>.</span></li></ul></div>