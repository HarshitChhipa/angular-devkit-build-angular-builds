"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.
const core_1 = require("@angular-devkit/core");
const { bold, green, red, reset, white, yellow } = core_1.terminal;
function formatSize(size) {
    if (size <= 0) {
        return '0 bytes';
    }
    const abbreviations = ['bytes', 'kB', 'MB', 'GB'];
    const index = Math.floor(Math.log(size) / Math.log(1000));
    return `${+(size / Math.pow(1000, index)).toPrecision(3)} ${abbreviations[index]}`;
}
exports.formatSize = formatSize;
function statsToString(json, statsConfig) {
    const colors = statsConfig.colors;
    const rs = (x) => colors ? reset(x) : x;
    const w = (x) => colors ? bold(white(x)) : x;
    const g = (x) => colors ? bold(green(x)) : x;
    const y = (x) => colors ? bold(yellow(x)) : x;
    const changedChunksStats = json.chunks
        .filter((chunk) => chunk.rendered)
        .map((chunk) => {
        const asset = json.assets.filter((x) => x.name == chunk.files[0])[0];
        const size = asset ? ` ${formatSize(asset.size)}` : '';
        const files = chunk.files.join(', ');
        const names = chunk.names ? ` (${chunk.names.join(', ')})` : '';
        const initial = y(chunk.entry ? '[entry]' : chunk.initial ? '[initial]' : '');
        const flags = ['rendered', 'recorded']
            .map(f => f && chunk[f] ? g(` [${f}]`) : '')
            .join('');
        return `chunk {${y(chunk.id)}} ${g(files)}${names}${size} ${initial}${flags}`;
    });
    const unchangedChunkNumber = json.chunks.length - changedChunksStats.length;
    if (unchangedChunkNumber > 0) {
        return '\n' + rs(core_1.tags.stripIndents `
      Date: ${w(new Date().toISOString())} - Hash: ${w(json.hash)} - Time: ${w('' + json.time)}ms
      ${unchangedChunkNumber} unchanged chunks
      ${changedChunksStats.join('\n')}
      `);
    }
    else {
        return '\n' + rs(core_1.tags.stripIndents `
      Date: ${w(new Date().toISOString())}
      Hash: ${w(json.hash)}
      Time: ${w('' + json.time)}ms
      ${changedChunksStats.join('\n')}
      `);
    }
}
exports.statsToString = statsToString;
function statsWarningsToString(json, statsConfig) {
    const colors = statsConfig.colors;
    const rs = (x) => colors ? reset(x) : x;
    const y = (x) => colors ? bold(yellow(x)) : x;
    return rs('\n' + json.warnings.map((warning) => y(`WARNING in ${warning}`)).join('\n\n'));
}
exports.statsWarningsToString = statsWarningsToString;
function statsErrorsToString(json, statsConfig) {
    const colors = statsConfig.colors;
    const rs = (x) => colors ? reset(x) : x;
    const r = (x) => colors ? bold(red(x)) : x;
    return rs('\n' + json.errors.map((error) => r(`ERROR in ${error}`)).join('\n'));
}
exports.statsErrorsToString = statsErrorsToString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L2J1aWxkX2FuZ3VsYXIvc3JjL2FuZ3VsYXItY2xpLWZpbGVzL3V0aWxpdGllcy9zdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7R0FNRztBQUNILGlCQUFpQjtBQUNqQiwrREFBK0Q7QUFDL0QsK0NBQXNEO0FBR3RELE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLGVBQVEsQ0FBQztBQUU1RCxTQUFnQixVQUFVLENBQUMsSUFBWTtJQUNyQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDYixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELE1BQU0sYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUUxRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNyRixDQUFDO0FBVEQsZ0NBU0M7QUFHRCxTQUFnQixhQUFhLENBQUMsSUFBUyxFQUFFLFdBQWdCO0lBQ3ZELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDbEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTTtTQUNuQyxNQUFNLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDdEMsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMs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SUFDbEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkQsT0FBTyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkYsQ0FBQztBQU5ELGtEQU1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gdHNsaW50OmRpc2FibGVcbi8vIFRPRE86IGNsZWFudXAgdGhpcyBmaWxlLCBpdCdzIGNvcGllZCBhcyBpcyBmcm9tIEFuZ3VsYXIgQ0xJLlxuaW1wb3J0IHsgdGFncywgdGVybWluYWwgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5cblxuY29uc3QgeyBib2xkLCBncmVlbiwgcmVkLCByZXNldCwgd2hpdGUsIHllbGxvdyB9ID0gdGVybWluYWw7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTaXplKHNpemU6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gJzAgYnl0ZXMnO1xuICB9XG5cbiAgY29uc3QgYWJicmV2aWF0aW9ucyA9IFsnYnl0ZXMnLCAna0InLCAnTUInLCAnR0InXTtcbiAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgubG9nKHNpemUpIC8gTWF0aC5sb2coMTAwMCkpO1xuXG4gIHJldHVybiBgJHsrKHNpemUgLyBNYXRoLnBvdygxMDAwLCBpbmRleCkpLnRvUHJlY2lzaW9uKDMpfSAke2FiYnJldmlhdGlvbnNbaW5kZXhdfWA7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRzVG9TdHJpbmcoanNvbjogYW55LCBzdGF0c0NvbmZpZzogYW55KSB7XG4gIGNvbnN0IGNvbG9ycyA9IHN0YXRzQ29uZmlnLmNvbG9ycztcbiAgY29uc3QgcnMgPSAoeDogc3RyaW5nKSA9PiBjb2xvcnMgPyByZXNldCh4KSA6IHg7XG4gIGNvbnN0IHcgPSAoeDogc3RyaW5nKSA9PiBjb2xvcnMgPyBib2xkKHdoaXRlKHgpKSA6IHg7XG4gIGNvbnN0IGcgPSAoeDogc3RyaW5nKSA9PiBjb2xvcnMgPyBib2xkKGdyZWVuKHgpKSA6IHg7XG4gIGNvbnN0IHkgPSAoeDogc3RyaW5nKSA9PiBjb2xvcnMgPyBib2xkKHllbGxvdyh4KSkgOiB4O1xuXG4gIGNvbnN0IGNoYW5nZWRDaHVua3NTdGF0cyA9IGpzb24uY2h1bmtzXG4gICAgLmZpbHRlcigoY2h1bms6IGFueSkgPT4gY2h1bmsucmVuZGVyZWQpXG4gICAgLm1hcCgoY2h1bms6IGFueSkgPT4ge1xuICAgICAgY29uc3QgYXNzZXQgPSBqc29uLmFzc2V0cy5maWx0ZXIoKHg6IGFueSkgPT4geC5uYW1lID09IGNodW5rLmZpbGVzWzBdKVswXTtcbiAgICAgIGNvbnN0IHNpemUgPSBhc3NldCA/IGAgJHtmb3JtYXRTaXplKGFzc2V0LnNpemUpfWAgOiAnJztcbiAgICAgIGNvbnN0IGZpbGVzID0gY2h1bmsuZmlsZXMuam9pbignLCAnKTtcbiAgICAgIGNvbnN0IG5hbWVzID0gY2h1bmsubmFtZXMgPyBgICgke2NodW5rLm5hbWVzLmpvaW4oJywgJyl9KWAgOiAnJztcbiAgICAgIGNvbnN0IGluaXRpYWwgPSB5KGNodW5rLmVudHJ5ID8gJ1tlbnRyeV0nIDogY2h1bmsuaW5pdGlhbCA/ICdbaW5pdGlhbF0nIDogJycpO1xuICAgICAgY29uc3QgZmxhZ3MgPSBbJ3JlbmRlcmVkJywgJ3JlY29yZGVkJ11cbiAgICAgICAgLm1hcChmID0+IGYgJiYgY2h1bmtbZl0gPyBnKGAgWyR7Zn1dYCkgOiAnJylcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICByZXR1cm4gYGNodW5rIHske3koY2h1bmsuaWQpfX0gJHtnKGZpbGVzKX0ke25hbWVzfSR7c2l6ZX0gJHtpbml0aWFsfSR7ZmxhZ3N9YDtcbiAgICB9KTtcblxuICBjb25zdCB1bmNoYW5nZWRDaHVua051bWJlciA9IGpzb24uY2h1bmtzLmxlbmd0aCAtIGNoYW5nZWRDaHVua3NTdGF0cy5sZW5ndGg7XG5cbiAgaWYgKHVuY2hhbmdlZENodW5rTnVtYmVyID4gMCkge1xuICAgIHJldHVybiAnXFxuJyArIHJzKHRhZ3Muc3RyaXBJbmRlbnRzYFxuICAgICAgRGF0ZTogJHt3KG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSl9IC0gSGFzaDogJHt3KGpzb24uaGFzaCl9IC0gVGltZTogJHt3KCcnICsganNvbi50aW1lKX1tc1xuICAgICAgJHt1bmNoYW5nZWRDaHVua051bWJlcn0gdW5jaGFuZ2VkIGNodW5rc1xuICAgICAgJHtjaGFuZ2VkQ2h1bmtzU3RhdHMuam9pbignXFxuJyl9XG4gICAgICBgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ1xcbicgKyBycyh0YWdzLnN0cmlwSW5kZW50c2BcbiAgICAgIERhdGU6ICR7dyhuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpfVxuICAgICAgSGFzaDogJHt3KGpzb24uaGFzaCl9XG4gICAgICBUaW1lOiAke3coJycgKyBqc29uLnRpbWUpfW1zXG4gICAgICAke2NoYW5nZWRDaHVua3NTdGF0cy5qb2luKCdcXG4nKX1cbiAgICAgIGApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0c1dhcm5pbmdzVG9TdHJpbmcoanNvbjogYW55LCBzdGF0c0NvbmZpZzogYW55KSB7XG4gIGNvbnN0IGNvbG9ycyA9IHN0YXRzQ29uZmlnLmNvbG9ycztcbiAgY29uc3QgcnMgPSAoeDogc3RyaW5nKSA9PiBjb2xvcnMgPyByZXNldCh4KSA6IHg7XG4gIGNvbnN0IHkgPSAoeDogc3RyaW5nKSA9PiBjb2xvcnMgPyBib2xkKHllbGxvdyh4KSkgOiB4O1xuXG4gIHJldHVybiBycygnXFxuJyArIGpzb24ud2FybmluZ3MubWFwKCh3YXJuaW5nOiBhbnkpID0+IHkoYFdBUk5JTkcgaW4gJHt3YXJuaW5nfWApKS5qb2luKCdcXG5cXG4nKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0c0Vycm9yc1RvU3RyaW5nKGpzb246IGFueSwgc3RhdHNDb25maWc6IGFueSkge1xuICBjb25zdCBjb2xvcnMgPSBzdGF0c0NvbmZpZy5jb2xvcnM7XG4gIGNvbnN0IHJzID0gKHg6IHN0cmluZykgPT4gY29sb3JzID8gcmVzZXQoeCkgOiB4O1xuICBjb25zdCByID0gKHg6IHN0cmluZykgPT4gY29sb3JzID8gYm9sZChyZWQoeCkpIDogeDtcblxuICByZXR1cm4gcnMoJ1xcbicgKyBqc29uLmVycm9ycy5tYXAoKGVycm9yOiBhbnkpID0+IHIoYEVSUk9SIGluICR7ZXJyb3J9YCkpLmpvaW4oJ1xcbicpKTtcbn1cbiJdfQ==