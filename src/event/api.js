import axios from "axios";
import {store, actions} from "../store";
import * as g from '../g'
import * as util from '../util'
// 获取app
export const getApp = async () => {
    util.log('api get app')
    let data = {
        "code": 0,
        "msg": "成功",
        "data": {
            "apps": [
                {
                    "_id": "5cebb630808bf6c7d775a259",
                    "name": "发布WordPress",
                    "secret": "1fbe2dd80bea81979797bc70774a55f35136dc018527b9827d4f9420520d9dd9",
                    "enter": "https://manager.haxitag.com/manager/statics/template/publish/list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1559130594552,
                    "create_time": 1558951472619
                },
                {
                    "_id": "5cebdb6d8d654d6056e5d907",
                    "name": "试用申请",
                    "secret": "8641d95bd89f88a555355e64a97df9cbb76acdac22471eb99ba1bcb2795e785e",
                    "enter": "https://manager.haxitag.com/manager/statics/template/invitation/invitation.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1563185665609,
                    "create_time": 1558961005135
                },
                {
                    "_id": "5cee28fb1f802a5890a3633b",
                    "name": "阅粒图谱(demo)",
                    "secret": "ec1a7b35b25fcf75525ca48b4c1a64414f2ad3e52fc2f81a4e7a147bc7c73ce7",
                    "enter": "https://oa.haxitag.com",
                    "callback": "",
                    "state": 0,
                    "update_time": 1562747228468,
                    "create_time": 1559111931047
                },
                {
                    "_id": "5cee77401bf7cc9aac327ce4",
                    "name": "数据解析图谱抽取DEMO",
                    "secret": "e6f479736ef978b4dec6a09dfa78e4367d2623e3bc8d92fba342c747c9aa5ea2",
                    "enter": "https://manager.haxitag.com/lets/resource",
                    "callback": "",
                    "state": 0,
                    "update_time": 1578927886005,
                    "create_time": 1559131968141
                },
                {
                    "_id": "5cee90d71bf7cc9aac327ce6",
                    "name": "实体和标签抽取",
                    "secret": "e6f479736ef978b4dec6a09dfa78e4367d2623e3bc8d92fba342c747c9aa5ea2",
                    "enter": "https://manager.haxitag.com/kgm/enter?background=1",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1559138519037
                },
                {
                    "_id": "5cef472082d514e1cc834a97",
                    "name": "推荐系统",
                    "secret": "9b23cef797b6db3d934e5445c95f35b87c6416e687524a9e0e4093ffbcc48086",
                    "enter": "https://manager.haxitag.com/recommend/page/oa",
                    "callback": "",
                    "state": 0,
                    "update_time": 1571987920839,
                    "create_time": 1559185184153
                },
                {
                    "_id": "5cf12648b0f46b324f1372ad",
                    "name": "清洗脚本编辑",
                    "secret": "05bf07a92adc02562ded4beb776b6b12f996adc542adcad484996de8a47de434",
                    "enter": "https://manager.haxitag.com/manager/statics/template/filter_script/script_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1559307848445
                },
                {
                    "_id": "5cf2440e55fe8b33db16cf1d",
                    "name": "摘要改写",
                    "secret": "7a88fea12caf4162307af5f3517f91b6732fcd34d84ef3724f7b191e4a1fe119",
                    "enter": "https://manager.haxitag.com/manager/statics/template/contents/summary_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1559381006318
                },
                {
                    "_id": "5cf779c5d8b36be4feafb685",
                    "name": "App用户列表",
                    "secret": "058829ae46dbcb3aaa56f2536aba5f70c137b62df07df8c8b397ecf43b9dee0b",
                    "enter": "https://manager.haxitag.com/manager/statics/template/app_users/app_user_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1559722437827
                },
                {
                    "_id": "5cf8de42b57622d035a940d3",
                    "name": "问答对改写",
                    "secret": "7f8a54f0fabce87edfaf459f0d907d19e5f6ee6b804fe711769e0ce6dbb9e2e8",
                    "enter": "https://manager.haxitag.com/manager/statics/template/question_answer/list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1559813698047
                },
                {
                    "_id": "5d303599b03a8d127ba384ef",
                    "name": "运营图片",
                    "secret": "538d2d0508c6a80d55775f076a6de29db360cc16b3d2a416d0207737b4c22a66",
                    "enter": "https://manager.haxitag.com/manager/statics/template/img_tpl/tpl_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1563440537853
                },
                {
                    "_id": "5d32bb85183b3ac66530d5d6",
                    "name": "App版本管理",
                    "secret": "d5456abe8fb77c42335733beb12b079dcfc0f334ecb0e190f661ad7dd4536bd7",
                    "enter": "https://manager.haxitag.com/phpoa/version",
                    "callback": "",
                    "state": 0,
                    "update_time": 1583485888084,
                    "create_time": 1563605893369
                },
                {
                    "_id": "5d47e0441f88ff8c83eba8a0",
                    "name": "敏感词",
                    "secret": "37c35fabc70d17f7255891b23f9806b16c80860f29915c8a021242f968df1f91",
                    "enter": "https://manager.haxitag.com/manager/statics/template/sensitive/sensitive.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1579076577224,
                    "create_time": 1564991556033
                },
                {
                    "_id": "5d5505e5196cb7caad0cea41",
                    "name": "搜藏实体标签摘要",
                    "secret": "e03950bef34596ec526ea888e9f3270f9ccce1f188da33424f4395271788409d",
                    "enter": "https://manager.haxitag.com/manager/statics/template/unify/unify_list.html?modify=no_modify",
                    "callback": "",
                    "state": 0,
                    "update_time": 1565856467008,
                    "create_time": 1565853157862
                },
                {
                    "_id": "5d5a632bb69ca2aca8068a90",
                    "name": "黄反审核",
                    "secret": "85417b3ba3d9c23c677ac8341f79bf4c64fa1f06f0253f507155ab1d1f2d3b08",
                    "enter": "https://manager.haxitag.com/manager/statics/template/sensitive/sensitive_hit_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1579076568167,
                    "create_time": 1566204715359
                },
                {
                    "_id": "5d64c92c7edacf21f2fd8b00",
                    "name": "公共标签",
                    "secret": "5e21a8dd2e20577f31025fe4202d14f7e5a9eeb34c0f371a69ae05713fbef250",
                    "enter": "https://manager.haxitag.com/manager/statics/template/common_label/common_label_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1566886188582
                },
                {
                    "_id": "5d68e6fb15ddc1158321e0ae",
                    "name": "官网新闻管理",
                    "secret": "f62742a392022c506587f7bd9f9bc718b9b7ec306ade548a01f5720dfa8d1aba",
                    "enter": "https://manager.haxitag.com/admin/newsmanager",
                    "callback": "",
                    "state": 0,
                    "update_time": 1568640860897,
                    "create_time": 1567155963489
                },
                {
                    "_id": "5d7f8fe26772f242ddc26176",
                    "name": "官网新闻分类管理",
                    "secret": "c2d2a2ebf1144660f44fd986b377cbfd56884cf5c033d559fb0c3dc96bc8f0eb",
                    "enter": "https://manager.haxitag.com/admin/newscate",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1568640994342
                },
                {
                    "_id": "5d7f90176772f242ddc26177",
                    "name": "官网开放平台申请",
                    "secret": "c2d2a2ebf1144660f44fd986b377cbfd56884cf5c033d559fb0c3dc96bc8f0eb",
                    "enter": "https://manager.haxitag.com/admin/kcengine",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1568641047290
                },
                {
                    "_id": "5da707e13c4d6bec0fa1b2f2",
                    "name": "网页摘要改写",
                    "secret": "57ac47ffb8df5ec7f074ddcdecdb63dfa364f41d0f254acc3c5d07911f64138d",
                    "enter": "https://manager.haxitag.com/dailypops/v1/statics/html/article/article_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1571227617530
                },
                {
                    "_id": "5da707fa3c4d6bec0fa1b2f3",
                    "name": "热点事件列表",
                    "secret": "57ac47ffb8df5ec7f074ddcdecdb63dfa364f41d0f254acc3c5d07911f64138d",
                    "enter": "https://manager.haxitag.com/dailypops/v1/statics/html/event/event_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1571227642095
                },
                {
                    "_id": "5da7080c3c4d6bec0fa1b2f4",
                    "name": "问答对修改添加",
                    "secret": "57ac47ffb8df5ec7f074ddcdecdb63dfa364f41d0f254acc3c5d07911f64138d",
                    "enter": "https://manager.haxitag.com/dailypops/v1/statics/html/question_answer/qa_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1571227660000
                },
                {
                    "_id": "5da8418e212a7d7d3a137590",
                    "name": "搜藏APP扩展应用",
                    "secret": "8263ff452c57e498fa4f4b535297fde548fd12f0bc8a39ab25eabaad66a3eeab",
                    "enter": "https://manager.haxitag.com/manager/statics/template/extend_app/extend_app_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1571309071331,
                    "create_time": 1571307918584
                },
                {
                    "_id": "5dc1567b0dcf4ac321d9c4a8",
                    "name": "机器人对话记录",
                    "secret": "64508cd165a4552387b31fb5d3ed8c9a8ad662151e0f13508fe4cedc57923c22",
                    "enter": "https://manager.haxitag.com/manager/statics/template/bot_qa/bot_qa.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1572951675802
                },
                {
                    "_id": "5dde2aeb1809d7abd472bf7f",
                    "name": "数据可视化",
                    "secret": "f6c323ff49bb8fc5d6db537075c9110fee3feceef22db8c21bf90ff0a24a7690",
                    "enter": "https://manager.haxitag.com/spider_views/index",
                    "callback": "",
                    "state": 0,
                    "update_time": 1584501371572,
                    "create_time": 1574841067939
                },
                {
                    "_id": "5de47ac482c1356ca42e6b67",
                    "name": "网页摘要改写_CN",
                    "secret": "6285e9c5f3bf45215c5468075d484a9a6f1c7e849f22a558164052e2ce8565c3",
                    "enter": "https://manager.haxitag.com/dailypopscn/v1/statics/html/article/article_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1575255115119,
                    "create_time": 1575254724689
                },
                {
                    "_id": "5de47ae682c1356ca42e6b68",
                    "name": "热点事件列表_CN",
                    "secret": "6285e9c5f3bf45215c5468075d484a9a6f1c7e849f22a558164052e2ce8565c3",
                    "enter": "https://manager.haxitag.com/dailypopscn/v1/statics/html/event/event_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1575255092236,
                    "create_time": 1575254758473
                },
                {
                    "_id": "5de47b0782c1356ca42e6b69",
                    "name": "问答对修改添加_CN",
                    "secret": "6285e9c5f3bf45215c5468075d484a9a6f1c7e849f22a558164052e2ce8565c3",
                    "enter": "https://manager.haxitag.com/dailypopscn/v1/statics/html/question_answer/qa_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1575255080053,
                    "create_time": 1575254791464
                },
                {
                    "_id": "5df4791c70aad7252078838a",
                    "name": "toB摘要提取",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/abstract.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1576303121130,
                    "create_time": 1576302876749
                },
                {
                    "_id": "5df4794070aad7252078838b",
                    "name": "toB命名实体识别",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/entity_recognition.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576302912589
                },
                {
                    "_id": "5df4795770aad7252078838c",
                    "name": "toB关键词提取",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/key_word.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576302935998
                },
                {
                    "_id": "5df4797070aad7252078838d",
                    "name": "toB分词词性标注",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/participles_annotation.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576302960018
                },
                {
                    "_id": "5df4798870aad7252078838e",
                    "name": "toB情感分析",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/sentiment_analysis.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576302984849
                },
                {
                    "_id": "5df479ae70aad7252078838f",
                    "name": "toB文本相似度",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/sim.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576303022898
                },
                {
                    "_id": "5df479c870aad72520788390",
                    "name": "toB句法分析",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/syntactic_analysis.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576303048346
                },
                {
                    "_id": "5df479e170aad72520788391",
                    "name": "toB文本分类&主题模型",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/text_topic_model.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576303073066
                },
                {
                    "_id": "5df479fb70aad72520788392",
                    "name": "toB时间标准化",
                    "secret": "974ea5cdfbf8049f92eecfedbbc40cb69cce35de36947b7547194b4dd9664a61",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/time_standards.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576303099850
                },
                {
                    "_id": "5df48c82f782990e130e76fe",
                    "name": "阅读思考",
                    "secret": "d490e1a816e4867d8f94907098de91a6cb8775c4e068469de43e48566fa2b42a",
                    "enter": "https://manager.haxitag.com/yuedusikao/v1/statics/html/article/article_list.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1576307842846
                },
                {
                    "_id": "5df87fa59246c391e1c0f9a5",
                    "name": "toB事件提取",
                    "secret": "d929ca9e292facc1e86e330ad9fb74f44e0013145c74426700b41dd59cb4d8a5",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/event.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1576566772299,
                    "create_time": 1576566693187
                },
                {
                    "_id": "5df87fbc9246c391e1c0f9a6",
                    "name": "toB言论提取",
                    "secret": "d929ca9e292facc1e86e330ad9fb74f44e0013145c74426700b41dd59cb4d8a5",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/extract.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1576566779949,
                    "create_time": 1576566716193
                },
                {
                    "_id": "5df87fd09246c391e1c0f9a7",
                    "name": "toB通用语言模型",
                    "secret": "d929ca9e292facc1e86e330ad9fb74f44e0013145c74426700b41dd59cb4d8a5",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/ngram.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1576566789338,
                    "create_time": 1576566736336
                },
                {
                    "_id": "5e044f0763515ae6da4c26d9",
                    "name": "toB生成标题",
                    "secret": "0055a64b393897538b77a85fc865c706f9a6b0be6f5b32ea52d89daf2ac5b018",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/title.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1577340679212
                },
                {
                    "_id": "5e044f2763515ae6da4c26da",
                    "name": "toB句子主干",
                    "secret": "0055a64b393897538b77a85fc865c706f9a6b0be6f5b32ea52d89daf2ac5b018",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/trunk.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1577340711488
                },
                {
                    "_id": "5e044f4163515ae6da4c26db",
                    "name": "toB生成评论",
                    "secret": "0055a64b393897538b77a85fc865c706f9a6b0be6f5b32ea52d89daf2ac5b018",
                    "enter": "https://manager.haxitag.com/manager/statics/template/apis/generate_content.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1577340737826
                },
                {
                    "_id": "5e045edadb1f756f9cbcf226",
                    "name": "基于关键词搜索抓取",
                    "secret": "4cb27072b1c7a94d164c933ee40624ed5d06407b286797a8985df71a31fddd69",
                    "enter": "https://manager.haxitag.com/keyword_search/html/index.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1577346492090,
                    "create_time": 1577344730956
                },
                {
                    "_id": "5e0f24820957b1fce88fb0a9",
                    "name": "toB一键验证",
                    "secret": "1b37da71d0f57d19e7da992b41325b7cc195401acae3429aeabff7cf8e3f6518",
                    "enter": "https://manager.haxitag.com/language",
                    "callback": "",
                    "state": 0,
                    "update_time": 1578050719155,
                    "create_time": 1578050690997
                },
                {
                    "_id": "5e1f02a334f1c35282fe2d04",
                    "name": "运营简报",
                    "secret": "02e6342ec55a2926a360e51ff74fedb3aa735357851c538cb4665dd31d80abba",
                    "enter": "https://manager.haxitag.com/manager/statics/template/briefing_operation/create_new_briefing.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1579091176627,
                    "create_time": 1579090595104
                },
                {
                    "_id": "5e23f2d1862766f6a49d5262",
                    "name": "上传文件",
                    "secret": "07db668363bddde6088ced320d0222eb1dd9c2e26aeb1913c8cf648dcba78ec0",
                    "enter": "https://manager.haxitag.com/transfer_file/index",
                    "callback": "",
                    "state": 0,
                    "update_time": 1583679627904,
                    "create_time": 1579414225790
                },
                {
                    "_id": "5e240236862766f6a49d5264",
                    "name": "hub页管理",
                    "secret": "07db668363bddde6088ced320d0222eb1dd9c2e26aeb1913c8cf648dcba78ec0",
                    "enter": "https://manager.haxitag.com/hub/html/index.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1579418453180,
                    "create_time": 1579418166619
                },
                {
                    "_id": "5e50e7501581354966d140ad",
                    "name": "模板修改",
                    "secret": "519545b7209978c5bed68bd4489f3e693802a38fae6bcc65c344c687c914138e",
                    "enter": "https://manager.haxitag.com/dailypops/v1/statics/html/html_template/update_template.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1582360400960
                },
                {
                    "_id": "5e6b5e8c00a63875b0bc75b2",
                    "name": "飞书用户订阅列表",
                    "secret": "d31b4a691119b10861e7ded9bd0c93a1b7a01145837feb7165ee7dd72b0ce63b",
                    "enter": "https://manager.haxitag.com/phpoa/feishuoa/index",
                    "callback": "",
                    "state": 0,
                    "update_time": 1584105887672,
                    "create_time": 1584094860397
                },
                {
                    "_id": "5e6b5ea303ef3bf3c3ef227e",
                    "name": "飞书主题简报列表",
                    "secret": "76fc024eaa3461fb3987c7b2877415943aa4c4921471a699856b66d085e30a02",
                    "enter": "https://manager.haxitag.com/phpoa/feishuoa/briefing_index",
                    "callback": "",
                    "state": 0,
                    "update_time": 1584105879177,
                    "create_time": 1584094883277
                },
                {
                    "_id": "5e6b5eb300a63875b0bc75b3",
                    "name": "飞书推荐主题",
                    "secret": "d31b4a691119b10861e7ded9bd0c93a1b7a01145837feb7165ee7dd72b0ce63b",
                    "enter": "https://manager.haxitag.com/phpoa/feishuoa/feishu_topic_list",
                    "callback": "",
                    "state": 0,
                    "update_time": 1584105870698,
                    "create_time": 1584094899826
                },
                {
                    "_id": "5e6b9aa603ef3bf3c3ef2282",
                    "name": "推送后台",
                    "secret": "76fc024eaa3461fb3987c7b2877415943aa4c4921471a699856b66d085e30a02",
                    "enter": "https://manager.haxitag.com/phpoa/pushbackground/index.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1584110545714,
                    "create_time": 1584110246913
                },
                {
                    "_id": "5e6b9ad303ef3bf3c3ef2283",
                    "name": "推送结果查询",
                    "secret": "76fc024eaa3461fb3987c7b2877415943aa4c4921471a699856b66d085e30a02",
                    "enter": "https://manager.haxitag.com/phpoa/pushbackground/record.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 1584110550536,
                    "create_time": 1584110291901
                },
                {
                    "_id": "5f314ae232306ed3719113c1",
                    "name": "PDF 解析",
                    "secret": "4827c016da89c5998bbfd30574d5fedb2aa58e843eb9ab061574aa29495f1b19",
                    "enter": "https://manager.haxitag.com/pdf/uploader",
                    "callback": "",
                    "state": 0,
                    "update_time": 1597115513810,
                    "create_time": 1597065954604
                },
                {
                    "_id": "5f5f09a132306ed3719113c6",
                    "name": "共享文档",
                    "secret": "4827c016da89c5998bbfd30574d5fedb2aa58e843eb9ab061574aa29495f1b19",
                    "enter": "https://manager.haxitag.com/etherpad/etherpad.html",
                    "callback": "",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1600063905015
                },
                {
                    "_id": "5f5f2d8432306ed3719113c7",
                    "name": "视频会议",
                    "secret": "4827c016da89c5998bbfd30574d5fedb2aa58e843eb9ab061574aa29495f1b19",
                    "enter": "https://meeting.daypop.net/",
                    "callback": "",
                    "state": 0,
                    "update_time": 1600073292546,
                    "create_time": 1600073092544
                }
            ]
        }
    }
    return data.data.apps
}
// 获取菜单
export const getMenu = async () => {
    util.log('api get menu')
    return [
        {
            "_id": "5cf5e81394229b75a2b24224",
            "name": "系统设置",
            "english_name": "home",
            "type": 0,
            "path": "",
            "comp": "",
            "app_id": "",
            "parent_id": "",
            "parents": "",
            "icon": "user",
            "state": 0,
            "update_time": 0,
            "create_time": 1559619603557,
            "sort": 1,
            "children": [
                {
                    "_id": "5cf5e81394229b75a2b24226",
                    "name": "菜单设置",
                    "english_name": "home",
                    "type": 1,
                    "path": "/setting/menu",
                    "comp": "Menu",
                    "app_id": "",
                    "parent_id": "",
                    "parents": "",
                    "icon": "user",
                    "state": 0,
                    "update_time": 0,
                    "create_time": 1559619603557,
                    "sort": 1
                }
            ]
        },
        {
            "_id": "5cf5e81394229b75a2b24225",
            "name": "首页",
            "english_name": "home",
            "type": 1,
            "path": "/app",
            "comp": "App",
            "app_id": "",
            "parent_id": "",
            "parents": "",
            "icon": "user",
            "state": 0,
            "update_time": 0,
            "create_time": 1559619603557,
            "sort": 1
        }
    ]
}

// 创建菜单
export const createMenu = async () =>{
    util.log('api creat menu')
}