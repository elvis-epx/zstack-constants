var COMMON = require('./COMMON');

var UTIL = {
    CMD_STATUS: COMMON.CMD_STATUS,
    DEV_STATES: COMMON.DEV_STATES,
    CHANNEL_MASK: COMMON.CHANNEL_MASK,
    SECURITY_LEVEL: COMMON.SECURITY_LEVEL,
    ADDRESS_MODE: COMMON.ADDRESS_MODE
};

UTIL.GET_NV_STATUS = {
    'SUCCESS': 0x00,
    'GET_IEEE_ADDR_FAIL': 0x01,
    'GET_SCAN_CHANNEL_FAIL': 0x02,
    'GET_PAN_ID_FAIL': 0x04,
    'GET_SECURITY_LEVEL_FAIL': 0x08,
    'GET_PRECONFIG_KEY_FAIL': 0x10,
};

UTIL.SUBSYSTEM_ID = {
    'SYS': 0x0100,
    'MAC': 0x0200,
    'NWK': 0x0300,
    'AF': 0x0400,
    'ZDO': 0x0500,
    'SAPI': 0x0600,
    'UTIL': 0x0700,
    'DBG': 0x0800,
    'APP': 0x0900,
    'ALL_SUBSYSTEM': 0xFFFF
};

UTIL.DEVICE_TYPE = {
    'NONE': 0,
    'COORDINATOR': 1,
    'ROUTER': 2,
    'END_DEVICE': 4
};

UTIL.KEY_EVENT = {
    'KEY_1': 0,
    'KEY_2': 1,
    'KEY_3': 2,
    'KEY_4': 3,
    'KEY_5': 4,
    'KEY_6': 5,
    'KEY_7': 6,
    'KEY_8': 7
};

UTIL.KEY_VALUE = {
    'KEY_1': 0x01,
    'KEY_2': 0x02,
    'KEY_3': 0x04,
    'KEY_4': 0x08,
    'KEY_5': 0x10,
    'KEY_6': 0x20,
    'KEY_7': 0x40,
    'KEY_8': 0x80
};

UTIL.LED_MODE = {
    'OFF': 0,
    'ON': 1,
    'BLINK': 2,
    'FLASH': 3,
    'TOGGLE': 4
};

UTIL.LED_NUM = {
    'LED_1': 1,
    'LED_2': 2,
    'LED_3': 3,
    'LED_4': 4,
    'ALL_LEDS': 0xff
};

UTIL.SUBS_ACTION = {
    'UNSUBSCRIBE': 0,
    'SUBSCRIBE': 1
};

UTIL.ACK_PENDING_OPTION = {
    'ACK_DISABLE': 0,
    'ACK_ENABLE': 1
};

UTIL.NODE_RELATION = {
    'PARENT': 0x00,
    'CHILD_RFD': 0x01,
    'CHILD_RFD_RX_IDLE': 0x02,
    'CHILD_FFD': 0x03,
    'CHILD_FFD_RX_IDLE': 0x04,
    'NEIGHBOR': 0x05,
    'OTHER': 0x06,
    'NOTUSED': 0xFF
};

module.exports = UTIL;
