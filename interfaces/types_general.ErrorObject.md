# Interface: ErrorObject

[types/general](../modules/types_general.md).ErrorObject

## Table of contents

### Properties

- [code](types_general.ErrorObject.md#code)
- [details](types_general.ErrorObject.md#details)
- [message](types_general.ErrorObject.md#message)

## Properties

### code

• **code**: `number`

The response status of the API. See remarks for info about specific error codes

**`Remarks`**

Can be any of the following:
- `0`    Riot Origin Server down for maintenance
- `1` 	Invalid API Key
- `2` 	Forbidden endpoint
- `3` 	Restricted endpoint
- `101` 	No region found for this Player
- `102` 	No matches found, can't get puuid
- `103` 	Possible name change detected, can't get puuid. Please play one match, wait 1-2 minutes and try it again
- `104` 	Invalid region
- `105` 	Invalid filter
- `106` 	Invalid gamemode
- `107` 	Invalid map
- `108` 	Invalid locale
- `109` 	Missing name
- `110` 	Missing tag
- `111` 	Player not found in leaderboard
- `112` 	Invalid raw type
- `113` 	Invalid match or player id
- `114` 	Invalid country code
- `115` 	Invalid season

#### Defined in

[types/general.ts:74](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/types/general.ts#L74)

___

### details

• **details**: `string`

Error details to help fix the problem

#### Defined in

[types/general.ts:78](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/types/general.ts#L78)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/general.ts:49](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/types/general.ts#L49)
