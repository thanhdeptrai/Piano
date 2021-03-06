﻿var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT  = 600;
var SFX_VOLUME = 100;
var MUSIC_VOLUME = 100;
var PLAYBACK_SPEED = 1;
musicData = [
	"G4 1292,51 1375,50 1500,48 1792,47 2083,48 2459,47 2750,46 3000,44 3334,47 4500,48 4750,47 5043,46 5334,43 5709,47 6667,48 6959,47 7334,46 7584,44 8000,46 8751,47 9088,48 9791",
	"36 708,39 917,40 1083,40 1333,32 1333,41 1791,41 2250,36 2666,39 3166,36 4082,39 4291,40 4500,41 4708,29 4958,40 4958,43 5416,43 5792,36 6249,38 6708,36 7541,43 7791,44 8000,45 8125,45 8332,29 8374,46 8750,46 9166,39 9208,41 9292,39 9666,41 10125,47 10583,47 10957,48 10999,47 11291,46 11541,45 11834,27 11875,36 12333,38 12791,36 13250,27 13710,46 14165,45 14625,43 15083,35 15500,43 15541,44 16000,44 16458,39 16875,42 17333,39 18458,43 18666,42 18833,42 19041,27 19041,43 19541,43 19958,36 20458,38 20875,36 22041,39 22293,40 22500,41 22750,33 22750,42 23208,40 23583,37 23625,42 23625,37 24166,40 24625",
	"35 0,46 0,49 0,51 0,39 428,43 856,44 1284,51 2569,49 2569,46 2569,50 3211,44 3424,46 3424,50 3424,33 3424,37 3852,46 4280,44 4280,41 4280,49 4280,42 4708,49 5993,46 5993,44 5993,48 6635,4 6848,43 6848,46 6848,48 6848,35 7276,9 7704,47 7704,42 7704,39 8132,47 9417,42 9417,42 10059,46 10059,43 10272,32 10272,46 10272,36 10700,40 11128,42 11556,41 11984,46 12412,49 12840,48 13268,35 13696,49 13696,39 14124,42 14552,46 14552,46 15837,49 16265,48 16693,33 17121,49 17121,37 17549,42 17977,46 17977,46 19262,49 19690,48 20118,49 20546,4 20546,35 20974,9 21402,39 21830,49 21830,49 22258,40 22258,47 22686,47 23114,46 23542,32 23970,36 24398,39 24826,40 25254,41 25682,46 26110,49 26538,48 26966,35 27394,49 27394,39 27822,46 28250,42 28250,44 28678,46 29535,51 29963,50 30605,33 30818,50 30818,37 31246,41 31674,49 31674,42 32102,46 32959,49 33387,48 33815,4 34243,49 34243,35 34671,47 34671,9 35099,39 35527,47 35527,47 35955,40 35955,49 36383,54 36811,53 37239,32 37667,36 38095,39 38523,36 38951,41 39379,36 39807,50 39807,50 40235,39 40235,19 40663,36 40663,19 41091,30 41091,34 41519,51 41519,37 41947,51 41947,34 42375,39 42803,51 43231,34 43231,37 43659,51 43659,48 44087,34 44087,50 44515,33 44515,49 44943,37 44943,40 45371,49 45371,37 45799,48 45799,49 46013,42 46227,37 46655,49 46655,40 47083,48 47083,49 47511,37 47511,19 47939,4 47939,35 48367,9 48795,46 49223,35 49223,40 49651,53 49651,19 50079,35 50079,9 50507,51 50507,50 50935,35 50935,32 51363,36 51791,39 52219,36 52647,41 53075,36 53503,50 53503,50 53931,39 53931,19 54359,36 54359,19 54787,30 54787,34 55215,51 55215,37 55643,51 55643,34 56071,39 56499,51 56927,34 56927,37 57355,51 57355,56 57783,34 57783,33 58211,55 58211,54 58639,37 58639,40 59067,55 59067,37 59495,56 59495,42 59923,37 60351,56 60351,40 60779,50 60779,49 61207,37 61207,54 61635,4 61635,35 62063,9 62491,54 62919,35 62919,40 63347,54 63347,53 63775,35 63775,9 64203,53 64203,53 64631,35 64631,32 65059,36 65487,41 65915,36 66343,32 66771,39 66771,36 67199,46 67199,39 67627,53 67627,32 67627,19 68055,36 68055,51 68483,35 68483,39 68911,42 69339,51 69339,39 69767,19 69767,51 69981,34 70195,39 70623,51 71051,41 71051,19 71479,33 71907,51 71907,19 72335,37 72335,40 72763,51 72763,37 73191,50 73191,49 73405,32 73619,37 74047,49 74047,39 74475,51 74475,53 74903,54 75331,4 75331,35 75759,9 76187,54 76187,54 76615,35 76615,32 77043,53 77043,36 77471,50 77471,39 77899,50 77899,19 78327,36 78327,35 78755,51 78755,39 79183,42 79611,39 80039,44 80467,49 80895,51 81323,53 81751,54 82179,4 82179,35 82607,9 83035,54 83035,54 83463,35 83463,32 83891,53 83891,36 84319,50 84319,39 84747,50 84747,19 85175,36 85175,51 85603,35 85603,39 86031,19 86031,34 86459,51 86459,50 86887,39 86887,49 87101,33 87315,50 88172,51 88600,4 89028,47 89028,35 89456,9 89884,47 89884,35 90312,49 90312,49 90740,32 90740,36 91168,39 91596,48 91596,36 92024,49 92452,4 92452,14 92452,47 92452,35 92880,9 93308,42 93736,37 93736,30 93736,46 93736,44 93736,40 95021,36 95021,29 95021,14 95021,43 95021,42 95877,44 95877,28 95877,39 95877,32 96305,35 96733,35 97161,28 97161,44 98017,39 98017,14 98445,40 98445,41 98873,46 98873,47 99301,4 99301,42 99301,14 99301,35 99729,9 100157,42 100585,37 100585,30 100585,46 100585,44 100585,40 101870,36 101870,29 101870,14 101870,43 101870,50 102726,32 102726,46 102726,48 102726,36 103154,39 103582,32 104010,39 104010,50 104010,48 104010,46 104010,50 104867,50 105295,19 105723,19 106151,30 106151,34 106579,51 106579,37 107007,51 107007,34 107435,39 107863,51 108291,34 108291,37 108719,51 108719,48 109147,34 109147,46 109575,50 109575,33 109575,49 110003,46 110003,37 110003,40 110431,46 110431,49 110431,48 110859,46 110859,37 110859,49 111073,46 111073,42 111287,37 111715,49 111715,46 111715,40 112143,48 112143,49 112571,37 112571,4 112999,47 112999,19 112999,35 113427,9 113855,46 114283,35 114283,53 114711,40 114711,46 114711,19 115139,14 115139,35 115139,51 115567,9 115567,44 115567,43 115995,35 115995,50 115995,32 116423,36 116851,39 117279,36 117707,41 118135,36 118563,50 118563,50 118991,39 118991,19 119419,36 119419,47 119847,19 119847,30 119847,34 120275,51 120275,37 120703,51 120703,34 121131,39 121559,51 121987,34 121987,37 122415,51 122415,51 122843,34 122843,56 122843,33 123271,51 123271,55 123271,51 123699,37 123699,54 123699,51 124127,55 124127,40 124127,56 124555,37 124555,51 124555,42 124983,37 125411,56 125411,49 125411,40 125839,50 125839,49 126267,37 126267,4 126695,49 126695,56 126695,35 127123,9 127551,54 127979,35 127979,49 127979,49 128193,54 128193,54 128407,40 128407,49 128407,53 128835,49 128835,35 128835,53 129263,9 129263,49 129263,49 129691,35 129691,53 129691,32 130119,36 130547,39 130975,36 131403,32 131831,39 131831,36 132259,46 132259,39 132687,53 132687,32 132687,19 133115,36 133115,51 133543,35 133543,49 133543,39 133971,49 134399,42 134399,51 134399,19 134827,39 134827,51 135041,49 135041,34 135255,39 135683,51 136111,49 136111,41 136111,19 136539,49 136967,51 136967,33 136967,37 137395,19 137395,49 137823,51 137823,40 137823,37 138251,50 138251,49 138465,32 138679,37 139107,49 139107,39 139535,51 139535,53 139963,49 140391,54 140391,4 140391,35 140819,9 141247,54 141247,49 141247,35 141675,49 141675,54 141675,53 141889,50 141889,32 142103,36 142531,50 142531,39 142959,50 142959,19 143387,36 143387,35 143815,51 143815,39 144243,42 144671,39 145099,44 145527,49 145955,51 146383,53 146811,19 147239,54 147239,4 147239,49 147239,35 147667,9 148095,54 148095,49 148095,35 148523,49 148523,54 148523,53 148737,50 148737,32 148951,36 149379,50 149379,39 149807,50 149807,19 150235,36 150235,51 150663,35 150663,39 151091,19 151091,34 151519,51 151519,50 151947,39 151947,49 152161,33 152375,50 153232,51 153660,14 154088,47 154088,4 154088,35 154516,14 154944,9 154944,47 154944,35 155372,49 155372,32 155800,49 155800,36 156228,50 156442,49 156656,48 156656,39 156656,36 157084,35 157512,49 157512,39 157940,42 158368,39 158796,44 159224,47 159652,54 160080,53 160508,36 160936,50 160936,52 160936,40 161150,43 161364,45 161578,50 161792,52 161792,47 161792,45 162006,43 162220,53 162220,52 162434,40 162434,50 162434,7 162648,40 162862,12 163076,45 163290,50 163504,47 163504,52 163504,45 163718,12 163932,53 163932,40 164146,50 164359,52 164359,34 164359,38 164573,41 164787,53 164787,43 165001,50 165215,41 165215,52 165215,43 165429,51 165643,41 165643,38 165857,50 165857,33 166071,36 166285,50 166499,38 166499,40 166713,52 166927,43 166927,40 167141,38 167355,54 167355,36 167569,32 167782,50 167782,55 167782,36 167996,39 168210,41 168424,39 168638,55 168638,50 168638,41 168852,55 169066,39 169066,50 169066,54 169280,36 169280,51 169280,33 169494,37 169708,51 169922,40 169922,12 170136,51 170350,44 170350,12 170564,40 170778,53 170778,37 170992,52 171205,36 171205,40 171419,43 171633,45 171847,47 172061,45 172275,43 172489,40 172703,36 172917,40 173131,43 173345,50 173345,45 173559,52 173773,47 173773,45 173987,43 174201,54 174201,40 174415,32 174628,50 174628,53 174628,55 174628,36 174841,39 175055,41 175269,39 175483,55 175483,50 175483,41 175697,39 175911,55 175911,50 175911,54 176125,36 176125,51 176125,33 176339,37 176553,51 176767,40 176767,12 176981,51 177195,40 177195,12 177409,40 177623,53 177623,37 177837,36 178050,52 178050,40 178264,43 178478,53 178478,45 178692,52 178906,7 178906,40 179120,51 179334,12 179334,44 179548,50 179548,34 179762,38 179976,41 180190,43 180404,51 180618,41 180618,43 180832,52 181046,41 181046,38 181260,32 181473,46 181473,48 181473,36 181687,39 181901,41 182115,39 182329,48 182329,46 182329,41 182543,39 182757,50 182757,36 182971,50 183185,33 183185,37 183399,40 183613,12 183827,51 183827,50 184041,17 184041,40 184041,12 184255,40 184469,37 184683,50 184896,36 184896,40 185110,43 185324,45 185538,47 185752,45 185966,43 186180,40 186394,36 186608,52 187893,39 188321,48 188321,43 188749,46 189177,48 189177,43 189605,50 189605,50 190033,40 190033,44 190461,46 190889,17 190889,44 191317,43 191745,50 191745,47 192173,51 192601,47 193029,47 193457,45 193457,52 193457,50 193457",
	"2 1997,51 2001,18 2499,5 2503,7 2911,51 2927,18 3359,5 3363,26 3858,51 3862,30 4413,48 4445,33 4990,51 4994,48 5648,30 5664,44 10979,15 11220,51 11510,2 11584,18 11986,5 11998,51 12430,7 12430,5 12878,18 12894,26 13385,51 13393,30 13908,48 13961,33 14486,51 14514,30 15139,48 15147,44 19853,15 20048,51 20260,2 20268,5 20628,18 20628,51 20802,7 20989,5 21317,18 21329,51 21507,26 21681,30 22021,48 22037,51 22215,33 22381,47 22721,30 22725,41 23044,44 23064,30 23076,15 23121,34 23436,47 23448,48 23788,37 23808,15 24115,34 24115,34 24472,45 24472,38 24836,41 25176,38 25521,44 25554,13 25687,44 25886,2 25890,5 26233,7 26557,41 26747,44 26913,5 26925,45 27073,26 27243,15 27255,30 27616,33 27953,30 28298,15 28302,47 28480,30 28655,48 28659,34 28990,37 29351,34 29680,47 29708,15 29866,45 30036,34 30068,38 30413,41 30749,38 31123,44 31348,15 31427,2 31468,51 31496,5 31812,18 31832,51 31994,7 32152,18 32493,5 32505,51 32650,26 32811,30 33150,48 33162,51 33327,33 33485,30 33837,47 33841,41 34135,30 34160,44 34168,15 34262,34 34518,47 34546,37 34869,48 34906,49 34910,34 35221,20 35229,34 35570,52 35574,38 35896,52 36050,20 36208,41 36220,52 36393,38 36537,51 36553,18 36744,51 36960,2 37017,5 37315,7 37689,5 38012,44 38020,45 38186,26 38356,15 38364,30 38708,33 39044,30 39369,15 39381,47 39534,48 39713,30 39721,31 39733,34 40060,37 40393,34 40712,47 40732,15 40898,34 41072,45 41072,38 41395,51 41719,41 41723,52 41868,38 42026,51 42034,18 42179,2 42345,51 42361,44 42528,48 42647,5 42709,44 42829,51 43007,7 43027,52 43185,5 43346,51 43354,18 43520,26 43661,51 43698,44 43868,48 43999,30 44044,44 44198,51 44356,33 44364,52 44517,30 44679,51 44691,18 44840,51 45014,30 45022,52 45172,20 45319,34 45335,54 45496,55 45654,37 45691,20 45832,34 46010,52 46014,51 46170,34 46332,18 46336,38 46693,51 47013,41 47025,52 47166,38 47340,51 47340,18 47509,2 47679,51 47687,44 47862,45 47878,48 47984,5 48046,44 48179,51 48345,7 48370,52 48498,51 48672,5 48676,18 48842,26 48999,51 49028,50 49069,44 49195,48 49359,30 49375,44 49520,51 49690,33 49690,52 49848,51 50013,30 50021,18 50178,30 50352,51 50360,52 50544,34 50662,20 50699,54 50844,55 51022,37 51058,20 51203,34 51377,52 51385,51 51554,18 51737,34 51757,38 52118,41 52450,38 52807,44 53036,15 53098,2 53135,51 53155,5 53490,18 53490,51 53639,7 53830,5 54158,18 54170,51 54327,26 54477,30 54820,48 54828,51 54977,33 55147,47 55463,30 55471,44 55774,41 55782,29 55815,15 55815,30 55815,42 55823,47 56126,33 56146,48 56456,36 56460,15 56770,33 56786,34 57084,45 57092,38 57429,41 57741,38 58036,44 58073,13 58197,2 58338,44 58379,5 58707,7 59035,41 59188,5 59366,44 59370,45 59510,26 59684,15 59684,30 59999,33 60331,30 60650,15 60670,47 60840,30 60983,48 60999,34 61307,37 61656,34 61946,47 61962,15 62107,45 62264,34 62300,38 62614,41 62943,38 63262,44 63474,15 63511,2 63565,51 63585,5 63892,18 63900,51 64057,7 64219,5 64534,18 64538,51 64687,26 64845,30 65168,48 65172,51 65337,33 65478,47 65769,30 65781,41 66088,30 66096,42 66108,44 66128,15 66184,34 66410,47 66442,37 66733,48 66745,34 67056,20 67064,34 67392,52 67404,38 67710,52 67888,20 68046,41 68071,52 68224,51 68352,38 68360,18 68538,2 68687,51 68716,5 69023,7 69371,5 69683,44 69703,45 69873,26 70010,15 70034,30 70358,33 70690,30 70997,15 71005,47 71154,30 71320,48 71328,34 71660,37 71976,47 72283,34 72287,15 72444,34 72618,45 72618,38 72933,41 73262,51 73274,52 73414,38 73551,51 73571,18 73707,2 73856,51 73872,44 74030,48 74165,5 74185,44 74342,51 74508,7 74512,52 74674,5 74806,51 74839,18 74996,26 75128,51 75173,44 75323,48 75470,30 75511,44 75647,51 75808,33 75820,52 75973,30 76109,51 76146,18 76298,30 76451,51 76471,52 76638,34 76765,20 76802,54 76946,55 77083,37 77124,20 77273,34 77426,52 77451,51 77612,34 77757,18 77777,38 78096,51 78420,41 78428,52 78573,38 78722,51 78734,18 78904,2 79024,51 79074,44 79241,45 79274,48 79364,5 79409,44 79558,51 79703,7 79723,52 79863,5 80017,51 80033,18 80194,26 80334,51 80367,44 80542,48 80673,30 80706,44 80847,33 80996,51 81008,52 81166,30 81290,51 81319,18 81488,51 81637,30 81641,52 81799,34 81964,20 81968,54 82129,55 82258,37 82312,20 82469,34 82610,52 82643,51 82804,34 82953,18 82989,38 83318,41 83659,38 83991,44 84207,15 84277,2 84343,51 84351,18 84677,5 84681,51 84821,7 84996,5 85320,18 85336,51 85468,26 85663,48 85994,30 85994,51 86151,33 86313,30 86641,47 86645,44 86956,41 86960,30 86960,15 87005,34 87296,47 87304,37 87618,48 87626,34 87938,15 87958,45 88257,34 88277,38 88613,41 88937,38 89240,44 89294,13 89406,2 89576,44 89601,5 89936,7 90240,41 90406,44 90547,5 90567,45 90716,26 90891,15 90895,30 91214,33 91530,30 91853,15 91857,47 92018,30 92180,48 92216,34 92520,37 92852,34 93160,47 93185,15 93330,34 93494,45 93494,38 93839,41 94183,38 94524,44 94736,15 94765,2 94815,51 94864,5 95150,18 95162,51 95323,7 95480,5 95786,18 95798,51 95947,26 96092,48 96435,30 96435,51 96592,33 96775,30 97078,47 97078,41 97335,44 97351,30 97384,15 97409,34 97705,47 97705,48 97737,37 98022,48 98026,34 98342,20 98354,34 98669,52 98677,38 98995,52 99132,20 99290,41 99302,52 99463,38 99599,51 99611,50 99818,18 100013,2 100346,51 100354,5 100711,7 100990,5 101314,44 101322,45 101488,26 101633,15 101666,30 101969,33 102289,30 102597,15 102609,47 102778,30 102936,48 102944,34 103255,37 103566,34 103869,47 103902,15 104051,34 104196,45 104216,38 104531,41 104851,51 104863,52 105016,38 105124,51 105161,18 105318,2 105450,51 105487,44 105641,48 105776,5 105801,44 105938,51 106087,7 106116,52 106261,51 106410,5 106422,18 106592,26 106757,51 106773,44 106919,48 107071,30 107075,44 107241,33 107365,51 107406,50 107414,52 107526,51 107667,30 107691,18 107819,51 107980,30 108000,52 108138,20 108272,34 108305,54 108450,55 108604,37 108637,20 108765,34 108922,52 108930,51 109091,34 109224,18 109240,38 109567,41 109895,51 109895,52 110015,38 110185,51 110193,18 110358,2 110523,51 110531,44 110693,45 110693,48 110820,5 110870,44 111007,51 111181,7 111185,52 111326,5 111475,51 111483,18 111648,26 111796,51 111824,44 111981,45 111993,48 112128,30 112173,44 112308,51 112466,33 112482,52 112602,51 112747,30 112776,18 112912,51 113085,30 113105,52 113242,34 113398,20 113414,54 113625,37 113779,55 113787,20 113960,34 114104,52 114137,51 114295,18 114452,34 114452,38 114788,41 115153,38 115490,44 115835,15 115905,2 115921,51 116006,5 116419,7 116918,17 117334,20 117713,22 118146",
	"40 0,40 300,40 449,40 749,40 898,40 1198,40 1347,40 1496,40 1645,40 1794,40 2094,40 2243,40 2543,40 2692,40 2992,40 3141,40 3290,40 3439,40 3588,40 3888,40 4037,40 4337,40 4486,40 4786,40 4935,37 5084,39 5233,35 5382,37 5382,40 5382,35 5682,37 5682,40 5682,35 5982,37 5982,40 5982,37 6131,39 6131,41 6131,9 6280,40 6280,42 6280,9 6580,40 6580,42 6580,9 6880,40 6880,42 6880,40 7029,43 7029,37 7178,39 7178,41 7178,37 7478,39 7478,41 7478,37 7778,40 7778,36 7927,39 7927,37 8076,39 8076,37 8225,40 8225,37 8675,39 8824,35 8973,9 8973,40 8973,35 9273,9 9273,40 9273,9 9573,40 9573,9 9722,41 9722,37 9871,39 9871,42 9871,37 10171,39 10171,42 10171,39 10471,42 10471,39 10620,43 10620,39 10769,41 10769,39 11069,41 11069,37 11369,40 11369,39 11518,35 11667,37 11667,40 11667,37 12267,39 12416,35 12565,37 12565,40 12565,35 12865,37 12865,40 12865,37 13165,40 13165,37 13314,42 13314,9 13463,40 13463,43 13463,9 13763,40 13763,43 13763,40 14063,43 14063,40 14212,44 14212,40 14361,43 14361,14 14361,40 14661,43 14661,14 14661,42 14961,44 14961,41 15110,43 15110,42 15259,44 15259,40 15408,40 15858,41 16007,9 16156,40 16156,42 16156,9 16456,40 16456,42 16456,9 16756,40 16756,43 16756,42 17056,44 17056,40 17205,40 17655,42 17804,37 17953,10 17953,41 17953,37 18253,10 18253,41 18253,40 18553,42 18553,38 18702,40 18702,37 18851,10 18851,41 18851,44 19450,46 19599,42 19748,44 19748,47 19748,42 20048,44 20048,47 20048,42 20348,44 20348,47 20348,44 20497,46 20497,48 20497,14 20646,47 20646,49 20646,14 20946,47 20946,49 20946,14 21246,47 21246,49 21246,47 21395,50 21395,44 21544,46 21544,48 21544,44 21844,46 21844,48 21844,44 22144,47 22144,43 22293,46 22293,44 22442,46 22442,44 22591,47 22591,44 23041,46 23190,42 23339,14 23339,47 23339,42 23639,14 23639,47 23639,14 23939,47 23939,14 24088,48 24088,44 24237,46 24237,49 24237,44 24537,46 24537,49 24537,46 24837,49 24837,46 24986,50 24986,46 25135,48 25135,46 25435,48 25435,44 25735,47 25735,46 25884,42 26033,44 26033,47 26033,44 26633,46 26782,42 26931,44 26931,47 26931,42 27231,44 27231,47 27231,44 27531,47 27531,44 27680,49 27680,14 27829,47 27829,50 27829,14 28129,47 28129,50 28129,47 28429,50 28429,47 28578,51 28578,47 28727,50 28727,19 28727,47 29027,50 29027,19 29027,49 29327,51 29327,48 29476,50 29476,49 29625,51 29625,47 29774,47 30224,48 30373,14 30522,47 30522,49 30522,14 30822,47 30822,49 30822,14 31122,47 31122,50 31122,49 31422,51 31422,47 31571,47 32021,49 32170,44 32319,15 32319,48 32319,44 32619,15 32619,48 32619,47 32919,15 33068,44 33217,47 33217,44 33517,47 33517,44 33817,46 33817,48 33817,46 34117,47 34117,49 34117,49 34417,49 34566,14 34715,47 34715,50 34715,47 35015,51 35015,49 35164,44 35613,49 35613,44 35762,47 35762,44 35911,47 36810,50 36810,19 36810,14 37409,50 37409,14 37558,47 37558,14 37707,10 38606,41 38606,10 38755,41 38755,36 39055,40 39055,37 39505,10 39505,42 39505,42 40105,43 40254,40 40403,42 40403,44 40403,40 40703,42 40703,44 40703,40 41003,42 41003,44 41003,40 41303,42 41303,14 41303,40 41452,42 41452,44 41452,39 42201,41 42201,43 42201,39 42501,41 42501,43 42501,39 42801,41 42801,43 42801,39 43101,41 43101,43 43101,39 43250,42 43250,44 43250,40 43999,42 43999,44 43999,40 44299,42 44299,44 44299,40 44599,42 44599,44 44599,40 44899,42 44899,14 44899,40 45048,42 45048,44 45048,10 45797,41 45797,43 45797,10 46097,42 46097,37 46397,41 46397,35 46697,37 46697,40 46697,40 47297,41 47446,37 47595,40 47595,42 47595,43 48195,44 48344,39 48493,43 48493,39 48793,42 48793,39 49093,41 49093,37 49393,39 49393,42 49393,37 49693,39 49693,43 49693,37 49993,39 49993,44 49993,39 50293,41 50293,43 50293,42 50893,43 51042,39 51191,42 51191,44 51191,43 51791,42 51940,10 52089,41 52089,10 52389,42 52389,10 52689,41 52689,35 52989,37 52989,40 52989,41 53589,39 53738,35 53887,37 53887,40 53887,47 54486,48 54635,44 54784,47 54784,49 54784,48 55384,49 55533,46 55682,50 55682,46 55982,49 55982,46 56282,50 56282,49 56582,51 56582,46 56882,50 56882,46 57182,49 57182,42 57482,14 57482,47 57482,47 58082,48 58231,44 58380,47 58380,49 58380,44 58680,47 58680,50 58680,47 58980,51 58980,14 59280,47 59280,19 59280,14 59580,47 59580,14 59880,50 59880,44 60180,49 60180,50 60780,48 60929,44 61078,47 61078,48 61678,15 61827,47 61976,49 61976,51 61976,47 62876,50 62876,19 62876,46 63776,49 63776,51 63776,46 64076,49 64076,51 64076,46 64376,49 64376,51 64376,46 64676,48 64676,51 64676,50 64825,14 65574,47 65574,50 65574,44 66474,47 66474,49 66474,44 67374,49 67374,44 67674,50 67674,44 67974,48 67974,42 68274,44 68274,47 68274,47 68724,48 68873,49 69022,47 69171,49 69171,51 69171,47 69621,48 69770,49 69919,47 70068,49 70068,19 70068,47 70518,48 70667,49 70816,46 70965,49 70965,51 70965,46 71265,49 71265,51 71265,49 71565,53 71565,46 71865,48 71865,51 71865,50 72014,14 72763,47 72763,50 72763,44 73663,47 73663,49 73663,44 74563,49 74563,44 74863,50 74863,44 75163,48 75163,42 75463,44 75463,47 75463,40 76363 "

];
window.onload = function () {
    var loadedImage = 0;
	var loadedAudio = 0;
	var loadedPercent = 0;
	var loadAudios,loadImages;
    windowLoad();
	function windowLoad(){	
		CAAT.DEBUG = 1;
		var director = new CAAT.Foundation.Director().initialize(CANVAS_WIDTH, CANVAS_HEIGHT, document.getElementById("canvas"));
		var scene = director.createScene();
		var startTime = +new Date();
        var loadActor = new CAAT.Foundation.ActorContainer().setBounds(0,150,director.width,director.height);
		scene.addChild(loadActor);
		loadActor.paint = function(director,time){
			var ctx = director.ctx;
			
			var backgroundGradient=ctx.createLinearGradient(0,0,CANVAS_WIDTH,0);
			backgroundGradient.addColorStop(0,"#000");
			backgroundGradient.addColorStop(1,"#FFF");
			ctx.fillStyle = backgroundGradient;
			ctx.fillRect(-this.x,-this.y,CANVAS_WIDTH,CANVAS_HEIGHT);
			
			
			var barLength = 300;
			var barHeight = 15;
			var barPoxX = (CANVAS_WIDTH - barLength)/2;
			var barPoxY = 40;
			ctx.fillStyle = "#333";
			ctx.strokeStyle = "#FFF";
			ctx.beginPath();
			ctx.moveTo(barPoxX,barPoxY);
			ctx.lineTo(barPoxX+barLength,barPoxY);
			ctx.arc(barPoxX+barLength,barPoxY+barHeight/2,barHeight/2,-Math.PI/2, Math.PI/2);
			ctx.moveTo(barPoxX+barLength,barPoxY+barHeight);
			ctx.lineTo(barPoxX,barPoxY+barHeight);
			ctx.arc(barPoxX,barPoxY+barHeight/2,barHeight/2,Math.PI/2,3/2*Math.PI);
			ctx.closePath();
			ctx.fill();
			if(loadedPercent<0) loadedPercent = 0;
			ctx.fillStyle = "#0FF";
			ctx.font = "30px Times New Roman";
			ctx.fillText(loadedPercent+"%",barPoxX,30);
			ctx.fillText("LOADING...",barPoxX,90);
			if(loadedPercent<1) return;
			var barGradient = ctx.createLinearGradient(barPoxX,barPoxY,barPoxX+barLength,barPoxY);
			barGradient.addColorStop(1,"#0FF");
			barGradient.addColorStop(0.5,"#FF0");
			barGradient.addColorStop(0,"#FFF");
			ctx.fillStyle = barGradient;
			ctx.beginPath();
			ctx.moveTo(barPoxX,barPoxY+barHeight);
			ctx.arc(barPoxX,barPoxY+barHeight/2,barHeight/2,Math.PI/2,3/2*Math.PI);
			ctx.closePath();
			ctx.fill();
			ctx.fillRect(barPoxX,barPoxY,barLength*loadedPercent/100,barHeight);
			
			if(loadedPercent<2) return;
			ctx.beginPath();
			ctx.moveTo(barPoxX+barLength*loadedPercent/100,barPoxY);
			ctx.arc(barPoxX+barLength*loadedPercent/100,barPoxY+barHeight/2,barHeight/2,-Math.PI/2, Math.PI/2);
			ctx.closePath();
			ctx.fill();
			if(loadAudios&&loadImages&&(+new Date() - startTime>1000)) {
				run(director,loadImages,loadAudios);
				scene.removeChild(this);
			}
		}
		load();
		CAAT.loop(60);
	}
    function load() {
		
		
		var audioElement = new AudioPreloader();
		for (var i=1;i<62;i++){
			audioElement.addElement("sound"+i,["sound/sound"+i+".mp3","sound/sound"+i+".ogg"]);
		}
			
        var imageElement = new CAAT.Module.Preloader.Preloader().
			addElement("recordButton","img/recordButton.png").
			addElement("playButton","img/playButton.png").
			addElement("stopButton","img/stopButton.png").
			addElement("deleteButton","img/deleteButton.png").
			addElement("pauseButton","img/pauseButton.png");
		
		var elementLength =audioElement.elements.length + imageElement.elements.length;
		audioElement.load (
		function loadAll(audios){
			loadAudios = audios;
			
		},
		function loadEach(audio){
			loadedAudio++;
			loadedPercent = Math.round((loadedAudio + loadedImage)/elementLength*100);
		});
        imageElement.load(
		function onAllAssetsLoaded(images) {
			loadImages = images;
		},
		function onEachLoad(index){
			loadedImage++;
			loadedPercent = Math.round((loadedAudio + loadedImage)/elementLength*100);
		});
    }
    function run(director,images,audios) {
        director.setImagesCache(images);
		Sound.initialize(audios);
		var scene = director.currentScene;
		
		var whiteKey = [];
		var blackKey = [];
		var whiteKeyLength = 36;
		var blackKeyLength = 25;
		
		var keyBoardPosX = 50;
		var keyBoardPosY = 300;
		var whiteKeyWidth = 20;
		var whiteKeyHeight = 120;
		var blackKeyWidth = 14;
		var blackKeyHeight = 70;
		var playbackBoardPoxY = 100;
		var backgroundGradient= director.ctx.createLinearGradient(0,0,0,director.height); 
			backgroundGradient.addColorStop(0,"#000");
			backgroundGradient.addColorStop(1,"#FFF");
		var background = new CAAT.ActorContainer().setBounds(0,0,director.width,director.height).setFillStyle(backgroundGradient);
		scene.addChild(background);
		
		var pausedStart = 0;
		scene.createTimer(0,Number.MAX_VALUE,
		function (scene_time, timer_time, timertask_instance) {   // timeout

		},
		function (scene_time, timer_time, timertask_instance) {   // tick
			if((pausedStart==0)&&pausingRecord){
				pausedStart = scene.time;
			}
			if((pausedStart!=0)&&!pausingRecord){
				scene.time = pausedStart;
				pausedStart = 0;
			}
		},
		function (scene_time, timer_time, timertask_instance) {   // cancel

		});
		
		
		for(var i=0;i<whiteKeyLength;i++){
			var whiteKeyActor = new CAAT.PianoKey().initialize(director,keyBoardPosX+whiteKeyWidth*i,keyBoardPosY,whiteKeyWidth,whiteKeyHeight,"white",i+blackKeyLength);
			whiteKeyActor.mouseDown = function(){_down(this);}
			whiteKeyActor.touchStart = function(){_down(this);}
			whiteKey.push(whiteKeyActor);
			scene.addChild(whiteKeyActor);
		}
		var blackKeyIndex = 0;
		for(var i=0;i<whiteKeyLength-1;i++){
			if((i%7!=2)&&(i%7!=6)){
				var blackKeyActor = new CAAT.PianoKey().initialize(director,keyBoardPosX+whiteKeyWidth-blackKeyWidth/2+whiteKeyWidth*i,keyBoardPosY,blackKeyWidth,blackKeyHeight,"black",blackKeyIndex);
				blackKeyActor.mouseDown = function(){_down(this);}
				blackKeyActor.touchStart = function(){_down(this);}
				blackKey.push(blackKeyActor);
				scene.addChild(blackKeyActor);
				blackKeyIndex++;
			}
		}
		_down = function(keyActor){
			if(playingRecord) return;
			playKey(keyActor.keyIndex);
			if(recording) {
				recordData.push({keyIndex: keyActor.keyIndex, time: scene.time-recordStartTime});
			}
		}
		
		var recording = false;
		var playingRecord = false;
		var pausingRecord = false;
		var autoPlay = true;
		var recordStartTime = 0;
		var recordData = [];
		var currentRecordDataIndex = 0;
		var recordDataString = [];
		var selectingRecord = 0;
		var currentRecordIndex = 0;
		var buttonSize = 50;
		
		var recordListButtons = [];
		var maxRecord = 20;
		
		for(var i=0;i<musicData.length;i++){
			addRecord();
			recordDataString.push(musicData[i]);
			if(i==musicData.length-1)recordData = stringToRecordData(musicData[i]);
		}
		
		function addRecord(){
			var index = recordListButtons.length;
			var width = (index>9)?30:20;
			var space = (index>9)?35*(index-10)+25*10:25*index;
			var button = new CAAT.ActorContainer().setBounds(keyBoardPosX+space,buttonSize,width,25);
			selectingRecord = index;
			currentRecordDataIndex = index;
			button.index = index;
			button.paint = function(director,time){
				var ctx = director.ctx;
				ctx.fillStyle = (this.index == selectingRecord)?"#00F":"#0FF";
				this.width = (this.index>9)?30:20;
				ctx.fillRect(0,0,this.width,this.height);
				ctx.fillStyle = "#FF0";
				ctx.font = "20px Times New Roman";
				ctx.fillText(""+this.index,5,20);
				ctx.strokeStyle = "#000";
				ctx.strokeRect(0,0,this.width,this.height);
			}
			button.mouseDown = function(){ selectingRecord = this.index};
			button.touchStart = function(){ selectingRecord = this.index};
			recordListButtons.push(button);
			scene.addChild(button);
		}
		var deleteImage = new CAAT.SpriteImage().initialize(director.getImage("deleteButton"),1,1);
		var deleteButton = new CAAT.Button().initialize(director,deleteImage,0,0,0,0,function(){
			scene.removeChild(recordListButtons[selectingRecord]);
			for(var i=recordListButtons.length-1;i>=selectingRecord+1;i--){
				recordListButtons[i].x = recordListButtons[i-1].x; 
				recordListButtons[i].index--;
			}
			recordListButtons.splice(selectingRecord,1);
			recordDataString.splice(selectingRecord,1);
			if(recordDataString.length==0) recordData = [];
			if(selectingRecord>=recordListButtons.length) selectingRecord--;
		}).
			setLocation(50+buttonSize*3,0).
			setScaleAnchored(buttonSize/deleteImage.singleHeight,buttonSize/deleteImage.singleWidth,0,0);
		scene.addChild(deleteButton);
		
		var recordImage = new CAAT.SpriteImage().initialize(director.getImage("recordButton"),1,1);
		var recordButton = new CAAT.Button().initialize(director,recordImage,0,0,0,0,function(){
			if(playingRecord) {
				return;
			}
			if(!recording){
				recording = true;
				recordData = [];
				recordStartTime = scene.time;
			}
			else{
				recording = false;
				if(recordData.length==0) return;
				if(recordDataString.length>maxRecord) return;
				addRecord();
				recordDataString.push(recordDataToString(recordData));
				console.log(recordDataString[recordDataString.length-1]);
			}
		}).
			setLocation(50,0).
			setScaleAnchored(buttonSize/recordImage.singleHeight,buttonSize/recordImage.singleWidth,0,0);
		scene.addChild(recordButton);
		
		var playImage = new CAAT.SpriteImage().initialize(director.getImage("playButton"),1,1);
		var pauseImage = new CAAT.SpriteImage().initialize(director.getImage("pauseButton"),1,1);
		var playButton = new CAAT.Button().initialize(director,playImage,0,0,0,0,function(){
			if(recording) return;
			if(!playingRecord){
				if(currentRecordDataIndex != selectingRecord){
					currentRecordDataIndex = selectingRecord;
					if(recordDataString[selectingRecord]) recordData = stringToRecordData(recordDataString[selectingRecord]);
				}
				if(recordData.length>0){
					currentRecordIndex = 0;
					playingRecord = true;
					recordStartTime = scene.time;
					playButton.setBackgroundImage(pauseImage,true);
				}
			}
			else {
				if(!pausingRecord){
					pausingRecord = true;
					playButton.setBackgroundImage(playImage,true);
				}
				else{
					pausingRecord = false;
					playButton.setBackgroundImage(pauseImage,true);
				}
			}
		}).
			setLocation(50+buttonSize,0).
			setScaleAnchored(buttonSize/playImage.singleHeight,buttonSize/playImage.singleWidth,0,0);
		scene.addChild(playButton);
		
		var stopImage = new CAAT.SpriteImage().initialize(director.getImage("stopButton"),1,1);
		var stopButton = new CAAT.Button().initialize(director,stopImage,0,0,0,0,function(){
			if(recording) return;
			if(playingRecord) {
				currentRecordIndex = 0;
				playButton.setBackgroundImage(playImage,true);
				playingRecord = false;
				pausingRecord = false;
				pausedStart = 0;
			}
		}).
			setLocation(50+buttonSize*2,0).
			setScaleAnchored(buttonSize/stopImage.singleHeight,buttonSize/stopImage.singleWidth,0,0);
		scene.addChild(stopButton);
		
		var clockActor = new CAAT.ActorContainer().setBounds(260,40,10,10);
		clockActor.paint = function(director,time){
			var ctx = director.ctx;
			if(!recording&&!playingRecord) return;
			ctx.fillStyle = "#0FF";
			ctx.font = "25px Times New Roman";
			if(recording){
				var showTime = time - recordStartTime;
			}
			if(playingRecord){
				var remainTime = recordData[recordData.length-1].time + recordStartTime - ((pausingRecord)?pausedStart:scene.time);
				var playedTime = recordData[recordData.length-1].time - remainTime;
				if(playedTime>=recordData[currentRecordIndex].time/PLAYBACK_SPEED){
					if(autoPlay)playKey(recordData[currentRecordIndex].keyIndex);
					currentRecordIndex++;
					if(currentRecordIndex==recordData.length) {
						playingRecord = false;
						playButton.setBackgroundImage(playImage,true);
					}
				}
				var showTime = remainTime+1000;
			}
			showTime/=1000;
			var minute = ""+((showTime/60)>>0);
			minute = (minute.length==2)? minute : "0"+minute;
			var second = ""+((showTime%60)>>0);
			second = (second.length==2)? second : "0"+second;
			var timeText = minute +" : "+ second;
			ctx.fillText(timeText,0,0);
		};
		scene.addChild(clockActor);
		
		var timePerScene = 3000;
		var playbackBoard = new CAAT.ActorContainer().setBounds(0,playbackBoardPoxY,whiteKeyLength*whiteKeyWidth,keyBoardPosY-playbackBoardPoxY);
		var playbackKey = new CAAT.ActorContainer().setBounds(0,0,whiteKeyLength*whiteKeyWidth,keyBoardPosY-playbackBoardPoxY);
		playbackKey.paint = function(director,time){
			var ctx = director.ctx;
			if(playingRecord){
				var playedTime = ((pausingRecord)?pausedStart:time) - recordStartTime;
				var passedPixel = playedTime/timePerScene*this.height*Math.pow(PLAYBACK_SPEED,2);
				for(var i=currentRecordIndex;i<recordData.length;i++){
					var currentKey = keyData[recordData[i].keyIndex];
					if(recordData[i].time>(playedTime+timePerScene)/Math.sqrt(PLAYBACK_SPEED)) break;
					var hitKeyActor;
					ctx.font = "20px Times New Roman";
					if(currentKey.type == "white"){
						hitKeyActor = whiteKey[currentKey.index];
						ctx.fillStyle = "#FFF";
						ctx.strokeStyle = "#000";
						var posY = this.height + passedPixel -hitKeyActor.width - recordData[i].time/timePerScene*this.height*PLAYBACK_SPEED;
						ctx.fillRect(hitKeyActor.x,posY,hitKeyActor.width,hitKeyActor.width);
						ctx.strokeRect(hitKeyActor.x,posY,hitKeyActor.width,hitKeyActor.width);
						ctx.fillStyle = "#000";
						ctx.fillText(String.fromCharCode(currentKey.keyCode).toLowerCase(),hitKeyActor.x+2,hitKeyActor.width+posY-2);
					} 
					else {
						hitKeyActor = blackKey[currentKey.index];
						ctx.fillStyle = "#000";
						var posY = this.height + passedPixel - hitKeyActor.width-recordData[i].time/timePerScene*this.height*PLAYBACK_SPEED;
						ctx.fillRect(hitKeyActor.x,posY,hitKeyActor.width,hitKeyActor.width);
						ctx.fillStyle = "#FFF";
						ctx.fillText(String.fromCharCode(currentKey.keyCode),hitKeyActor.x+2,hitKeyActor.width+posY-2);
					}
				}
			}
		}
		playbackBoard.addChild(playbackKey);
		scene.addChild(playbackBoard);
		
		var keyString = "";
		var showKeyActor = new CAAT.ActorContainer().setBounds(350,40,10,10);
		showKeyActor.paint = function(director,time){
			var ctx = director.ctx;
			ctx.fillStyle = "#F0F";
			ctx.font = "35px Times New Roman";
			ctx.fillText(keyString,0,0);
		}
		scene.addChild(showKeyActor);
		
		
		
		CAAT.registerKeyListener(
		function event(e){
			if(playingRecord&&autoPlay) return;
			if(e.getAction() === "down"){
				var keyIndex = -1;
				for(var i=0;i<keyData.length;i++){
					if((e.getKeyCode() == keyData[i].keyCode)&&(e.isShiftPressed() == keyData[i].isShift)){
						keyIndex = i;
						break;
					}
				}
				if(keyIndex!=-1) {
					playKey(keyIndex);
					if(recording){
						recordData.push({keyIndex: keyIndex, time: scene.time-recordStartTime});
					}
				}
				
			}
		});
		function recordDataToString(recordData){
			var outputString = "";
			for(var i=0;i<recordData.length;i++){
				outputString += recordData[i].keyIndex + " "+recordData[i].time;
				if(i!=recordData.length-1) outputString+=",";
			}
			return outputString;
		}
		function stringToRecordData(str){
			var outputData = [];
			if(str.length==0) return outputData;
			var stringArray = str.split(",");
			console.log(stringArray.length);
			for(var i=0;i<stringArray.length;i++){
				var temp = stringArray[i].split(" ");
				if(temp[0].charCodeAt(0)>57){
					for(var j=0;j<keyData.length;j++){
						if(temp[0] === keyData[j].name){
							temp[0] = j;
							break;
						}
					}
				}
				outputData.push({keyIndex:temp[0]<<0,time:temp[1]<<0});
			}
			return outputData;
		}
		function playKey(keyIndex){
			var currentKey = keyData[keyIndex];
			var type = currentKey.type;
			var index = currentKey.index;
			var soundIndex = currentKey.soundIndex;
			keyString = currentKey.name;
			type == "white"? whiteKey[index].hit():blackKey[index].hit();
			Sound.playSfx("sound"+soundIndex);
		}
		console.log("start");
    }
}
