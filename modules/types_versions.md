# Module: types/versions

## Table of contents

### Type Aliases

- [LeaderboardResponse](types_versions.md#leaderboardresponse)
- [MMRResponse](types_versions.md#mmrresponse)
- [RawResponse](types_versions.md#rawresponse)
- [StoreFeaturedResponse](types_versions.md#storefeaturedresponse)

## Type Aliases

### LeaderboardResponse

Ƭ **LeaderboardResponse**<`T`\>: `T` extends ``"v1"`` ? [`V1LeaderboardResponse`](types_v1_leaderboard.md#v1leaderboardresponse) : `T` extends ``"v2"`` ? [`V2LeaderboardResponse`](../interfaces/types_v2_leaderboard.V2LeaderboardResponse.md) : [`V2LeaderboardResponse`](../interfaces/types_v2_leaderboard.V2LeaderboardResponse.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/versions.ts:13](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/versions.ts#L13)

___

### MMRResponse

Ƭ **MMRResponse**<`T`\>: `T` extends ``"v1"`` ? [`V1MMRResponse`](../interfaces/types_v1_mmr.V1MMRResponse.md) : `T` extends ``"v2"`` ? [`V2MMRResponse`](../interfaces/types_v2_mmr.V2MMRResponse.md) : [`V2MMRResponse`](../interfaces/types_v2_mmr.V2MMRResponse.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/versions.ts:18](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/versions.ts#L18)

___

### RawResponse

Ƭ **RawResponse**<`T`\>: `T` extends ``"matchdetails"`` ? [`RawMatchDetailsResponse`](../interfaces/types_raw_match_details.RawMatchDetailsResponse.md) : `T` extends ``"matchhistory"`` ? [`RawMatchHistoryResponse`](../interfaces/types_raw_match_history.RawMatchHistoryResponse.md) : `T` extends ``"mmr"`` ? [`RawMMRResponse`](../interfaces/types_raw_mmr.RawMMRResponse.md) : `T` extends ``"competitiveupdates"`` ? [`RawCompetitiveUpdatesResponse`](../interfaces/types_raw_competitive_updates.RawCompetitiveUpdatesResponse.md) : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/versions.ts:28](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/versions.ts#L28)

___

### StoreFeaturedResponse

Ƭ **StoreFeaturedResponse**<`T`\>: `T` extends ``"v1"`` ? [`V1StoreFeaturedResponse`](types_v1_store_featured.md#v1storefeaturedresponse) : `T` extends ``"v2"`` ? [`V2StoreFeaturedResponse`](types_v2_store_featured.md#v2storefeaturedresponse) : [`V2StoreFeaturedResponse`](types_v2_store_featured.md#v2storefeaturedresponse)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/versions.ts:23](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/versions.ts#L23)
