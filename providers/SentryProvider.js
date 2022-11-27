"use strict";

/**
 *
 * (c) Tulio Calil <tuliocll@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { ServiceProvider } = require("@adonisjs/fold");

class SentryLogProvider extends ServiceProvider {
  register() {
    this.app.extend("Adonis/Src/Logger", "sentry-log", () => {
      const SentryLog = require("../src/Sentry");
      return new SentryLog();
    });
  }
}

module.exports = SentryLogProvider;
