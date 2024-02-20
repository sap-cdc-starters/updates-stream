---
id: intro
title: Intro
sidebar_position: 1 
sidebar_label: Intro
image: /img/manuals.png
sidebar_class_name: green


---

## Description

The updates stream returns a sorted list of changes made to accounts in a specific site group, in time order of application, Only the most recent change for a given account is guaranteed to be provided, for example if an account has had fields added, and then deleted, the API will not necessarily receive the intermediate state of the added account.

The updates stream can be used to listen for modifications of accounts for post processing or synchronization, a continuously polling of the updates stream is a reasonable approach for generating a real-time log for most applications.

The events stream supports following changes:

## Uid changes ([see more](changes/uid.md))
Sync user id changes with down stream systems ([see more](changes/uid.md))

|        Description               	         |
|:------------------------------------------:|
| when an account is deleted.              	 |
| when tow accounts merged .               	 |
|     when an account's uid is renamed.      |

---
[![](https://mermaid.ink/img/pako:eNqll9-P2jgQx_-VKFUlKlGU3yT7cA-UrXQn9k4n6L0c9-DEE7AwNuc43eXK_u_nBNJ1HBJQm0goZD7-ejz2eJxvdsYx2A_2RqDD1lrN18yyln8_rhbWbzz9x_r48ZfTnyWI48majT6DzLZWIQWg_QerImc18OXX-cl6Gu1BbEB7b10M8xEGCvKa6WlUHjBqTE_z2vY4-lK_tDB_ZufeLHQ4XJinM1M_vz0-1o_WicGLPFlL9WrN1C3X0h7byrE9IliN8lvFrm25hT2s7Qf1mHMBhVzbY83yFxIEpRSKCqmbVKYUZbuN4CXD55bPWyLh0rCyHwTZI3H8xCkXZ-JdhiFIYo0pIOMMd6g8Tz2NUs6y2W4zLKIDRntKGOgdOPWlASkXGIR7Mbt-GDhZx-xdzBEgFCSaGQnBn7eAsNbHRgAwjck5k5_RntDj2b5eq9gKSMtsC9LaF9X_sfUVBEYMja0q4NRoviT_XebIjQ4vmlGCkKQdw21BR9N44obTOAmmfhSPrTCeBJEb-nH1-35sxcEkdJLY8RPPjd5_6E7crB71sKhriEa9ot9n-qpsEk-SyHX8WP0qFUdJTYNJ4rhJ5EzjwG9JNeP9EQent0a9UgmjrxXfc9Noem0gXdJxAnzFz5uS0gA665OpPWkgAWpzHYy-FZzRslDuDORIQ-gynZWOIUcllQvCdoP-SiJpK-N839fMgDewQCnQmbGFvIO4uvXcyiRvOXXHyg575_is1h_I2m5MV0qVkyazaO8oKtuP-hIhG4Zo__jP9s6yaDG0jg9_Ud4O7qDfOTMZ1DKLEt8z0Rujo5wfbiCMS-j21lkrNdZ2Ps_zEGGDuR1u8hVJwtmVPqPoOml0G1R3K4X_LYFl8Hu5T1uKZglTuX5Fr1sAqFxeI2_I9RYUiYpdd7SdpK6xtmtBPAUfGUwV4QXZbOWAaw13BzJHYjcwYQ32RykLguEO8hMl2a46X7T3FN-NfHN6YXVfaDT4Rv5sBNHrNq3iZKQz5uyK1CBpemhwmSCyO4o8j9VlYq1OBbQKDMfoaGxFbaJO-YEpAHV0EUaIwtBTlwmZu1WHyigqiorqq3I5oXR1PIDTNxUN4PbVqAbw3kqBG3iDtaC_3jdiviYWefoxxHWc8zmp5xzSKAS6Oz_pTfim5Qc_4kz0JuA50U96M9XEvOgOdyqB1zV7VR8ZqJR8eWSZ_SBFCWP7_GEzJ0h9We3bLx8xUTXVfsgRLeD1f4zm6EE?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqll9-P2jgQx_-VKFUlKlGU3yT7cA-UrXQn9k4n6L0c9-DEE7AwNuc43eXK_u_nBNJ1HBJQm0goZD7-ejz2eJxvdsYx2A_2RqDD1lrN18yyln8_rhbWbzz9x_r48ZfTnyWI48majT6DzLZWIQWg_QerImc18OXX-cl6Gu1BbEB7b10M8xEGCvKa6WlUHjBqTE_z2vY4-lK_tDB_ZufeLHQ4XJinM1M_vz0-1o_WicGLPFlL9WrN1C3X0h7byrE9IliN8lvFrm25hT2s7Qf1mHMBhVzbY83yFxIEpRSKCqmbVKYUZbuN4CXD55bPWyLh0rCyHwTZI3H8xCkXZ-JdhiFIYo0pIOMMd6g8Tz2NUs6y2W4zLKIDRntKGOgdOPWlASkXGIR7Mbt-GDhZx-xdzBEgFCSaGQnBn7eAsNbHRgAwjck5k5_RntDj2b5eq9gKSMtsC9LaF9X_sfUVBEYMja0q4NRoviT_XebIjQ4vmlGCkKQdw21BR9N44obTOAmmfhSPrTCeBJEb-nH1-35sxcEkdJLY8RPPjd5_6E7crB71sKhriEa9ot9n-qpsEk-SyHX8WP0qFUdJTYNJ4rhJ5EzjwG9JNeP9EQent0a9UgmjrxXfc9Noem0gXdJxAnzFz5uS0gA665OpPWkgAWpzHYy-FZzRslDuDORIQ-gynZWOIUcllQvCdoP-SiJpK-N839fMgDewQCnQmbGFvIO4uvXcyiRvOXXHyg575_is1h_I2m5MV0qVkyazaO8oKtuP-hIhG4Zo__jP9s6yaDG0jg9_Ud4O7qDfOTMZ1DKLEt8z0Rujo5wfbiCMS-j21lkrNdZ2Ps_zEGGDuR1u8hVJwtmVPqPoOml0G1R3K4X_LYFl8Hu5T1uKZglTuX5Fr1sAqFxeI2_I9RYUiYpdd7SdpK6xtmtBPAUfGUwV4QXZbOWAaw13BzJHYjcwYQ32RykLguEO8hMl2a46X7T3FN-NfHN6YXVfaDT4Rv5sBNHrNq3iZKQz5uyK1CBpemhwmSCyO4o8j9VlYq1OBbQKDMfoaGxFbaJO-YEpAHV0EUaIwtBTlwmZu1WHyigqiorqq3I5oXR1PIDTNxUN4PbVqAbw3kqBG3iDtaC_3jdiviYWefoxxHWc8zmp5xzSKAS6Oz_pTfim5Qc_4kz0JuA50U96M9XEvOgOdyqB1zV7VR8ZqJR8eWSZ_SBFCWP7_GEzJ0h9We3bLx8xUTXVfsgRLeD1f4zm6EE)

---

## Account data update
Sync account changes with down stream systems ([see more](changes/account.md))

|       Change type   	       |        Description               	         |
|:---------------------------:|:------------------------------------------:|
|  upsert                 	   | when a user record is updated or created 	 |
| login                     	 |    when a user successfully logged in.     |

---

[![](https://mermaid.ink/img/pako:eNp10MFqwzAMBuBXETol0L5ADoOWZrCxjm1pb764ttIYEjvYMlup--5zHRhsMHwx8udfQldUThM2ePZyHuCwExagq9rDCzy7Uw3r9QOk90j-krbVI7EaILAnOdVwl9sFHJ92aVN9kNTQx3EEqZSLlkP9x7SLoUmaH1RDSWoX1cVTUN7MbJwNaV8dZy2ZQLtPu_QFOc8ldrN8ePOuNyP9S0v4vlhIr_TFCbp7Sdh8WDCucCKfB9J5CdfygjzQRAKbfO2dp8AChb1lKSO77mIVNuwjrTCWljsj8_am38VWG3Yem16OgW7f9fB2WQ?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp10MFqwzAMBuBXETol0L5ADoOWZrCxjm1pb764ttIYEjvYMlup--5zHRhsMHwx8udfQldUThM2ePZyHuCwExagq9rDCzy7Uw3r9QOk90j-krbVI7EaILAnOdVwl9sFHJ92aVN9kNTQx3EEqZSLlkP9x7SLoUmaH1RDSWoX1cVTUN7MbJwNaV8dZy2ZQLtPu_QFOc8ldrN8ePOuNyP9S0v4vlhIr_TFCbp7Sdh8WDCucCKfB9J5CdfygjzQRAKbfO2dp8AChb1lKSO77mIVNuwjrTCWljsj8_am38VWG3Yem16OgW7f9fB2WQ)

---

## API
#### Stream registration
[/accounts.stream.create](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/de20e73c5f0e4df0bc5ab38e2717f494.html?locale=en-US)

use this endpoint to create a registration for account updates stream.
###### Api parameters

|  Name 	|                                                      Description                                                      	|                    Type                    	|         Default         	|
|:-----:	|:---------------------------------------------------------------------------------------------------------------------:	|:------------------------------------------:	|:-----------------------:	|
| query 	| an SQL-like query specifying the events to retrieve. Please refer to the  [Query language specification](#query-syntax-specification) section bellow. 	| string                                     	| select * from changelog 	|
| since 	| Unix time, represent earliest time of events in UTC, limited to now-30d       	| long represents a UTC time in milliseconds 	| now-10m   	|




#### Stream Scrolling
[/accounts.stream.read](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cbf4b101bc1d427da0e257e364da1c36.html?locale=en-US)

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

## Try for yourself

```jsx live

 
<GigyaContext {...TestUser} >
  <GigyaRequest
          api={"accounts.stream.create"}
          params={{query: "select * from changelog limit 40"}}>
    {response =>
            <GigyaRequest
                    api={"accounts.stream.read"}
                    params={{cursorId: response.cursorId}}/>
    }
  </GigyaRequest>
</GigyaContext>

```
