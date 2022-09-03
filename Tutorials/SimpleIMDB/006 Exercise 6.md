# Exercise 6

How many episodes does the show 'The Young and the Restless' have?

<details>
<summary>Show answer</summary>

![](imdb-05.png)

</details>

<br/>

<details>
<summary>Show SQL</summary>

```sql
SELECT title, episodes
FROM shows
WHERE title = 'The Young and the Restless'
ORDER BY episodes DESC;
```

</details>