'use strict'
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const request = new XMLHttpRequest()
const bigInt = require("big-integer")
const utils = require('web3-utils')
//const PlasmaVector = require('plasma-vector')

class VectorClient {
  constructor(g, N, serverAddress, pk, sk) {
    //this.pv = new PlasmaVector(g, N)
    // this.g = bigInt(g) // CRS
    // this.N = bigInt(N) // CRS
    this.A = this.g
    this.local_ids = []
    this.pk = pk
    this.sk = sk // todo decrypt with pass
  }

  getBalance(user) {
    request.open('POST', 'http://localhost:8546/getAccountBalance', true)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request.send(JSON.stringify({user: user}))
  }

  deposit(amt) {

  }

  withdraw(ids) {

  }

  sendCoins(coinIDs, destination) {

  }

  syncProofs() {
    // TODO call operator to get latest proofs for all owned coins
  }

  getAccumulator() {
    // call contract to get latest A
    return this.A
  }

  getInclusionWitness(coinIDs){
    // TODO: ping server
  }

  verifyProof(g, y, pi) {
    // check Q^l(ug^alpha)^r == wz^alpha
  }

}

module.exports = VectorClient