"use strict";
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of budget.
 */
var Type;
(function (Type) {
    Type["All"] = "all";
    Type["AllScript"] = "allScript";
    Type["Any"] = "any";
    Type["AnyScript"] = "anyScript";
    Type["Bundle"] = "bundle";
    Type["Initial"] = "initial";
})(Type = exports.Type || (exports.Type = {}));
/**
 * Define the output filename cache-busting hashing mode.
 */
var OutputHashing;
(function (OutputHashing) {
    OutputHashing["All"] = "all";
    OutputHashing["Bundles"] = "bundles";
    OutputHashing["Media"] = "media";
    OutputHashing["None"] = "none";
})(OutputHashing = exports.OutputHashing || (exports.OutputHashing = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkaXN0LXNjaGVtYS9wYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9idWlsZF9hbmd1bGFyL3NyYy9icm93c2VyL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUZBQW1GO0FBQ25GLG9GQUFvRjs7QUErUXBGOztHQUVHO0FBQ0gsSUFBWSxJQU9YO0FBUEQsV0FBWSxJQUFJO0lBQ1osbUJBQVcsQ0FBQTtJQUNYLCtCQUF1QixDQUFBO0lBQ3ZCLG1CQUFXLENBQUE7SUFDWCwrQkFBdUIsQ0FBQTtJQUN2Qix5QkFBaUIsQ0FBQTtJQUNqQiwyQkFBbUIsQ0FBQTtBQUN2QixDQUFDLEVBUFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBT2Y7QUF5QkQ7O0dBRUc7QUFDSCxJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDckIsNEJBQVcsQ0FBQTtJQUNYLG9DQUFtQixDQUFBO0lBQ25CLGdDQUFlLENBQUE7SUFDZiw4QkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUt4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gVEhJUyBGSUxFIElTIEFVVE9NQVRJQ0FMTFkgR0VORVJBVEVELiBUTyBVUERBVEUgVEhJUyBGSUxFIFlPVSBORUVEIFRPIENIQU5HRSBUSEVcbi8vIENPUlJFU1BPTkRJTkcgSlNPTiBTQ0hFTUEgRklMRSwgVEhFTiBSVU4gZGV2a2l0LWFkbWluIGJ1aWxkIChvciBiYXplbCBidWlsZCAuLi4pLlxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1nbG9iYWwtdHNsaW50LWRpc2FibGVcbi8vIHRzbGludDpkaXNhYmxlXG5cbi8qKlxuICogQnJvd3NlciB0YXJnZXQgb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYSB7XG4gICAgLyoqXG4gICAgICogQnVpbGQgdXNpbmcgQWhlYWQgb2YgVGltZSBjb21waWxhdGlvbi5cbiAgICAgKi9cbiAgICBhb3Q/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIExpc3Qgb2Ygc3RhdGljIGFwcGxpY2F0aW9uIGFzc2V0cy5cbiAgICAgKi9cbiAgICBhc3NldHM/OiBBc3NldFBhdHRlcm5bXTtcbiAgICAvKipcbiAgICAgKiBCYXNlIHVybCBmb3IgdGhlIGFwcGxpY2F0aW9uIGJlaW5nIGJ1aWx0LlxuICAgICAqL1xuICAgIGJhc2VIcmVmPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEJ1ZGdldCB0aHJlc2hvbGRzIHRvIGVuc3VyZSBwYXJ0cyBvZiB5b3VyIGFwcGxpY2F0aW9uIHN0YXkgd2l0aGluIGJvdW5kYXJpZXMgd2hpY2ggeW91XG4gICAgICogc2V0LlxuICAgICAqL1xuICAgIGJ1ZGdldHM/OiBCdWRnZXRbXTtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzICdAYW5ndWxhci1kZXZraXQvYnVpbGQtb3B0aW1pemVyJyBvcHRpbWl6YXRpb25zIHdoZW4gdXNpbmcgdGhlICdhb3QnIG9wdGlvbi5cbiAgICAgKi9cbiAgICBidWlsZE9wdGltaXplcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVXNlIGEgc2VwYXJhdGUgYnVuZGxlIGNvbnRhaW5pbmcgY29kZSB1c2VkIGFjcm9zcyBtdWx0aXBsZSBidW5kbGVzLlxuICAgICAqL1xuICAgIGNvbW1vbkNodW5rPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEZWxldGUgdGhlIG91dHB1dCBwYXRoIGJlZm9yZSBidWlsZGluZy5cbiAgICAgKi9cbiAgICBkZWxldGVPdXRwdXRQYXRoPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBVUkwgd2hlcmUgZmlsZXMgd2lsbCBiZSBkZXBsb3llZC5cbiAgICAgKi9cbiAgICBkZXBsb3lVcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBjb25kaXRpb25hbGx5IGxvYWRlZCBFUzIwMTUgcG9seWZpbGxzLlxuICAgICAqL1xuICAgIGVzNUJyb3dzZXJTdXBwb3J0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgaW4tZmlsZSBldmFsIHNvdXJjZW1hcHMuXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBldmFsU291cmNlTWFwPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGNzcyBmcm9tIGdsb2JhbCBzdHlsZXMgaW50byBjc3MgZmlsZXMgaW5zdGVhZCBvZiBqcyBvbmVzLlxuICAgICAqL1xuICAgIGV4dHJhY3RDc3M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgYWxsIGxpY2Vuc2VzIGluIGEgc2VwYXJhdGUgZmlsZS5cbiAgICAgKi9cbiAgICBleHRyYWN0TGljZW5zZXM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZmlsZXMgd2l0aCBvdGhlciBmaWxlcyBpbiB0aGUgYnVpbGQuXG4gICAgICovXG4gICAgZmlsZVJlcGxhY2VtZW50cz86IEZpbGVSZXBsYWNlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgVHlwZVNjcmlwdCB0eXBlIGNoZWNrZXIgaW4gYSBmb3JrZWQgcHJvY2Vzcy5cbiAgICAgKi9cbiAgICBmb3JrVHlwZUNoZWNrZXI/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIExvY2FsaXphdGlvbiBmaWxlIHRvIHVzZSBmb3IgaTE4bi5cbiAgICAgKi9cbiAgICBpMThuRmlsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBGb3JtYXQgb2YgdGhlIGxvY2FsaXphdGlvbiBmaWxlIHNwZWNpZmllZCB3aXRoIC0taTE4bi1maWxlLlxuICAgICAqL1xuICAgIGkxOG5Gb3JtYXQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogTG9jYWxlIHRvIHVzZSBmb3IgaTE4bi5cbiAgICAgKi9cbiAgICBpMThuTG9jYWxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEhvdyB0byBoYW5kbGUgbWlzc2luZyB0cmFuc2xhdGlvbnMgZm9yIGkxOG4uXG4gICAgICovXG4gICAgaTE4bk1pc3NpbmdUcmFuc2xhdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaW5kZXggSFRNTCBmaWxlLlxuICAgICAqL1xuICAgIGluZGV4OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBhZGRpdGlvbmFsIE5nTW9kdWxlIGZpbGVzIHRoYXQgd2lsbCBiZSBsYXp5IGxvYWRlZC4gTGF6eSByb3V0ZXIgbW9kdWxlcyB3aWxsIGJlXG4gICAgICogZGlzY292ZXJlZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIGxhenlNb2R1bGVzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogVGhlIGZ1bGwgcGF0aCBmb3IgdGhlIG1haW4gZW50cnkgcG9pbnQgdG8gdGhlIGFwcCwgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgd29ya3NwYWNlLlxuICAgICAqL1xuICAgIG1haW46IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBVc2UgZmlsZSBuYW1lIGZvciBsYXp5IGxvYWRlZCBjaHVua3MuXG4gICAgICovXG4gICAgbmFtZWRDaHVua3M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFBhdGggdG8gbmdzdy1jb25maWcuanNvbi5cbiAgICAgKi9cbiAgICBuZ3N3Q29uZmlnUGF0aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIG9wdGltaXphdGlvbiBvZiB0aGUgYnVpbGQgb3V0cHV0LlxuICAgICAqL1xuICAgIG9wdGltaXphdGlvbj86IE9wdGltaXphdGlvblVuaW9uO1xuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgb3V0cHV0IGZpbGVuYW1lIGNhY2hlLWJ1c3RpbmcgaGFzaGluZyBtb2RlLlxuICAgICAqL1xuICAgIG91dHB1dEhhc2hpbmc/OiBPdXRwdXRIYXNoaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBmdWxsIHBhdGggZm9yIHRoZSBuZXcgb3V0cHV0IGRpcmVjdG9yeSwgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgd29ya3NwYWNlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgd3JpdGVzIG91dHB1dCB0byBhIGZvbGRlciBuYW1lZCBkaXN0LyBpbiB0aGUgY3VycmVudCBwcm9qZWN0LlxuICAgICAqL1xuICAgIG91dHB1dFBhdGg6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBFbmFibGUgYW5kIGRlZmluZSB0aGUgZmlsZSB3YXRjaGluZyBwb2xsIHRpbWUgcGVyaW9kIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwb2xsPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBmdWxsIHBhdGggZm9yIHRoZSBwb2x5ZmlsbHMgZmlsZSwgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgd29ya3NwYWNlLlxuICAgICAqL1xuICAgIHBvbHlmaWxscz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBEbyBub3QgdXNlIHRoZSByZWFsIHBhdGggd2hlbiByZXNvbHZpbmcgbW9kdWxlcy5cbiAgICAgKi9cbiAgICBwcmVzZXJ2ZVN5bWxpbmtzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgcHJvZmlsZSBldmVudHMgZm9yIENocm9tZSBwcm9maWxlci5cbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgXCJOR19CVUlMRF9QUk9GSUxJTkdcIiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIHByb2ZpbGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIExvZyBwcm9ncmVzcyB0byB0aGUgY29uc29sZSB3aGlsZSBidWlsZGluZy5cbiAgICAgKi9cbiAgICBwcm9ncmVzcz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHJvb3QgcmVsYXRpdmUgVVJMcyBpbiBzdHlsZXNoZWV0cyB0byBpbmNsdWRlIGJhc2UgSFJFRiBhbmQgZGVwbG95IFVSTC4gVXNlIG9ubHlcbiAgICAgKiBmb3IgY29tcGF0aWJpbGl0eSBhbmQgdHJhbnNpdGlvbi4gVGhlIGJlaGF2aW9yIG9mIHRoaXMgb3B0aW9uIGlzIG5vbi1zdGFuZGFyZCBhbmQgd2lsbCBiZVxuICAgICAqIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIHJlYmFzZVJvb3RSZWxhdGl2ZUNzc1VybHM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYXRoIHdoZXJlIHN0eWxlIHJlc291cmNlcyB3aWxsIGJlIHBsYWNlZCwgcmVsYXRpdmUgdG8gb3V0cHV0UGF0aC5cbiAgICAgKi9cbiAgICByZXNvdXJjZXNPdXRwdXRQYXRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdsb2JhbCBzY3JpcHRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBidWlsZC5cbiAgICAgKi9cbiAgICBzY3JpcHRzPzogRXh0cmFFbnRyeVBvaW50W107XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgc2VydmljZSB3b3JrZXIgY29uZmlnIGZvciBwcm9kdWN0aW9uIGJ1aWxkcy5cbiAgICAgKi9cbiAgICBzZXJ2aWNlV29ya2VyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTaG93IGNpcmN1bGFyIGRlcGVuZGVuY3kgd2FybmluZ3Mgb24gYnVpbGRzLlxuICAgICAqL1xuICAgIHNob3dDaXJjdWxhckRlcGVuZGVuY2llcz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRmxhZyB0byBwcmV2ZW50IGJ1aWxkaW5nIGFuIGFwcCBzaGVsbC5cbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIHNraXBBcHBTaGVsbD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3V0cHV0IHNvdXJjZW1hcHMuXG4gICAgICovXG4gICAgc291cmNlTWFwPzogU291cmNlTWFwVW5pb247XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgJ3N0YXRzLmpzb24nIGZpbGUgd2hpY2ggY2FuIGJlIGFuYWx5emVkIHVzaW5nIHRvb2xzIHN1Y2ggYXNcbiAgICAgKiAnd2VicGFjay1idW5kbGUtYW5hbHl6ZXInLlxuICAgICAqL1xuICAgIHN0YXRzSnNvbj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBwYXNzIHRvIHN0eWxlIHByZXByb2Nlc3NvcnMuXG4gICAgICovXG4gICAgc3R5bGVQcmVwcm9jZXNzb3JPcHRpb25zPzogU3R5bGVQcmVwcm9jZXNzb3JPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIEdsb2JhbCBzdHlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGJ1aWxkLlxuICAgICAqL1xuICAgIHN0eWxlcz86IEV4dHJhRW50cnlQb2ludFtdO1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgdGhlIHVzZSBvZiBzdWJyZXNvdXJjZSBpbnRlZ3JpdHkgdmFsaWRhdGlvbi5cbiAgICAgKi9cbiAgICBzdWJyZXNvdXJjZUludGVncml0eT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZ1bGwgcGF0aCBmb3IgdGhlIFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmaWxlLCByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3Jrc3BhY2UuXG4gICAgICovXG4gICAgdHNDb25maWc6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBVc2UgYSBzZXBhcmF0ZSBidW5kbGUgY29udGFpbmluZyBvbmx5IHZlbmRvciBsaWJyYXJpZXMuXG4gICAgICovXG4gICAgdmVuZG9yQ2h1bms/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJlc29sdmUgdmVuZG9yIHBhY2thZ2VzIHNvdXJjZW1hcHMuXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICB2ZW5kb3JTb3VyY2VNYXA/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFkZHMgbW9yZSBkZXRhaWxzIHRvIG91dHB1dCBsb2dnaW5nLlxuICAgICAqL1xuICAgIHZlcmJvc2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJ1biBidWlsZCB3aGVuIGZpbGVzIGNoYW5nZS5cbiAgICAgKi9cbiAgICB3YXRjaD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEFzc2V0UGF0dGVybiA9IEFzc2V0UGF0dGVybkNsYXNzIHwgc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0UGF0dGVybkNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcGF0dGVybiB0byBtYXRjaC5cbiAgICAgKi9cbiAgICBnbG9iOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZ2xvYnMgdG8gaWdub3JlLlxuICAgICAqL1xuICAgIGlnbm9yZT86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBkaXJlY3RvcnkgcGF0aCBpbiB3aGljaCB0byBhcHBseSAnZ2xvYicuIERlZmF1bHRzIHRvIHRoZSBwcm9qZWN0IHJvb3QuXG4gICAgICovXG4gICAgaW5wdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBYnNvbHV0ZSBwYXRoIHdpdGhpbiB0aGUgb3V0cHV0LlxuICAgICAqL1xuICAgIG91dHB1dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZGdldCB7XG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VsaW5lIHNpemUgZm9yIGNvbXBhcmlzb24uXG4gICAgICovXG4gICAgYmFzZWxpbmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRocmVzaG9sZCBmb3IgZXJyb3IgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lIChtaW4gJiBtYXgpLlxuICAgICAqL1xuICAgIGVycm9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIHRocmVzaG9sZCBmb3IgZXJyb3IgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1heGltdW1FcnJvcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSB0aHJlc2hvbGQgZm9yIHdhcm5pbmcgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1heGltdW1XYXJuaW5nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRocmVzaG9sZCBmb3IgZXJyb3IgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1pbmltdW1FcnJvcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aHJlc2hvbGQgZm9yIHdhcm5pbmcgcmVsYXRpdmUgdG8gdGhlIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIG1pbmltdW1XYXJuaW5nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBidW5kbGUuXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBidWRnZXQuXG4gICAgICovXG4gICAgdHlwZTogVHlwZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdGhyZXNob2xkIGZvciB3YXJuaW5nIHJlbGF0aXZlIHRvIHRoZSBiYXNlbGluZSAobWluICYgbWF4KS5cbiAgICAgKi9cbiAgICB3YXJuaW5nPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIGJ1ZGdldC5cbiAqL1xuZXhwb3J0IGVudW0gVHlwZSB7XG4gICAgQWxsID0gXCJhbGxcIixcbiAgICBBbGxTY3JpcHQgPSBcImFsbFNjcmlwdFwiLFxuICAgIEFueSA9IFwiYW55XCIsXG4gICAgQW55U2NyaXB0ID0gXCJhbnlTY3JpcHRcIixcbiAgICBCdW5kbGUgPSBcImJ1bmRsZVwiLFxuICAgIEluaXRpYWwgPSBcImluaXRpYWxcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlUmVwbGFjZW1lbnQge1xuICAgIHJlcGxhY2U/OiAgICAgc3RyaW5nO1xuICAgIHJlcGxhY2VXaXRoPzogc3RyaW5nO1xuICAgIHNyYz86ICAgICAgICAgc3RyaW5nO1xuICAgIHdpdGg/OiAgICAgICAgc3RyaW5nO1xufVxuXG4vKipcbiAqIEVuYWJsZXMgb3B0aW1pemF0aW9uIG9mIHRoZSBidWlsZCBvdXRwdXQuXG4gKi9cbmV4cG9ydCB0eXBlIE9wdGltaXphdGlvblVuaW9uID0gYm9vbGVhbiB8IE9wdGltaXphdGlvbkNsYXNzO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGltaXphdGlvbkNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIG9wdGltaXphdGlvbiBvZiB0aGUgc2NyaXB0cyBvdXRwdXQuXG4gICAgICovXG4gICAgc2NyaXB0cz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvcHRpbWl6YXRpb24gb2YgdGhlIHN0eWxlcyBvdXRwdXQuXG4gICAgICovXG4gICAgc3R5bGVzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBEZWZpbmUgdGhlIG91dHB1dCBmaWxlbmFtZSBjYWNoZS1idXN0aW5nIGhhc2hpbmcgbW9kZS5cbiAqL1xuZXhwb3J0IGVudW0gT3V0cHV0SGFzaGluZyB7XG4gICAgQWxsID0gXCJhbGxcIixcbiAgICBCdW5kbGVzID0gXCJidW5kbGVzXCIsXG4gICAgTWVkaWEgPSBcIm1lZGlhXCIsXG4gICAgTm9uZSA9IFwibm9uZVwiLFxufVxuXG5leHBvcnQgdHlwZSBFeHRyYUVudHJ5UG9pbnQgPSBFeHRyYUVudHJ5UG9pbnRDbGFzcyB8IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBFeHRyYUVudHJ5UG9pbnRDbGFzcyB7XG4gICAgLyoqXG4gICAgICogVGhlIGJ1bmRsZSBuYW1lIGZvciB0aGlzIGV4dHJhIGVudHJ5IHBvaW50LlxuICAgICAqL1xuICAgIGJ1bmRsZU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGZpbGUgdG8gaW5jbHVkZS5cbiAgICAgKi9cbiAgICBpbnB1dDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBidW5kbGUgd2lsbCBiZSBsYXp5IGxvYWRlZC5cbiAgICAgKi9cbiAgICBsYXp5PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBPdXRwdXQgc291cmNlbWFwcy5cbiAqL1xuZXhwb3J0IHR5cGUgU291cmNlTWFwVW5pb24gPSBib29sZWFuIHwgU291cmNlTWFwQ2xhc3M7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlTWFwQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIE91dHB1dCBzb3VyY2VtYXBzIHVzZWQgZm9yIGVycm9yIHJlcG9ydGluZyB0b29scy5cbiAgICAgKi9cbiAgICBoaWRkZW4/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE91dHB1dCBzb3VyY2VtYXBzIGZvciBhbGwgc2NyaXB0cy5cbiAgICAgKi9cbiAgICBzY3JpcHRzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgc291cmNlbWFwcyBmb3IgYWxsIHN0eWxlcy5cbiAgICAgKi9cbiAgICBzdHlsZXM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJlc29sdmUgdmVuZG9yIHBhY2thZ2VzIHNvdXJjZW1hcHMuXG4gICAgICovXG4gICAgdmVuZG9yPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIHRvIHBhc3MgdG8gc3R5bGUgcHJlcHJvY2Vzc29ycy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZVByZXByb2Nlc3Nvck9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFBhdGhzIHRvIGluY2x1ZGUuIFBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQgdG8gcHJvamVjdCByb290LlxuICAgICAqL1xuICAgIGluY2x1ZGVQYXRocz86IHN0cmluZ1tdO1xufVxuIl19