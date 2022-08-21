# Interface: APIResponse<dataType\>

[types/general](../modules/types_general.md).APIResponse

## Type parameters

| Name |
| :------ |
| `dataType` |

## Table of contents

### Properties

- [data](types_general.APIResponse.md#data)
- [error](types_general.APIResponse.md#error)
- [rateLimits](types_general.APIResponse.md#ratelimits)
- [status](types_general.APIResponse.md#status)
- [url](types_general.APIResponse.md#url)

## Properties

### data

• `Optional` **data**: `dataType`

Response from API

#### Defined in

[types/general.ts:30](https://github.com/jameslinimk/unofficial-valorant-api/blob/1def087/package/src/types/general.ts#L30)

___

### error

• `Optional` **error**: [`ErrorObject`](types_general.ErrorObject.md)

Error object (if there is)

#### Defined in

[types/general.ts:38](https://github.com/jameslinimk/unofficial-valorant-api/blob/1def087/package/src/types/general.ts#L38)

___

### rateLimits

• **rateLimits**: [`RateLimit`](types_general.RateLimit.md)

Information about current rate limits

#### Defined in

[types/general.ts:34](https://github.com/jameslinimk/unofficial-valorant-api/blob/1def087/package/src/types/general.ts#L34)

___

### status

• **status**: `number`

Response status

**`Remarks`**

- `200-299`  Successful response
- `400-499`  Client error response
- `500-599`  Server error response

#### Defined in

[types/general.ts:26](https://github.com/jameslinimk/unofficial-valorant-api/blob/1def087/package/src/types/general.ts#L26)

___

### url

• **url**: `string`

Original request URL

#### Defined in

[types/general.ts:42](https://github.com/jameslinimk/unofficial-valorant-api/blob/1def087/package/src/types/general.ts#L42)
