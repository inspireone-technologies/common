# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.8.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.7.0...v1.8.0) (2022-10-14)


### Features

* **validator:** added req.session as ValidationSource ([4f2b75a](https://github.com/saurabhrkp-inspireOne/common/commit/4f2b75a94816454fefca9700387c37c45f9af188))

## [1.7.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.6.0...v1.7.0) (2022-10-14)


### Features

* exported authentication middleware ([5110d93](https://github.com/saurabhrkp-inspireOne/common/commit/5110d930cdd98aafa35dad6135538a956ae4422c))

## [1.6.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.5.1...v1.6.0) (2022-10-14)


### Features

* **middleware:** added new authentication middleware for shared ([9a5ffde](https://github.com/saurabhrkp-inspireOne/common/commit/9a5ffde0e547990748444cdba639f7042277a80f))


### Bug Fixes

* **jwt:** refactor jwt to create class ([0f53d99](https://github.com/saurabhrkp-inspireOne/common/commit/0f53d99ea9b2b3e9e5b2659ebeb17d0cd9853612))
* **jwt:** updated jwt payload body ([cdbce59](https://github.com/saurabhrkp-inspireOne/common/commit/cdbce59b9c886a04c6eba1bd18e98c10a75b7b52))
* restructured files & folders in project ([361db7a](https://github.com/saurabhrkp-inspireOne/common/commit/361db7a2619c42972a3a734350835ce8d49dda15))

### [1.5.1](https://github.com/saurabhrkp-inspireOne/common/compare/v1.5.0...v1.5.1) (2022-10-14)


### Bug Fixes

* **rediswrapper:** updated redis wrapper to promised-based connect ([f2807d7](https://github.com/saurabhrkp-inspireOne/common/commit/f2807d73bebda16f15fbd33cc2ca73463151f1da))

## [1.5.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.4.2...v1.5.0) (2022-10-14)


### Features

* exported redisWrapper class ([13b8ca8](https://github.com/saurabhrkp-inspireOne/common/commit/13b8ca83635246549307cdbc09c3ac674924f937))


### Bug Fixes

* **natswrapper:** exporting only natsWrapper class ([6cc925d](https://github.com/saurabhrkp-inspireOne/common/commit/6cc925da6b2d1c94cdcb8118e0aaff8966beb68f))
* **rediswrapper:** added redisWrapper class for redis client ([a14e6e4](https://github.com/saurabhrkp-inspireOne/common/commit/a14e6e4bcaa5971c011ccc60d9eb94f66c191ab5))

### [1.4.2](https://github.com/saurabhrkp-inspireOne/common/compare/v1.4.1...v1.4.2) (2022-10-13)


### Bug Fixes

* **eventbus:** adds nats publisher & listner for reuse ([0747911](https://github.com/saurabhrkp-inspireOne/common/commit/07479114586420ba4ea405f0db3d9d6073f7f423))
* **events:** adds expected events subject with types defs ([981c0ac](https://github.com/saurabhrkp-inspireOne/common/commit/981c0ac8949bb05bb4a1fde222d7555412146fb4))
* **interfaces:** adds version to all event interfaces ([9118130](https://github.com/saurabhrkp-inspireOne/common/commit/91181309351cd292734c553f48deee397d5ee2c6))
* **nats:** adds new nats wrapper for singleton stan client ([95e52d1](https://github.com/saurabhrkp-inspireOne/common/commit/95e52d18e0be628391dd8b1dbcb8896349bc1214))

### [1.4.1](https://github.com/saurabhrkp-inspireOne/common/compare/v1.4.0...v1.4.1) (2022-10-11)


### Bug Fixes

* misspelled privateKey with cert ([1194b0e](https://github.com/saurabhrkp-inspireOne/common/commit/1194b0e6b831dad69a2fcdb8b0a09926176c86ce))

## [1.4.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.3.0...v1.4.0) (2022-10-11)


### Features

* **sessionlocation:** simplified sessionLoaction body ([7ddd728](https://github.com/saurabhrkp-inspireOne/common/commit/7ddd7286686bebab89bc989579ff2066c517cd7a))

## [1.3.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.2.0...v1.3.0) (2022-10-11)


### Features

* installed required packages and type definations for packages ([67a40eb](https://github.com/saurabhrkp-inspireOne/common/commit/67a40eb958b84a481ee18af548059069c9e7c1aa))
* **sessionlocation:** adds sessionLocation middleware for express requests ([445b9e5](https://github.com/saurabhrkp-inspireOne/common/commit/445b9e5301f9d6d70cfadd4a30cc264209accf89))
* **validator:** adds Joi validator for requests ([2bb3a5c](https://github.com/saurabhrkp-inspireOne/common/commit/2bb3a5c6e36ceb71519d56d79a600e98a46f86bb))

## [1.2.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.14...v1.2.0) (2022-10-11)


### Features

* **logger:** exported logger as named export ([3eb3da9](https://github.com/saurabhrkp-inspireOne/common/commit/3eb3da9bf6bd5c8168416b3ed4d52b7d5e4c2ab1))

### [1.1.14](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.13...v1.1.14) (2022-10-11)

### [1.1.13](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.12...v1.1.13) (2022-10-11)


### Bug Fixes

* moved towards typescript for function declarations ([8d09775](https://github.com/saurabhrkp-inspireOne/common/commit/8d0977555dd9e733038b352dd2a1534291cb5bcd))

### [1.1.12](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.11...v1.1.12) (2022-10-11)

### [1.1.11](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.10...v1.1.11) (2022-10-11)

### [1.1.10](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.9...v1.1.10) (2022-10-11)

### [1.1.9](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.8...v1.1.9) (2022-10-11)

### [1.1.8](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.7...v1.1.8) (2022-10-11)

### [1.1.7](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.6...v1.1.7) (2022-10-11)

### [1.1.6](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.5...v1.1.6) (2022-10-11)

### [1.1.5](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.4...v1.1.5) (2022-10-11)

### [1.1.4](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.3...v1.1.4) (2022-10-11)

### [1.1.3](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.2...v1.1.3) (2022-10-11)

### [1.1.2](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.1...v1.1.2) (2022-10-11)

### [1.1.1](https://github.com/saurabhrkp-inspireOne/common/compare/v1.1.0...v1.1.1) (2022-10-11)

## 1.1.0 (2022-10-11)

### Features

- added missing build dependencies ([97bfc51](https://github.com/saurabhrkp-inspireOne/common/commit/97bfc5185ebbe278d04db874be29d97e6618649f))
- initilazed common library for sharing between masteroapp services ([fdc0bdf](https://github.com/saurabhrkp-inspireOne/common/commit/fdc0bdfecf52e3b0e88ded3a8e515dc24907992d))

### Bug Fixes

- adds all common import for masteroapp services in common repo ([a674faa](https://github.com/saurabhrkp-inspireOne/common/commit/a674faa676a5710ae5071abe86a2ee445e940eac))
