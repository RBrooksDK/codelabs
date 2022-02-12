# Exercise 7

What are the genres of 'Voltz'?

<details>
<summary>Show answer</summary>

![](imdb-08.png)

</details>

<br/>

<details>
<summary>Show SQL</summary>

```sql
SELECT genre
FROM genres, shows
WHERE genres. show_id = shows.id
  AND title = 'Voltz';
```

</details>