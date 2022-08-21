# Welcome to the VAPI docs

Below is a list of all the properties of the API including all properties and methods. If you need any help, join the [Discord server](https://discord.gg/wXNMnqzvAD)

## Table of contents

### Constructors

- [constructor](README.md#constructor)

### Properties

- [mapImages](README.md#mapimages)
- [rankImages](README.md#rankimages)

### Methods

- [getAccount](README.md#getaccount)
- [getAccountByPUUID](README.md#getaccountbypuuid)
- [getAnnouncements](README.md#getannouncements)
- [getContent](README.md#getcontent)
- [getCrosshair](README.md#getcrosshair)
- [getFeaturedItems](README.md#getfeatureditems)
- [getLeaderboard](README.md#getleaderboard)
- [getMMR](README.md#getmmr)
- [getMMRByPUUID](README.md#getmmrbypuuid)
- [getMMRHistory](README.md#getmmrhistory)
- [getMMRHistoryByPUUID](README.md#getmmrhistorybypuuid)
- [getMatch](README.md#getmatch)
- [getMatches](README.md#getmatches)
- [getMatchesByPUUID](README.md#getmatchesbypuuid)
- [getOffers](README.md#getoffers)
- [getRawCompetitiveUpdates](README.md#getrawcompetitiveupdates)
- [getRawData](README.md#getrawdata)
- [getRawMMR](README.md#getrawmmr)
- [getRawMatchDetails](README.md#getrawmatchdetails)
- [getRawMatchHistory](README.md#getrawmatchhistory)
- [getStatus](README.md#getstatus)
- [getTranslations](README.md#gettranslations)
- [getVersion](README.md#getversion)
- [getWebsite](README.md#getwebsite)
- [initUtils](README.md#initutils)

## Constructors

### constructor

• **new default**(`token?`)

Create a new instance of the main API. All API calls are in this class

**`Example`**

Create a new instance
```js
import _VAPI from "unofficial-valorant-api"
const VAPI = new _VAPI("my super secret token")
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | `string` | (optional) The token, if you have one. Get one from the Discord server ([https://discord.gg/wXNMnqzvAD](https://discord.gg/wXNMnqzvAD)) |

#### Defined in

[vapi.ts:48](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L48)

## Properties

### mapImages

• `Optional` **mapImages**: `Object`

Images for every Valorant map

**`Remarks`**

You must call [initUtils](README.md#initutils) before using this!

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Ascent` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Bind` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Breeze` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Fracture` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Haven` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Icebox` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Pearl` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `Split` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |
| `The Range` | { `landscape`: `string` ; `minimap`: `string` ; `splash`: `string`  } |

#### Defined in

[vapi.ts:36](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L36)

___

### rankImages

• `Optional` **rankImages**: `Object`

Images for every Rank

**`Remarks`**

You must call [initUtils](README.md#initutils) before using this!

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Ascendant 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Ascendant 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Ascendant 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Bronze 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Bronze 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Bronze 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Diamond 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Diamond 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Diamond 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Gold 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Gold 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Gold 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Immortal 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Immortal 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Immortal 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Iron 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Iron 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Iron 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Platinum 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Platinum 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Platinum 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Radiant` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Silver 1` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Silver 2` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Silver 3` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |
| `Unrated` | { `large`: `string` ; `small`: `string` ; `triangleDown`: `string` ; `triangleUp`: `string`  } |

#### Defined in

[vapi.ts:30](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L30)

## Methods

### getAccount

▸ **getAccount**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1AccountResponse`](./interfaces/types_v1_account.V1AccountResponse.md)\>\>

Get general information about a player from their Riot ID

**`Remarks`**

**Returns:**
- Their PUUID
- Their region
- Their account level
- Their current card

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.force?` | `boolean` |
| `__namedParameters.name` | `string` |
| `__namedParameters.tag` | `string` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1AccountResponse`](./interfaces/types_v1_account.V1AccountResponse.md)\>\>

General information on a players profile

#### Defined in

[vapi.ts:490](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L490)

___

### getAccountByPUUID

▸ **getAccountByPUUID**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1AccountResponse`](./interfaces/types_v1_account.V1AccountResponse.md)\>\>

Get general information about a player from their PUUID

**`Remarks`**

**Returns:**
- Their PUUID
- Their region
- Their account level
- Their current card

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.force?` | `boolean` |
| `__namedParameters.puuid` | `string` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1AccountResponse`](./interfaces/types_v1_account.V1AccountResponse.md)\>\>

General information on a players profile

#### Defined in

[vapi.ts:507](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L507)

___

### getAnnouncements

▸ **getAnnouncements**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1WebsiteResponse`](./modules/types_v1_website.md#v1websiteresponse)\>\>

Get all announcements from the valorant website of a country

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.countryCode` | ``"en-us"`` \| ``"en-gb"`` \| ``"de-de"`` \| ``"es-es"`` \| ``"es-mx"`` \| ``"fr-fr"`` \| ``"it-it"`` \| ``"ja-jp"`` \| ``"ko-kr"`` \| ``"pt-br"`` \| ``"ru-ru"`` \| ``"tr-tr"`` \| ``"vi-vn"`` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1WebsiteResponse`](./modules/types_v1_website.md#v1websiteresponse)\>\>

List of announcements from the valorant website

#### Defined in

[vapi.ts:169](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L169)

___

### getContent

▸ **getContent**(`__namedParameters?`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1ContentResponse`](./interfaces/types_v1_content.V1ContentResponse.md)\>\>

Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game

**`Depreciated`**

Use the new [getTranslations](README.md#gettranslations) instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.locale?` | [`Locale`](./modules/types_general.md#locale) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1ContentResponse`](./interfaces/types_v1_content.V1ContentResponse.md)\>\>

#### Defined in

[vapi.ts:375](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L375)

___

### getCrosshair

▸ **getCrosshair**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<`Buffer`\>\>

Get an image of a valorant crosshair by its code

**`Example`**

Load and write a crosshair to crosshair.png
```js
import { writeFileSync } from "fs"

const crosshair = await default.getCrosshair("0;s;1;P;c;5;o;1;d;1;z;3;0b;0;1b;0;S;c;4;o;1")
writeFileSync("crosshair.png", crosshair.data)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.code` | `string` |
| `__namedParameters.size?` | `number` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<`Buffer`\>\>

The image of the crosshair as a [Buffer](https://nodejs.org/api/buffer.html)

#### Defined in

[vapi.ts:157](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L157)

___

### getFeaturedItems

▸ **getFeaturedItems**<`T`\>(`__namedParameters?`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`StoreFeaturedResponse`](./modules/types_versions.md#storefeaturedresponse)<`T`\>\>\>

Get all of the featured items in the current valorant store

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"v1"`` \| ``"v2"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.version?` | `T` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`StoreFeaturedResponse`](./modules/types_versions.md#storefeaturedresponse)<`T`\>\>\>

Featured items in the current valorant store

#### Defined in

[vapi.ts:199](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L199)

___

### getLeaderboard

▸ **getLeaderboard**<`T`\>(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`LeaderboardResponse`](./modules/types_versions.md#leaderboardresponse)<`T`\>\>\>

Get the leaderboard of a region

**`Remarks`**

In order for player filtering to work, they must be Immortal or higher

**`Throws`**

TypeError - If both a riotID and puuid are supplied

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"v1"`` \| ``"v2"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.end?` | `number` |
| `__namedParameters.puuid?` | `string` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |
| `__namedParameters.riotID?` | `Object` |
| `__namedParameters.riotID.name` | `string` |
| `__namedParameters.riotID.tag` | `string` |
| `__namedParameters.season?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |
| `__namedParameters.start?` | `number` |
| `__namedParameters.version?` | `T` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`LeaderboardResponse`](./modules/types_versions.md#leaderboardresponse)<`T`\>\>\>

Descending order of the highest ranked players. (Immortal and up)

#### Defined in

[vapi.ts:351](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L351)

___

### getMMR

▸ **getMMR**<`T`\>(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`MMRResponse`](./modules/types_versions.md#mmrresponse)<`T`\>\>\>

Gets general info about a players rank by their Riot ID

**`Remarks`**

**Returns:**
- Current rank and info about their rank
- RR change on their last game
- Their PUUID
- Their peak rank from every season

**`Throws`**

TypeError - If both filter and seasonFilter are set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"v1"`` \| ``"v2"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.filter?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |
| `__namedParameters.name` | `string` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |
| `__namedParameters.seasonFilter?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |
| `__namedParameters.tag` | `string` |
| `__namedParameters.version?` | `T` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`MMRResponse`](./modules/types_versions.md#mmrresponse)<`T`\>\>\>

Information about a players mmr/rank

#### Defined in

[vapi.ts:396](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L396)

___

### getMMRByPUUID

▸ **getMMRByPUUID**<`T`\>(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`MMRResponse`](./modules/types_versions.md#mmrresponse)<`T`\>\>\>

Gets general info about a players rank by their PUUID

**`Remarks`**

**Returns:**
- Current rank and info about their rank
- RR change on their last game
- Their PUUID
- Their peak rank from every season

**`Throws`**

TypeError - If both filter and seasonFilter are set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"v1"`` \| ``"v2"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.filter?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |
| `__namedParameters.seasonFilter?` | \`e${number}a1\` \| \`e${number}a2\` \| \`e${number}a3\` |
| `__namedParameters.version?` | `T` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`MMRResponse`](./modules/types_versions.md#mmrresponse)<`T`\>\>\>

Information about a players mmr/rank

#### Defined in

[vapi.ts:421](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L421)

___

### getMMRHistory

▸ **getMMRHistory**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V2MMRHistoryResponse`](./modules/types_v2_mmr_history.md#v2mmrhistoryresponse)\>\>

Get a list of rr changes of a player by their Riot ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.name` | `string` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |
| `__namedParameters.tag` | `string` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V2MMRHistoryResponse`](./modules/types_v2_mmr_history.md#v2mmrhistoryresponse)\>\>

List of rr changes (recent competitive games)

#### Defined in

[vapi.ts:309](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L309)

___

### getMMRHistoryByPUUID

▸ **getMMRHistoryByPUUID**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V2MMRHistoryResponse`](./modules/types_v2_mmr_history.md#v2mmrhistoryresponse)\>\>

Get a list of rr changes of a player by their PUUID

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V2MMRHistoryResponse`](./modules/types_v2_mmr_history.md#v2mmrhistoryresponse)\>\>

List of rr changes (recent competitive games)

#### Defined in

[vapi.ts:320](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L320)

___

### getMatch

▸ **getMatch**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`Match`](./interfaces/types_v3_matches.Match.md)\>\>

Get information about a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.matchID` | `string` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`Match`](./interfaces/types_v3_matches.Match.md)\>\>

Information about the match

#### Defined in

[vapi.ts:330](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L330)

___

### getMatches

▸ **getMatches**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V3MatchesResponse`](./modules/types_v3_matches.md#v3matchesresponse)\>\>

Gets the most recent 5 matches by a players Riot ID

**`Remarks`**

**Returns:**
- Info about most recent 5 matches including:
	- Metadata info about the match such as length, time, map, score, etc
	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	- Information about every round in the match such as plant/defuse info, etc
	- Information about every kill in the game including killer, victim, assist, etc

**`Throws`**

TypeError - Only if the size parameter is set and not between 1-10

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.gamemodeFilter?` | [`Mode`](./modules/types_general.md#mode) |
| `__namedParameters.mapFilter?` | [`ValorantMap`](./modules/types_general.md#valorantmap) |
| `__namedParameters.name` | `string` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |
| `__namedParameters.size?` | `number` |
| `__namedParameters.tag` | `string` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V3MatchesResponse`](./modules/types_v3_matches.md#v3matchesresponse)\>\>

Info about a players last 5 matches

#### Defined in

[vapi.ts:448](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L448)

___

### getMatchesByPUUID

▸ **getMatchesByPUUID**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V3MatchesResponse`](./modules/types_v3_matches.md#v3matchesresponse)\>\>

Gets the most recent 5 matches by a players PUUID

**`Remarks`**

**Returns:**
- Info about most recent 5 matches including:
	- Metadata info about the match such as length, time, map, score, etc
	- Information about every player including their PUUID, Riot ID, kills, ability usage, etc
	- Information about every round in the match such as plant/defuse info, etc
	- Information about every kill in the game including killer, victim, assist, etc

**`Throws`**

TypeError - Only if the size parameter is set and not between 1-10

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.gamemodeFilter?` | [`Mode`](./modules/types_general.md#mode) |
| `__namedParameters.mapFilter?` | [`ValorantMap`](./modules/types_general.md#valorantmap) |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |
| `__namedParameters.size?` | `number` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V3MatchesResponse`](./modules/types_v3_matches.md#v3matchesresponse)\>\>

Info about a players last 5 matches

#### Defined in

[vapi.ts:471](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L471)

___

### getOffers

▸ **getOffers**(): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1StoreOffersResponse`](./interfaces/types_v1_store_offers.V1StoreOffersResponse.md)\>\>

Get a list of all the prices of every skin in the game

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1StoreOffersResponse`](./interfaces/types_v1_store_offers.V1StoreOffersResponse.md)\>\>

List of skin prices

#### Defined in

[vapi.ts:207](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L207)

___

### getRawCompetitiveUpdates

▸ **getRawCompetitiveUpdates**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawCompetitiveUpdatesResponse`](./interfaces/types_raw_competitive_updates.RawCompetitiveUpdatesResponse.md)\>\>

Gets raw data for a players competitive updates (rr changes) from the valorant API. **(Not formatted, use only if you know what you are doing)**

**`See`**

[getMMRHistory](README.md#getmmrhistory) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawCompetitiveUpdatesResponse`](./interfaces/types_raw_competitive_updates.RawCompetitiveUpdatesResponse.md)\>\>

Information about the players rr history

#### Defined in

[vapi.ts:261](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L261)

___

### getRawData

▸ **getRawData**<`T`\>(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawResponse`](./modules/types_versions.md#rawresponse)<`T`\>\>\>

Gets raw data from the valorant API. **(Not formatted, use only if you know what you are doing)**

**`Depreciated`**

Use [getRawCompetitiveUpdates](README.md#getrawcompetitiveupdates) [getRawMatchDetails](README.md#getrawmatchdetails) [getRawMatchHistory](README.md#getrawmatchhistory) [getRawMMR](README.md#getrawmmr) instead

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"matchdetails"`` \| ``"matchhistory"`` \| ``"mmr"`` \| ``"competitiveupdates"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.queries` | `any` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |
| `__namedParameters.type` | `T` |
| `__namedParameters.value` | `string` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawResponse`](./modules/types_versions.md#rawresponse)<`T`\>\>\>

Either match details, a users patch history, a users mmr, or a users past rr changes

#### Defined in

[vapi.ts:294](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L294)

___

### getRawMMR

▸ **getRawMMR**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawMMRResponse`](./interfaces/types_raw_mmr.RawMMRResponse.md)\>\>

Gets raw data for a players mmr from the valorant API. **(Not formatted, use only if you know what you are doing)**

**`See`**

[getMMR](README.md#getmmr) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawMMRResponse`](./interfaces/types_raw_mmr.RawMMRResponse.md)\>\>

Information about the players mmr

#### Defined in

[vapi.ts:277](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L277)

___

### getRawMatchDetails

▸ **getRawMatchDetails**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawMatchDetailsResponse`](./interfaces/types_raw_match_details.RawMatchDetailsResponse.md)\>\>

Gets raw data for a match from the valorant API. (Not formatted, use only if you know what you are doing)

**`See`**

[getMatch](README.md#getmatch) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.matchID` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawMatchDetailsResponse`](./interfaces/types_raw_match_details.RawMatchDetailsResponse.md)\>\>

Information about the match

#### Defined in

[vapi.ts:229](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L229)

___

### getRawMatchHistory

▸ **getRawMatchHistory**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawMatchHistoryResponse`](./interfaces/types_raw_match_history.RawMatchHistoryResponse.md)\>\>

Gets raw data for a players match history from the valorant API. (Not formatted, use only if you know what you are doing)

**`See`**

[getMatches](README.md#getmatches) for an easier response to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.puuid` | `string` |
| `__namedParameters.queries?` | `any` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`RawMatchHistoryResponse`](./interfaces/types_raw_match_history.RawMatchHistoryResponse.md)\>\>

Information about the players match history

#### Defined in

[vapi.ts:245](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L245)

___

### getStatus

▸ **getStatus**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1StatusResponse`](./interfaces/types_v1_status.V1StatusResponse.md)\>\>

Will get information about the current maintenances and incidents about a region

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1StatusResponse`](./interfaces/types_v1_status.V1StatusResponse.md)\>\>

Info about undergoing maintenances and incidents in a region of valorant

#### Defined in

[vapi.ts:216](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L216)

___

### getTranslations

▸ **getTranslations**(`__namedParameters?`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1ContentResponse`](./interfaces/types_v1_content.V1ContentResponse.md)\>\>

Get all translations for every character, skin, map, ability, spray, charm, player card, player title, and more in the game

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.locale?` | [`Locale`](./modules/types_general.md#locale) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1ContentResponse`](./interfaces/types_v1_content.V1ContentResponse.md)\>\>

#### Defined in

[vapi.ts:366](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L366)

___

### getVersion

▸ **getVersion**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1VersionResponse`](./interfaces/types_v1_version.V1VersionResponse.md)\>\>

Get information about valorant in a region, such as the client version, branch, and server version

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.region` | [`Region`](./modules/types_general.md#region) |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1VersionResponse`](./interfaces/types_v1_version.V1VersionResponse.md)\>\>

Information about a regions valorant

#### Defined in

[vapi.ts:190](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L190)

___

### getWebsite

▸ **getWebsite**(`__namedParameters`): `Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1WebsiteResponse`](./modules/types_v1_website.md#v1websiteresponse)\>\>

Get all announcements from the valorant website of a country

**`Depreciated`**

Use [getAnnouncements](README.md#getannouncements) instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.countryCode` | ``"en-us"`` \| ``"en-gb"`` \| ``"de-de"`` \| ``"es-es"`` \| ``"es-mx"`` \| ``"fr-fr"`` \| ``"it-it"`` \| ``"ja-jp"`` \| ``"ko-kr"`` \| ``"pt-br"`` \| ``"ru-ru"`` \| ``"tr-tr"`` \| ``"vi-vn"`` |

#### Returns

`Promise`<[`APIResponse`](./interfaces/types_general.APIResponse.md)<[`V1WebsiteResponse`](./modules/types_v1_website.md#v1websiteresponse)\>\>

List of announcements from the valorant website

#### Defined in

[vapi.ts:180](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L180)

___

### initUtils

▸ **initUtils**(): `Promise`<`void`\>

Creates [rankImages](README.md#rankimages) and [mapImages](README.md#mapimages) by pulling the images from [https://valorant-api.com](https://valorant-api.com)

**`Remarks`**

Must be called before using [rankImages](README.md#rankimages) and [mapImages](README.md#mapimages)

#### Returns

`Promise`<`void`\>

#### Defined in

[vapi.ts:55](https://github.com/jameslinimk/unofficial-valorant-api/blob/e0f8f42/package/src/vapi.ts#L55)
