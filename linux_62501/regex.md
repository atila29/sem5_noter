# Regex
#### Sample Patterns
```shell
# Phone e.g. (619) 123-9977
/\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/

# Email address
/^([\w\.-]+)@([\w-]+)(\.[a-z]{2,})|(\.[a-z]{2})$/igm

# Date e.g. 05/10/1975
/\d{1,2}\/\d{1,2}\/\d{4}/

# Anything inside brackets e.g. [Hello]
/(?:\[)(.*)(?:\])/igm

# Zip code i.e. 92103 or 92103-0001 or 92103 0001
/^\d{5}(?:[-\s]\d{4})?$/

# Match digits at the beginning of string. i.e. 10. Hello
/^\d*\./
```

#### Anchors
```shell
^           Start of string, or start of line in multi-line pattern
$           End of string, or end of line in multi-line pattern
\b          Word boundary
\B          Not word boundary
```

#### Character Classes
```shell
.           Matches any character except line breaks
\w          Word character
\d          Matches any digit character
\s          Whitespace character, including ' ', \t, \n, \r, \f and \v

\S          Non whitespace character
\D          Non digit character
\W          Not a word character

[ABC]       Match any character in the set
[^ABC]      Match any character that is not in the set
[A-Z]       Matches a character having a character code between the two specified characters inclusive
```
#### Groups and Lookaround
```shell
(ABC)       Capturing group
\1          Backreference matches the results of a previous capture group
(?:ABC)     Non-capturing group, groups multiple tokens together without creating a capture group
(?=ABC)     Positive lookahead matches a group after the main expression without including it in the result
(?!ABC)     Negative lookahead specifies a group that can not match after the main expression
```

#### Assertions
```shell
?=          Lookahead assertion
?!          Negative lookahead

?<=         Lookbehind assertion * not supported in JavaScript
?<!         Negative lookbehind * not supported in JavaScript

?>          Once-only Subexp­ression
?()         Condition [if then]
?()|        Condition [if then else]
?#          Comment
```

#### Quantifiers & Alternation
```shell
*           0 or more
+           1 or more
?           0 or 1
{3}         Exactly 3
{3,}        3 or more
{3,5}       3, 4 or 5
|           Acts like a boolean OR
```

#### Special Characters
```shell
\n          New line
\r          Carriage return
\t          Tab
\v          Vertical tab
\f          Form feed
\xxx        Octal character xxx
\xhh        Hex character hh
```

#### Groups and Ranges
```shell
.           Any character except new line (\n)
(a|b)       a or b
(...)       Group
(?:...)     Passive (non-c­apt­uring) group
[abc]       Range (a or b or c)
[^abc]      Not (a or b or c)
[a-z]       Lower case letter from a to z
[A-Z]       Upper case letter from A to Z
[0-9]       Digit from 0 to 9
\x          Group/­sub­pattern number "­x"
```

#### Pattern Modifiers
```shell
g           Global match
i *         Case-i­nse­nsitive
m *         Multiple lines
s *         Treat string as single line
x *         Allow comments and whitespace in pattern
e *         Evaluate replac­ement
U *         Ungreedy pattern
```

#### Metacharacters (must be escaped)
```shell
^
[
.
$
{
*
(
\
+
)
|
?
<
>
```
