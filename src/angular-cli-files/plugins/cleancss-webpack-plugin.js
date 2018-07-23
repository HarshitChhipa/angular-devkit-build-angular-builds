"use strict";
// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_sources_1 = require("webpack-sources");
const CleanCSS = require('clean-css');
function hook(compiler, action) {
    if (compiler.hooks) {
        // Webpack 4
        compiler.hooks.compilation.tap('cleancss-webpack-plugin', (compilation) => {
            compilation.hooks.optimizeChunkAssets.tapPromise('cleancss-webpack-plugin', (chunks) => action(compilation, chunks));
        });
    }
    else {
        // Webpack 3
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('optimize-chunk-assets', (chunks, callback) => action(compilation, chunks)
                .then(() => callback())
                .catch((err) => callback(err)));
        });
    }
}
class CleanCssWebpackPlugin {
    constructor(options) {
        this._options = Object.assign({ sourceMap: false, test: (file) => file.endsWith('.css') }, options);
    }
    apply(compiler) {
        hook(compiler, (compilation, chunks) => {
            const cleancss = new CleanCSS({
                compatibility: 'ie9',
                level: 2,
                inline: false,
                returnPromise: true,
                sourceMap: this._options.sourceMap,
            });
            const files = [...compilation.additionalChunkAssets];
            chunks.forEach(chunk => {
                if (chunk.files && chunk.files.length > 0) {
                    files.push(...chunk.files);
                }
            });
            const actions = files
                .filter(file => this._options.test(file))
                .map(file => {
                const asset = compilation.assets[file];
                if (!asset) {
                    return Promise.resolve();
                }
                let content;
                let map;
                if (this._options.sourceMap && asset.sourceAndMap) {
                    const sourceAndMap = asset.sourceAndMap();
                    content = sourceAndMap.source;
                    map = sourceAndMap.map;
                }
                else {
                    content = asset.source();
                }
                if (content.length === 0) {
                    return Promise.resolve();
                }
                return Promise.resolve()
                    .then(() => map ? cleancss.minify(content, map) : cleancss.minify(content))
                    .then((output) => {
                    let hasWarnings = false;
                    if (output.warnings && output.warnings.length > 0) {
                        compilation.warnings.push(...output.warnings);
                        hasWarnings = true;
                    }
                    if (output.errors && output.errors.length > 0) {
                        output.errors
                            .forEach((error) => compilation.errors.push(new Error(error)));
                        return;
                    }
                    // generally means invalid syntax so bail
                    if (hasWarnings && output.stats.minifiedSize === 0) {
                        return;
                    }
                    let newSource;
                    if (output.sourceMap) {
                        newSource = new webpack_sources_1.SourceMapSource(output.styles, file, output.sourceMap.toString(), content, map);
                    }
                    else {
                        newSource = new webpack_sources_1.RawSource(output.styles);
                    }
                    compilation.assets[file] = newSource;
                });
            });
            return Promise.all(actions);
        });
    }
}
exports.CleanCssWebpackPlugin = CleanCssWebpackPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW5jc3Mtd2VicGFjay1wbHVnaW4uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L2J1aWxkX2FuZ3VsYXIvc3JjL2FuZ3VsYXItY2xpLWZpbGVzL3BsdWdpbnMvY2xlYW5jc3Mtd2VicGFjay1wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQiwrREFBK0Q7O0FBVy9ELHFEQUFxRTtBQUVyRSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFXdEMsY0FDRSxRQUFhLEVBQ2IsTUFBMEU7SUFFMUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkIsWUFBWTtRQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLFdBQWdCLEVBQUUsRUFBRTtZQUM3RSxXQUFXLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FDOUMseUJBQXlCLEVBQ3pCLENBQUMsTUFBb0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FDdEQsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sWUFBWTtRQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsV0FBZ0IsRUFBRSxFQUFFO1lBQ2xELFdBQVcsQ0FBQyxNQUFNLENBQ2hCLHVCQUF1QixFQUN2QixDQUFDLE1BQW9CLEVBQUUsUUFBK0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7aUJBQ25GLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdEIsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENB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QUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFTCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTNGRCxzREEyRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZVxuLy8gVE9ETzogY2xlYW51cCB0aGlzIGZpbGUsIGl0J3MgY29waWVkIGFzIGlzIGZyb20gQW5ndWxhciBDTEkuXG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgQ29tcGlsZXIsIGNvbXBpbGF0aW9uIH0gZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgeyBSYXdTb3VyY2UsIFNvdXJjZSwgU291cmNlTWFwU291cmNlIH0gZnJvbSAnd2VicGFjay1zb3VyY2VzJztcblxuY29uc3QgQ2xlYW5DU1MgPSByZXF1aXJlKCdjbGVhbi1jc3MnKTtcblxuaW50ZXJmYWNlIENodW5rIHtcbiAgZmlsZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFuQ3NzV2VicGFja1BsdWdpbk9wdGlvbnMge1xuICBzb3VyY2VNYXA6IGJvb2xlYW47XG4gIHRlc3Q6IChmaWxlOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGhvb2soXG4gIGNvbXBpbGVyOiBhbnksXG4gIGFjdGlvbjogKGNvbXBpbGF0aW9uOiBhbnksIGNodW5rczogQXJyYXk8Q2h1bms+KSA9PiBQcm9taXNlPHZvaWQgfCB2b2lkW10+LFxuKSB7XG4gIGlmIChjb21waWxlci5ob29rcykge1xuICAgIC8vIFdlYnBhY2sgNFxuICAgIGNvbXBpbGVyLmhvb2tzLmNvbXBpbGF0aW9uLnRhcCgnY2xlYW5jc3Mtd2VicGFjay1wbHVnaW4nLCAoY29tcGlsYXRpb246IGFueSkgPT4ge1xuICAgICAgY29tcGlsYXRpb24uaG9va3Mub3B0aW1pemVDaHVua0Fzc2V0cy50YXBQcm9taXNlKFxuICAgICAgICAnY2xlYW5jc3Mtd2VicGFjay1wbHVnaW4nLFxuICAgICAgICAoY2h1bmtzOiBBcnJheTxDaHVuaz4pID0+IGFjdGlvbihjb21waWxhdGlvbiwgY2h1bmtzKSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gV2VicGFjayAzXG4gICAgY29tcGlsZXIucGx1Z2luKCdjb21waWxhdGlvbicsIChjb21waWxhdGlvbjogYW55KSA9PiB7XG4gICAgICBjb21waWxhdGlvbi5wbHVnaW4oXG4gICAgICAgICdvcHRpbWl6ZS1jaHVuay1hc3NldHMnLFxuICAgICAgICAoY2h1bmtzOiBBcnJheTxDaHVuaz4sIGNhbGxiYWNrOiAoZXJyPzogRXJyb3IpID0+IHZvaWQpID0+IGFjdGlvbihjb21waWxhdGlvbiwgY2h1bmtzKVxuICAgICAgICAgIC50aGVuKCgpID0+IGNhbGxiYWNrKCkpXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNhbGxiYWNrKGVycikpLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYW5Dc3NXZWJwYWNrUGx1Z2luIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfb3B0aW9uczogQ2xlYW5Dc3NXZWJwYWNrUGx1Z2luT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYXJ0aWFsPENsZWFuQ3NzV2VicGFja1BsdWdpbk9wdGlvbnM+KSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIHNvdXJjZU1hcDogZmFsc2UsXG4gICAgICB0ZXN0OiAoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmNzcycpLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgYXBwbHkoY29tcGlsZXI6IENvbXBpbGVyKTogdm9pZCB7XG4gICAgaG9vayhjb21waWxlciwgKGNvbXBpbGF0aW9uOiBjb21waWxhdGlvbi5Db21waWxhdGlvbiwgY2h1bmtzOiBBcnJheTxDaHVuaz4pID0+IHtcbiAgICAgIGNvbnN0IGNsZWFuY3NzID0gbmV3IENsZWFuQ1NTKHtcbiAgICAgICAgY29tcGF0aWJpbGl0eTogJ2llOScsXG4gICAgICAgIGxldmVsOiAyLFxuICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICByZXR1cm5Qcm9taXNlOiB0cnVlLFxuICAgICAgICBzb3VyY2VNYXA6IHRoaXMuX29wdGlvbnMuc291cmNlTWFwLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZpbGVzOiBzdHJpbmdbXSA9IFsuLi5jb21waWxhdGlvbi5hZGRpdGlvbmFsQ2h1bmtBc3NldHNdO1xuXG4gICAgICBjaHVua3MuZm9yRWFjaChjaHVuayA9PiB7XG4gICAgICAgIGlmIChjaHVuay5maWxlcyAmJiBjaHVuay5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZmlsZXMucHVzaCguLi5jaHVuay5maWxlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBhY3Rpb25zID0gZmlsZXNcbiAgICAgICAgLmZpbHRlcihmaWxlID0+IHRoaXMuX29wdGlvbnMudGVzdChmaWxlKSlcbiAgICAgICAgLm1hcChmaWxlID0+IHtcbiAgICAgICAgICBjb25zdCBhc3NldCA9IGNvbXBpbGF0aW9uLmFzc2V0c1tmaWxlXSBhcyBTb3VyY2U7XG4gICAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgbGV0IG1hcDogYW55O1xuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNvdXJjZU1hcCAmJiBhc3NldC5zb3VyY2VBbmRNYXApIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUFuZE1hcCA9IGFzc2V0LnNvdXJjZUFuZE1hcCgpO1xuICAgICAgICAgICAgY29udGVudCA9IHNvdXJjZUFuZE1hcC5zb3VyY2U7XG4gICAgICAgICAgICBtYXAgPSBzb3VyY2VBbmRNYXAubWFwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50ID0gYXNzZXQuc291cmNlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBtYXAgPyBjbGVhbmNzcy5taW5pZnkoY29udGVudCwgbWFwKSA6IGNsZWFuY3NzLm1pbmlmeShjb250ZW50KSlcbiAgICAgICAgICAgIC50aGVuKChvdXRwdXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgaGFzV2FybmluZ3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKG91dHB1dC53YXJuaW5ncyAmJiBvdXRwdXQud2FybmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbXBpbGF0aW9uLndhcm5pbmdzLnB1c2goLi4ub3V0cHV0Lndhcm5pbmdzKTtcbiAgICAgICAgICAgICAgICBoYXNXYXJuaW5ncyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAob3V0cHV0LmVycm9ycyAmJiBvdXRwdXQuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZXJyb3I6IHN0cmluZykgPT4gY29tcGlsYXRpb24uZXJyb3JzLnB1c2gobmV3IEVycm9yKGVycm9yKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIGdlbmVyYWxseSBtZWFucyBpbnZhbGlkIHN5bnRheCBzbyBiYWlsXG4gICAgICAgICAgICAgIGlmIChoYXNXYXJuaW5ncyAmJiBvdXRwdXQuc3RhdHMubWluaWZpZWRTaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IG5ld1NvdXJjZTtcbiAgICAgICAgICAgICAgaWYgKG91dHB1dC5zb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICBuZXdTb3VyY2UgPSBuZXcgU291cmNlTWFwU291cmNlKFxuICAgICAgICAgICAgICAgICAgb3V0cHV0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICAgICAgICBvdXRwdXQuc291cmNlTWFwLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U291cmNlID0gbmV3IFJhd1NvdXJjZShvdXRwdXQuc3R5bGVzKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbXBpbGF0aW9uLmFzc2V0c1tmaWxlXSA9IG5ld1NvdXJjZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFjdGlvbnMpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=