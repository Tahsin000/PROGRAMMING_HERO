# **Write foo, bar, foobar if divisible by 3 or 5 or bothPreviousNext**

1. show output from : 1-50
2. if the number is divisible bt 3 then instead of the number show 'foo'
3. if the number is divisible bt 5 then instead of the number show 'bar'
4. if the number is divisible bt 3 and 5 then instead of the number show 'foobar'

```jsx
for (let index = 0; index <= 50; index++) {
  if (!(index % 5) && !(index % 3)) console.log(index + " foobar");
  else if (!(index % 3)) console.log(index + " foo");
  else if (!(index % 5)) console.log(index + " bar");
}
```
