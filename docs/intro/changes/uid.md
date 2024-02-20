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
* [Progression between different UIDs](/docs/intro/category/journey)
    * Lite with UID A and email a@b.com , UID B sets their email to a@b.com
    * Lite With UID A and email a@b.com, user registers with UID B and email a@b.com 
    
### Use [updates stream](/docs/intro) to track uid changes 
[![](https://mermaid.ink/img/pako:eNqll9-P2jgQx_-VKFUlKlGU3yT7cA-UrXQn9k4n6L0c9-DEE7AwNuc43eXK_u_nBNJ1HBJQm0goZD7-ejz2eJxvdsYx2A_2RqDD1lrN18yyln8vVwvrN57-Y338-MvpzxLE8WTNRp9BZlurkALQ_oNVkbMa-PLr_GQ9jfYgNqC9ty6G-QgDBXnN9DQqDxg1pqd5bXscfalfWpg_s3NvFjocLszTmamf3x4f60frxOBFnqylerVm6pZraY9t5dgeEaxG-a1i17bcwh7W9oN6zLmAQq7tsWb5CwmCUgpFhdRNKlOKst1G8JLhc8vnLZFwaVjZD4LskTh-4pSLM_EuwxAkscYUkHGGO1Sep55GKWfZbLcZFtEBoz0lDPQOnPrSgJQLDMK9mF0_DJysY_Yu5ggQChLNjITgz1tAWOtjIwCYxuScyc9oT-jxbF-vVWwFpGW2BWnti-r_2PoKAiOGxlYVcGo0X5L_LnPkRocXzShBSNKO4bago2k8ccNpnARTP4rHVhhPgsgN_bj6fT-24mASOkns-InnRu8_dCduVo96WNQ1RKNe0e8zfVU2iSdJ5Dp-rH6ViqOkpsEkcdwkcqZx4LekmvH-iIPTW6NeqYTR14rvuWk0vTaQLuk4Ab7i501JaQCd9cnUnjSQALW5DkbfCs5oWSh3BnKkIXSZzkrHkKOSygVhu0F_JZG0lXG-72tmwBtYoBTozNhC3kFc3XpuZZK3nLpjZYe9c3xW6w9kbTemK6XKSZNZtHcUle1HfYmQDUO0f_xne2dZtBhax4e_KG8Hd9DvnJkMaplFie-Z6I3RUc4PNxDGJXR766yVGms7n-d5iLDB3A43-Yok4exKn1F0nTS6Daq7lcL_lsAy-L3cpy1Fs4SpXL-i1y0AVC6vkTfkeguKRMWuO9pOUtdY27UgnoKPDKaK8IJstnLAtYa7A5kjsRuYsAb7o5QFwXAH-YmSbFedL9p7iu9Gvjm9sLovNBp8I382guh1m1ZxMtIZc3ZFapA0PTS4TBDZHUWex-oysVanAloFhmN0NLaiNlGn_MAUgDq6CCNEYeipy4TM3apDZRQVRUX1VbmcULo6HsDpm4oGcPtqVAN4b6XADbzBWtBf7xsxXxOLPP0Y4jrO-ZzUcw5pFALdnZ_0JnzT8oMfcSZ6E_Cc6Ce9mWpiXnSHO5XA65q9qo8MVEq-PLLMfpCihLF9_rCZE6S-rPbtl4-YqJpqP-SIFvD6P0jd6E8?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqll9-P2jgQx_-VKFUlKlGU3yT7cA-UrXQn9k4n6L0c9-DEE7AwNuc43eXK_u_nBNJ1HBJQm0goZD7-ejz2eJxvdsYx2A_2RqDD1lrN18yyln8vVwvrN57-Y338-MvpzxLE8WTNRp9BZlurkALQ_oNVkbMa-PLr_GQ9jfYgNqC9ty6G-QgDBXnN9DQqDxg1pqd5bXscfalfWpg_s3NvFjocLszTmamf3x4f60frxOBFnqylerVm6pZraY9t5dgeEaxG-a1i17bcwh7W9oN6zLmAQq7tsWb5CwmCUgpFhdRNKlOKst1G8JLhc8vnLZFwaVjZD4LskTh-4pSLM_EuwxAkscYUkHGGO1Sep55GKWfZbLcZFtEBoz0lDPQOnPrSgJQLDMK9mF0_DJysY_Yu5ggQChLNjITgz1tAWOtjIwCYxuScyc9oT-jxbF-vVWwFpGW2BWnti-r_2PoKAiOGxlYVcGo0X5L_LnPkRocXzShBSNKO4bago2k8ccNpnARTP4rHVhhPgsgN_bj6fT-24mASOkns-InnRu8_dCduVo96WNQ1RKNe0e8zfVU2iSdJ5Dp-rH6ViqOkpsEkcdwkcqZx4LekmvH-iIPTW6NeqYTR14rvuWk0vTaQLuk4Ab7i501JaQCd9cnUnjSQALW5DkbfCs5oWSh3BnKkIXSZzkrHkKOSygVhu0F_JZG0lXG-72tmwBtYoBTozNhC3kFc3XpuZZK3nLpjZYe9c3xW6w9kbTemK6XKSZNZtHcUle1HfYmQDUO0f_xne2dZtBhax4e_KG8Hd9DvnJkMaplFie-Z6I3RUc4PNxDGJXR766yVGms7n-d5iLDB3A43-Yok4exKn1F0nTS6Daq7lcL_lsAy-L3cpy1Fs4SpXL-i1y0AVC6vkTfkeguKRMWuO9pOUtdY27UgnoKPDKaK8IJstnLAtYa7A5kjsRuYsAb7o5QFwXAH-YmSbFedL9p7iu9Gvjm9sLovNBp8I382guh1m1ZxMtIZc3ZFapA0PTS4TBDZHUWex-oysVanAloFhmN0NLaiNlGn_MAUgDq6CCNEYeipy4TM3apDZRQVRUX1VbmcULo6HsDpm4oGcPtqVAN4b6XADbzBWtBf7xsxXxOLPP0Y4jrO-ZzUcw5pFALdnZ_0JnzT8oMfcSZ6E_Cc6Ce9mWpiXnSHO5XA65q9qo8MVEq-PLLMfpCihLF9_rCZE6S-rPbtl4-YqJpqP-SIFvD6P0jd6E8)


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

[![](https://mermaid.ink/img/pako:eNp90MFOwzAMBuBXsXxqpe0FeuDEblSbmLhAOESJ20Y0SZW4TGjdu-O0iIkLl8hyvvyOfEUTLWGDfdLTAE_PKgCc316cBTPo0FOGENl1zmh2Mbyv17DfPyxTin2inKULC5wqbUycA8Paz5lsDQArL3p04QN-yALtr_aUeqH32Exchos53lH8XOOKOhUFcKgyBQsXGk30BOS1G-vtfgWvpW63sponq5nAxkuAzIm0r9es9vgvEFIOxYpxh_JTGWJlVdfyViEP5ElhI2UXZROsUIWbSD1zPH8Fgw2nmXa4pT86LTv2f5sH6zgmbDo9Zrp9A--sg6A?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp90MFOwzAMBuBXsXxqpe0FeuDEblSbmLhAOESJ20Y0SZW4TGjdu-O0iIkLl8hyvvyOfEUTLWGDfdLTAE_PKgCc316cBTPo0FOGENl1zmh2Mbyv17DfPyxTin2inKULC5wqbUycA8Paz5lsDQArL3p04QN-yALtr_aUeqH32Exchos53lH8XOOKOhUFcKgyBQsXGk30BOS1G-vtfgWvpW63sponq5nAxkuAzIm0r9es9vgvEFIOxYpxh_JTGWJlVdfyViEP5ElhI2UXZROsUIWbSD1zPH8Fgw2nmXa4pT86LTv2f5sH6zgmbDo9Zrp9A--sg6A)


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
