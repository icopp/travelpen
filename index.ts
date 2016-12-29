/**
 * travelpen 1.0.0
 * MIT license
 *
 * derived from JavaScript Debug
 * @see https://github.com/cowboy/javascript-debug
 */

export class Travelpen {
  private _logLevel: number = 9
  private _logCallback: Function | undefined = undefined
  private _forceLogCallback: boolean = false
  private _logs: any[] = []

  setCallback (callback: (logLevel: number, ...optionalParams: any[]) => void, force?: boolean, limit?: number) {
    this._forceLogCallback = force || false
    this._logCallback = callback || undefined
    limit = typeof limit === 'number' ? limit : this._logs.length

    for (let i = Math.max(0, this._logs.length - limit); i < this._logs.length; i++) {
      this._logCallback.apply(this, this._logs[i])
    }
  }

  setLevel (level: number) {
    this._logLevel = typeof level === 'number' ? level : 9
  }

  //////////////////////////////////////////////////////////////////////////////
  // Pass-through methods
  //////////////////////////////////////////////////////////////////////////////

  assert (test?: boolean, message?: string, ...optionalParams: any[]): void {
    if (this._logLevel !== 0 && console && console.assert) {
      console.assert.apply(console, arguments)
    }
  }

  clear (): void {
    if (this._logLevel !== 0 && console && console.clear) {
      console.clear.apply(console, arguments)
    }
  }

  count (countTitle?: string): void {
    if (this._logLevel !== 0 && console && console.count) {
      console.count.apply(console, arguments)
    }
  }

  dir (value?: any, ...optionalParams: any[]): void {
    if (this._logLevel !== 0 && console && console.dir) {
      console.dir.apply(console, arguments)
    }
  }

  dirxml (value: any): void {
    if (this._logLevel !== 0 && console && console.dirxml) {
      console.dir.apply(console, arguments)
    }
  }

  exception (message?: string, ...optionalParams: any[]): void {
    if (this._logLevel !== 0 && console && console.exception) {
      console.exception.apply(console, arguments)
    }
  }

  group (groupTitle?: string): void {
    if (this._logLevel !== 0 && console && console.group) {
      console.group.apply(console, arguments)
    }
  }

  groupCollapsed (groupTitle?: string): void {
    if (this._logLevel !== 0 && console && console.groupCollapsed) {
      console.groupCollapsed.apply(console, arguments)
    }
  }

  groupEnd (): void {
    if (this._logLevel !== 0 && console && console.groupEnd) {
      console.groupEnd.apply(console, arguments)
    }
  }

  profile (reportName?: string): void {
    if (this._logLevel !== 0 && console && console.profile) {
      console.profile.apply(console, arguments)
    }
  }

  profileEnd (): void {
    if (this._logLevel !== 0 && console && console.profileEnd) {
      console.profileEnd.apply(console, arguments)
    }
  }

  table (...data: any[]): void {
    if (this._logLevel !== 0 && console && console.table) {
      console.table.apply(console, arguments)
    }
  }

  time (timerName?: string): void {
    if (this._logLevel !== 0 && console && console.time) {
      console.time.apply(console, arguments)
    }
  }

  timeEnd (timerName?: string): void {
    if (this._logLevel !== 0 && console && console.timeEnd) {
      console.timeEnd.apply(console, arguments)
    }
  }

  trace (message?: any, ...optionalParams: any[]): void {
    if (this._logLevel !== 0 && console && console.trace) {
      console.trace.apply(console, arguments)
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Logging methods
  //////////////////////////////////////////////////////////////////////////////

  log (message?: any, ...optionalParams: any[]) {
    this._logs.push([1, ...Array.prototype.slice.call(arguments)])

    if (this._logCallback && ((!console) || this._forceLogCallback)) {
      this._logCallback.apply(this, [1, ...Array.prototype.slice.call(arguments)])
    }

    if ((this._logLevel >= 5 || this._logLevel <= -1) && console) {
      if (console.log) {
        console.log.apply(console, arguments)
      }
    }
  }

  debug (message?: any, ...optionalParams: any[]) {
    this._logs.push([2, ...Array.prototype.slice.call(arguments)])

    if (this._logCallback && ((!console) || this._forceLogCallback)) {
      this._logCallback.apply(this, [2, ...Array.prototype.slice.call(arguments)])
    }

    if ((this._logLevel >= 4 || this._logLevel <= -2) && console) {
      if (console.debug) {
        console.debug.apply(console, arguments)
      } else if (console.log) {
        console.log.apply(console, arguments)
      }
    }
  }

  info (message?: any, ...optionalParams: any[]) {
    this._logs.push([3, ...Array.prototype.slice.call(arguments)])

    if (this._logCallback && ((!console) || this._forceLogCallback)) {
      this._logCallback.apply(this, [3, ...Array.prototype.slice.call(arguments)])
    }

    if ((this._logLevel >= 3 || this._logLevel <= -3) && console) {
      if (console.info) {
        console.info.apply(console, arguments)
      } else if (console.log) {
        console.log.apply(console, arguments)
      }
    }
  }

  warn (message?: any, ...optionalParams: any[]) {
    this._logs.push([4, ...Array.prototype.slice.call(arguments)])

    if (this._logCallback && ((!console) || this._forceLogCallback)) {
      this._logCallback.apply(this, [4, ...Array.prototype.slice.call(arguments)])
    }

    if ((this._logLevel >= 2 || this._logLevel <= -4) && console) {
      if (console.warn) {
        console.warn.apply(console, arguments)
      } else if (console.log) {
        console.log.apply(console, arguments)
      }
    }
  }

  error (message?: any, ...optionalParams: any[]) {
    this._logs.push([5, ...Array.prototype.slice.call(arguments)])

    if (this._logCallback && ((!console) || this._forceLogCallback)) {
      this._logCallback.apply(this, [5, ...Array.prototype.slice.call(arguments)])
    }

    if ((this._logLevel >= 1 || this._logLevel <= -5) && console) {
      if (console.error) {
        console.error.apply(console, arguments)
      } else if (console.log) {
        console.log.apply(console, arguments)
      }
    }
  }
}

let travelpen = new Travelpen()

export default travelpen
