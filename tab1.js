Last login: Tue May 13 10:07:28 on ttys000
localhost:~ student$ sudo mongod
Password:
mongod --help for help and startup options
Tue May 13 10:18:23.717 [initandlisten] MongoDB starting : pid=1309 port=27017 dbpath=/data/db/ 64-bit host=localhost
Tue May 13 10:18:23.717 [initandlisten] 
Tue May 13 10:18:23.717 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
Tue May 13 10:18:23.717 [initandlisten] db version v2.4.8
Tue May 13 10:18:23.717 [initandlisten] git version: a350fc38922fbda2cec8d5dd842237b904eafc14
Tue May 13 10:18:23.717 [initandlisten] build info: Darwin bs-osx-106-x86-64-2.10gen.cc 10.8.0 Darwin Kernel Version 10.8.0: Tue Jun  7 16:32:41 PDT 2011; root:xnu-1504.15.3~1/RELEASE_X86_64 x86_64 BOOST_LIB_VERSION=1_49
Tue May 13 10:18:23.717 [initandlisten] allocator: system
Tue May 13 10:18:23.717 [initandlisten] options: {}
Tue May 13 10:18:23.766 [initandlisten] exception in initAndListen: 10310 Unable to lock file: /data/db/mongod.lock. Is a mongod instance already running?, terminating
Tue May 13 10:18:23.766 dbexit: 
Tue May 13 10:18:23.766 [initandlisten] shutdown: going to close listening sockets...
Tue May 13 10:18:23.766 [initandlisten] shutdown: going to flush diaglog...
Tue May 13 10:18:23.766 [initandlisten] shutdown: going to close sockets...
Tue May 13 10:18:23.767 [initandlisten] shutdown: waiting for fs preallocator...
Tue May 13 10:18:23.767 [initandlisten] shutdown: lock for final commit...
Tue May 13 10:18:23.767 [initandlisten] shutdown: final commit...
Tue May 13 10:18:23.767 [initandlisten] shutdown: closing all files...
Tue May 13 10:18:23.789 [initandlisten] closeAllFiles() finished
Tue May 13 10:18:23.790 dbexit: really exiting now
localhost:~ student$ sudo mongod
mongod --help for help and startup options
Tue May 13 10:18:39.379 [initandlisten] MongoDB starting : pid=1312 port=27017 dbpath=/data/db/ 64-bit host=localhost
Tue May 13 10:18:39.379 [initandlisten] 
Tue May 13 10:18:39.379 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
Tue May 13 10:18:39.379 [initandlisten] db version v2.4.8
Tue May 13 10:18:39.379 [initandlisten] git version: a350fc38922fbda2cec8d5dd842237b904eafc14
Tue May 13 10:18:39.379 [initandlisten] build info: Darwin bs-osx-106-x86-64-2.10gen.cc 10.8.0 Darwin Kernel Version 10.8.0: Tue Jun  7 16:32:41 PDT 2011; root:xnu-1504.15.3~1/RELEASE_X86_64 x86_64 BOOST_LIB_VERSION=1_49
Tue May 13 10:18:39.379 [initandlisten] allocator: system
Tue May 13 10:18:39.379 [initandlisten] options: {}
Tue May 13 10:18:39.379 [initandlisten] exception in initAndListen: 10310 Unable to lock file: /data/db/mongod.lock. Is a mongod instance already running?, terminating
Tue May 13 10:18:39.379 dbexit: 
Tue May 13 10:18:39.379 [initandlisten] shutdown: going to close listening sockets...
Tue May 13 10:18:39.379 [initandlisten] shutdown: going to flush diaglog...
Tue May 13 10:18:39.379 [initandlisten] shutdown: going to close sockets...
Tue May 13 10:18:39.379 [initandlisten] shutdown: waiting for fs preallocator...
Tue May 13 10:18:39.379 [initandlisten] shutdown: lock for final commit...
Tue May 13 10:18:39.379 [initandlisten] shutdown: final commit...
Tue May 13 10:18:39.379 [initandlisten] shutdown: closing all files...
Tue May 13 10:18:39.380 [initandlisten] closeAllFiles() finished
Tue May 13 10:18:39.380 dbexit: really exiting now
localhost:~ student$ db.dropDatabase()
> 
localhost:~ student$ sudo mongod
mongod --help for help and startup options
Tue May 13 10:19:11.983 [initandlisten] MongoDB starting : pid=1317 port=27017 dbpath=/data/db/ 64-bit host=localhost
Tue May 13 10:19:11.983 [initandlisten] 
Tue May 13 10:19:11.984 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
Tue May 13 10:19:11.984 [initandlisten] db version v2.4.8
Tue May 13 10:19:11.984 [initandlisten] git version: a350fc38922fbda2cec8d5dd842237b904eafc14
Tue May 13 10:19:11.984 [initandlisten] build info: Darwin bs-osx-106-x86-64-2.10gen.cc 10.8.0 Darwin Kernel Version 10.8.0: Tue Jun  7 16:32:41 PDT 2011; root:xnu-1504.15.3~1/RELEASE_X86_64 x86_64 BOOST_LIB_VERSION=1_49
Tue May 13 10:19:11.984 [initandlisten] allocator: system
Tue May 13 10:19:11.984 [initandlisten] options: {}
Tue May 13 10:19:11.984 [initandlisten] exception in initAndListen: 10310 Unable to lock file: /data/db/mongod.lock. Is a mongod instance already running?, terminating
Tue May 13 10:19:11.984 dbexit: 
Tue May 13 10:19:11.984 [initandlisten] shutdown: going to close listening sockets...
Tue May 13 10:19:11.984 [initandlisten] shutdown: going to flush diaglog...
Tue May 13 10:19:11.984 [initandlisten] shutdown: going to close sockets...
Tue May 13 10:19:11.984 [initandlisten] shutdown: waiting for fs preallocator...
Tue May 13 10:19:11.984 [initandlisten] shutdown: lock for final commit...
Tue May 13 10:19:11.984 [initandlisten] shutdown: final commit...
Tue May 13 10:19:11.984 [initandlisten] shutdown: closing all files...
Tue May 13 10:19:11.984 [initandlisten] closeAllFiles() finished
Tue May 13 10:19:11.984 dbexit: really exiting now
localhost:~ student$ sudo mongod
mongod --help for help and startup options
Tue May 13 10:20:25.809 [initandlisten] MongoDB starting : pid=1332 port=27017 dbpath=/data/db/ 64-bit host=localhost
Tue May 13 10:20:25.809 [initandlisten] 
Tue May 13 10:20:25.809 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
Tue May 13 10:20:25.810 [initandlisten] db version v2.4.8
Tue May 13 10:20:25.810 [initandlisten] git version: a350fc38922fbda2cec8d5dd842237b904eafc14
Tue May 13 10:20:25.810 [initandlisten] build info: Darwin bs-osx-106-x86-64-2.10gen.cc 10.8.0 Darwin Kernel Version 10.8.0: Tue Jun  7 16:32:41 PDT 2011; root:xnu-1504.15.3~1/RELEASE_X86_64 x86_64 BOOST_LIB_VERSION=1_49
Tue May 13 10:20:25.810 [initandlisten] allocator: system
Tue May 13 10:20:25.810 [initandlisten] options: {}
Tue May 13 10:20:25.810 [initandlisten] exception in initAndListen: 10310 Unable to lock file: /data/db/mongod.lock. Is a mongod instance already running?, terminating
Tue May 13 10:20:25.810 dbexit: 
Tue May 13 10:20:25.810 [initandlisten] shutdown: going to close listening sockets...
Tue May 13 10:20:25.810 [initandlisten] shutdown: going to flush diaglog...
Tue May 13 10:20:25.810 [initandlisten] shutdown: going to close sockets...
Tue May 13 10:20:25.810 [initandlisten] shutdown: waiting for fs preallocator...
Tue May 13 10:20:25.810 [initandlisten] shutdown: lock for final commit...
Tue May 13 10:20:25.810 [initandlisten] shutdown: final commit...
Tue May 13 10:20:25.810 [initandlisten] shutdown: closing all files...
Tue May 13 10:20:25.810 [initandlisten] closeAllFiles() finished
Tue May 13 10:20:25.810 dbexit: really exiting now
localhost:~ student$ mongoimport --db country --collection countries < /Users/student/Downloads/countries.json
connected to: 127.0.0.1
Tue May 13 11:45:58.138 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.138 
Tue May 13 11:45:58.138 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.138 
Tue May 13 11:45:58.138 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.138 
Tue May 13 11:45:58.138 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.138 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.139 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.139 
Tue May 13 11:45:58.140 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.140 
Tue May 13 11:45:58.140 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.140 
Tue May 13 11:45:58.140 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.140 
Tue May 13 11:45:58.140 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.140 
Tue May 13 11:45:58.140 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.140 
Tue May 13 11:45:58.140 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.140 
Tue May 13 11:45:58.140 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.140 
Tue May 13 11:45:58.141 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.141 
Tue May 13 11:45:58.141 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.141 
Tue May 13 11:45:58.141 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.141 
Tue May 13 11:45:58.141 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.141 
Tue May 13 11:45:58.141 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.141 
Tue May 13 11:45:58.141 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.141 
Tue May 13 11:45:58.142 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.142 
Tue May 13 11:45:58.142 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.142 
Tue May 13 11:45:58.142 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.142 
Tue May 13 11:45:58.142 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.142 
Tue May 13 11:45:58.142 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.142 
Tue May 13 11:45:58.142 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.142 
Tue May 13 11:45:58.142 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.142 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.143 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.143 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.144 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.144 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.145 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.145 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.146 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.146 
Tue May 13 11:45:58.147 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.147 
Tue May 13 11:45:58.147 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.147 
Tue May 13 11:45:58.147 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.147 
Tue May 13 11:45:58.147 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.147 
Tue May 13 11:45:58.147 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.147 
Tue May 13 11:45:58.147 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.147 
Tue May 13 11:45:58.147 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.147 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.148 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.148 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.149 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.149 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.150 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.150 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.151 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.151 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.152 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.152 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.153 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.153 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.154 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.154 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.155 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.155 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.156 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.156 
Tue May 13 11:45:58.157 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.157 
Tue May 13 11:45:58.157 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.157 
Tue May 13 11:45:58.157 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.157 
Tue May 13 11:45:58.157 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.157 
Tue May 13 11:45:58.157 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.157 
Tue May 13 11:45:58.157 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.157 
Tue May 13 11:45:58.158 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.158 
Tue May 13 11:45:58.158 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.158 
Tue May 13 11:45:58.158 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.158 
Tue May 13 11:45:58.158 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.158 
Tue May 13 11:45:58.159 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.159 
Tue May 13 11:45:58.159 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.159 
Tue May 13 11:45:58.159 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.159 
Tue May 13 11:45:58.159 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.159 
Tue May 13 11:45:58.159 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.159 
Tue May 13 11:45:58.159 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.159 
Tue May 13 11:45:58.160 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.160 
Tue May 13 11:45:58.160 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.160 
Tue May 13 11:45:58.160 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.160 
Tue May 13 11:45:58.160 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.160 
Tue May 13 11:45:58.160 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.160 
Tue May 13 11:45:58.160 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.160 
Tue May 13 11:45:58.161 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.161 
Tue May 13 11:45:58.161 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.161 
Tue May 13 11:45:58.161 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.161 
Tue May 13 11:45:58.161 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.161 
Tue May 13 11:45:58.161 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.161 
Tue May 13 11:45:58.161 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.161 
Tue May 13 11:45:58.162 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.162 
Tue May 13 11:45:58.162 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.162 
Tue May 13 11:45:58.162 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.162 
Tue May 13 11:45:58.162 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.162 
Tue May 13 11:45:58.162 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.162 
Tue May 13 11:45:58.162 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.162 
Tue May 13 11:45:58.163 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.163 
Tue May 13 11:45:58.163 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.163 
Tue May 13 11:45:58.163 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.163 
Tue May 13 11:45:58.163 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.163 
Tue May 13 11:45:58.163 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.163 
Tue May 13 11:45:58.163 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.163 
Tue May 13 11:45:58.164 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.164 
Tue May 13 11:45:58.164 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.164 
Tue May 13 11:45:58.164 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.164 
Tue May 13 11:45:58.164 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.164 
Tue May 13 11:45:58.164 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.164 
Tue May 13 11:45:58.164 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.164 
Tue May 13 11:45:58.165 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.165 
Tue May 13 11:45:58.165 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.165 
Tue May 13 11:45:58.165 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.165 
Tue May 13 11:45:58.165 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.165 
Tue May 13 11:45:58.165 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.165 
Tue May 13 11:45:58.165 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.165 
Tue May 13 11:45:58.166 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.166 
Tue May 13 11:45:58.166 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.166 
Tue May 13 11:45:58.166 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.166 
Tue May 13 11:45:58.166 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.166 
Tue May 13 11:45:58.166 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.166 
Tue May 13 11:45:58.166 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.166 
Tue May 13 11:45:58.167 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.167 
Tue May 13 11:45:58.167 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.167 
Tue May 13 11:45:58.167 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.167 
Tue May 13 11:45:58.167 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.167 
Tue May 13 11:45:58.167 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.167 
Tue May 13 11:45:58.167 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.167 
Tue May 13 11:45:58.168 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.168 
Tue May 13 11:45:58.168 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.168 
Tue May 13 11:45:58.168 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.168 
Tue May 13 11:45:58.168 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.168 
Tue May 13 11:45:58.168 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.168 
Tue May 13 11:45:58.168 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.168 
Tue May 13 11:45:58.169 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.169 
Tue May 13 11:45:58.169 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.169 
Tue May 13 11:45:58.169 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.169 
Tue May 13 11:45:58.169 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.169 
Tue May 13 11:45:58.169 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.169 
Tue May 13 11:45:58.169 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.169 
Tue May 13 11:45:58.170 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.170 
Tue May 13 11:45:58.170 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.170 
Tue May 13 11:45:58.170 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.170 
Tue May 13 11:45:58.170 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.170 
Tue May 13 11:45:58.170 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.170 
Tue May 13 11:45:58.170 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.170 
Tue May 13 11:45:58.170 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.170 
Tue May 13 11:45:58.171 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.171 
Tue May 13 11:45:58.171 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.171 
Tue May 13 11:45:58.171 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.171 
Tue May 13 11:45:58.171 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.171 
Tue May 13 11:45:58.171 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.171 
Tue May 13 11:45:58.171 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.171 
Tue May 13 11:45:58.172 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.172 
Tue May 13 11:45:58.172 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.172 
Tue May 13 11:45:58.172 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.172 
Tue May 13 11:45:58.172 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.172 
Tue May 13 11:45:58.172 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.172 
Tue May 13 11:45:58.173 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.173 
Tue May 13 11:45:58.173 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.173 
Tue May 13 11:45:58.173 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.173 
Tue May 13 11:45:58.173 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.173 
Tue May 13 11:45:58.173 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.173 
Tue May 13 11:45:58.174 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.174 
Tue May 13 11:45:58.174 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.174 
Tue May 13 11:45:58.174 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.174 
Tue May 13 11:45:58.174 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.174 
Tue May 13 11:45:58.175 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.175 
Tue May 13 11:45:58.175 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.175 
Tue May 13 11:45:58.175 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.175 
Tue May 13 11:45:58.175 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.175 
Tue May 13 11:45:58.175 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.175 
Tue May 13 11:45:58.176 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.176 
Tue May 13 11:45:58.176 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.176 
Tue May 13 11:45:58.176 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.176 
Tue May 13 11:45:58.176 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.176 
Tue May 13 11:45:58.176 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.176 
Tue May 13 11:45:58.177 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.177 
Tue May 13 11:45:58.177 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.177 
Tue May 13 11:45:58.177 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.177 
Tue May 13 11:45:58.177 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.177 
Tue May 13 11:45:58.177 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.177 
Tue May 13 11:45:58.177 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.177 
Tue May 13 11:45:58.178 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.178 
Tue May 13 11:45:58.178 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.178 
Tue May 13 11:45:58.178 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.178 
Tue May 13 11:45:58.178 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.178 
Tue May 13 11:45:58.178 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.178 
Tue May 13 11:45:58.178 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.179 
Tue May 13 11:45:58.179 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.179 
Tue May 13 11:45:58.179 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.179 
Tue May 13 11:45:58.179 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.179 
Tue May 13 11:45:58.179 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.179 
Tue May 13 11:45:58.179 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.179 
Tue May 13 11:45:58.179 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.179 
Tue May 13 11:45:58.180 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.180 
Tue May 13 11:45:58.180 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.180 
Tue May 13 11:45:58.180 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.180 
Tue May 13 11:45:58.180 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.180 
Tue May 13 11:45:58.180 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.180 
Tue May 13 11:45:58.180 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.180 
Tue May 13 11:45:58.181 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.181 
Tue May 13 11:45:58.181 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.181 
Tue May 13 11:45:58.181 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.181 
Tue May 13 11:45:58.181 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.181 
Tue May 13 11:45:58.181 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.181 
Tue May 13 11:45:58.181 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.181 
Tue May 13 11:45:58.181 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.181 
Tue May 13 11:45:58.182 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.182 
Tue May 13 11:45:58.182 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.182 
Tue May 13 11:45:58.182 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.182 
Tue May 13 11:45:58.182 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.182 
Tue May 13 11:45:58.182 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.182 
Tue May 13 11:45:58.182 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.182 
Tue May 13 11:45:58.183 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.183 
Tue May 13 11:45:58.183 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.183 
Tue May 13 11:45:58.183 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.183 
Tue May 13 11:45:58.183 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.183 
Tue May 13 11:45:58.183 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.183 
Tue May 13 11:45:58.183 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.183 
Tue May 13 11:45:58.183 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.183 
Tue May 13 11:45:58.184 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.184 
Tue May 13 11:45:58.184 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.184 
Tue May 13 11:45:58.184 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.184 
Tue May 13 11:45:58.184 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.184 
Tue May 13 11:45:58.184 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.184 
Tue May 13 11:45:58.184 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.184 
Tue May 13 11:45:58.185 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.185 
Tue May 13 11:45:58.185 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.185 
Tue May 13 11:45:58.185 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.185 
Tue May 13 11:45:58.185 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.185 
Tue May 13 11:45:58.185 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.185 
Tue May 13 11:45:58.185 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.185 
Tue May 13 11:45:58.185 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.185 
Tue May 13 11:45:58.186 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.186 
Tue May 13 11:45:58.186 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.186 
Tue May 13 11:45:58.186 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.186 
Tue May 13 11:45:58.186 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.186 
Tue May 13 11:45:58.186 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.186 
Tue May 13 11:45:58.186 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.186 
Tue May 13 11:45:58.187 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.187 
Tue May 13 11:45:58.187 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.187 
Tue May 13 11:45:58.187 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.187 
Tue May 13 11:45:58.187 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.187 
Tue May 13 11:45:58.187 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.187 
Tue May 13 11:45:58.187 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.187 
Tue May 13 11:45:58.188 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.188 
Tue May 13 11:45:58.188 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.188 
Tue May 13 11:45:58.188 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.188 
Tue May 13 11:45:58.188 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.188 
Tue May 13 11:45:58.188 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.188 
Tue May 13 11:45:58.188 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.188 
Tue May 13 11:45:58.188 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.188 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.189 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.189 
Tue May 13 11:45:58.190 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.190 
Tue May 13 11:45:58.190 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.190 
Tue May 13 11:45:58.190 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.190 
Tue May 13 11:45:58.190 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.190 
Tue May 13 11:45:58.190 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.190 
Tue May 13 11:45:58.190 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.190 
Tue May 13 11:45:58.190 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.190 
Tue May 13 11:45:58.191 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.191 
Tue May 13 11:45:58.191 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.191 
Tue May 13 11:45:58.191 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.191 
Tue May 13 11:45:58.191 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.191 
Tue May 13 11:45:58.191 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.191 
Tue May 13 11:45:58.191 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.191 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.192 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.192 
Tue May 13 11:45:58.193 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.193 
Tue May 13 11:45:58.193 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.193 
Tue May 13 11:45:58.193 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.193 
Tue May 13 11:45:58.193 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.193 
Tue May 13 11:45:58.193 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.193 
Tue May 13 11:45:58.193 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.193 
Tue May 13 11:45:58.193 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.194 
Tue May 13 11:45:58.194 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.195 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.195 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.196 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.196 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.197 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.197 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.198 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.198 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.199 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.199 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.200 
Tue May 13 11:45:58.200 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.201 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.201 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.202 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.202 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.203 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.203 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.204 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.204 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.205 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.205 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.206 
Tue May 13 11:45:58.206 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.207 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.207 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.207 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.207 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.207 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.207 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.207 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.207 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.208 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.208 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.209 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.209 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.210 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.210 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.211 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.211 
Tue May 13 11:45:58.212 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.212 
Tue May 13 11:45:58.212 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.212 
Tue May 13 11:45:58.212 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.212 
Tue May 13 11:45:58.212 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.212 
Tue May 13 11:45:58.212 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.212 
Tue May 13 11:45:58.212 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.212 
Tue May 13 11:45:58.212 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.212 
Tue May 13 11:45:58.213 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.213 
Tue May 13 11:45:58.213 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.213 
Tue May 13 11:45:58.213 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.213 
Tue May 13 11:45:58.213 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.213 
Tue May 13 11:45:58.213 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.213 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.214 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.214 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.215 
Tue May 13 11:45:58.215 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.216 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.216 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.217 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.217 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.218 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.218 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.219 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.219 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.220 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.220 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.221 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.221 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.222 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.222 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.223 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.223 
Tue May 13 11:45:58.224 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.224 
Tue May 13 11:45:58.224 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.224 
Tue May 13 11:45:58.224 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.224 
Tue May 13 11:45:58.224 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.224 
Tue May 13 11:45:58.224 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.224 
Tue May 13 11:45:58.224 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.224 
Tue May 13 11:45:58.224 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.225 
Tue May 13 11:45:58.225 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.225 
Tue May 13 11:45:58.225 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.225 
Tue May 13 11:45:58.225 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.225 
Tue May 13 11:45:58.225 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.225 
Tue May 13 11:45:58.225 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.225 
Tue May 13 11:45:58.225 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.225 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.226 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.226 
Tue May 13 11:45:58.227 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.227 
Tue May 13 11:45:58.227 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.227 
Tue May 13 11:45:58.227 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.227 
Tue May 13 11:45:58.227 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.227 
Tue May 13 11:45:58.227 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.227 
Tue May 13 11:45:58.227 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.227 
Tue May 13 11:45:58.227 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.227 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.228 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.228 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.229 
Tue May 13 11:45:58.229 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.230 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.230 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.231 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.231 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.232 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.232 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.233 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.233 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.234 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.234 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.235 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.235 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.236 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.236 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.237 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.237 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.238 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.238 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.239 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.239 
Tue May 13 11:45:58.240 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.240 
Tue May 13 11:45:58.240 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.240 
Tue May 13 11:45:58.240 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.240 
Tue May 13 11:45:58.240 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.240 
Tue May 13 11:45:58.240 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.240 
Tue May 13 11:45:58.240 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.240 
Tue May 13 11:45:58.241 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.241 
Tue May 13 11:45:58.241 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.241 
Tue May 13 11:45:58.241 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.241 
Tue May 13 11:45:58.241 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.241 
Tue May 13 11:45:58.241 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.241 
Tue May 13 11:45:58.241 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.241 
Tue May 13 11:45:58.241 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.241 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.242 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.242 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.243 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.243 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.244 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.244 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.245 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.245 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.246 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.246 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.247 
Tue May 13 11:45:58.247 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.248 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.248 
Tue May 13 11:45:58.249 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.249 
Tue May 13 11:45:58.249 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.249 
Tue May 13 11:45:58.249 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.249 
Tue May 13 11:45:58.249 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.249 
Tue May 13 11:45:58.249 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.249 
Tue May 13 11:45:58.249 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.249 
Tue May 13 11:45:58.249 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.249 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.250 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.250 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.251 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.251 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.252 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.252 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.253 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.253 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.254 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.254 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.255 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.255 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.256 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.256 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.257 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.257 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.257 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.257 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.257 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.257 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.257 
Tue May 13 11:45:58.257 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.258 
Tue May 13 11:45:58.258 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.258 
Tue May 13 11:45:58.258 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.258 
Tue May 13 11:45:58.258 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.258 
Tue May 13 11:45:58.258 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.258 
Tue May 13 11:45:58.258 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.258 
Tue May 13 11:45:58.258 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.258 
Tue May 13 11:45:58.259 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.259 
Tue May 13 11:45:58.259 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.259 
Tue May 13 11:45:58.259 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.259 
Tue May 13 11:45:58.259 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.259 
Tue May 13 11:45:58.259 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.259 
Tue May 13 11:45:58.259 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.259 
Tue May 13 11:45:58.259 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.259 
Tue May 13 11:45:58.260 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.260 
Tue May 13 11:45:58.260 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.260 
Tue May 13 11:45:58.260 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.260 
Tue May 13 11:45:58.260 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.260 
Tue May 13 11:45:58.260 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.260 
Tue May 13 11:45:58.260 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.260 
Tue May 13 11:45:58.260 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.260 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.261 
Tue May 13 11:45:58.261 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.262 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.262 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.263 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.263 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.264 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.264 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.265 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.265 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.266 
Tue May 13 11:45:58.266 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.267 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.267 
Tue May 13 11:45:58.268 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.268 
Tue May 13 11:45:58.268 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.268 
Tue May 13 11:45:58.268 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.268 
Tue May 13 11:45:58.268 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.268 
Tue May 13 11:45:58.268 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.268 
Tue May 13 11:45:58.268 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.268 
Tue May 13 11:45:58.269 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.269 
Tue May 13 11:45:58.269 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.269 
Tue May 13 11:45:58.269 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.269 
Tue May 13 11:45:58.269 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.269 
Tue May 13 11:45:58.269 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.269 
Tue May 13 11:45:58.269 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.269 
Tue May 13 11:45:58.270 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.270 
Tue May 13 11:45:58.270 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.270 
Tue May 13 11:45:58.270 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.270 
Tue May 13 11:45:58.270 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.270 
Tue May 13 11:45:58.270 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.270 
Tue May 13 11:45:58.270 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.270 
Tue May 13 11:45:58.271 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.271 
Tue May 13 11:45:58.271 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.271 
Tue May 13 11:45:58.271 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.271 
Tue May 13 11:45:58.271 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.271 
Tue May 13 11:45:58.271 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.271 
Tue May 13 11:45:58.271 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.271 
Tue May 13 11:45:58.272 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.272 
Tue May 13 11:45:58.272 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.272 
Tue May 13 11:45:58.272 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.272 
Tue May 13 11:45:58.272 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.272 
Tue May 13 11:45:58.272 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.272 
Tue May 13 11:45:58.272 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.272 
Tue May 13 11:45:58.273 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.273 
Tue May 13 11:45:58.273 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.273 
Tue May 13 11:45:58.273 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.273 
Tue May 13 11:45:58.273 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.273 
Tue May 13 11:45:58.273 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.273 
Tue May 13 11:45:58.273 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.273 
Tue May 13 11:45:58.274 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.274 
Tue May 13 11:45:58.274 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.274 
Tue May 13 11:45:58.274 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.274 
Tue May 13 11:45:58.274 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.274 
Tue May 13 11:45:58.274 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.274 
Tue May 13 11:45:58.275 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.275 
Tue May 13 11:45:58.275 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.275 
Tue May 13 11:45:58.275 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.275 
Tue May 13 11:45:58.275 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.275 
Tue May 13 11:45:58.275 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.275 
Tue May 13 11:45:58.275 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.275 
Tue May 13 11:45:58.276 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.276 
Tue May 13 11:45:58.276 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.276 
Tue May 13 11:45:58.276 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.276 
Tue May 13 11:45:58.276 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.276 
Tue May 13 11:45:58.276 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.276 
Tue May 13 11:45:58.276 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.276 
Tue May 13 11:45:58.277 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.277 
Tue May 13 11:45:58.277 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.277 
Tue May 13 11:45:58.277 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.277 
Tue May 13 11:45:58.277 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.277 
Tue May 13 11:45:58.277 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.277 
Tue May 13 11:45:58.277 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.277 
Tue May 13 11:45:58.278 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.278 
Tue May 13 11:45:58.278 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.278 
Tue May 13 11:45:58.278 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.278 
Tue May 13 11:45:58.278 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.278 
Tue May 13 11:45:58.278 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.278 
Tue May 13 11:45:58.278 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.278 
Tue May 13 11:45:58.279 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.279 
Tue May 13 11:45:58.279 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.279 
Tue May 13 11:45:58.279 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.279 
Tue May 13 11:45:58.279 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.279 
Tue May 13 11:45:58.279 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.279 
Tue May 13 11:45:58.279 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.279 
Tue May 13 11:45:58.280 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.280 
Tue May 13 11:45:58.280 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.280 
Tue May 13 11:45:58.280 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.280 
Tue May 13 11:45:58.280 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.280 
Tue May 13 11:45:58.280 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.280 
Tue May 13 11:45:58.280 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.280 
Tue May 13 11:45:58.281 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.281 
Tue May 13 11:45:58.281 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.281 
Tue May 13 11:45:58.281 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.281 
Tue May 13 11:45:58.281 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.281 
Tue May 13 11:45:58.281 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.281 
Tue May 13 11:45:58.281 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.281 
Tue May 13 11:45:58.282 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.282 
Tue May 13 11:45:58.282 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.282 
Tue May 13 11:45:58.282 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.282 
Tue May 13 11:45:58.282 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.282 
Tue May 13 11:45:58.282 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.282 
Tue May 13 11:45:58.282 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.282 
Tue May 13 11:45:58.283 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.283 
Tue May 13 11:45:58.283 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.283 
Tue May 13 11:45:58.283 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.283 
Tue May 13 11:45:58.283 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.283 
Tue May 13 11:45:58.283 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.283 
Tue May 13 11:45:58.283 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.283 
Tue May 13 11:45:58.284 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.284 
Tue May 13 11:45:58.284 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.284 
Tue May 13 11:45:58.284 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.284 
Tue May 13 11:45:58.284 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.284 
Tue May 13 11:45:58.284 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.284 
Tue May 13 11:45:58.284 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.284 
Tue May 13 11:45:58.285 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.285 
Tue May 13 11:45:58.285 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.285 
Tue May 13 11:45:58.285 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.285 
Tue May 13 11:45:58.285 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.285 
Tue May 13 11:45:58.285 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.285 
Tue May 13 11:45:58.286 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.286 
Tue May 13 11:45:58.286 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.286 
Tue May 13 11:45:58.286 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.286 
Tue May 13 11:45:58.286 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.286 
Tue May 13 11:45:58.286 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.286 
Tue May 13 11:45:58.287 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.287 
Tue May 13 11:45:58.287 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.287 
Tue May 13 11:45:58.287 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.287 
Tue May 13 11:45:58.287 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.287 
Tue May 13 11:45:58.287 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.287 
Tue May 13 11:45:58.288 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.288 
Tue May 13 11:45:58.288 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.288 
Tue May 13 11:45:58.288 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.288 
Tue May 13 11:45:58.288 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.288 
Tue May 13 11:45:58.288 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.288 
Tue May 13 11:45:58.289 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.289 
Tue May 13 11:45:58.289 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.289 
Tue May 13 11:45:58.289 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.289 
Tue May 13 11:45:58.289 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.289 
Tue May 13 11:45:58.289 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.290 
Tue May 13 11:45:58.290 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.290 
Tue May 13 11:45:58.290 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.290 
Tue May 13 11:45:58.290 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.290 
Tue May 13 11:45:58.290 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.290 
Tue May 13 11:45:58.290 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.290 
Tue May 13 11:45:58.290 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.290 
Tue May 13 11:45:58.291 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.291 
Tue May 13 11:45:58.291 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.291 
Tue May 13 11:45:58.291 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.291 
Tue May 13 11:45:58.291 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.291 
Tue May 13 11:45:58.291 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.291 
Tue May 13 11:45:58.292 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.292 
Tue May 13 11:45:58.292 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.292 
Tue May 13 11:45:58.292 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.292 
Tue May 13 11:45:58.292 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.292 
Tue May 13 11:45:58.292 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.292 
Tue May 13 11:45:58.293 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.293 
Tue May 13 11:45:58.293 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.293 
Tue May 13 11:45:58.293 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.293 
Tue May 13 11:45:58.293 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.293 
Tue May 13 11:45:58.293 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.293 
Tue May 13 11:45:58.293 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.293 
Tue May 13 11:45:58.293 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.293 
Tue May 13 11:45:58.294 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.294 
Tue May 13 11:45:58.294 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.294 
Tue May 13 11:45:58.294 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.294 
Tue May 13 11:45:58.294 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.294 
Tue May 13 11:45:58.294 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.294 
Tue May 13 11:45:58.294 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.294 
Tue May 13 11:45:58.295 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.295 
Tue May 13 11:45:58.295 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.295 
Tue May 13 11:45:58.295 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.295 
Tue May 13 11:45:58.295 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.295 
Tue May 13 11:45:58.295 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.295 
Tue May 13 11:45:58.295 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.295 
Tue May 13 11:45:58.295 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.295 
Tue May 13 11:45:58.296 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.296 
Tue May 13 11:45:58.296 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.296 
Tue May 13 11:45:58.296 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.296 
Tue May 13 11:45:58.296 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.296 
Tue May 13 11:45:58.296 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.296 
Tue May 13 11:45:58.296 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.296 
Tue May 13 11:45:58.297 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.297 
Tue May 13 11:45:58.297 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.297 
Tue May 13 11:45:58.297 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.297 
Tue May 13 11:45:58.297 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.297 
Tue May 13 11:45:58.297 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.297 
Tue May 13 11:45:58.297 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.297 
Tue May 13 11:45:58.297 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.297 
Tue May 13 11:45:58.298 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.298 
Tue May 13 11:45:58.298 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.298 
Tue May 13 11:45:58.298 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.298 
Tue May 13 11:45:58.298 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.298 
Tue May 13 11:45:58.298 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.298 
Tue May 13 11:45:58.298 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.298 
Tue May 13 11:45:58.299 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.299 
Tue May 13 11:45:58.299 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.299 
Tue May 13 11:45:58.299 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.299 
Tue May 13 11:45:58.299 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.299 
Tue May 13 11:45:58.299 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.299 
Tue May 13 11:45:58.299 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.299 
Tue May 13 11:45:58.300 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.300 
Tue May 13 11:45:58.300 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.300 
Tue May 13 11:45:58.300 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.300 
Tue May 13 11:45:58.300 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.300 
Tue May 13 11:45:58.300 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.300 
Tue May 13 11:45:58.300 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.300 
Tue May 13 11:45:58.301 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.301 
Tue May 13 11:45:58.301 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.301 
Tue May 13 11:45:58.301 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.301 
Tue May 13 11:45:58.301 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.301 
Tue May 13 11:45:58.301 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.301 
Tue May 13 11:45:58.301 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.301 
Tue May 13 11:45:58.302 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.302 
Tue May 13 11:45:58.302 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.302 
Tue May 13 11:45:58.302 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.302 
Tue May 13 11:45:58.302 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.302 
Tue May 13 11:45:58.302 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.302 
Tue May 13 11:45:58.302 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.302 
Tue May 13 11:45:58.303 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.303 
Tue May 13 11:45:58.303 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.303 
Tue May 13 11:45:58.303 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.303 
Tue May 13 11:45:58.303 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.303 
Tue May 13 11:45:58.303 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.303 
Tue May 13 11:45:58.303 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.303 
Tue May 13 11:45:58.304 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.304 
Tue May 13 11:45:58.304 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.304 
Tue May 13 11:45:58.304 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.304 
Tue May 13 11:45:58.304 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.304 
Tue May 13 11:45:58.304 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.304 
Tue May 13 11:45:58.304 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.304 
Tue May 13 11:45:58.305 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.305 
Tue May 13 11:45:58.305 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.305 
Tue May 13 11:45:58.305 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.305 
Tue May 13 11:45:58.305 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.305 
Tue May 13 11:45:58.305 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.305 
Tue May 13 11:45:58.305 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.305 
Tue May 13 11:45:58.306 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.306 
Tue May 13 11:45:58.306 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.306 
Tue May 13 11:45:58.306 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.306 
Tue May 13 11:45:58.306 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.306 
Tue May 13 11:45:58.306 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.306 
Tue May 13 11:45:58.306 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.306 
Tue May 13 11:45:58.307 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.307 
Tue May 13 11:45:58.307 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.307 
Tue May 13 11:45:58.307 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.307 
Tue May 13 11:45:58.307 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.307 
Tue May 13 11:45:58.307 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.307 
Tue May 13 11:45:58.307 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.307 
Tue May 13 11:45:58.308 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.308 
Tue May 13 11:45:58.308 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.308 
Tue May 13 11:45:58.308 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.308 
Tue May 13 11:45:58.308 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.308 
Tue May 13 11:45:58.308 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.308 
Tue May 13 11:45:58.308 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.308 
Tue May 13 11:45:58.309 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.309 
Tue May 13 11:45:58.309 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.309 
Tue May 13 11:45:58.309 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.309 
Tue May 13 11:45:58.309 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.309 
Tue May 13 11:45:58.309 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.309 
Tue May 13 11:45:58.309 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.309 
Tue May 13 11:45:58.309 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.309 
Tue May 13 11:45:58.310 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.310 
Tue May 13 11:45:58.310 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.310 
Tue May 13 11:45:58.310 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.310 
Tue May 13 11:45:58.310 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.310 
Tue May 13 11:45:58.310 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.310 
Tue May 13 11:45:58.310 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.310 
Tue May 13 11:45:58.311 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.311 
Tue May 13 11:45:58.311 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.311 
Tue May 13 11:45:58.311 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.311 
Tue May 13 11:45:58.311 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.311 
Tue May 13 11:45:58.311 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.311 
Tue May 13 11:45:58.311 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.311 
Tue May 13 11:45:58.312 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.312 
Tue May 13 11:45:58.312 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.312 
Tue May 13 11:45:58.312 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.312 
Tue May 13 11:45:58.312 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.312 
Tue May 13 11:45:58.312 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.312 
Tue May 13 11:45:58.312 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.313 
Tue May 13 11:45:58.313 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.313 
Tue May 13 11:45:58.313 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.313 
Tue May 13 11:45:58.313 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.313 
Tue May 13 11:45:58.313 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.313 
Tue May 13 11:45:58.313 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.313 
Tue May 13 11:45:58.313 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.313 
Tue May 13 11:45:58.314 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.314 
Tue May 13 11:45:58.314 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.314 
Tue May 13 11:45:58.314 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.314 
Tue May 13 11:45:58.314 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.314 
Tue May 13 11:45:58.314 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.314 
Tue May 13 11:45:58.314 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.314 
Tue May 13 11:45:58.315 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.315 
Tue May 13 11:45:58.315 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.315 
Tue May 13 11:45:58.315 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.315 
Tue May 13 11:45:58.315 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.315 
Tue May 13 11:45:58.315 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.315 
Tue May 13 11:45:58.315 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.315 
Tue May 13 11:45:58.316 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.316 
Tue May 13 11:45:58.316 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.316 
Tue May 13 11:45:58.316 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.316 
Tue May 13 11:45:58.316 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.316 
Tue May 13 11:45:58.316 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.316 
Tue May 13 11:45:58.316 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.316 
Tue May 13 11:45:58.317 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.317 
Tue May 13 11:45:58.317 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.317 
Tue May 13 11:45:58.317 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.317 
Tue May 13 11:45:58.317 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.317 
Tue May 13 11:45:58.317 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.317 
Tue May 13 11:45:58.317 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.317 
Tue May 13 11:45:58.318 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.318 
Tue May 13 11:45:58.318 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.318 
Tue May 13 11:45:58.318 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.318 
Tue May 13 11:45:58.318 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.318 
Tue May 13 11:45:58.318 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.318 
Tue May 13 11:45:58.318 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.318 
Tue May 13 11:45:58.319 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.319 
Tue May 13 11:45:58.319 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.319 
Tue May 13 11:45:58.319 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.319 
Tue May 13 11:45:58.319 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.319 
Tue May 13 11:45:58.319 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.319 
Tue May 13 11:45:58.319 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.319 
Tue May 13 11:45:58.320 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.320 
Tue May 13 11:45:58.320 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.320 
Tue May 13 11:45:58.320 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.320 
Tue May 13 11:45:58.320 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.320 
Tue May 13 11:45:58.320 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.320 
Tue May 13 11:45:58.320 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.320 
Tue May 13 11:45:58.321 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.321 
Tue May 13 11:45:58.321 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.321 
Tue May 13 11:45:58.321 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.321 
Tue May 13 11:45:58.321 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.321 
Tue May 13 11:45:58.321 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.321 
Tue May 13 11:45:58.321 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.321 
Tue May 13 11:45:58.322 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.322 
Tue May 13 11:45:58.322 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.322 
Tue May 13 11:45:58.322 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.322 
Tue May 13 11:45:58.322 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.322 
Tue May 13 11:45:58.322 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.322 
Tue May 13 11:45:58.322 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.322 
Tue May 13 11:45:58.323 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.323 
Tue May 13 11:45:58.323 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.323 
Tue May 13 11:45:58.323 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.323 
Tue May 13 11:45:58.323 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.323 
Tue May 13 11:45:58.323 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.323 
Tue May 13 11:45:58.324 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.324 
Tue May 13 11:45:58.324 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.324 
Tue May 13 11:45:58.324 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.324 
Tue May 13 11:45:58.324 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.324 
Tue May 13 11:45:58.324 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.324 
Tue May 13 11:45:58.324 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.324 
Tue May 13 11:45:58.324 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.324 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.325 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.325 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.326 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.326 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.327 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.327 
Tue May 13 11:45:58.328 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.328 
Tue May 13 11:45:58.328 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.328 
Tue May 13 11:45:58.328 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.328 
Tue May 13 11:45:58.328 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.328 
Tue May 13 11:45:58.328 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.328 
Tue May 13 11:45:58.328 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.328 
Tue May 13 11:45:58.328 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.328 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.329 
Tue May 13 11:45:58.329 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.330 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.330 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.331 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.331 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.332 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.332 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.333 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.333 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.334 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.334 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.335 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.335 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.336 
Tue May 13 11:45:58.336 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.337 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.337 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.338 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.338 
Tue May 13 11:45:58.339 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.339 
Tue May 13 11:45:58.339 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.339 
Tue May 13 11:45:58.339 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.339 
Tue May 13 11:45:58.339 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.339 
Tue May 13 11:45:58.339 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.339 
Tue May 13 11:45:58.339 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.339 
Tue May 13 11:45:58.339 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.339 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Field name expected: offset:1
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
Tue May 13 11:45:58.340 
Tue May 13 11:45:58.340 check 0 0
Tue May 13 11:45:58.341 imported 0 objects
Tue May 13 11:45:58.341 ERROR: encountered 1422 error(s)s
localhost:~ student$ mongoimport --db country --collection countries < /Users/student/Downloads/countries.json --jsonArray
connected to: 127.0.0.1
Tue May 13 11:47:55.054 check 9 237
Tue May 13 11:47:55.060 imported 237 objects
localhost:~ student$ 
