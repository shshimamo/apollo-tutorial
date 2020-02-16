module.exports = {
  // fieldName: (parent, args, context, info) => data;
  // parent: グラフのルートを参照するため常に空白
  // 3番目の引数からdataSourcesを取得する
  Query: {
    launches: (_, __, { dataSources }) =>
      dataSources.launchAPI.getAllLaunches(),
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
    me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
