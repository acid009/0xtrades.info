/*
 * 0xtrades.info
 * https://github.com/vsergeev/0xtrades.info
 *
 * Copyright (c) 2017 Ivan (Vanya) A. Sergeev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/******************************************************************************/
/* Constants */
/******************************************************************************/

var ERRORS = {
  GET_NETWORK_ID:       1,
  GET_BLOCK_HEIGHT:     2,
  UNSUPPORTED_NETWORK:  3,
};

var ZEROEX_GENESIS_BLOCK = {
  1: 4145578,
  42: 4145578,
};

var ZEROEX_RELAY_ADDRESSES = {
  1: {
    "0xa258b39954cef5cb142fd567a46cddb31a670124": "Radar Relay",
    "0xeb71bad396acaa128aeadbc7dbd59ca32263de01": "Kin Alpha",
    "0xc22d5b2951db72b44cfb8089bb8cd374a3c354ea": "OpenRelay",
  },
  42: {
    "0xa258b39954cef5cb142fd567a46cddb31a670124": "Radar Relay",
  },
};

/* Populated by model */
var ZEROEX_TOKEN_INFOS = {
    /* Pre-load some newer token infos */
    "0x8f8221afbb33998d8584a2b05749ba73c37a938a": {
      name: "Request",
      symbol: "REQ",
      decimals: 18,
    },
    "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a": {
      name: "Populous Platform",
      symbol: "PPT",
      decimals: 8,
    },
    "0xab16e0d25c06cb376259cc18c1de4aca57605589": {
      name: "FinallyUsableCryptoKarma",
      symbol: "FUCK",
      decimals: 4,
    },
    "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195": {
      name: "Po.et",
      symbol: "POE",
      decimals: 8,
    },
    "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06": {
      name: "Patientory",
      symbol: "PTOY",
      decimals: 8,
    },
    "0x0f5d2fb29fb7d3cfee444a200298f468908cc942": {
      name: "Decentraland MANA",
      symbol: "MANA",
      decimals: 18,
    },
    "0xea38eaa3c86c8f9b751533ba2e562deb9acded40": {
      name: "Fuel Token",
      symbol: "FUEL",
      decimals: 18,
    },
    "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6": {
      name: "Ripio Credit Network Token",
      symbol: "RCN",
      decimals: 18,
    },
    "0x386467f1f3ddbe832448650418311a479eecfc57": {
      name: "Embers",
      symbol: "EMB",
      decimals: 0,
    },
    "0x814964b1bceaf24e26296d031eadf134a2ca4105": {
      name: "Newbium",
      symbol: "NEWB",
      decimals: 0,
    },
    "0x2fd41f516fac94ed08e156f489f56ca3a80b04d0": {
      name: "eBTC",
      symbol: "EBTC",
      decimals: 8,
    },
    "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d": {
      name: "Quantstamp Token",
      symbol: "QSP",
      decimals: 18,
    },
    "0x56ba2ee7890461f463f7be02aac3099f6d5811a8": {
      name: "BlockCAT Token",
      symbol: "CAT",
      decimals: 18,
    },
    "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b": {
      name: "UnikoinGold",
      symbol: "UKG",
      decimals: 18,
    },
    "0xea1f346faf023f974eb5adaf088bbcdf02d761f4": {
      name: "Blocktix Token",
      symbol: "TIX",
      decimals: 18,
    },
    "0xd2d6158683aee4cc838067727209a0aaf4359de3": {
      name: "Bounty0x Token",
      symbol: "BNTY",
      decimals: 18,
    },
    "0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd": {
      name: "Verify Token",
      symbol: "CRED",
      decimals: 18,
    },
    "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": {
      name: "Dai Stablecoin v1.0",
      symbol: "DAI",
      decimals: 18,
    },
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
      name: "Wrapped Ether",
      symbol: "WETH",
      decimals: 18,
    },
};

/* Populated by model */
var ZEROEX_EXCHANGE_ADDRESS = null;

/* Populated by model */
var ZEROEX_TOKEN_ADDRESS = null;

var NETWORK_NAME = {
  1: "Mainnet",
  3: "Ropsten",
  4: "Rinkeby",
  42: "Kovan",
};

var NETWORK_BLOCK_EXPLORER = {
  1: "https://etherscan.io",
  3: "https://ropsten.etherscan.io",
  4: "https://rinkeby.etherscan.io",
  42: "https://kovan.etherscan.io",
};

var PRICE_API_URL = function (symbols, base) {
  return "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + symbols.join(',') + "&tsyms=" + base;
};

var INFURA_API_URL = "https://mainnet.infura.io/rdkuEWbeKAjSR9jZ6P1h";

var ZEROEX_PORTAL_URL = "https://0xproject.com/portal";

var STATISTICS_TIME_WINDOW = 86400; /* 24 hours */

var BLOCK_FETCH_COUNT = Math.ceil(STATISTICS_TIME_WINDOW/17);

var BLOCK_INFO_RETRY_TIMEOUT = 15*1000;

var PRICE_UPDATE_TIMEOUT = 5*60*1000;

var PRICE_CHART_DEFAULT_PAIR = "ZRX/WETH";

var CHART_DEFAULT_COLORS = ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a',
                            '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94',
                            '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d',
                            '#17becf', '#9edae5'];

var CHART_DEFAULT_TOOLTIP_CALLBACK = function (item, data) {
  var label = data.labels[item.index];
  var value = data.datasets[item.datasetIndex].tooltips[item.index] || data.datasets[item.datasetIndex].data[item.index];
  return label + ": " + value;
};

/* From http://www.localeplanet.com/api/auto/currencymap.json */
var FIAT_CURRENCY_MAP = {
  "USD": {
    "symbol": "$",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "USD"
  },
  "EUR": {
    "symbol": "€",
    "symbol_native": "€",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "EUR"
  },
  "GBP": {
    "symbol": "£",
    "symbol_native": "£",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "GBP"
  },
  "JPY": {
    "symbol": "¥",
    "symbol_native": "￥",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "JPY"
  },
  "KRW": {
    "symbol": "₩",
    "symbol_native": "₩",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "KRW"
  },
};

var FIAT_CURRENCY_DEFAULT = "USD";
