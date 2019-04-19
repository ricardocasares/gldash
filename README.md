[![Build Status](https://travis-ci.com/ricardocasares/gldash.svg?branch=master)](https://travis-ci.com/ricardocasares/gldash)
![Docker Pulls](https://img.shields.io/docker/pulls/ricardocasares/gldash.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# gldash

GitLab Jobs dashboard

## Usage

Go to [https://gldash.analogic.al] and add the `gld-config` key to your browser's localStorage

```json
{
  "key": "your-gitlab-key",
  "gitlab": "https://gitlab-url",
  "interval": 15000,
  "projects": ["ricardocasares/qotd-svc"]
}
```

## FAQ

### Is this secure?

Your key is stored in your browser, we never read it.

### Does it works with GitLab Enterprise?

Yes.

## Contributing

Feel free to open an issue, pull requests are preferred.

**IMPORTANT** Make sure you always create new branches from `beta`.

### Automated versioning

We use `semantic-release` to automate the versioning process, make sure you follow the [commit message convention explained here](https://github.com/semantic-release/semantic-release#commit-message-format).

**HEADS UP:** If you are not sure how write a commit message, make your changes in your feature branch and run `npm run commit` and follow the assistant.

### Releases

#### Beta

Create a feature branch and make a pull-request to `beta` branch.
Once its merged, you can test your changes using the URL automatically provided in the pull-request comments.

#### Production

Create a new pull-request from `beta` to `master` branch.
Once it gets merged, the final version will be released automatically.
