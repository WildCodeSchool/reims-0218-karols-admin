# déploiement

## coté serveur

```
dokku apps:create admin
dokku config:set admin BUILDPACK_URL=https://github.com/mars/create-react-app-buildpack.git
```
