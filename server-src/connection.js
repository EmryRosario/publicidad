import config from './db-config'
import mysql from 'mysql'
class Connection {
  constructor () {
    this.connection = null
    console.log(config)
  }
  connect () {
    this.connection = mysql.createConnection(config)
  }
  getAdByHour (condition) {
    let connection = this.connection

    let query = `
    SELECT anuncios.* FROM  anuncios, empresas WHERE
    '${condition.hour}' BETWEEN anuncios.desde AND anuncios.hasta
    AND anuncios.idempresa = empresas.id
    AND empresas.id = ${condition.business}
    AND anuncios.estado = 1
    AND empresas.estado = 1
    `
    return new Promise(function(resolve, reject) {
      connection.query(query, function (error, results, fields) {
      if (error) return reject(error)
      resolve(results)
      })
    })

  }

  getAdvertisements (id, text) {
    let connection = this.connection
    let idConditional
    if (id) {
      idConditional = ` AND anuncios.id = ${id} `
    } else {
      idConditional = ''
    }
    let query = `SELECT anuncios.id, anuncios.nombre,
      empresas.nombre AS empresa, empresas.id AS idEmpresa, anuncios.estado, anuncios.tipo AS tipoId,  codigotablas.icono AS tipo,
       anuncios.desde, anuncios.hasta, anuncios.estado,
       anuncios.comentario, anuncios.descripcion from anuncios,
        empresas, codigotablas WHERE
         anuncios.idempresa = empresas.id
         AND codigotablas.idtabla = 1
         AND codigotablas.id = anuncios.tipo
         ${idConditional}`

    return new Promise(function(resolve, reject) {
      connection.query(query, function (error, results, fields) {
      if (error) return reject(error)
      resolve(results)
      })
    })

  }
  saveCommercial (commercial) {
    let connection = this.connection
    return new Promise((resolve, reject) =>
      {let query = `INSERT INTO anuncios (idempresa, desde, hasta, descripcion,
      nombre, estado, comentario, tipo)
      VALUES(${commercial.business}, '${commercial.since}','${commercial.until}', '${commercial.description}',
      '${commercial.name}', 1, '${commercial.comment}', '${commercial.type}')`

      connection.query(query, (err, results) => {
        if (err) return reject(err)
        return resolve(results)
      })}
    )
  }

  updateCommercial(commercial) {
    let connection = this.connection
    return new Promise((resolve, reject) =>
      {let query = `UPDATE anuncios SET
        idempresa = ${commercial.business},
        desde = '${commercial.since}',
        hasta = '${commercial.until}',
        descripcion = '${commercial.description}',
      nombre = '${commercial.name}',
      estado = 1,
      comentario = '${commercial.comment}',
      tipo = '${commercial.type}',
      estado = '${commercial.state}'
      WHERE id=${commercial.id}`
      console.log(query)
      connection.query(query, (err, results) => {
        if (err) return reject(err)
        return resolve(results)
      })}
    )
  }
  getBusiness () {
    let connection = this.connection
    return new Promise(function(resolve, reject) {
      connection.query(`SELECT * FROM empresas WHERE estado=1`, function (error, results, fields) {
        if (error) return reject(error)
        resolve(results)
      })
    });
  }

  getTypes () {
    const connection = this.connection
    let query = `Select * From codigotablas
    Where  idtabla = 1
    And estado = 1
    `

    return new Promise(function(resolve, reject) {
      connection.query(query, (error, results) => {
        if (error) return reject(error)
        resolve(results)
      })
    })
  }
}

export default Connection
