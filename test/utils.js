"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular-devkit/architect/testing");
const core_1 = require("@angular-devkit/core");
const devkitRoot = core_1.normalize(global._DevKitRoot); // tslint:disable-line:no-any
const workspaceRoot = core_1.join(devkitRoot, 'tests/@angular_devkit/build_angular/hello-world-app/');
exports.host = new testing_1.TestProjectHost(workspaceRoot);
exports.outputPath = core_1.normalize('dist');
exports.browserTargetSpec = { project: 'app', target: 'build' };
exports.devServerTargetSpec = { project: 'app', target: 'serve' };
exports.extractI18nTargetSpec = { project: 'app', target: 'extract-i18n' };
exports.karmaTargetSpec = { project: 'app', target: 'test' };
exports.tslintTargetSpec = { project: 'app', target: 'lint' };
exports.protractorTargetSpec = { project: 'app-e2e', target: 'e2e' };
var Timeout;
(function (Timeout) {
    Timeout[Timeout["Basic"] = 30000] = "Basic";
    Timeout[Timeout["Standard"] = 45000] = "Standard";
    Timeout[Timeout["Complex"] = 60000] = "Complex";
    Timeout[Timeout["Massive"] = 120000] = "Massive";
})(Timeout = exports.Timeout || (exports.Timeout = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L2J1aWxkX2FuZ3VsYXIvdGVzdC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOztBQUVILCtEQUFvRTtBQUNwRSwrQ0FBdUQ7QUFHdkQsTUFBTSxVQUFVLEdBQUcsZ0JBQVMsQ0FBRSxNQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7QUFDeEYsTUFBTSxhQUFhLEdBQUcsV0FBSSxDQUFDLFVBQVUsRUFBRSxzREFBc0QsQ0FBQyxDQUFDO0FBQ2xGLFFBQUEsSUFBSSxHQUFHLElBQUkseUJBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxRQUFBLFVBQVUsR0FBRyxnQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRS9CLFFBQUEsaUJBQWlCLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUN4RCxRQUFBLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDMUQsUUFBQSxxQkFBcUIsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDO0FBQ25FLFFBQUEsZUFBZSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDckQsUUFBQSxnQkFBZ0IsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ3RELFFBQUEsb0JBQW9CLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUUxRSxJQUFZLE9BS1g7QUFMRCxXQUFZLE9BQU87SUFDakIsMkNBQWEsQ0FBQTtJQUNiLGlEQUFzQixDQUFBO0lBQ3RCLCtDQUFtQixDQUFBO0lBQ25CLGdEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IFRlc3RQcm9qZWN0SG9zdCB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9hcmNoaXRlY3QvdGVzdGluZyc7XG5pbXBvcnQgeyBqb2luLCBub3JtYWxpemUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5cblxuY29uc3QgZGV2a2l0Um9vdCA9IG5vcm1hbGl6ZSgoZ2xvYmFsIGFzIGFueSkuX0RldktpdFJvb3QpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuY29uc3Qgd29ya3NwYWNlUm9vdCA9IGpvaW4oZGV2a2l0Um9vdCwgJ3Rlc3RzL0Bhbmd1bGFyX2RldmtpdC9idWlsZF9hbmd1bGFyL2hlbGxvLXdvcmxkLWFwcC8nKTtcbmV4cG9ydCBjb25zdCBob3N0ID0gbmV3IFRlc3RQcm9qZWN0SG9zdCh3b3Jrc3BhY2VSb290KTtcbmV4cG9ydCBjb25zdCBvdXRwdXRQYXRoID0gbm9ybWFsaXplKCdkaXN0Jyk7XG5cbmV4cG9ydCBjb25zdCBicm93c2VyVGFyZ2V0U3BlYyA9IHsgcHJvamVjdDogJ2FwcCcsIHRhcmdldDogJ2J1aWxkJyB9O1xuZXhwb3J0IGNvbnN0IGRldlNlcnZlclRhcmdldFNwZWMgPSB7IHByb2plY3Q6ICdhcHAnLCB0YXJnZXQ6ICdzZXJ2ZScgfTtcbmV4cG9ydCBjb25zdCBleHRyYWN0STE4blRhcmdldFNwZWMgPSB7IHByb2plY3Q6ICdhcHAnLCB0YXJnZXQ6ICdleHRyYWN0LWkxOG4nIH07XG5leHBvcnQgY29uc3Qga2FybWFUYXJnZXRTcGVjID0geyBwcm9qZWN0OiAnYXBwJywgdGFyZ2V0OiAndGVzdCcgfTtcbmV4cG9ydCBjb25zdCB0c2xpbnRUYXJnZXRTcGVjID0geyBwcm9qZWN0OiAnYXBwJywgdGFyZ2V0OiAnbGludCcgfTtcbmV4cG9ydCBjb25zdCBwcm90cmFjdG9yVGFyZ2V0U3BlYyA9IHsgcHJvamVjdDogJ2FwcC1lMmUnLCB0YXJnZXQ6ICdlMmUnIH07XG5cbmV4cG9ydCBlbnVtIFRpbWVvdXQge1xuICBCYXNpYyA9IDMwMDAwLFxuICBTdGFuZGFyZCA9IEJhc2ljICogMS41LFxuICBDb21wbGV4ID0gQmFzaWMgKiAyLFxuICBNYXNzaXZlID0gQmFzaWMgKiA0LFxufVxuIl19