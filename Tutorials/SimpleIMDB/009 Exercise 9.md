# Exercise 9

List the names of the stars of 'The Young and the Restless'

<details>
<summary>Show answer</summary>

![](imdb-09.png)

</details>

<br/>

<details>
<summary>Show SQL</summary>

```sql
SELECT name
FROM stars,
     people
WHERE person_id = id
  AND show_id = (
  SELECT id
  FROM shows
  WHERE title = 'The Young and the Restless'
      )
;
```

</details>