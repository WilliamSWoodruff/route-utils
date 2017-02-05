# route-utils
> Adds route util functions that need to wait until after server init

This lil baby plugin lets you do this:
```
const RouteUtils = require('route-utils').RouteUtils;

...

// Any route's config
{
    method: 'POST',
    path: '/dogs',
    config: {
        description: 'Add a dog',
        tags: ['api', 'add'],
        validate: {
            payload: RouteUtils.matchModelSchema('Dog')
        }
    },
    handler: (request, reply) => { ... }
}
```

### Registration
Register this as a plugin. Just `npm link` it for now.
