# Exercise 3

How many people has the name 'Jennifer'?

<details>
<summary>Show answer</summary>

![](imdb-02.png)

</details>

<br/>

<details>
<summary>Show SQL</summary>

```sql
SELECT COUNT(*)
FROM people
WHERE name LIKE '%Jennifer%';
```

</details>