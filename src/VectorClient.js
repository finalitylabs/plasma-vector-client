'use strict'
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const request = new XMLHttpRequest()
const fetch = require('node-fetch')
const bigInt = require("big-integer")
const utils = require('web3-utils')
const abi = require('./abi.js')
const operatorAddress = '0x8b9ffe438a877797385f1994270ec0d4e8cabc55'
//const PlasmaVector = require('plasma-vector')

class VectorClient {
  constructor(web3, g, N, serverAddress, pk, sk) {
    let p = window.web3.eth.contract(abi)
    //this.pv = new PlasmaVector(g, N)
    // this.g = bigInt(g) // CRS
    // this.N = bigInt(N) // CRS
    this.operator = p.at(operatorAddress)
    this.web3 = web3
    this.A = this.g
    this.local_ids = []
    this.pk = pk
    this.sk = sk // todo decrypt with pass
  }

  getBalance(user) {
    return new Promise(function(resolve,reject) {
      request.open('POST', 'http://localhost:8546/getAccountBalance', true)
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
      request.send(JSON.stringify({user: user}))
      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          resolve(request.responseText)
        }
      }
    })
  }

  transfer(ins, receiver, sender, start, end) {
    // todo, get coin index from storage
    return new Promise(function(resolve, reject) {
      const body = {ins:[ins,0], v:[1,1], to: receiver, from: sender, start: start, end:end}
      fetch('http://localhost:8546/transfer', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        resolve(json)
      })
    })
  }

  deposit(amt, sender) {
    self=this
    return new Promise(async function(resolve, reject) {
      self.operator.deposit({value:utils.toWei(amt)}, (err, res) => {
        const body = { txhash: res };
        fetch('http://localhost:8546/deposit', {
          method: 'post',
          body:    JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          resolve(json)
        })
      })
    })
  }

  getReceived(user) {
    return new Promise(function(resolve, reject) {
      const body = { user: user };
      fetch('http://localhost:8546/received', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        resolve(json)
      })
    })    
  }

  getIDs() {

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

  checkDeposit(address) {
    return new Promise(function(resolve,reject) {
      request.open('POST', 'http://localhost:8546/checkDeposit', true)
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
      request.send(JSON.stringify({address: address}))
      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          resolve(request.responseText)
        }
      }
    })
  }

  securityCheck(coinIDs){
    // TODO: ping server
  }

  verifyProof(g, y, pi) {
    // check Q^l(ug^alpha)^r == wz^alpha
  }

}

module.exports = VectorClient