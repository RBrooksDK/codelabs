# Exercise 4

How many writers were born in 1967?

<details>
<summary>Show answer</summary>

![](imdb-03.png)

</details>

<br/>

<details>
<summary>Show SQL</summary>

```sql
SELECT COUNT (*)
FROM people
WHERE birth = 1967
  AND Id IN (
    SELECT person_id
    FROM writers
      )
;
```

</details>