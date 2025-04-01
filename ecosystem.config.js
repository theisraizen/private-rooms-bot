let Bots = [
 {
 name: "01den. Private Rooms",
 namespace: "01den. Private Rooms",
 script: 'index.js',
 watch: false,
 exec_mode: "cluster",
 max_memory_restart: "2G",
 cwd: "./",
 args: ['--color', '--watch'],
 },
 ]
 module.exports = { apps: Bots }