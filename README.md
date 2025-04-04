# mariadb-crashreport

How to replicate MariaDB crash:

- npm ci
- docker compose up (keeping it without -d to see the logs of the crash)
- npm run start

Crash logs:

```
db-1  | 2025-04-05  8:42:14 0 [Note] Starting MariaDB 11.8.1-MariaDB-ubu2404 source revision 1c4aed7c680c0402d6e97e097f03815c0e9bf4c5 server_uid 72+4ASMvYxproTQgRqIDplDA1XA= as process 1
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Compressed tables use zlib 1.3
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Number of transaction pools: 1
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Using ARMv8 crc32 + pmull instructions
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Using liburing
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Initializing buffer pool, total size = 128.000MiB, chunk size = 2.000MiB
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Completed initialization of buffer pool
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: File system buffers for log disabled (block size=512 bytes)
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: End of log at LSN=47875
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Opened 3 undo tablespaces
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: 128 rollback segments in 3 undo tablespaces are active.
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Setting file './ibtmp1' size to 12.000MiB. Physically writing the file full; Please wait ...
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: File './ibtmp1' size is now 12.000MiB.
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: log sequence number 47875; transaction id 15
db-1  | 2025-04-05  8:42:14 0 [Note] Plugin 'FEEDBACK' is disabled.
db-1  | 2025-04-05  8:42:14 0 [Note] Plugin 'wsrep-provider' is disabled.
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
db-1  | 2025-04-05  8:42:14 0 [Note] InnoDB: Buffer pool(s) load completed at 250405  8:42:14
db-1  | 2025-04-05  8:42:15 0 [Note] Server socket created on IP: '0.0.0.0'.
db-1  | 2025-04-05  8:42:15 0 [Note] Server socket created on IP: '::'.
db-1  | 2025-04-05  8:42:15 0 [Note] mariadbd: Event Scheduler: Loaded 0 events
db-1  | 2025-04-05  8:42:15 0 [Note] mariadbd: ready for connections.
db-1  | Version: '11.8.1-MariaDB-ubu2404'  socket: '/run/mysqld/mysqld.sock'  port: 3306  mariadb.org binary distribution
db-1  | 250405  8:42:39 [ERROR] mariadbd got signal 11 ;
db-1  | Sorry, we probably made a mistake, and this is a bug.
db-1  |
db-1  | Your assistance in bug reporting will enable us to fix this for the next release.
db-1  | To report this bug, see https://mariadb.com/kb/en/reporting-bugs about how to report
db-1  | a bug on https://jira.mariadb.org/.
db-1  |
db-1  | Please include the information from the server start above, to the end of the
db-1  | information below.
db-1  |
db-1  | Server version: 11.8.1-MariaDB-ubu2404 source revision: 1c4aed7c680c0402d6e97e097f03815c0e9bf4c5
db-1  |
db-1  | The information page at https://mariadb.com/kb/en/how-to-produce-a-full-stack-trace-for-mariadbd/
db-1  | contains instructions to obtain a better version of the backtrace below.
db-1  | Following these instructions will help MariaDB developers provide a fix quicker.
db-1  |
db-1  | Attempting backtrace. Include this in the bug report.
db-1  | (note: Retrieving this information may fail)
db-1  |
db-1  | Thread pointer: 0xffff2c000c78
db-1  | stack_bottom = 0xffff826bc000 thread_stack 0x49000
db-1  | Printing to addr2line failed
db-1  | mariadbd(my_print_stacktrace+0x30)[0xaaaac3901650]
db-1  | mariadbd(handle_fatal_signal+0x354)[0xaaaac34a3754]
db-1  | linux-vdso.so.1(__kernel_rt_sigreturn+0x0)[0xffff88dd17a0]
db-1  | mariadbd(my_string_metadata_get+0x24)[0xaaaac395e6f8]
db-1  | mariadbd(+0xab6cec)[0xaaaac34e6cec]
db-1  | mariadbd(+0x7d27fc)[0xaaaac32027fc]
db-1  | mariadbd(_ZN18Prepared_statement12execute_loopEP6StringbPhS2_+0x34c)[0xaaaac320c250]
db-1  | mariadbd(+0x7dcfb8)[0xaaaac320cfb8]
db-1  | mariadbd(_Z16dispatch_command19enum_server_commandP3THDPcjb+0xca0)[0xaaaac31d6340]
db-1  | mariadbd(_Z10do_commandP3THDb+0x174)[0xaaaac31d7848]
db-1  | mariadbd(_Z24do_handle_one_connectionP7CONNECTb+0x550)[0xaaaac33387f0]
db-1  | mariadbd(handle_one_connection+0x74)[0xaaaac3338d24]
db-1  | mariadbd(+0xc87c8c)[0xaaaac36b7c8c]
db-1  | /lib/aarch64-linux-gnu/libc.so.6(+0x8597c)[0xffff87ec597c]
db-1  | /lib/aarch64-linux-gnu/libc.so.6(+0xeba4c)[0xffff87f2ba4c]
db-1  |
db-1  | Connection ID (thread ID): 3
db-1  | Status: NOT_KILLED
db-1  | Query (0x0): (null)Optimizer switch: index_merge=on,index_merge_union=on,index_merge_sort_union=on,index_merge_intersection=on,index_merge_sort_intersection=off,index_condition_pushdown=on,derived_merge=on,derived_with_keys=on,firstmatch=on,loosescan=on,materialization=on,in_to_exists=on,semijoin=on,partial_match_rowid_merge=on,partial_match_table_scan=on,subquery_cache=on,mrr=off,mrr_cost_based=off,mrr_sort_keys=off,outer_join_with_cache=on,semijoin_with_cache=on,join_cache_incremental=on,join_cache_hashed=on,join_cache_bka=on,optimize_join_buffer_size=on,table_elimination=on,extended_keys=on,exists_to_in=on,orderby_uses_equalities=on,condition_pushdown_for_derived=on,split_materialized=on,condition_pushdown_for_subquery=on,rowid_filter=on,condition_pushdown_from_having=on,not_null_range_scan=off,hash_join_cardinality=on,cset_narrowing=on,sargable_casefold=on
db-1  |
db-1  | Writing a core file...
db-1  | Working directory at /var/lib/mysql
db-1  | Resource Limits (excludes unlimited resources):
db-1  | Limit                     Soft Limit           Hard Limit           Units
db-1  | Max stack size            8388608              unlimited            bytes
db-1  | Max core file size        0                    unlimited            bytes
db-1  | Max open files            1048576              1048576              files
db-1  | Max pending signals       31324                31324                signals
db-1  | Max msgqueue size         819200               819200               bytes
db-1  | Max nice priority         0                    0
db-1  | Max realtime priority     0                    0
db-1  | Core pattern: core
db-1  |
db-1  | Kernel version: Linux version 6.10.14-linuxkit (root@buildkitsandbox) (gcc (Alpine 13.2.1_git20240309) 13.2.1 20240309, GNU ld (GNU Binutils) 2.42) #1 SMP Fri Nov 29 17:22:03 UTC 2024
```
