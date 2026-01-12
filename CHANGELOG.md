# Changelog

## 0.17.0 (2026-01-12)

Full Changelog: [v0.16.1...v0.17.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.16.1...v0.17.0)

### Features

* **api:** api update ([6ed0cdc](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/6ed0cdcdec29a57ef96511282c9f0f28cb2de114))
* **api:** api update ([6ee6d57](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/6ee6d573dba71bade5d664c9a93e13ef17bd7058))
* **api:** api update ([0bfb928](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/0bfb928b4b3c999dbab4a136867d8ed831a0aeb0))
* **api:** manual updates ([1e0a39f](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/1e0a39f23a98819b67821fcd0428bb85b93a19db))
* **api:** manual updates ([b016e80](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/b016e809930171fcc3cf5f0851e9d712335d58a6))


### Bug Fixes

* **mcp:** correct code tool api output types ([a6e6349](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/a6e6349d078fc01b5885d1ae2bd5e2374fc2ac47))
* **mcp:** fix env parsing ([4fcc364](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/4fcc3645e53f296705789c7cef1885e24f01d0a3))
* **mcp:** fix options parsing ([2536a98](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/2536a980d8b31757f2ab24e28d29a8f42f067895))
* **mcp:** update cloudflare worker host page ([fd10493](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/fd10493a921a7bc90ee50c30525b0a9a5ef8be48))
* **mcp:** update code tool prompt ([da2c596](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/da2c596c7450f595085f72020f888ffbf1f7d62c))


### Chores

* break long lines in snippets into multiline ([c25159f](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/c25159fc8939c05bbedc0a400b117f47b1806432))
* **internal:** codegen related update ([a2c983a](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/a2c983a7f68d0f18ca7023dd1a956195732056cc))
* **internal:** codegen related update ([f5a2e89](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f5a2e8922a84c7c6b005c54afc8abedf23a79571))
* **internal:** version bump ([4edb85a](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/4edb85af0112bc7f0aecbeea6c91c4a440f7ce32))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([cac63db](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/cac63db8166188c66a230bbcadbfd305ce79a48c))

## 0.16.1 (2026-01-06)

Full Changelog: [v0.16.0...v0.16.1](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.16.0...v0.16.1)

### Chores

* **internal:** codegen related update ([e21a17d](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/e21a17d44b09f665724e6bef33c6cf78e299631c))

## 0.16.0 (2025-12-30)

Full Changelog: [v0.15.0...v0.16.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.15.0...v0.16.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** api update ([4b3b4fa](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/4b3b4fa635f7d79d9d665fd4bc00b109c037b64c))
* **api:** api update ([6c915ac](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/6c915ac16deff73c821983a17d47d1d041d987f9))
* **api:** api update ([3c7ad05](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/3c7ad05dddf070342f7ef093449e11264b6e956a))


### Bug Fixes

* **mcp:** pass base url to code tool ([60bcac4](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/60bcac41e34ddfc067626d247923946861720fb4))


### Chores

* **mcp:** remove deprecated tool schemes ([b01aec0](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/b01aec0a1d19a94cffbac0f616ae649d90e83fe4))

## 0.15.0 (2025-12-12)

Full Changelog: [v0.14.0...v0.15.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.14.0...v0.15.0)

### Features

* **api:** api update ([79981ef](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/79981ef09c36079c01aa0b35f954e1bcfd60213b))
* **api:** api update ([7181767](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/7181767087a7c6063ce316f4deacd7858708ab07))
* **mcp:** add typescript check to code execution tool ([1d457f2](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/1d457f2a585670e6aa630831714ca848bb8aed55))
* **mcp:** handle code mode calls in the Stainless API ([86f0d1a](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/86f0d1ab96a805e5a4abc61ee20c72335fa3299a))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([fbf7900](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/fbf7900f4802cb806e21fe5f25262061caa58045))
* **mcp:** correct code tool API endpoint ([f87e3a3](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f87e3a3434897b09ae0791f1ddb5fceb5d788226))
* **mcp:** return correct lines on typescript errors ([f1035b0](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f1035b056d52612cff6805cb15d7ce4ad01763d3))


### Chores

* **internal:** codegen related update ([b0c512e](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/b0c512ee3b0d1889abb373466c4e18c4449eff14))
* **internal:** codegen related update ([4598ec2](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/4598ec2b4730c701d82c46920078aeb8a93e0112))
* **mcp:** update lockfile ([afa4605](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/afa46050a14cd57cb1e9c5ebe2f8c3b1002de03a))
* use latest @modelcontextprotocol/sdk ([eab5239](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/eab523975ce5f489e5d26ceb12ba7f130d7a0fdd))

## 0.14.0 (2025-12-03)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.13.0...v0.14.0)

### Features

* **api:** api update ([9fc8fb3](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/9fc8fb354d4bd740fe7182a3d93f7445cdce3c11))
* **api:** api update ([a20bc1d](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/a20bc1d2721be6ab61219fcf070059a1e4df856e))
* **mcp:** add detail field to docs search tool ([f20d415](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f20d4151e288b6f63c88e0edeecd6ba063b2ac8a))
* **mcp:** return logs on code tool errors ([d841366](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/d841366d2a3dd4d67dc7c6e4311e45437dca4527))


### Bug Fixes

* **mcp:** return tool execution error on api error ([f2db6d7](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f2db6d79573b6b5f5cd52be3678b4a01d6020616))


### Chores

* **client:** fix logger property type ([3f023d9](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/3f023d97d004f1d40d9b5c5215aced861614f080))
* **internal:** upgrade eslint ([10ee79c](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/10ee79c3a80e86c03a70ebc53a99eabc58bdc50c))

## 0.13.0 (2025-11-25)

Full Changelog: [v0.12.0...v0.13.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.12.0...v0.13.0)

### Features

* **api:** api update ([96047c4](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/96047c40195519ee72d20eafc927c86acd7823a4))
* **api:** api update ([ff59fe2](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/ff59fe2adeebfbfbcfeaa4ae6cbed3315ced45d9))

## 0.12.0 (2025-11-21)

Full Changelog: [v0.11.0...v0.12.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.11.0...v0.12.0)

### Features

* **api:** added `get /v1/org/assets` ([70015a9](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/70015a9d859c91e9251f5d4a14272487668401f8))

## 0.11.0 (2025-11-20)

Full Changelog: [v0.10.1...v0.11.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.10.1...v0.11.0)

### Features

* **api:** add assets endpoint ([74c3793](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/74c3793fe4671126c8e186f95c7b6a0ebaeb581c))

## 0.10.1 (2025-11-13)

Full Changelog: [v0.10.0...v0.10.1](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.10.0...v0.10.1)

### Bug Fixes

* **mcp:** return tool execution error on jq failure ([cd43107](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/cd43107a6c6e244027aa962d4cf1d52708f70166))


### Chores

* **mcp:** upgrade jq-web ([ffe7988](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/ffe798843483106810f3d4b3d383f96023355307))

## 0.10.0 (2025-11-11)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.9.0...v0.10.0)

### Features

* **api:** api update ([97cbfbf](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/97cbfbf69be9a343c145c9c9509c8469797bb044))
* **mcp:** allow to authenticate using `x-api-key` header ([146b1a1](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/146b1a145ca4eb0651aa58e0ce5491af8ded8f0a))
* **mcp:** enable optional code execution tool on http mcp servers ([74b6fc2](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/74b6fc2f2825ba07de6d8dd38810353361d7447c))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([7b1c7ea](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/7b1c7ea65e6847fce9d95babb9fbf9da33e90bef))


### Chores

* **internal:** codegen related update ([fdc5da9](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/fdc5da9778e550583872dec50c71f0559db92ed0))
* **internal:** codegen related update ([8b49431](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/8b494310abc2f5afbcccecc7ddc0361f1b8f434f))
* **internal:** grammar fix (it's -&gt; its) ([8b95a05](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/8b95a05c0ff0e37355cb1bbb1ad11bcdcc476ce2))
* mcp code tool explicit error message when missing a run function ([ebd6209](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/ebd6209d5defbcfcb58c16dda5d40b8930e2acd4))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([619daf5](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/619daf59ee3664d7d34c758067298b7a67a3eb72))
* **mcp:** add line numbers to code tool errors ([8569fdb](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/8569fdbc57768050be8bce779c7e7a4da56737b6))
* **mcp:** clarify http auth error ([090a243](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/090a2437beb28e704dc7967a45ae3997e75b380b))
* use structured error when code execution tool errors ([f1e204c](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f1e204cb21e7f218beee7da6304c70c4106633b8))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([fdc3a6e](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/fdc3a6eb5e90003942803f5f0e95ae50c07498af))
* **mcp:** add a README link to add server to VS Code or Claude Code ([ad2422a](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/ad2422a02daf1422246cc77cc7e74a1e8936226c))

## 0.9.0 (2025-10-28)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.8.0...v0.9.0)

### Features

* **api:** api update ([af0e77d](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/af0e77d048ca074ae375b8d5fc97c906a81892f0))

## 0.8.0 (2025-10-27)

Full Changelog: [v0.7.1...v0.8.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.7.1...v0.8.0)

### Features

* **api:** api update ([b45f157](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/b45f157ab5d172ff6d7e07cda3859c6c9c9c959a))

## 0.7.1 (2025-10-22)

Full Changelog: [v0.7.0...v0.7.1](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.7.0...v0.7.1)

## 0.7.0 (2025-10-21)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.6.0...v0.7.0)

### Features

* **api:** manual updates ([d5fd770](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/d5fd7701cfe0bbbdeccccae525ed7760b3fdea30))

## 0.6.0 (2025-10-20)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.5.0...v0.6.0)

### Features

* **api:** api update ([7e816d9](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/7e816d91aea5aef9c9e4c546f0d449fe336a5a96))

## 0.5.0 (2025-10-17)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.4.0...v0.5.0)

### Features

* **api:** api update ([4bcdeff](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/4bcdeffd59f491b82be23c9cfa87843ab1bbbf03))

## 0.4.0 (2025-10-15)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.3.0...v0.4.0)

### Features

* **api:** api update ([7c7184e](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/7c7184e3e1a2fd0272f8875d31c79fe37de845ac))

## 0.3.0 (2025-10-15)

Full Changelog: [v0.2.1...v0.3.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.2.1...v0.3.0)

### Features

* **api:** api update ([3cf5341](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/3cf5341580595bd4ab0b59b0303bd3e85f360c99))
* **api:** api update ([316f71d](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/316f71dbafb308b285845e2a89eb1dfed5f2c032))

## 0.2.1 (2025-10-09)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.2.0...v0.2.1)

### Chores

* extract some types in mcp docs ([a017378](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/a0173783583425507ff019a103696d6869f95ad9))

## 0.2.0 (2025-10-08)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.1.0...v0.2.0)

### ⚠ BREAKING CHANGES

* **api:** move Pagination to shared models
* **api:** rename reports models

### Features

* **api:** api update ([7aa950b](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/7aa950bd5779f612fe2e4551eb6381532141215d))
* **api:** manual updates ([9a16334](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/9a1633479f1529dcd4e33c9384822c26ba7488e6))
* **api:** move Pagination to shared models ([756ce08](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/756ce08a9b68514c3e5a319ee2417c2efc237f82))
* **api:** rename reports models ([c4b33e3](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/c4b33e38329f85fec2cab5a2d701919c4020b76e))


### Chores

* **internal:** use npm pack for build uploads ([6c76770](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/6c76770679922b4ed20d2e532267616c96bd8948))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([0d0d946](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/0d0d946ef14ce8414453f92c6b70fa569c5e46e6))

## 0.1.0 (2025-10-03)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/cooper-square-technologies/profound-typescript-sdk/compare/v0.0.1...v0.1.0)

### Features

* **api:** api update ([65510ae](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/65510ae27c8832081c926518cbca51428ab5b70a))
* **api:** api update ([9dc8832](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/9dc88327081fad7b41a6148e196957b0202060b7))
* **api:** api update ([c7fbc15](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/c7fbc150cb66f862849dd4c6aff2b59c83bc885e))
* **api:** api update ([a3a5373](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/a3a5373f4fd5327da666804150c836196d44d080))
* **api:** manual updates ([15be9ef](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/15be9ef5c0f7758d48da9b7236d524ac4c78ce13))
* **api:** manual updates ([8e1849d](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/8e1849df8f0b6e24056c1bcd061d477b5fc8c595))
* **api:** manual updates ([141cd06](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/141cd060bb68fc6f12760059d231f99da36093f8))
* **api:** manual updates ([bf55caf](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/bf55caff1b9fa310cbd240870cc95f051260a709))
* **api:** manual updates ([cfbe54c](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/cfbe54c7bbf6271d3661324cf96ff0a17f4fb732))
* **api:** manual updates ([e353c72](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/e353c7245beadf1473260c7678c9f0b8485591e2))
* **api:** manual updates ([f2141b5](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f2141b5a06ee9d0a33e38cfa7035b3d8153e0db4))
* **api:** manual updates ([11e4685](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/11e4685fe354397d0eab8b60ec2b50af5d8f8ee1))
* **api:** manual updates ([6cb0cde](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/6cb0cdeed4a7beaa5bd233e61839edc5a1f13449))
* **api:** manual updates ([a802436](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/a802436ae81eb109dd9e5d0b74ce9fa53c27a894))


### Performance Improvements

* faster formatting ([c528064](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/c528064aacf1951ae5a90ddee3d7bed2557c4db4))


### Chores

* configure new SDK language ([78f4f04](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/78f4f0408e51048a9c126457a56908fcfc50587b))
* configure new SDK language ([983f6ef](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/983f6ef42991337cf67eb1dba373f4960b05404a))
* internal changes ([8ce1822](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/8ce18229c2efd8499ab92117ccc4bd7b09bddfb5))
* **internal:** codegen related update ([7154164](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/71541640a118e7e24a3ea97de661bca29c901a15))
* **internal:** fix incremental formatting in some cases ([10293c5](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/10293c55e6139d7bd4bb98d8534dcaff5977d5df))
* **internal:** ignore .eslintcache ([8705db3](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/8705db3f22737dd62421482996b0b22d5aea8582))
* **internal:** remove .eslintcache ([370c042](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/370c042e5664c8280c6e2a0de00f5e865972ad19))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([28d1856](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/28d1856ee3580e330a0df4c4a59963116a6c117d))
* update SDK settings ([f128f63](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/f128f63c29ebcff05220a47d504ce88cb2b2566a))
* update SDK settings ([13b3ab2](https://github.com/cooper-square-technologies/profound-typescript-sdk/commit/13b3ab2d3feb72521373104d4503d76ddb21b1f2))
