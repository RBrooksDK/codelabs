# Exercise 4

How many people were born in 1967?

<details>
<summary>Show answer</summary>

![](imdb-04.png)

</details>

<br/>

<details>
<summary>Show SQL</summary>

```sql
SELECT COUNT (*)
FROM people
WHERE birth = 1967;
```

</details>