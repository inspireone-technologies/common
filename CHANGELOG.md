# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.30.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.29.0...v1.30.0) (2023-01-31)


### Features

* **msg91:** added msg91 wrapper ([6d9d815](https://github.com/saurabhrkp-inspireOne/common/commit/6d9d815488f997b5df45aa511e03e80deab159d3))

## [1.29.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.28.1...v1.29.0) (2023-01-27)


### Features

* **events:** moved listener & publisher to events folder & updated inport for same ([79ee64a](https://github.com/saurabhrkp-inspireOne/common/commit/79ee64a46ac1b6771b78b3250a498346858bd2fd))
* **events:** removed all events as they are to be created at service itself ([b3ff994](https://github.com/saurabhrkp-inspireOne/common/commit/b3ff994b5747e60a78bd99f2d42039836f9101e9))
* **events:** set subject type as string, as there are many subjects, all can not be listed ([2865365](https://github.com/saurabhrkp-inspireOne/common/commit/286536588f5291cd0986b8d0dee5c7ed0a6c7d37))

### [1.28.1](https://github.com/saurabhrkp-inspireOne/common/compare/v1.28.0...v1.28.1) (2023-01-27)


### Bug Fixes

* **queue:** removed cuid from jobId queue ([527266c](https://github.com/saurabhrkp-inspireOne/common/commit/527266c0d12b16290c355007fa3a790ae74a496e))

## [1.28.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.27.0...v1.28.0) (2023-01-27)


### Features

* **package:** updated jsonwebtoken package ([f91df9e](https://github.com/saurabhrkp-inspireOne/common/commit/f91df9efb0813aedc1cfca8b0b5c4bf11706bc34))

## [1.27.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.26.2...v1.27.0) (2023-01-26)


### Features

* **queue:** updated bullQueue to use cuid for jobId ([f935ad6](https://github.com/saurabhrkp-inspireOne/common/commit/f935ad6b5ab71b842542050ef597d9b48739c0e2))

### [1.26.2](https://github.com/saurabhrkp-inspireOne/common/compare/v1.26.1...v1.26.2) (2023-01-24)

### [1.26.1](https://github.com/saurabhrkp-inspireOne/common/compare/v1.26.0...v1.26.1) (2023-01-24)

## [1.26.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.25.0...v1.26.0) (2023-01-24)


### Features

* **bull:** added getQueue function to get bull queue by name ([038b68e](https://github.com/saurabhrkp-inspireOne/common/commit/038b68e89c2c788c3ff4811d137fd04ae5018345))

## [1.25.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.24.0...v1.25.0) (2023-01-18)


### Features

* **s3wrapper:** added destory method to destory all connections ([10964f8](https://github.com/saurabhrkp-inspireOne/common/commit/10964f81f05caa1b24cc8d82e83c35247239a22c))

## [1.24.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.23.0...v1.24.0) (2023-01-18)


### Features

* **s3wrapper:** updated s3 wrapper to get multiple bucket at once ([24cb708](https://github.com/saurabhrkp-inspireOne/common/commit/24cb70810b8688e2b60f90c46b4180dca82fad30))

## [1.23.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.22.0...v1.23.0) (2022-12-21)


### Features

* **queue:** added bull queue to commons ([a7bbc9c](https://github.com/saurabhrkp-inspireOne/common/commit/a7bbc9c6e565df51582630a52023e7b6d678bf62))


### Bug Fixes

* **error:** updated error response ([386fb4a](https://github.com/saurabhrkp-inspireOne/common/commit/386fb4a57ff21d00a592840db74814257d1ec783))

## [1.22.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.21.0...v1.22.0) (2022-12-10)


### Features

* **s3:** changed s3 client for s3wrapper ([e4418b4](https://github.com/saurabhrkp-inspireOne/common/commit/e4418b46c4ec4713be12ce6cfe4322465b2ff835))

## [1.21.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.20.0...v1.21.0) (2022-12-07)


### Features

* **s3:** exported s3 library for calling sub commands ([017eb4d](https://github.com/saurabhrkp-inspireOne/common/commit/017eb4dffe2c6e040c36a92c6ad51586707462fa))

## [1.20.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.19.0...v1.20.0) (2022-12-06)


### Features

* **joi:** export inbult joi for consistency ([6f25c64](https://github.com/saurabhrkp-inspireOne/common/commit/6f25c64ce54dec7ad49a4d8bfdc4a9ffc157bc17))

## [1.19.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.18.1...v1.19.0) (2022-12-03)


### Features

* **s3:** added s3 wrapper for s3 client operations ([43651d6](https://github.com/saurabhrkp-inspireOne/common/commit/43651d64d81827fa05b3da6062db401264968c97))

### [1.18.1](https://github.com/saurabhrkp-inspireOne/common/compare/v1.18.0...v1.18.1) (2022-12-02)

## [1.18.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.17.0...v1.18.0) (2022-11-10)


### Features

* **authentication:** changed from session to x-headers ([af18a47](https://github.com/saurabhrkp-inspireOne/common/commit/af18a4717d45d5b7ffb5d5f6c5756dff733d2e4b))


### Bug Fixes

* **validator:** removed validator to remove sessions from request ([dda1621](https://github.com/saurabhrkp-inspireOne/common/commit/dda16217e4932111160653c4766cb1d846d965bc))

## [1.17.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.16.0...v1.17.0) (2022-11-10)


### Features

* **encryption:** added encrypt & decrypt functions ([8fd0681](https://github.com/saurabhrkp-inspireOne/common/commit/8fd0681b4bb25a66e9e5b2f04923c3041af385a6))


### Bug Fixes

* **logger:** removed api-error logger ([97b0bd9](https://github.com/saurabhrkp-inspireOne/common/commit/97b0bd9a98510ecafc4dcd63e7bab5a772a19e77))

## [1.16.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.15.0...v1.16.0) (2022-11-01)


### Features

* **logger:** updated logger settings ([4d99d6e](https://github.com/saurabhrkp-inspireOne/common/commit/4d99d6eadf13b17953d39e3b35657996e1488eed))

## [1.15.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.14.0...v1.15.0) (2022-10-31)


### Features

* **apilogger:** added error logger ([3a999a2](https://github.com/saurabhrkp-inspireOne/common/commit/3a999a21b382f3dfdbfe3cbe5f20107af7939e08))
* **logger:** removed cloudwatch from logger ([969cbe7](https://github.com/saurabhrkp-inspireOne/common/commit/969cbe73c0009d3b74edab9cb19ea86da96f2e98))

## [1.14.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.13.2...v1.14.0) (2022-10-25)


### Features

* replaced console.log with logger ([63cb87e](https://github.com/saurabhrkp-inspireOne/common/commit/63cb87e1bd7c95d2d38285488912b47898db1165))

### [1.13.2](https://github.com/saurabhrkp-inspireOne/common/compare/v1.13.1...v1.13.2) (2022-10-25)

### [1.13.1](https://github.com/saurabhrkp-inspireOne/common/compare/v1.13.0...v1.13.1) (2022-10-25)


### Bug Fixes

* **logger:** changed cloudwatch plugin for winston logger ([a43de48](https://github.com/saurabhrkp-inspireOne/common/commit/a43de485d330a8157ef542e955e0ccf8413f2d94))

## [1.13.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.12.0...v1.13.0) (2022-10-25)


### Features

* **apilogger:** exported apilogger for direct use with express ([912fe2a](https://github.com/saurabhrkp-inspireOne/common/commit/912fe2a7ef16bb4c36f01d0472e2589713f564c0))

## [1.12.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.11.0...v1.12.0) (2022-10-25)


### Features

* **logger:** added apilogger for replacement of morgan ([fe2b872](https://github.com/saurabhrkp-inspireOne/common/commit/fe2b872e0b080cdb78b72aad9d80599789d64e2f))
* **logger:** added aws-cloudwatch logger transport for productions ([f3d9ad6](https://github.com/saurabhrkp-inspireOne/common/commit/f3d9ad69908cddd650ffd045b0b1cec3a200a326))

## [1.11.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.10.0...v1.11.0) (2022-10-21)


### Features

* **authentication:** updated authentication middleware to throw error on unauthenticated request ([394d4fd](https://github.com/saurabhrkp-inspireOne/common/commit/394d4fd4e19a579cc6b61887821aeb6099a03463))


### Bug Fixes

* **jwt:** updated jwt class to expect key on methods ([f91f0e8](https://github.com/saurabhrkp-inspireOne/common/commit/f91f0e851f6baae5c440c067f6762e4887b0909b))

## [1.10.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.9.0...v1.10.0) (2022-10-16)


### Features

* **eventbus:** converted publisher & listener to regular classess ([aa509a2](https://github.com/saurabhrkp-inspireOne/common/commit/aa509a26ca89baf823d8a97fa1b4d89d312a6425))

## [1.9.0](https://github.com/saurabhrkp-inspireOne/common/compare/v1.8.0...v1.9.0) (2022-10-16)


### Features

* **eventbus:** made stan as protected for accessing ([86639c8](https://github.com/saurabhrkp-inspireOne/common/commit/86639c8b5d0338bc8dcffe43c7799026a1ef90ae))


### Bug Fixes

* **eventbus:** updated event bus publisher & listener for current usage ([5a11d7e](https://github.com/saurabhrkp-inspireOne/common/commit/5a11d7e08220663ac9c1e34a9297ee482bb1cb7f))

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
