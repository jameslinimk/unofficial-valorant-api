# Interface: RateLimit

[types/general](../modules/types_general.md).RateLimit

## Table of contents

### Properties

- [remaining](types_general.RateLimit.md#remaining)
- [reset](types_general.RateLimit.md#reset)
- [used](types_general.RateLimit.md#used)

## Properties

### remaining

• **remaining**: `number`

Remaining number of API requests per 60s.

**`Remarks`**

`30 req/min` on free accounts, and `60 req/min` on regular token

#### Defined in

[types/general.ts:93](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/types/general.ts#L93)

___

### reset

• **reset**: `number`

In how many seconds (every 60s) your rate limit is going to reset.

**`Remarks`**

`30 req/min` on free accounts, and `60 req/min` on regular token

#### Defined in

[types/general.ts:99](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/types/general.ts#L99)

___

### used

• **used**: `number`

Number of used API requests per 60s.

**`Remarks`**

`30 req/min` on free accounts, and `60 req/min` on regular token

#### Defined in

[types/general.ts:87](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/types/general.ts#L87)
