/*
 * @Author: LetMeFly
 * @Date: 2022-05-05 09:22:45
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-05 09:22:46
 */
const LetMeFlyOJ_title = "进阶实验8-2.3：二叉搜索树的最近公共祖先";
const LetMeFlyOJ_inputData = "6 8\n\
6 3 1 2 5 4 8 7\n\
2 5\n\
8 7\n\
1 9\n\
12 -3\n\
0 8\n\
99 99";
const LetMeFlyOJ_outputData = "LCA of 2 and 5 is 3.\n\
8 is an ancestor of 7.\n\
ERROR: 9 is not found.\n\
ERROR: 12 and -3 are not found.\n\
ERROR: 0 is not found.\n\
ERROR: 99 and 99 are not found.";
const LetMeFlyOJ_memory = "64M";
const LetMeFlyOJ_time = "1s";

setTitleInputOutput(LetMeFlyOJ_title, LetMeFlyOJ_inputData, LetMeFlyOJ_outputData, LetMeFlyOJ_memory, LetMeFlyOJ_time);