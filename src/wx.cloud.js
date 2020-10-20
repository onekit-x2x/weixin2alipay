/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable promise/catch-or-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

class wx_cloud_engine {

}
class wx_cloud_query {
  constructor(collectionName, database, _query, _field) {
    this.collectionName = collectionName
    this.database = database
    this._query = _query
    this._field = _field
  }

  orderBy(fieldName, order) {
    const _query = this._query
    if (!_query.order) {
      _query.order = []
    }
    _query.order.push({fieldName, order})
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field)
  }

  limit(number) {
    const _query = this._query
    _query.limit = number
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field)
  }

  skip(number) {
    const _query = this._query
    _query.skip = number
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field)
  }

  count(options) {
    const that = this
    function _func(success, fail, complete) {
      basement.db.collection(that.collectionName).count(that._query.where).then((res2) => {
        const res = {
          errMsg: 'collection.count:ok',
          total: res2.result
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  field(definition) {
    return new wx_cloud_query(this.collectionName, this.database, this._query, definition)
  }

  get(options) {
    const that = this
    function _func(success, fail, complete) {
      basement.db.collection(that.collectionName).find(that._query.where, {
        sort: new Map(that._query.sort),
        limit: that._query.limit,
        skip: that._query.skip,
        projection: that._field
      }).then((res2) => {
        const res = {
          errMsg: 'query.get:ok',
          data: res2.result
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }
}
class wx_cloud_collection {
  constructor(database, collectionName) {
    this.database = database
    this.collectionName = collectionName
    this._query = {
      limit: null,
      offset: null,
      order: null,
      where: null
    }
    this._field = {}
  }

  doc(id) {
    return new wx_cloud_document(this, this.database, {}, id)
  }

  where(rule) {
    const _query = this._query
    _query.where = rule
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field)
  }

  add(options) {
    const that = this
    function _func(success, fail, complete) {
      options.data._openid = wx_cloud._openid
      basement.db.collection(that.collectionName).insertOne(options.data).then((res2) => {
        const res = {
          errMsg: 'collection.add:ok',
          _id: res2.result.insertedId
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  orderBy(fieldName, order) {
    const _query = this._query
    _query.order = [{fieldName, order}]
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field)
  }

  limit(number) {
    const _query = this._query
    _query.limit = number
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field)
  }

  skip(number) {
    const _query = this._query
    _query.skip = number
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field)
  }

  field(definition) {
    return new wx_cloud_query(this.collectionName, this.database, this._query, definition)
  }

  get(options) {
    const that = this
    function _func(success, fail, complete) {
      basement.db.collection(that.collectionName).find({}, {
        sort: new Map(that._query.sort),
        limit: that._query.limit,
        skip: that._query.skip,
        projection: that._field
      }).then((res2) => {
        const res = {
          errMsg: 'collection.get:ok',
          data: res2.result
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }
}
class wx_cloud_document {
  constructor(collection, database, _field, id) {
    this.collection = collection
    this.database = database
    this._field = _field
    this._id = id
  }

  get(options) {
    const that = this
    function _func(success, fail, complete) {
      basement.db.collection(that.collection.collectionName).findOne({_id: that._id}).then((res2) => {
        const res = {
          errMsg: 'document.get:ok',
          data: res2.result
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  update(options) {
    const that = this
    function _func(success, fail, complete) {
      basement.db.collection(that.collection.collectionName).updateOne({_id: that._id}, {$set: options.data}).then((res2) => {
        const res = {
          errMsg: 'docment.update:ok',
          stats: {updated: 1}
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  set(options) {
    const that = this
    function _func(success, fail, complete) {
      options.data = wx_cloud._openid
      basement.db.collection(that.collection.collectionName).replaceOne({_id: that._id}, {$set: options.data}).then((res2) => {
        const res = {
          _id: that._id,
          errMsg: 'docment.set:ok',
          stats: {updated: 1, created: 0}
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  remove(options) {
    const that = this
    function _func(success, fail, complete) {
      basement.db.collection(that.collection.collectionName).deleteOne({_id: that._id}, {$set: options.data}).then((res2) => {
        const res = {
          errMsg: 'docment.remove:ok',
          stats: {removed: 1}
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  field(definition) {
    return new wx_cloud_query(this.collectionName, this.database, this._query, definition)
  }
}
class wx_cloud_command {
  geoNear(options) {

  }

  geoWithin(options) {

  }

  geoIntersects(options) {

  }

  eq(value) {
    return {$eq: value}
  }

  neq(value) {
    return {$ne: value}
  }

  lt(value) {
    return {$lt: value}
  }

  lte(value) {
    return {$lte: value}
  }

  gt(value) {
    return {$gt: value}
  }

  gte(value) {
    return {$gte: value}
  }

  in(value) {
    return {$in: value}
  }

  nin(value) {
    return {$nin: value}
  }

  and(value) {
    return {$and: value}
  }

  or(value) {
    return {$or: value}
  }

  set(value) {
    return {$set: value}
  }

  remove() {

  }

  inc(value) {
    return {$inc: value}
  }

  mul(value) {
    return {$mul: value}
  }

  push(value) {
    return {$push: value}
  }

  pop(value) {
    return {$pop: value}
  }

  shift(value) {
    return {$shift: value}
  }

  unshift(value) {
    return {$unshift: value}
  }
}
export default class wx_cloud {
  init(options) {
    const that = this
    const env = options.env
    const traceUser = options.traceUser
    /*
    basement.user.getInfo().then(user => {
      wx_cloud._openid = user.userId
    }).catch(console.error);
    */
  }

  database(options) {
    let env
    if (options) {
      env = options.env
    } else {
      env = null
    }
    return new wx_cloud_database(env)
  }

  callFunction(options) {
    return basement.function.invoke(options.name, options.data)
  }

  uploadFile(options) {
    const that = this
    function _func(success, fail, complete) {
      const options2 = {
        filePath: options.filePath
      }
      if (options.header) {
        options2.headers = options.header
      }
      basement.file.uploadFile(options2).then((res2) => {
        const res = {
          errMsg: 'cloud.uploadFile:ok',
          statusCode: 200,
          fileID: res2.fileUrl
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      })
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  getTempFileURL(options) {
    const that = this
    function _func(success, fail, complete) {
      const fileList = []
      const func = (res2) => {
        console.log(res2)
        fileList.push(res2.fileUrl)
        if (fileList.length < options.fileList.length) {
          return
        }
        const res = {
          errMsg: 'cloud.getTempFileURL:ok',
          fileList
        }
        if (success) {
          success(res)
        }
        if (complete) {
          success(complete)
        }
      }
      for (const url of options.fileList) {
        const res = basement.file.getPrivateFileByUrl({
          fileUrl: url
        }).then(func)
      }
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete)
    } else {
      return new Promise(_func)
    }
  }

  deleteFile(options) {
  }
}
// /////////////////////// database ///////////////////////
class wx_cloud_database {
  constructor(env) {
    let _Decoder; let _QuerySerializer; let
      _UpdateSerializer
    //
    this.config = {env}
    this.command = new wx_cloud_command()
    this.Geo = new wx_cloud_geo()
    this.engine = new wx_cloud_engine()
  }

  collection(collectionName) {
    return new wx_cloud_collection(this, collectionName)
  }

  RegExp(initOptions) {

  }

  serverDate(options) {
    let timestamp = new Date().getTime()
    if (options) {
      if (options.offset) {
        timestamp += options.offset
      }
    }
    return new Date(timestamp)
  }

  get Decoder() {
    return this._Decoder
  }

  set Decoder(Decoder) {
    this._Decoder = Decoder
  }

  get QuerySerializer() {
    return this._QuerySerializer
  }

  set QuerySerializer(QuerySerializer) {
    this._QuerySerializer = QuerySerializer
  }

  get UpdateSerializer() {
    return this._UpdateSerializer
  }

  set UpdateSerializer(UpdateSerializer) {
    this._UpdateSerializer = UpdateSerializer
  }
}

class wx_cloud_geo {
  Point(longitude, latitude) {

  }

  LineString() {

  }

  Polygon() {

  }

  MultiLineString() {

  }

  MultiPolygon() {

  }
}
