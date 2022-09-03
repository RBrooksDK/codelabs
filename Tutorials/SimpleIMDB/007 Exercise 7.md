# Exercise 7

Which shows has 'Drew Barrymore' starred in?

<details>
<summary>Show answer</summary>

![](imdb-06.png)

</details>

<br/>

<details>
<summary>Show SQL</summary>

```sql
SELECT title
FROM stars,
     shows
WHERE person_id IN (
    SELECT id
    from people
    where name = 'Drew Barrymore'
    )
  AND show_id = id
;
```

</details>