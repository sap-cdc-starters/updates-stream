---
id: next
title: Account updates stream - what's next?
sidebar_label:  what's next?
draft: true
---
 
### Record request origin details 
 
```json

{
  "type": "upsert",
  "UID": "780",
  "request": {
    "callId": "call id",
    "userKey": "some admin",
    "endpoint": "accounts.setAccountInfo" 
  }
}


``` 

### Record more change data details 
 
```json

{
  "type": "upsert",
  "details": [
    {
      "op": "replace",
      "path": "/profile/email",
      "value": "new@mail.com"
    },
    {
      "op": "replace",
      "path": "/loginids/verified/2",
      "value": "new@mail.com"
    },
    {
      "op": "add",
      "path": "/profile/work/2/company",
      "value": "sap"
    }
  ]
} 
``` 