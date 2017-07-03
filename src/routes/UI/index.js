import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'ui',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const UI = require('./containers/UIContainer').default
      const reducer = require('./modules/ui').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'ui', reducer })

      /*  Return getComponent   */
      cb(null, UI)

    /* Webpack named bundle   */
    }, 'counter')
  }
})
