const fp = require('lodash/fp')

const mappings = {
  _cn6ca: 'name',
  _cokwr: 'occupation',
  _cpzh4: 'city',
  executing: 'achiever',
  _chk2m: 'arranger',
  _ciyn3: 'belief',
  _ckd7g: 'consistency',
  _clrrx: 'deliberative',
  _cyevm: 'discipline',
  _cztg3: 'focus',
  _d2mkx: 'restorative',
  _d180g: 'responsibility',
  influencing: 'activator',
  _cu76f: 'command',
  _cvlqs: 'communication',
  _cx0b9: 'competition',
  _d9ney: 'maximizer',
  _db1zf: 'self-assurance',
  _dcgjs: 'significance',
  _ddv49: 'woo',
  relationshipbuilding: 'adaptability',
  _d5fpr: 'connectedness',
  _d6ua4: 'developer',
  _d88ul: 'empathy',
  _dkvya: 'harmony',
  _dmair: 'includer',
  _dnp34: 'individualization',
  _dp3nl: 'positivity',
  _df9om: 'relator',
  strategicthinking: 'analytical',
  _di2tg: 'context',
  _djhdx: 'futuristic',
  _dw4je: 'ideation',
  _dxj3v: 'input',
  _dyxo8: 'intellection',
  _e0c8p: 'learner',
  _dqi9q: 'strategic'
}

const keys = fp.keys(mappings)

function cellName(key) {
  return mappings[key]
}

function map(row) {
  return fp.pipe([
    fp.pickAll(keys),
    fp.pickBy(fp.identity),
    fp.mapKeys(cellName)
  ])(row)
}

module.exports = {map}
