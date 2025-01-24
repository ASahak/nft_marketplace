// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* ----- INVALID (1xxx) ----- */
  INVALID_METHOD: {
    message: 'Invalid method.',
    code: 1001
  },
  INVALID_EVENT: {
    message: 'Invalid event.',
    code: 1002
  },
  INVALID_UPDATE_REQUEST: {
    message: 'Invalid update request.',
    code: 1003
  },
  INVALID_EXTEND_REQUEST: {
    message: 'Invalid extend request.',
    code: 1004
  },
  INVALID_SESSION_SETTLE_REQUEST: {
    message: 'Invalid session settle request.',
    code: 1005
  },
  /* ----- UNAUTHORIZED (3xxx) ----- */
  UNAUTHORIZED_METHOD: {
    message: 'Unauthorized method.',
    code: 3001
  },
  UNAUTHORIZED_EVENT: {
    message: 'Unauthorized event.',
    code: 3002
  },
  UNAUTHORIZED_UPDATE_REQUEST: {
    message: 'Unauthorized update request.',
    code: 3003
  },
  UNAUTHORIZED_EXTEND_REQUEST: {
    message: 'Unauthorized extend request.',
    code: 3004
  },
  /* ----- REJECTED (5xxx) ----- */
  USER_REJECTED: {
    message: 'User rejected.',
    code: 5000
  },
  USER_REJECTED_CHAINS: {
    message: 'User rejected chains.',
    code: 5001
  },
  USER_REJECTED_METHODS: {
    message: 'User rejected methods.',
    code: 5002
  },
  USER_REJECTED_EVENTS: {
    message: 'User rejected events.',
    code: 5003
  },
  UNSUPPORTED_CHAINS: {
    message: 'Unsupported chains.',
    code: 5100
  },
  UNSUPPORTED_METHODS: {
    message: 'Unsupported methods.',
    code: 5101
  },
  UNSUPPORTED_EVENTS: {
    message: 'Unsupported events.',
    code: 5102
  },
  UNSUPPORTED_ACCOUNTS: {
    message: 'Unsupported accounts.',
    code: 5103
  },
  UNSUPPORTED_NAMESPACE_KEY: {
    message: 'Unsupported namespace key.',
    code: 5104
  },
  /* ----- REASON (6xxx) ----- */
  USER_DISCONNECTED: {
    message: 'User disconnected.',
    code: 6000
  },
  /* ----- FAILURE (7xxx) ----- */
  SESSION_SETTLEMENT_FAILED: {
    message: 'Session settlement failed.',
    code: 7000
  },
  NOT_INITIALIZED: {
    message: 'Not initialized.',
    code: 1
  },
  NO_MATCHING_KEY: {
    message: 'No matching key.',
    code: 2
  },
  RESTORE_WILL_OVERRIDE: {
    message: 'Restore will override.',
    code: 3
  },
  RESUBSCRIBED: {
    message: 'Resubscribed.',
    code: 4
  },
  MISSING_OR_INVALID: {
    message: 'Missing or invalid.',
    code: 5
  },
  EXPIRED: {
    message: 'Expired.',
    code: 6
  },
  UNKNOWN_TYPE: {
    message: 'Unknown type.',
    code: 7
  },
  MISMATCHED_TOPIC: {
    message: 'Mismatched topic.',
    code: 8
  },
  NON_CONFORMING_NAMESPACES: {
    message: 'Non conforming namespaces.',
    code: 9
  },
  INVALID_JSON_RECEIVED_SERVER: {
    code: -32700,
    message:
      'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
  },
  INVALID_JSON_REQUEST: {
    code: -32600,
    message: 'The JSON sent is not a valid Request object.'
  },
  METHOD_NOT_FOUND: {
    code: -32601,
    message: 'The method does not exist / is not available.'
  },
  INVALID_METHOD_PARAMS: {
    code: -32602,
    message: 'Invalid method parameter(s).'
  },
  INTERNAL_JSON_RPC_ERROR: {
    code: -32603,
    message: 'Internal JSON-RPC error.'
  },
  INVALID_INPUT: {
    code: -32000,
    message: 'Invalid input.'
  },
  RESOURCE_NOT_FOUND: {
    code: -32001,
    message: 'Resource not found.'
  },
  RESOURCE_UNAVAILABLE: {
    code: -32002,
    message: 'Resource unavailable.'
  },
  TX_REJECTED: {
    code: -32003,
    message: 'Transaction rejected.'
  },
  NOT_SUPPORTED_METHOD: {
    code: -32004,
    message: 'Method not supported.'
  },
  REQUEST_LIMIT_EXCEED: {
    code: -32005,
    message: 'Request limit exceeded.'
  },
  USER_REJECTED_REQUEST: {
    code: 4001,
    message: 'User rejected the request.'
  },
  UNAUTHORIZED_USER: {
    code: 4100,
    message:
      'The requested account and/or method has not been authorized by the user.'
  },
  NOT_SUPPORTED_BY_ETHEREUM: {
    code: 4200,
    message: 'The requested method is not supported by this Ethereum provider.'
  },
  PROVIDER_DISCONNECTED_FROM_ALL_CHAINS: {
    code: 4900,
    message: 'The provider is disconnected from all chains.'
  },
  PROVIDER_DISCONNECTED_FROM_CHAIN: {
    code: 4901,
    message: 'The provider is disconnected from the specified chain.'
  }
}
