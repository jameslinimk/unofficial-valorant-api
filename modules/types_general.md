# Module: types/general

## Table of contents

### Interfaces

- [APIResponse](../interfaces/types_general.APIResponse.md)
- [ErrorObject](../interfaces/types_general.ErrorObject.md)
- [RateLimit](../interfaces/types_general.RateLimit.md)

### Type Aliases

- [Acts](types_general.md#acts)
- [BaseRank](types_general.md#baserank)
- [Characters](types_general.md#characters)
- [Episodes](types_general.md#episodes)
- [Locale](types_general.md#locale)
- [Mode](types_general.md#mode)
- [Rank](types_general.md#rank)
- [Region](types_general.md#region)
- [Season](types_general.md#season)
- [SubRank](types_general.md#subrank)
- [ValorantMap](types_general.md#valorantmap)
- [Weapon](types_general.md#weapon)

## Type Aliases

### Acts

Ƭ **Acts**: ``1`` \| ``2`` \| ``3``

#### Defined in

[types/general.ts:6](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L6)

___

### BaseRank

Ƭ **BaseRank**: ``"Iron"`` \| ``"Bronze"`` \| ``"Silver"`` \| ``"Gold"`` \| ``"Platinum"`` \| ``"Diamond"`` \| ``"Ascendant"`` \| ``"Immortal"``

#### Defined in

[types/general.ts:1](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L1)

___

### Characters

Ƭ **Characters**: ``"Astra"`` \| ``"Breach"`` \| ``"Brimstone"`` \| ``"Chamber"`` \| ``"Cypher"`` \| ``"Fade"`` \| ``"Jett"`` \| ``"KAY/O"`` \| ``"Killjoy"`` \| ``"Neon"`` \| ``"Omen"`` \| ``"Phoenix"`` \| ``"Raze"`` \| ``"Reyna"`` \| ``"Sage"`` \| ``"Skye"`` \| ``"Sova"`` \| ``"Viper"`` \| ``"Yoru"``

#### Defined in

[types/general.ts:12](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L12)

___

### Episodes

Ƭ **Episodes**: `number`

#### Defined in

[types/general.ts:5](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L5)

___

### Locale

Ƭ **Locale**: ``"ar-AE"`` \| ``"de-DE"`` \| ``"en-GB"`` \| ``"en-US"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"fr-FR"`` \| ``"id-ID"`` \| ``"it-IT"`` \| ``"ja-JP"`` \| ``"ko-KR"`` \| ``"pl-PL"`` \| ``"pt-BR"`` \| ``"ru-RU"`` \| ``"th-TH"`` \| ``"tr-TR"`` \| ``"vi-VN"`` \| ``"zn-CN"`` \| ``"zn-TW"``

#### Defined in

[types/general.ts:16](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L16)

___

### Mode

Ƭ **Mode**: ``"Escalation"`` \| ``"Spikerush"`` \| ``"Deathmatch"`` \| ``"Competitive"`` \| ``"Unrated"`` \| ``"Replication"`` \| ``"Custom"`` \| ``"Newmap"`` \| ``"Snowball"``

#### Defined in

[types/general.ts:9](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L9)

___

### Rank

Ƭ **Rank**: \`${BaseRank} ${SubRank}\` \| ``"Radiant"`` \| ``"Unrated"``

#### Defined in

[types/general.ts:3](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L3)

___

### Region

Ƭ **Region**: ``"eu"`` \| ``"na"`` \| ``"kr"`` \| ``"ap"`` \| ``"latam"`` \| ``"br"``

#### Defined in

[types/general.ts:11](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L11)

___

### Season

Ƭ **Season**: \`e${Episodes}a${Acts}\`

#### Defined in

[types/general.ts:7](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L7)

___

### SubRank

Ƭ **SubRank**: ``"1"`` \| ``"2"`` \| ``"3"``

#### Defined in

[types/general.ts:2](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L2)

___

### ValorantMap

Ƭ **ValorantMap**: ``"Ascent"`` \| ``"Split"`` \| ``"Fracture"`` \| ``"Bind"`` \| ``"Breeze"`` \| ``"Icebox"`` \| ``"Haven"`` \| ``"Pearl"``

#### Defined in

[types/general.ts:10](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L10)

___

### Weapon

Ƭ **Weapon**: ``"Classic"`` \| ``"Shorty"`` \| ``"Frenzy"`` \| ``"Ghost"`` \| ``"Sheriff"`` \| ``"Golden Gun"`` \| ``"Stinger"`` \| ``"Spectre"`` \| ``"Bucky"`` \| ``"Judge"`` \| ``"Bulldog"`` \| ``"Guardian"`` \| ``"Phantom"`` \| ``"Vandal"`` \| ``"Marshal"`` \| ``"Operator"`` \| ``"Ares"`` \| ``"Odin"`` \| ``"Melee"``

#### Defined in

[types/general.ts:14](https://github.com/jameslinimk/unofficial-valorant-api/blob/fe67431/package/src/types/general.ts#L14)
