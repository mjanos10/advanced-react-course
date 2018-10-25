const Query = {
  items(parent, args, ctx, info) {
    return [{ name: 'Snickers' }, { name: 'Sunny' }]
  },
}

module.exports = Query
