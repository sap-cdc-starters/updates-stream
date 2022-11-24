# SAP CDC Playground 
> unofficial playground for CDC updates stream

[Website](https://cl.cdcs.site)

## Description

The updates stream returns a sorted list of changes made to accounts in a specific site group, in time order of application, Only the most recent change for a given account is guaranteed to be provided, for example if an account has had fields added, and then deleted, the API will not necessarily receive the intermediate state of the added account.

The updates stream can be used to listen for modifications of accounts for post processing or synchronization, a continuously polling of the updates stream is a reasonable approach for generating a real-time log for most applications.

The events stream supports following changes:

## Uid changes ([see more](https://cl.cdcs.site/docs/changes/uid.md))
Sync user id changes with down stream systems ([see more](https://cl.cdcs.site/docs/changes/uid.md))

|      Change type   	       |        Description               	         |
|:--------------------------:|:------------------------------------------:|
| delete                   	 | when an account is deleted.              	 |
| merge                    	 | when tow accounts merged .               	 |
| move                     	 |     when an account's uid is renamed.      |

---
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgU1tFVEwgSm9iXSAtLT58UXVlcnl8IEIoRmV0Y2ggc3RyZWFtKSBcbiAgQiAtLT58VUlEfCBNKG1lcmdlKSBcbiAgQiAtLT4gfFVJRHwgTUQoZGVsZXRlKSBcbiAgQiAtLT4gfFVJRHwgTU0odXBkYXRlKSBcbiAgTUQgLS0-IEUoVXBkYXRlIGRvd25zdHJlYW0gYXBwKSBcbiAgTU0gLS0-IEVcbiAgTSAtLT4gRVxuICBFIC0tPiAgfG5leHR8IFNcbiBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJmb3Jlc3QiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjY2RlNDk4Iiwic2Vjb25kYXJ5Q29sb3IiOiIjY2RmZmIyIiwibWFpbkJrZyI6IiNjZGU0OTgiLCJzZWNvbmRCa2ciOiIjY2RmZmIyIiwibGluZUNvbG9yIjoiIzAwMDAwMCIsImJvcmRlcjEiOiIjMTM1NDBjIiwiYm9yZGVyMiI6IiM2ZWFhNDkiLCJhcnJvd2hlYWRDb2xvciI6ImdyZWVuIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwidGVydGlhcnlDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCA1OC40NjE1Mzg0NjE1JSwgODQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDc4LjE1Nzg5NDczNjgsIDE4LjQ2MTUzODQ2MTUlLCA2NC41MDk4MDM5MjE2JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg5OC45NjEwMzg5NjEsIDYwJSwgNzQuOTAxOTYwNzg0MyUpIiwidGVydGlhcnlCb3JkZXJDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCAxOC40NjE1Mzg0NjE1JSwgNzQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeVRleHRDb2xvciI6IiMzMjFiNjciLCJzZWNvbmRhcnlUZXh0Q29sb3IiOiIjMzIwMDRkIiwidGVydGlhcnlUZXh0Q29sb3IiOiIjMzIxYjY3IiwidGV4dENvbG9yIjoiIzAwMDAwMCIsIm5vZGVCa2ciOiIjY2RlNDk4Iiwibm9kZUJvcmRlciI6IiMxMzU0MGMiLCJjbHVzdGVyQmtnIjoiI2NkZmZiMiIsImNsdXN0ZXJCb3JkZXIiOiIjNmVhYTQ5IiwiZGVmYXVsdExpbmtDb2xvciI6IiMwMDAwMDAiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woNzguMTU3ODk0NzM2OCwgNTguNDYxNTM4NDYxNSUsIDU0LjUwOTgwMzkyMTYlKSIsImFjdG9yQmtnIjoiI2NkZTQ5OCIsImFjdG9yVGV4dENvbG9yIjoiYmxhY2siLCJhY3RvckxpbmVDb2xvciI6ImdyZXkiLCJzaWduYWxDb2xvciI6IiMzMzMiLCJzaWduYWxUZXh0Q29sb3IiOiIjMzMzIiwibGFiZWxCb3hCa2dDb2xvciI6IiNjZGU0OTgiLCJsYWJlbEJveEJvcmRlckNvbG9yIjoiIzMyNjkzMiIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjNmVhYTQ5Iiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoiIzZlYWE0OSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiM2ZWFhNDkiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjMTM1NDBjIiwidGFza0JrZ0NvbG9yIjoiIzQ4N2UzYSIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiMxMzU0MGMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjY2RlNDk4IiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMzIxYjY3IiwiZmlsbFR5cGUwIjoiI2NkZTQ5OCIsImZpbGxUeXBlMSI6IiNjZGZmYjIiLCJmaWxsVHlwZTIiOiJoc2woMTQyLjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTMiOiJoc2woMTYyLjk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE0LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTUiOiJoc2woMzQuOTYxMDM4OTYxLCAxMDAlLCA4NC45MDE5NjA3ODQzJSkiLCJmaWxsVHlwZTYiOiJoc2woMjA2LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTciOiJoc2woMjI2Ljk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIn19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgU1tFVEwgSm9iXSAtLT58UXVlcnl8IEIoRmV0Y2ggc3RyZWFtKSBcbiAgQiAtLT58VUlEfCBNKG1lcmdlKSBcbiAgQiAtLT4gfFVJRHwgTUQoZGVsZXRlKSBcbiAgQiAtLT4gfFVJRHwgTU0odXBkYXRlKSBcbiAgTUQgLS0-IEUoVXBkYXRlIGRvd25zdHJlYW0gYXBwKSBcbiAgTU0gLS0-IEVcbiAgTSAtLT4gRVxuICBFIC0tPiAgfG5leHR8IFNcbiBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJmb3Jlc3QiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjY2RlNDk4Iiwic2Vjb25kYXJ5Q29sb3IiOiIjY2RmZmIyIiwibWFpbkJrZyI6IiNjZGU0OTgiLCJzZWNvbmRCa2ciOiIjY2RmZmIyIiwibGluZUNvbG9yIjoiIzAwMDAwMCIsImJvcmRlcjEiOiIjMTM1NDBjIiwiYm9yZGVyMiI6IiM2ZWFhNDkiLCJhcnJvd2hlYWRDb2xvciI6ImdyZWVuIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwidGVydGlhcnlDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCA1OC40NjE1Mzg0NjE1JSwgODQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDc4LjE1Nzg5NDczNjgsIDE4LjQ2MTUzODQ2MTUlLCA2NC41MDk4MDM5MjE2JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg5OC45NjEwMzg5NjEsIDYwJSwgNzQuOTAxOTYwNzg0MyUpIiwidGVydGlhcnlCb3JkZXJDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCAxOC40NjE1Mzg0NjE1JSwgNzQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeVRleHRDb2xvciI6IiMzMjFiNjciLCJzZWNvbmRhcnlUZXh0Q29sb3IiOiIjMzIwMDRkIiwidGVydGlhcnlUZXh0Q29sb3IiOiIjMzIxYjY3IiwidGV4dENvbG9yIjoiIzAwMDAwMCIsIm5vZGVCa2ciOiIjY2RlNDk4Iiwibm9kZUJvcmRlciI6IiMxMzU0MGMiLCJjbHVzdGVyQmtnIjoiI2NkZmZiMiIsImNsdXN0ZXJCb3JkZXIiOiIjNmVhYTQ5IiwiZGVmYXVsdExpbmtDb2xvciI6IiMwMDAwMDAiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woNzguMTU3ODk0NzM2OCwgNTguNDYxNTM4NDYxNSUsIDU0LjUwOTgwMzkyMTYlKSIsImFjdG9yQmtnIjoiI2NkZTQ5OCIsImFjdG9yVGV4dENvbG9yIjoiYmxhY2siLCJhY3RvckxpbmVDb2xvciI6ImdyZXkiLCJzaWduYWxDb2xvciI6IiMzMzMiLCJzaWduYWxUZXh0Q29sb3IiOiIjMzMzIiwibGFiZWxCb3hCa2dDb2xvciI6IiNjZGU0OTgiLCJsYWJlbEJveEJvcmRlckNvbG9yIjoiIzMyNjkzMiIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjNmVhYTQ5Iiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoiIzZlYWE0OSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiM2ZWFhNDkiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjMTM1NDBjIiwidGFza0JrZ0NvbG9yIjoiIzQ4N2UzYSIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiMxMzU0MGMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjY2RlNDk4IiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMzIxYjY3IiwiZmlsbFR5cGUwIjoiI2NkZTQ5OCIsImZpbGxUeXBlMSI6IiNjZGZmYjIiLCJmaWxsVHlwZTIiOiJoc2woMTQyLjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTMiOiJoc2woMTYyLjk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE0LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTUiOiJoc2woMzQuOTYxMDM4OTYxLCAxMDAlLCA4NC45MDE5NjA3ODQzJSkiLCJmaWxsVHlwZTYiOiJoc2woMjA2LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTciOiJoc2woMjI2Ljk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIn19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)
---

## Account data update
Sync account changes with down stream systems ([see more](https://cl.cdcs.site/changes/account.md))

|       Change type   	       |        Description               	         |
|:---------------------------:|:------------------------------------------:|
|  upsert                 	   | when a user record is updated or created 	 |
| login                     	 |    when a user successfully logged in.     |

---

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgUyhFVEwgSm9iKSAtLT4gfFF1ZXJ5fEIoRmV0Y2ggc3RyZWFtKSBcbiAgQiAtLT4gfFVJRHxBKFJlYWQgZnVsbCBhY2NvdW50cylcbiAgQiAtLT4gfFVJRHxFKFJlYWQgZW1haWwgYWNjb3VudCkgIFxuICBFIC0tPiB8U3Vic2NyaXB0aW9uc3xNKFVwZGF0ZSBkb3duc3RyZWFtIGFwcClcbiAgQSAtLT4gfFByb2ZpbGV8TShVcGRhdGUgZG93bnN0cmVhbSBhcHApIFxuICBNIC0tPiAgfE5leHR8IFNcbiAgXG5cblx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZm9yZXN0In19)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgUyhFVEwgSm9iKSAtLT4gfFF1ZXJ5fEIoRmV0Y2ggc3RyZWFtKSBcbiAgQiAtLT4gfFVJRHxBKFJlYWQgZnVsbCBhY2NvdW50cylcbiAgQiAtLT4gfFVJRHxFKFJlYWQgZW1haWwgYWNjb3VudCkgIFxuICBFIC0tPiB8U3Vic2NyaXB0aW9uc3xNKFVwZGF0ZSBkb3duc3RyZWFtIGFwcClcbiAgQSAtLT4gfFByb2ZpbGV8TShVcGRhdGUgZG93bnN0cmVhbSBhcHApIFxuICBNIC0tPiAgfE5leHR8IFNcbiAgXG5cblx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZm9yZXN0In19)

---

## API
#### Stream registration
[/accounts.stream.create](https://app.swaggerhub.com/apis/yoav.co/ChangelogQuerySercvice/1.0.0#/create)

use this endpoint to create a registration for account updates stream.
###### Api parameters

|  Name 	|                                                      Description                                                      	|                    Type                    	|         Default         	|
|:-----:	|:---------------------------------------------------------------------------------------------------------------------:	|:------------------------------------------:	|:-----------------------:	|
| query 	| an SQL-like query specifying the events to retrieve. Please refer to the  [Query language specification](#query-syntax-specification) section bellow. 	| string                                     	| select * from changelog 	|
| since 	| Unix time, represent earliest time of events in UTC, limited to now-30d       	| long represents a UTC time in milliseconds 	| now-10m   	|




#### Stream Scrolling
[/accounts.stream.read](https://app.swaggerhub.com/apis/yoav.co/ChangelogQuerySercvice/1.0.0#/read)

use this endpoint to fetch next batch of an existing stream.
###### Api parameters

|    Name              	|     Description                                                                                                                                                                                                                                                  	|     Type                    	|
|-----------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------	|
|    cusrsorId   	|     A token identifier for the next batch of results                                                                                                                                                                                                         	|     string    (optional)    	|
|    limit |  results count limit |int   (optional)   |

## Query Syntax Specification
Same as other [gigya queries](https://developers.gigya.com/display/GD/accounts.search+REST#accounts.searchREST-QuerySyntaxSpecification:)
with the following specifications

##### Supported clauses (must be ordered in the following way)

* Select clause
    * uid
    * type
* From clause
    * changelog
* Where clause
    * uid
    * type
* Limit clause
    * specify the maximum number of a batch size.
    * if not specified, the default is 300. The maximum number of results that will be returned is 10000;.
    * setting a limit higher than 10000 will have no affect on number of results.
    * there is no guarantee of the exact number in batch (TODO rephrase)


## Query examples
  ```sql
select * from changelog where uid = '13' limit 500
```   
```sql
select * from changelog where type in ('upsert') 
```
```sql
select * from changelog where type in ('delete', 'move', 'merge') 
```

## Event Format
- `uid` : the event's subject.
- `operation`: the type of operation.
- `details` : json patch format that describing the data changes
    - `uid changes details` : [see here](changes/uid#changes-details-format)

```json
{
  "results": [
    {
      "uid": "123",
      "operation": "upsert"    
    },
    {
      "uid": "0d3034fc1bb944a7a70362cfdb61af55",
      "operation": "upsert"
    },
    {
      "uid": "gigyaumtests+q50co3pwagv2ixht",
      "operation": "delete",
      "details": [".."]
    },
    {
      "uid": "8bc3f6984513471e8dc4ca4c6e8db049",
      "operation": "merge",
      "details": [".."]
    }
  ],
  "nextCursorId": "Bub3RpZmljYXRpb25dXG4gIEEgLS0-IHx1aWQ6J2EnLCBuZXdVaWQ6J2InfCBTKChub3Rp"
}
    
```
 