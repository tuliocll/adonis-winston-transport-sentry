"use strict";

/**
 *
 * (c) Tulio Calil <tuliocll@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const winston = require("winston");
const _ = require("lodash");
require("winston-loggly-bulk");
const Sentry = require("winston-transport-sentry-node").default;

/**
 * Reports logs to Sentry
 *
 * @class Sentry
 */
class SentryLog {
  setConfig(config) {
    this.config = Object.assign(
      {},
      {
        name: "adonis-app",
        level: "info",
        timestamp: new Date().toLocaleTimeString(),
      },
      config
    );

    this.logger = winston.createLogger({
      transports: [new Sentry(this.config)],
    });

    this.logger.setLevels(this.levels);
  }

  /**
   * The levels to be used by winston
   *
   * @method levels
   *
   * @return {Object}
   */
  get levels() {
    return {
      emerg: 0,
      alert: 1,
      crit: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7,
    };
  }

  /**
   * Returns the current level for the driver
   *
   * @attribute level
   *
   * @return {String}
   */
  get level() {
    return this.logger.transports[this.config.name].level;
  }

  /**
   * Update driver log level at runtime
   *
   * @param  {String} level
   *
   * @return {void}
   */
  set level(level) {
    this.logger.transports[this.config.name].level = level;
  }

  /**
   * Log message
   *
   * @method log
   *
   * @param  {Number}    level
   * @param  {String}    msg
   * @param  {...Spread} meta
   *
   * @return {void}
   */
  log(level, msg, ...meta) {
    const levelName = _.findKey(this.levels, (num) => num === level);
    this.logger.log(levelName, msg, ...meta);
  }
}

module.exports = SentryLog;
