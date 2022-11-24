---
id: uid
title: Account uid changes
sidebar_label: UID changes
---
##  Scenarios
* [Socialze.setUID](https://developers.gigya.com/display/GD/socialize.setUID+REST)
    * Allows renaming of account UID
    * Allows merging two accounts (changing to an existing UID)
* [Account Linking](https://developers.gigya.com/display/GD/Linking+Social+Accounts)
    * Logging in with the same email (2 social providers)
    * Updating email to existing email (profile update)
    * Manually linking via api.
* [Progression between different UIDs](docs/journey/progression/index.md)
    * Lite with UID A and email a@b.com , UID B sets their email to a@b.com
    * Lite With UID A and email a@b.com, user registers with UID B and email a@b.com 
    
### Use [updates stream](/docs/intro) to track uid changes 
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgU1tTVEwgSm9iXSAtLT58UXVlcnl8IEIoRmV0Y2ggc3RyZWFtKSBcbiAgQiAtLT58VUlEfCBNKG1lcmdlKSBcbiAgQiAtLT4gfFVJRHwgTUQoZGVsZXRlKSBcbiAgQiAtLT4gfFVJRHwgTU0odXBkYXRlKSBcbiAgTUQgLS0-IEUoVXBkYXRlIGRvd25zdHJlYW0gYXBwKSBcbiAgTU0gLS0-IEVcbiAgTSAtLT4gRVxuICBFIC0tPiAgfG5leHR8IFNcbiBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJmb3Jlc3QiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjY2RlNDk4Iiwic2Vjb25kYXJ5Q29sb3IiOiIjY2RmZmIyIiwibWFpbkJrZyI6IiNjZGU0OTgiLCJzZWNvbmRCa2ciOiIjY2RmZmIyIiwibGluZUNvbG9yIjoiIzAwMDAwMCIsImJvcmRlcjEiOiIjMTM1NDBjIiwiYm9yZGVyMiI6IiM2ZWFhNDkiLCJhcnJvd2hlYWRDb2xvciI6ImdyZWVuIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwidGVydGlhcnlDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCA1OC40NjE1Mzg0NjE1JSwgODQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDc4LjE1Nzg5NDczNjgsIDE4LjQ2MTUzODQ2MTUlLCA2NC41MDk4MDM5MjE2JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg5OC45NjEwMzg5NjEsIDYwJSwgNzQuOTAxOTYwNzg0MyUpIiwidGVydGlhcnlCb3JkZXJDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCAxOC40NjE1Mzg0NjE1JSwgNzQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeVRleHRDb2xvciI6IiMzMjFiNjciLCJzZWNvbmRhcnlUZXh0Q29sb3IiOiIjMzIwMDRkIiwidGVydGlhcnlUZXh0Q29sb3IiOiIjMzIxYjY3IiwidGV4dENvbG9yIjoiIzAwMDAwMCIsIm5vZGVCa2ciOiIjY2RlNDk4Iiwibm9kZUJvcmRlciI6IiMxMzU0MGMiLCJjbHVzdGVyQmtnIjoiI2NkZmZiMiIsImNsdXN0ZXJCb3JkZXIiOiIjNmVhYTQ5IiwiZGVmYXVsdExpbmtDb2xvciI6IiMwMDAwMDAiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woNzguMTU3ODk0NzM2OCwgNTguNDYxNTM4NDYxNSUsIDU0LjUwOTgwMzkyMTYlKSIsImFjdG9yQmtnIjoiI2NkZTQ5OCIsImFjdG9yVGV4dENvbG9yIjoiYmxhY2siLCJhY3RvckxpbmVDb2xvciI6ImdyZXkiLCJzaWduYWxDb2xvciI6IiMzMzMiLCJzaWduYWxUZXh0Q29sb3IiOiIjMzMzIiwibGFiZWxCb3hCa2dDb2xvciI6IiNjZGU0OTgiLCJsYWJlbEJveEJvcmRlckNvbG9yIjoiIzMyNjkzMiIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjNmVhYTQ5Iiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoiIzZlYWE0OSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiM2ZWFhNDkiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjMTM1NDBjIiwidGFza0JrZ0NvbG9yIjoiIzQ4N2UzYSIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiMxMzU0MGMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjY2RlNDk4IiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMzIxYjY3IiwiZmlsbFR5cGUwIjoiI2NkZTQ5OCIsImZpbGxUeXBlMSI6IiNjZGZmYjIiLCJmaWxsVHlwZTIiOiJoc2woMTQyLjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTMiOiJoc2woMTYyLjk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE0LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTUiOiJoc2woMzQuOTYxMDM4OTYxLCAxMDAlLCA4NC45MDE5NjA3ODQzJSkiLCJmaWxsVHlwZTYiOiJoc2woMjA2LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTciOiJoc2woMjI2Ljk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIn19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgU1tTVEwgSm9iXSAtLT58UXVlcnl8IEIoRmV0Y2ggc3RyZWFtKSBcbiAgQiAtLT58VUlEfCBNKG1lcmdlKSBcbiAgQiAtLT4gfFVJRHwgTUQoZGVsZXRlKSBcbiAgQiAtLT4gfFVJRHwgTU0odXBkYXRlKSBcbiAgTUQgLS0-IEUoVXBkYXRlIGRvd25zdHJlYW0gYXBwKSBcbiAgTU0gLS0-IEVcbiAgTSAtLT4gRVxuICBFIC0tPiAgfG5leHR8IFNcbiBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJmb3Jlc3QiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjY2RlNDk4Iiwic2Vjb25kYXJ5Q29sb3IiOiIjY2RmZmIyIiwibWFpbkJrZyI6IiNjZGU0OTgiLCJzZWNvbmRCa2ciOiIjY2RmZmIyIiwibGluZUNvbG9yIjoiIzAwMDAwMCIsImJvcmRlcjEiOiIjMTM1NDBjIiwiYm9yZGVyMiI6IiM2ZWFhNDkiLCJhcnJvd2hlYWRDb2xvciI6ImdyZWVuIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwidGVydGlhcnlDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCA1OC40NjE1Mzg0NjE1JSwgODQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDc4LjE1Nzg5NDczNjgsIDE4LjQ2MTUzODQ2MTUlLCA2NC41MDk4MDM5MjE2JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg5OC45NjEwMzg5NjEsIDYwJSwgNzQuOTAxOTYwNzg0MyUpIiwidGVydGlhcnlCb3JkZXJDb2xvciI6ImhzbCg3OC4xNTc4OTQ3MzY4LCAxOC40NjE1Mzg0NjE1JSwgNzQuNTA5ODAzOTIxNiUpIiwicHJpbWFyeVRleHRDb2xvciI6IiMzMjFiNjciLCJzZWNvbmRhcnlUZXh0Q29sb3IiOiIjMzIwMDRkIiwidGVydGlhcnlUZXh0Q29sb3IiOiIjMzIxYjY3IiwidGV4dENvbG9yIjoiIzAwMDAwMCIsIm5vZGVCa2ciOiIjY2RlNDk4Iiwibm9kZUJvcmRlciI6IiMxMzU0MGMiLCJjbHVzdGVyQmtnIjoiI2NkZmZiMiIsImNsdXN0ZXJCb3JkZXIiOiIjNmVhYTQ5IiwiZGVmYXVsdExpbmtDb2xvciI6IiMwMDAwMDAiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woNzguMTU3ODk0NzM2OCwgNTguNDYxNTM4NDYxNSUsIDU0LjUwOTgwMzkyMTYlKSIsImFjdG9yQmtnIjoiI2NkZTQ5OCIsImFjdG9yVGV4dENvbG9yIjoiYmxhY2siLCJhY3RvckxpbmVDb2xvciI6ImdyZXkiLCJzaWduYWxDb2xvciI6IiMzMzMiLCJzaWduYWxUZXh0Q29sb3IiOiIjMzMzIiwibGFiZWxCb3hCa2dDb2xvciI6IiNjZGU0OTgiLCJsYWJlbEJveEJvcmRlckNvbG9yIjoiIzMyNjkzMiIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjNmVhYTQ5Iiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoiIzZlYWE0OSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiM2ZWFhNDkiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjMTM1NDBjIiwidGFza0JrZ0NvbG9yIjoiIzQ4N2UzYSIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiMxMzU0MGMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjY2RlNDk4IiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMzIxYjY3IiwiZmlsbFR5cGUwIjoiI2NkZTQ5OCIsImZpbGxUeXBlMSI6IiNjZGZmYjIiLCJmaWxsVHlwZTIiOiJoc2woMTQyLjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTMiOiJoc2woMTYyLjk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE0LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTUiOiJoc2woMzQuOTYxMDM4OTYxLCAxMDAlLCA4NC45MDE5NjA3ODQzJSkiLCJmaWxsVHlwZTYiOiJoc2woMjA2LjE1Nzg5NDczNjgsIDU4LjQ2MTUzODQ2MTUlLCA3NC41MDk4MDM5MjE2JSkiLCJmaWxsVHlwZTciOiJoc2woMjI2Ljk2MTAzODk2MSwgMTAwJSwgODQuOTAxOTYwNzg0MyUpIn19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

### change type
|      Change type   	       |        Description               	         |
|:--------------------------:|:------------------------------------------:|
| delete                   	 | when an account is deleted.              	 |
| merge                    	 | when tow accounts merged .               	 |
| move                     	 | when an account's uid is renamed.        	 |

### changes details format

#### progression
```json
{
  "type": "merge",
  "UID": "123",
  "details": [
    {
      "op": "replace",
      "path": "/accountType",
      "value": "full"
    },
    {
      "op": "replace",
      "path": "/uid",
      "value": "456",
      "oldValue": "123"
    }
  ]
}
```
#### link-account
```json
{
  "type": "merge",
  "UID": "1235",
  "details": [ 
    {
      "op": "replace",
      "path": "/uid",
      "value": "4567",
      "oldValue": "1235"
    }
  ]
}
```

#### set-uid
```json

{
  "type": "move",
  "UID": "780",
  "details": [
    {
      "op": "replace",
      "path": "/uid",
      "value": "9999",
      "oldValue": "780"
    }
  ]
}
```

## Use webhooks to track uid changes

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgU1tVaWQgY2hhbmdlcyBub3RpZmljYXRpb25dXG4gIFMgLS0-fHByb2dyZXNzaW9uIHwgUChhY2NvdW50IHByb2dyc3NlZCkgICBcbiAgUy0tPnxsaW5rIGFjY291bnR8IE0oYWNjb3VudCBtZXJnZWQpXG4gIFMgLS0-fHNldFVpZCB8IE1PKGFjY291bnQgbW92ZWQpICBcbiAgUCAtLT4gIEUoc2VuZCB3ZWxjb21lIGVtYWlsKVxuICBQICAtLT4gWlxuICBNIC0tPiBaKHVwZGF0ZSBkb3duIHN0cmVhbSkgXG4gIE1PIC0tPiBaKHVwZGF0ZSBkb3duIHN0cmVhbSkgXG5cbiBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJmb3Jlc3QifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcbiAgU1tVaWQgY2hhbmdlcyBub3RpZmljYXRpb25dXG4gIFMgLS0-fHByb2dyZXNzaW9uIHwgUChhY2NvdW50IHByb2dyc3NlZCkgICBcbiAgUy0tPnxsaW5rIGFjY291bnR8IE0oYWNjb3VudCBtZXJnZWQpXG4gIFMgLS0-fHNldFVpZCB8IE1PKGFjY291bnQgbW92ZWQpICBcbiAgUCAtLT4gIEUoc2VuZCB3ZWxjb21lIGVtYWlsKVxuICBQICAtLT4gWlxuICBNIC0tPiBaKHVwZGF0ZSBkb3duIHN0cmVhbSkgXG4gIE1PIC0tPiBaKHVwZGF0ZSBkb3duIHN0cmVhbSkgXG5cbiBcblxuXHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJmb3Jlc3QifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

### notification type
|              Event type   	              |                Description               	                 |
|:----------------------------------------:|:----------------------------------------------------------:|
|   accountMerged                     	    |         when tow accounts merged .               	         |
| accountUidChanged                      	 |         when an account's uid is renamed.        	         |
|   accountProgressed                  	   | when a lite account registering the syste,.              	 |

### notification format
```json
{
      "type": "accountMerged",
      "id": "549f3f9b-XXX-XXX-XXX-XXX",
      "timestamp": 1587917548,
      "callId": "0fc9XXX",
      "version": "2.0",
      "apiKey": "4_PBxxxZ-Q",
      "data": {
        "accountType": "full",
        "uid": "33cxxx797",
        "newUid": "45dyyy678"
      }
}
```
```json
{
      "type": "accountUidChanged",
      "id": "549f3f9b-XXX-XXX-XXX-XXX",
      "timestamp": 1587917548,
      "callId": "0fc9XXX",
      "version": "2.0",
      "apiKey": "4_PBxxxZ-Q",
      "data": {
        "accountType": "full",
        "uid": "33cxxx797",
        "newUid": "45dyyy678"
      }
}
```
