Search.setIndex({envversion:47,filenames:["authors","basic_usage","changelog","design_patterns","environment","examples","history","hubs","index","modules","modules/backdoor","modules/corolocal","modules/db_pool","modules/debug","modules/event","modules/greenpool","modules/greenthread","modules/pools","modules/queue","modules/semaphore","modules/timeout","modules/websocket","modules/wsgi","modules/zmq","patching","ssl","testing","threading","zeromq"],objects:{"":{zmq:[23,0,0,"-"]},"eventlet.backdoor":{backdoor:[10,4,1,""],backdoor_server:[10,4,1,""]},"eventlet.corolocal":{get_ident:[11,4,1,""],local:[11,3,1,""]},"eventlet.db_pool":{BaseConnectionPool:[12,3,1,""],ConnectTimeout:[12,6,1,""],ConnectionPool:[12,1,1,""],DatabaseConnector:[12,3,1,""],GenericConnectionWrapper:[12,3,1,""],PooledConnectionWrapper:[12,3,1,""],RawConnectionPool:[12,3,1,""],TpooledConnectionPool:[12,3,1,""],cleanup_rollback:[12,4,1,""]},"eventlet.db_pool.BaseConnectionPool":{clear:[12,5,1,""],get:[12,5,1,""],item:[12,5,1,""],put:[12,5,1,""]},"eventlet.db_pool.DatabaseConnector":{credentials_for:[12,5,1,""],get:[12,5,1,""]},"eventlet.db_pool.GenericConnectionWrapper":{affected_rows:[12,5,1,""],autocommit:[12,5,1,""],begin:[12,5,1,""],change_user:[12,5,1,""],character_set_name:[12,5,1,""],close:[12,5,1,""],commit:[12,5,1,""],cursor:[12,5,1,""],dump_debug_info:[12,5,1,""],errno:[12,5,1,""],error:[12,5,1,""],errorhandler:[12,5,1,""],insert_id:[12,5,1,""],literal:[12,5,1,""],ping:[12,5,1,""],query:[12,5,1,""],rollback:[12,5,1,""],select_db:[12,5,1,""],server_capabilities:[12,5,1,""],set_character_set:[12,5,1,""],set_server_option:[12,5,1,""],set_sql_mode:[12,5,1,""],show_warnings:[12,5,1,""],shutdown:[12,5,1,""],sqlstate:[12,5,1,""],stat:[12,5,1,""],store_result:[12,5,1,""],string_literal:[12,5,1,""],thread_id:[12,5,1,""],use_result:[12,5,1,""],warning_count:[12,5,1,""]},"eventlet.db_pool.PooledConnectionWrapper":{close:[12,5,1,""]},"eventlet.db_pool.RawConnectionPool":{connect:[12,2,1,""],create:[12,5,1,""]},"eventlet.db_pool.TpooledConnectionPool":{connect:[12,2,1,""],create:[12,5,1,""]},"eventlet.debug":{format_hub_listeners:[13,4,1,""],format_hub_timers:[13,4,1,""],hub_blocking_detection:[13,4,1,""],hub_exceptions:[13,4,1,""],hub_listener_stacks:[13,4,1,""],hub_prevent_multiple_readers:[13,4,1,""],hub_timer_stacks:[13,4,1,""],spew:[13,4,1,""],tpool_exceptions:[13,4,1,""],unspew:[13,4,1,""]},"eventlet.event":{Event:[14,3,1,""]},"eventlet.event.Event":{ready:[14,5,1,""],send:[14,5,1,""],send_exception:[14,5,1,""],wait:[14,5,1,""]},"eventlet.greenpool":{GreenPile:[15,3,1,""],GreenPool:[15,3,1,""]},"eventlet.greenpool.GreenPile":{next:[15,5,1,""],spawn:[15,5,1,""]},"eventlet.greenpool.GreenPool":{free:[15,5,1,""],imap:[15,5,1,""],resize:[15,5,1,""],running:[15,5,1,""],spawn:[15,5,1,""],spawn_n:[15,5,1,""],starmap:[15,5,1,""],waitall:[15,5,1,""],waiting:[15,5,1,""]},"eventlet.greenthread":{GreenThread:[16,3,1,""],kill:[16,4,1,""],sleep:[16,4,1,""],spawn:[16,4,1,""],spawn_after:[16,4,1,""],spawn_after_local:[16,4,1,""],spawn_n:[16,4,1,""]},"eventlet.greenthread.GreenThread":{cancel:[16,5,1,""],kill:[16,5,1,""],link:[16,5,1,""],unlink:[16,5,1,""],wait:[16,5,1,""]},"eventlet.hubs":{get_default_hub:[7,4,1,""],get_hub:[7,4,1,""],trampoline:[7,4,1,""],use_hub:[7,4,1,""]},"eventlet.patcher":{import_patched:[24,4,1,""],is_monkey_patched:[24,4,1,""],monkey_patch:[24,4,1,""]},"eventlet.pools":{Pool:[17,3,1,""],TokenPool:[17,3,1,""]},"eventlet.pools.Pool":{create:[17,5,1,""],free:[17,5,1,""],get:[17,5,1,""],item:[17,5,1,""],put:[17,5,1,""],resize:[17,5,1,""],waiting:[17,5,1,""]},"eventlet.queue":{Empty:[18,6,1,""],Full:[18,6,1,""],LifoQueue:[18,3,1,""],LightQueue:[18,3,1,""],PriorityQueue:[18,3,1,""],Queue:[18,3,1,""]},"eventlet.queue.LightQueue":{empty:[18,5,1,""],full:[18,5,1,""],get:[18,5,1,""],get_nowait:[18,5,1,""],getting:[18,5,1,""],put:[18,5,1,""],put_nowait:[18,5,1,""],putting:[18,5,1,""],qsize:[18,5,1,""],resize:[18,5,1,""]},"eventlet.queue.Queue":{join:[18,5,1,""],task_done:[18,5,1,""]},"eventlet.semaphore":{BoundedSemaphore:[19,3,1,""],CappedSemaphore:[19,3,1,""],Semaphore:[19,3,1,""]},"eventlet.semaphore.BoundedSemaphore":{release:[19,5,1,""]},"eventlet.semaphore.CappedSemaphore":{acquire:[19,5,1,""],balance:[19,1,1,""],bounded:[19,5,1,""],locked:[19,5,1,""],release:[19,5,1,""]},"eventlet.semaphore.Semaphore":{acquire:[19,5,1,""],balance:[19,1,1,""],bounded:[19,5,1,""],locked:[19,5,1,""],release:[19,5,1,""]},"eventlet.timeout":{Timeout:[20,3,1,""],with_timeout:[20,4,1,""]},"eventlet.timeout.eventlet.timeout.Timeout.Timeout":{cancel:[20,5,1,""],pending:[20,1,1,""]},"eventlet.tpool":{Proxy:[27,3,1,""],execute:[27,4,1,""]},"eventlet.websocket":{WebSocket:[21,3,1,""],WebSocketWSGI:[21,3,1,""]},"eventlet.websocket.WebSocket":{close:[21,5,1,""],send:[21,5,1,""],wait:[21,5,1,""]},"eventlet.wsgi":{format_date_time:[22,4,1,""],server:[22,4,1,""]},eventlet:{GreenPile:[1,3,1,""],GreenPool:[1,3,1,""],Queue:[1,3,1,""],StopServe:[1,3,1,""],Timeout:[1,3,1,""],backdoor:[10,0,0,"-"],connect:[1,4,1,""],corolocal:[11,0,0,"-"],db_pool:[12,0,0,"-"],debug:[13,0,0,"-"],event:[14,0,0,"-"],greenpool:[15,0,0,"-"],greenthread:[16,0,0,"-"],import_patched:[1,4,1,""],listen:[1,4,1,""],monkey_patch:[1,4,1,""],pools:[17,0,0,"-"],queue:[18,0,0,"-"],serve:[1,4,1,""],sleep:[1,4,1,""],spawn:[1,4,1,""],spawn_after:[1,4,1,""],spawn_n:[1,4,1,""],tpool:[27,0,0,"-"],websocket:[21,0,0,"-"],wrap_ssl:[1,4,1,""],wsgi:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","classmethod","Python class method"],"3":["py","class","Python class"],"4":["py","function","Python function"],"5":["py","method","Python method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:classmethod","3":"py:class","4":"py:function","5":"py:method","6":"py:exception"},terms:{"0mq":28,"\u00f8mq":[8,9],"__all__":10,"__del__":2,"__doc__":10,"__enter__":2,"__exit__":2,"__file__":5,"__future__":5,"__init__":2,"__main__":[5,7],"__name__":[5,10],"__str__":2,"_exc":14,"_main_wrapp":2,"_queuelock":2,"_socket_nodn":0,"abstract":[14,15,28],"boolean":22,"break":[3,5,26],"byte":[0,2,5,22,28],"case":[0,3,5,7,12,17,18,19,20,22,24,25,26,27,28],"catch":20,"class":[1,2,7,8,9,11,12,14,15,16,17],"default":[7,12,16,18,19,20,22,26,27],"export":22,"final":[2,5,12,20],"float":[13,16,20],"import":[0,1,2,3,5,6,7,8,10,12,14,17,21,22],"int":20,"long":[2,10,12,13,15,20,22],"new":[1,2,3,5,10,12,14,15,17,18,19,27],"public":2,"return":[1,2,3,5,7,8,11,12,13,14,15,16,17,18,19,20,21,22,24,27],"short":[5,13],"switch":[2,7,16,27],"throw":14,"true":[1,2,3,5,7,13,14,16,18,19,20,22,24,25,27],"try":[2,5,12,13,14,20,24],"while":[2,3,5,14,22,27,28],abil:[2,24,26],abl:[1,6,16,20,22],abort:[1,2,16,20],about:[2,3,5,6,10,13,14,22,24,26],abov:22,abramowitz:0,absenc:0,accept:[0,1,2,3,4,5,10,17,22,25,28],access:[1,2,10,26,27],accident:[1,3],accompani:22,account:[2,19],accumul:[0,2],accur:22,achiev:[13,27],acquir:[0,2,19],across:[2,18],act:[5,17],action:24,activ:22,actor:2,actual:[5,17,22],adamkg:0,add:[1,2,5],addit:[12,13,16,20,22],additional_modul:[1,24],addl:28,addr:[1,5,25],address:[1,3,5,22],addressfamili:1,adjust:17,adopt:2,advanc:4,advantag:[1,24,25],advic:0,advis:15,af_inet:[1,25],affect:17,affected_row:12,affin:2,afford:[1,24],after:[1,2,6,12,13,16,19,20,22,26],again:[2,7,12,14,19],against:[2,13,24],aggreg:3,agnost:12,agusto:2,alaniz:0,alanp:2,aldona:0,alex:2,alexei:[0,2],alia:12,alik:12,all:[1,2,3,5,6,12,14,15,16,18,21,22,25,26],allow:[0,1,2,12,15,21,22,28],along:2,alreadi:[2,3,5,12,14,15,16,17,21,22,27],also:[1,2,3,6,7,15,21,22,24,25,27],alter:2,altern:2,although:2,alwai:[2,18,20,22],amajorek:2,ambroff:[0,2],amen:27,amount:[1,3,12,15],andrei:[0,2],andrew:0,ani:[1,3,4,5,6,7,12,13,15,16,17,20,22,24,26,27],annot:26,announc:24,annoy:1,anonym:0,anoth:[1,2,7,14,16,19],antonio:[0,2],anymor:2,anyth:1,anywai:2,app:[2,3,5],appar:24,appear:[2,24],append:22,appl:10,appli:3,applic:[1,2,3,5,7,10,13,20,21,22,24],approach:24,appropri:26,apr:10,arbitrari:14,arg1:22,arg2:22,arg:[1,12,14,15,16,18,20,22,27],argument:[0,1,2,3,7,9,10],armstrong:2,around:[1,2,25],arrai:22,arrang:[5,14,16],ask:2,aspect:[3,24],assertionerror:14,assign:2,associ:[2,15],astrum:[0,2],asynchat:2,asynchron:[2,12,28],asyncor:24,atle:0,atom:28,attempt:19,attribut:[2,27],attributeerror:2,authent:12,auto:[2,23],autocommit:12,automat:[2,7,24],autowrap:27,autowrap_nam:27,avail:[1,2,7,8,15,16,17,18,21],averi:2,avoid:[2,14,24],awai:[6,16,26],awaken:19,awar:[1,2,20],awesom:26,ayncor:2,bachri:[0,2],back:[2,5,7,12,17,21,22],backbon:6,backdoor:[2,8,9],backdoor_serv:10,backend:7,backlog:[1,2],bad:[2,3],badli:28,balanc:19,ballanc:0,ban:3,bandwidth:22,bar:22,bare:3,barton:[0,2],base:[2,5,6,7,12,22,24,26],baseconn:12,baseconnectionpool:[2,12],baseexcept:[20,22],basehttpserv:24,basi:[0,2,7,12,14,22],baz:14,bean:6,becam:6,becaus:[1,2,3,4,7,18,19,21,24,26],becciu:2,becom:[3,12,15,19,22],been:[0,2,7,12,18,20,21,22],befor:[2,4,7,12,17,19,20,22,24,27],began:6,begin:[4,7,12],behav:[1,2,10,18,19,22,24,27],behavior:[1,2,3,4,13,15,16,19,21,24],beislei:0,below:15,ben:[0,2],benefit:[12,24],benoit:[0,2],best:[7,17,24,26],beta:[3,5,8],better:[0,2,13],between:[0,1,2,3,10,14,26,27],beyond:7,bidirect:5,big:26,bilenko:0,bin:[2,5],bind:[1,2,8,9],bit:12,bitbucket:[0,2],block:[1,2,3,6,10,13,15,17,18,19,20,25,27],block_on:2,blockingli:19,board:2,bob:[0,6],bodi:[3,5,8,22,25],body_length:22,boil:3,bombard:28,book:28,bool:12,borzenkov:[0,2],both:[2,12,18,24,26],bound:[3,19,22,28],boundedsemaphor:[2,19],branch:[2,24],brandon:2,brantlei:0,brett:2,brian:[0,2],broadcast:5,broken:[2,5,21],brought:2,brows:2,browser:[5,21],brunswick:[0,2],brutal:5,bruynoogh:[0,2],bryan:0,buffer:[0,2],bugfix:2,build:[2,10,17],built:[1,2,7,24,25],builtin:24,bulg:28,bunch:[1,2,3,5,8,12,14,15,24,26],busi:[0,2],busywait:2,ca_cert:1,cach:0,calcul:16,call:[1,2,3,4,5,7,10,12,13,14,15,16,17,18,19,20,21,22,24,26,27],call_aft:2,callabl:[2,20],callback:[2,5],caller:[2,10,16,17,20],can:[1,2,3,4,5,7,10,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27],cancel:[1,2,16,20],cannot:[17,20,22],canon:[3,16],capabl:5,capac:[15,19],capitalize_response_head:[2,22],cappedsemaphor:19,care:3,carlisl:0,carter:0,caus:[2,3,7,12,14,16,17,22],cavanaugh:[0,2],caveat:[12,20],ccp:2,ceas:6,cert:22,cert_req:1,certain:[1,2,24],certfil:22,cesar:[0,2],cgihttpserv:2,challeng:24,chanc:[0,1,13],chang:[2,3,7,10,13,15,21,24,26],changbo:0,change_us:12,channel:[2,18],character_set_nam:12,characterist:22,chat:[0,2],chat_serv:5,chatserv:5,cheap:1,check:[1,2,17,19,20],chesneau:0,chet:0,child:2,children:0,chri:0,christoph:[0,2],chrome:2,chu:0,chuck:0,chunk:[0,1,2,22],chwagssd:2,circular:2,clad:28,clai:[0,2],classmethod:12,clean:2,cleaner:2,cleanup:[2,12],cleanup_rollback:12,clear:[2,12,13],cleaton:[0,2],clever:1,client:[0,1,2],client_addr:1,client_conn:25,client_ip:22,client_sock:[1,26],clone:2,close:[0,1,2,5,12,21,22,25],closed_callback:5,closer:2,closur:21,code:[0,1,2,3,5,7,8,13,20,21,22,26,27],coexist:21,collect:[3,5,12,22,27],com:[0,2,3,5,6,8,12,20,23,25],come:[2,3,22,24,27],comic:28,command:[5,10,26],commit:12,common:[1,2,3,7,24,27],commun:[1,2,3,14,22,27],comparison:28,compat:[0,2,12,19,27],compil:5,complet:[1,2,3,7,15,16,18,22,24,26,27],complex:3,complianc:2,comput:10,concaten:3,concept:[1,6],concurr:[1,3,5,8,12,15,17,27],condit:2,configur:[2,7,25,27],confin:27,conform:0,conjunct:[13,27],conn:12,conn_info:10,conn_pool:12,connect:[1,2,3],connect_tcp:2,connect_timeout:12,connectionpool:12,connecttimeout:12,conserv:1,consid:[7,13,24],consist:[1,2,19,26],consol:[10,26],constant:[2,15],construct:[1,3,4,12,15,16,17],constructor:[2,9],consum:[1,2,3],contain:[2,3,5,12,13,16,17,22,24,26,27],content:[3,5],context:[1,2,16,17,19,25],contin:2,continu:[0,2,9,10],contribut:0,contriv:3,conveni:0,convent:[26,28],convert:[1,2,21],cooper:[1,3,10,12,16,17,20,24,27],coordin:5,copi:[2,5,26],copyright:[2,10],core:2,corei:[0,2],coro:2,coroloc:[2,8,9],corotwin:2,coroutin:[1,2,5,6,7,8,9],coroutinepool:2,correct:[0,2,24,26],correctli:[0,2],correspond:[12,17],corrupt:1,cosmic:28,cost:27,could:[3,5,6],count:[18,19],counter:19,counterpart:25,cours:[5,24],courtesi:2,cover:26,coverag:[2,8],cpu:[2,20],crash:5,crawl:5,crawler:3,creat:[3,12,14,15,16,17,18,21,22,25],create_connect:2,creation:[1,12],credenti:12,credentials_for:12,credit:10,critic:13,cross:[8,9],crt:22,ctrl:5,cuni:[0,2],current:[1,2,7,11,12,13,14,15,16,18,19,20,24,26,27],current_s:2,curri:16,curried_arg:16,curried_kwarg:16,cursor:[12,27],custom:[1,22],custom_pool:22,customiz:2,cycl:[14,17],cython:23,dagu:[0,2],dai:6,dan:2,daniel:[0,2,24],daringfirebal:5,darwin:[2,10],data:[0,1,2,3,5,13,18,20,22],databas:[8,9],databaseconnector:9,datagram:28,date_tim:22,davanum:[0,2],dave:0,david:[0,2],db_modul:12,db_pool:[2,8,9],dbapi:[8,9],dbname:12,deadlock:[2,15],deal:2,death:2,debug:[0,2,8,9,10,11],decid:[12,24],decis:22,decor:[2,21],decrement:19,def:[1,3,5,8,14,15,16,17,21,22,27],defer:2,defin:[17,22,24],delai:[1,16],delet:2,deliv:18,deliveri:[2,28],demand:12,demo:5,demonstr:5,deni:0,denomin:7,depend:[0,1,2,5,6,7,12,24,25,28],deprec:[2,7,22],deprecationwarn:2,depth:2,deriv:24,derk:[0,2],descriptor:[2,7,13,22],deseri:21,design:1,desir:[1,6,7,16,17,27],dest:5,destin:12,destroi:5,detail:[1,2,13,21],detect:[0,2,13,22,26],detector:[2,13],determin:[12,13],deva:0,develop:[6,21],diagnosi:0,dictionari:[2,10,12,22],did:2,didn:3,differ:[0,1,3,5,14,15,18,19,21,27,28],dir:10,direct:19,directli:[1,12,14,16,20,25,26],directori:[5,6,26],dirnam:5,disabl:[7,16,22],disadvantag:24,disconnect:[2,5,22],discret:28,disguis:28,distinguish:2,distract:2,distribut:26,dmitri:[0,2],dmitrii:[0,2],dnspython:[0,2],do_handshake_on_connect:1,do_some_stuff:19,do_someth:15,doc:[2,19,25],docstr:2,doctest:8,document:[0,1,2,7],doe:[2,5,7,10,13,17,19,26],doesn:[2,3,5,7,12,19,20,24,26],don:[1,2,3,5,13,22,24,26],donagh:2,done:[0,1,2,3,5,12,17,19,24],donovan:[0,2,6],dostuff:17,doubl:[0,2],down:[0,2,3,18],download:26,draft:2,dramat:3,driven:[2,22],drop:[2,15,18],drug:28,due:[2,19],dump:26,dump_debug_info:12,dup:[0,2,22],duplex:2,duplic:2,dure:[2,6,12,24,26],dweimer:2,each:[1,2,3,7,10,15,18,22,26,27],earli:[15,22,24],earlier:8,easi:[2,3,7,22,25,26],easier:[2,5,26],easili:[3,12],easy_instal:2,echo:3,echoserv:[2,5],edward:[0,2],eexist:2,effect:[5,12,28],effici:2,effort:13,either:[7,12,16,17,20,24,25,28],elabor:[21,22],elaps:[1,7,16],element:[3,24],elif:5,elig:16,elimin:[2,7],els:[2,5,16,18,20],emb:2,embed:22,emit:26,empti:[2,5,17,18,20,21,22],en_al:[3,5,8],enabl:[2,7],encod:[0,2,21],encrypt:22,end:5,endpoint:28,engin:24,enough:[15,26],enqueu:18,ensur:[1,2,7],enthusiast:2,entir:[14,24,26],entri:[2,12,18,19],env:[2,5,22],environ:[0,2,3],environment:26,eof:5,epol:[2,7,26],equal:[0,19],equival:[4,20,24],era:28,erdfelt:[0,2],eric:[0,2],erpc:2,errno:[12,21],error:[0,2,5,12,14,21,22],errorhandl:12,especi:[2,13],essenc:1,essenti:3,etc:2,eugen:0,evalu:26,even:[2,16,22],evenlet:22,event:[0,2,7,8,9,13],eventlet:[0,1,2,3,4,5,6],eventlet_hub:[2,4,7,26],eventlet_no_greendn:2,eventlet_threadpool_s:[4,27],eventlet_tpool_dn:2,eventlet_tpool_gethostbynam:2,everi:[1,2,5,7,12,13,18,19,22,24,27],everyth:[1,2,24,26],everywher:7,evid:3,evt:[2,14],exact:[0,2,28],exactli:[2,19,24,25],exampl:[0,1,2,3],exc:[2,14],exc_aft:2,exc_info:[2,14,16],exce:[12,17,19],exceed:[2,22],except:[0,1,2,3,5,12,13,14,15,16,18,20,22,24,28],excess:[1,2],exec:2,execut:[1,2,3,12,13,15,16,20,22,26,27],execv:2,exercis:[5,26],exist:[1,2,7,12,15,17,26],exit:[2,5,15,16,22],expect:[2,22],expens:16,expir:2,expiri:2,explain:2,explicit:[2,12],explicitli:[1,2,7,16,24],express:[16,17],extens:[2,9],extern:[2,3,6],extrem:15,face:1,fact:3,factor:26,fai:2,fail:[4,20,26],failur:2,fall:3,fals:[1,2,5,13,16,17,18,19,20,22],famili:1,farm:[5,15],fashion:[2,25],fast:2,faster:[1,16,18],fastest:[7,16],favo:[0,2],favor:2,fcntl:2,featur:[1,2,5,20,22],feed:3,feedpars:[3,5],feedscrap:[3,5],fetch:[3,5,8,18,25],fetch_titl:[3,5],fetish:28,few:[2,3,4,6,21,24],fewer:[1,2],field:22,figur:[0,13],file:[2,3,5,7,13,14,15,21,22,24,26],filenam:[15,26],findit:5,fine:[7,24],finer:26,finish:[15,16,22],finit:[1,16],fire:2,first:[1,2,4,7,16,17,18,20,24],fix:[0,2],flag:[0,2,20],flori:[0,2],flush:[2,5],follow:[2,16,21,22,23,26],foo:[2,22,26],foo_class_test:26,foo_test:26,forbidden:5,forc:[4,27],forcibl:21,ford:[0,2],forestal:2,forev:22,forgotten:7,fork:[2,6],form:[7,18],format:[13,14,22,26],format_date_tim:22,format_hub_listen:13,format_hub_tim:13,formerli:18,forth:21,fortun:[24,27],forward:2,found:[5,18],fraction:16,frame:16,framework:[5,6,7],free:[1,15,17,18],freenod:0,friendli:1,from:[0,1,2,3,5,7,8,10,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28],from_brows:21,ftplib:2,full:[2,3,18,21,22,26],fuller:2,fulli:[2,5,22],func:[1,15,16,20,22],functool:17,fund:2,fundament:1,further:28,furthermor:2,futur:2,garbag:12,garcia:2,gasp:3,gaynor:2,gcb:0,gcc:10,gener:[1,2,8,9,14,16],genericconnectionwrapp:12,geoff:[0,2],georg:[0,2],gerrard:[0,2],get:[0,1,2,3,5,6,7,12,13,15,16,17,18,19,20,25,26,28],get_default_hub:[2,7],get_hub:[2,7],get_id:[11,27],get_nowait:18,gethostbynam:[2,5],getsocknam:26,getsockopt:[0,2],geturl:5,gevent:2,gholt:2,gif:[3,5,8],gigabyt:3,github:[2,23],give:[0,2,12,17],given:[3,7,12,13,15,16,18,19],global:[1,2,3],gmail:0,goal:1,godwin:0,goe:18,goetz:[0,2],gogreen:0,gohad:[0,2],good:[0,1,3,5,7,14,16,22,24],goodspe:0,googl:[2,3,5,8,20,25],got:[3,5,8,17],gotten:18,govern:13,grace:[2,5,21],gracefulli:1,grainger:[0,2],grant:[0,2],granular:26,great:[0,5],greater:[13,17,19],green:[0,1,2,3,5,8,9],green_fileobject:2,greendn:2,greenfil:2,greenio:2,greenlet:[2,6,7,10,11,13,16,18,22,27],greenletcontext:2,greenletexit:[16,22],greenlib:2,greenpil:[1,2,3,5,15],greenpip:2,greenpool:[1,2,3,5,8,9],greensocket:[0,2],greenssl:2,greensslobject:2,greenthread:0,gregori:[0,2],group:5,grow:3,grugq:[0,2],guard:19,gubarev:[0,2],guo:0,gysin:0,had:[2,3,6,7,18],hand:[3,5,28],handi:3,handl:[0,1,2,3,5,10,21,22,25,26],handler:[2,5,21],hang:[2,22],hansen:[0,2],happen:[3,4,7,19,24],happili:2,hard:[13,17],hardcod:26,harder:26,hardi:0,harri:0,hasn:16,have:[1,2,3,5,7,12,16,18,20,22,24,25,26,27],header:[0,2,9,21],hello:[5,21,22],hello_world:[5,21,22],help:[0,2,10,22],here:[1,2,3,5,10,19,20,24,25,26],high:[12,17],higher:2,hint:[0,22],histor:12,hit:1,hoerner:2,hog:2,hold:[1,2,12,14,17],holger:0,holt:[0,2],hood:24,hook:[9,13],host:[1,2,6,12],hostnam:12,how:[1,2,3,5],howev:6,html:[2,5,22,26],html_path:5,http:[2,3,5,6,8,17,20,22,23,25],http_pool:17,httpc:2,httpd:2,httpdate:2,httplib2:[2,17,24],httplib:[2,25],httpprotocol:22,hua:[0,2],hub:[0,2,4],hub_blocking_detect:13,hub_except:[13,16],hub_listener_stack:13,hub_prevent_multiple_read:13,hub_timer_stack:13,hudson:2,huge:26,hundr:22,hybrid:7,ibarra:2,idea:[7,16],ideal:7,ident:5,idiom:[1,3],idl:[2,12],ietf:22,ignor:[1,2,5,18,19,22],illumin:1,imag:[3,5,8],imagin:[3,19],imap:[3,5,8,15],immedi:[1,14,16,18,19],imped:26,implement:[0,1,2,5,6,7,8,9,13,14],import_patch:[1,3,5,24],importerror:[2,25],imposs:2,improp:2,improperli:2,improv:[0,2,22],inc:10,includ:[2,3,6,10,12,22,24,26],inclus:26,incom:[1,28],incompat:[0,2],incorpor:2,incorrect:[0,2],incorrectli:2,increas:[2,18],incred:[0,5,13],increment:[3,19],indetermin:17,index:8,indic:5,indra:6,infinit:[2,18],inform:[1,10,24],inherit:[22,24],initi:[2,18,19],inject:28,input:[0,1,2,3,5,15,22],insecur:25,insert_id:[2,12],insid:22,inspect:[1,7,10,13],inspir:2,instal:[2,5,7,13,25,26],instanc:[1,7,16,17,20,21,22],instead:[1,2,3,4,7,12,13,15,19,24,26],instruct:[2,25],integ:[15,16,19],integr:[0,2],intend:[12,20],interact:[8,9],interchang:1,interest:[3,5,18],interfac:[1,2,24,25,27,28],interfer:16,interlock:19,intern:[2,7,10,12,19],internet:[2,5],interpret:[8,9],interrupt:13,intl:[3,5,8],introduc:[0,2],invalid:[0,2],investig:2,invis:3,invoc:27,invok:19,involv:[3,22,26],ippolito:[0,6],ipv6:2,is_monkey_patch:24,ishaya:2,isinst:27,isn:[2,3,26],isol:2,isotop:28,issu:[0,2,6,22],item:[12,14,15,17,18],iter:[0,1,2,3,5,15],itertool:15,itself:[1,2,3,5,7,12,13,16,20,24,26,28],jago:0,jakub:[0,2],jan:[0,2],jessica:2,jira:2,job:[2,3,5,15],joe:0,johann:[0,2],john:0,join:[2,3,5,18],join_reactor:2,joshua:0,jpg:3,jsonhttp:2,juan:2,junctur:13,just:[3,5,24,25,26],justin:2,kaprielian:0,kartic:0,keep:[5,20],keepal:[2,22],kei:[3,22,24,27,28],kent:0,kept:3,kernel:13,kerrin:[0,2],kevin:0,keyboardinterrupt:5,keyfil:22,keyword:[1,2,12,16,20,24],kill:[2,16,22],killal:2,kind:5,know:[1,2,7,13],known:2,kqueue:[2,7,26],krekel:0,krishnamurthi:0,kruglyak:[0,2],kuo:[0,2],kw_additional_modul:[1,24],kwan:0,kwarg3:22,kwarg4:22,kwarg:[2,12,15,16,22,27],kwd:20,lack:[2,24,26],lambda:[5,17,25],larg:[2,16],larger:19,last:[2,14,20],lastli:26,late:24,later:[1,2,3,20,25],launch:[1,3,7,15,22],lazi:7,lead:0,leak:2,learn:10,least:[1,2,16,26],leav:1,left:[2,5],legaci:2,legal:2,len:[3,5,8,22],length:[2,5,22],lengthi:12,less:[2,15,18,19,22,28],let:7,level:2,lib:[2,6,26],liberal_regex_for_matching_url:5,libev:[2,7],librari:[0,1,2,6,7,8,18,23],libzmq:2,licens:2,life:[6,12],lifespan:12,lifetim:24,lifoqueu:18,light:6,lightqueu:18,like:[1,2,5,7,12,13,16,18,19,21,22,24,25,26,27],limit:[1,2,3,5,12,15,17,19,20,26],line:[1,3,5,7,14,15,20,22,24,26],linger:2,link:[1,2,5,16],linux:[7,26],lior:[0,2],list:[0,2,3,4,5,14,15,16,26],listen:[1,2,3,5,7,10,13,21,22,25,26],liter:[0,12],littl:[5,7,18,26,27],live:0,local:[1,7,8,9,10],localhost:[5,10,12,26],locat:[0,6],lock:[1,19],log:[0,2,13,21,22],log_format:[2,22],log_output:[2,22],log_x_forwarded_for:22,logfil:2,logic:13,logo:[3,5,8],logutil:2,longer:[2,12],look:26,loop:[1,2,3,5,6,7,10,16,22],loss:2,lost:2,lot:1,lowercas:[0,2],lowest:[7,18],luci:0,luke:0,luo:[0,2],macosx:2,mad:2,made:[2,5,8,18],magic:24,mai:[1,5,6,7,12,14,16,17,18,19,20,22,24,25,28],mail:0,main:[1,2,6,7,16,24,27],mainloop:7,major:[1,2,18,27],majorek:0,make:[0,1,2,3,5,7,13,14,19,22,25,26,27],makefil:[2,5,20],makegreenfil:2,malcolm:[0,2],malicki:0,manag:[1,2,5,7,12,17,19],mandat:22,mani:[0,1,2,5,15,19,22,26,28],manner:[7,24],manual:2,manuel:2,map:12,marc:0,marcin:[0,2],marcu:[0,2],mark:[2,12,17],mark_as_clos:7,mashup:5,mask:2,match:[2,17,27],max:[15,17],max_ag:12,max_http_vers:22,max_idl:12,max_siz:[12,17,22],maximum:[1,2,17,18,22],maxsiz:18,mcarter:2,mccabe:2,mclaren:[0,2],mean:[2,4,5,7,12,18,22,24,26,28],meant:[2,6,10],measur:12,mechan:[2,22],memori:[1,2,3,15],mere:16,merg:2,messag:[2,5,21,28],meth:27,method:[0,1,2,3,7,12,16,17,18,19,21,22,24,27],michael:[0,2],middl:2,might:[7,14,16,20,22,24,26,27],mike:[0,2],mikepk:[0,2],min:17,min_siz:[2,12,17],mind:20,minimum:[3,22],minimum_chunk_s:[0,2,22],minimum_write_chunk_s:22,minor:2,mismatch:26,miss:26,mission:2,mistak:[2,13],mit:8,mix:28,mode:2,modif:2,modifi:[2,3,17,24],modul:[0,1,2,5,7,8],module_nam:24,modulenam:1,moment:[13,22],monkei:2,monkey_patch:[1,2,24],monkeypatch:[1,2,8],more:[1,2,3,5,6],most:[1,2,5,6,12,14,18,19,20,24,26],mostli:18,move:[2,5],much:[1,2,12,19,25,26],multi:2,multicast:28,multipl:[1,2,5,7,12,13,14,19,22,24,28],multiplex:7,multiprocess:18,multitudin:2,murau:[0,2],murthi:0,muscl:28,must:[2,12,14,16,17,19,20,22,24],my_func:27,my_handl:21,myapp:10,myfunc:10,myhandl:1,myhub:7,myobject:17,mypackag:7,mypool:17,mysock:20,mysql:2,mysqldb:[0,2,12],nake:1,name:[1,2,6,7,12,22,24,26,27],nameerror:2,nat:0,nativ:[7,24,27],nearli:1,necessari:[2,7,17,18,21],need:[1,2,4,7,17,19,22,24,25],neg:[15,19],net:[2,5],neudorf:[0,2],never:[14,18,20],new_connect:5,new_siz:[15,17],new_sock:[3,5],new_url:5,new_writ:5,next:[2,3,15,16,19],nginx:2,nice:[0,2,26],nick:[0,2],noblock:[0,2],nobodi:2,non:[2,5,6,9,17],nonblock:[2,25,27],nonblockingli:1,none:[1,2,5,7,10,12,13,14,15,17,18,19,20,21,22,24],nonsens:2,nonzero:19,nor:17,normal:[1,3,7,10,12,13,16,21,22,24,27,28],nose:[2,26],nosetest:26,notabl:2,note:[1,3,4,5,14,16,21,26],noth:16,notic:2,now:[2,12],nullari:17,number:[1,2,3,5,12,14,15,17,18,19,22,26],nvisit:5,obj:[17,27],object:[1,2,7,12,14,15,16,17,18,21,22,27],observ:10,obviou:1,occasion:[16,26],occur:[14,20],octal:0,oden:0,off:[1,3,24],often:[2,13],old:[2,7],older:25,oldest:21,omit:[1,20,26],onc:[2,3,6,12,14,25],onli:[1,2,4,5,7,12,14,16,17,18,20,22,24,25,27,28],onto:27,opaqu:17,open:[0,1,2,3,5,6,8,12,15,20,22],openssl:[0,2,25],oper:[0,2,5,6,7,10,12,15,17,18,20,22,27],oppenheim:[0,2],opportun:16,opposit:19,optim:[3,4],option:[0,1,2,18,19,22,26,27],order:[3,6,7,17,18,19,21,26,27],order_as_stack:17,org:[5,8,22,23],organ:28,orient:28,orlov:[0,2],other:[1,2,3,7,14,16,17,18,19,21,22,24,26,27],otherwis:[16,18,19],our:5,out:[0,1,2,5,12,13,14,15,17,19,20,24],outbound:5,outgo:3,output:26,outq:5,outsid:20,over:[1,2,3,5,15,16,24,25],overal:[2,15],overhaul:2,overhead:[18,27],overrid:2,overridden:[2,22],overriden:[0,2,17],own:[5,7,15,16,26,27],packag:[2,7,22,24,26],page:[2,5,8],pair:[22,24,28],parallel:[1,2,3,5,26],paramet:[1,12,15,20,22],paramiko:2,parent:[2,14,16,27],pars:[3,5],part:[1,2,22],parti:7,partial:17,particip:5,particular:[2,3,12,24,26],pascu:2,pass:[0,2,5,7,12,14,17,20,21,22],passwd:12,past:24,patch:0,patcher:[0,2,24],patcher_test:2,path:[2,5,21],path_info:[5,21],patrick:0,patrin:2,pattern:1,paul:[0,2],pavel:6,payload:22,peak:12,peer:28,pend:[1,20],pep333:22,pep:[0,2,24],per:[0,1,2,12,22],perform:[2,6,10,16,22,24],perhap:5,period:12,peter:[0,2],physic:28,pick:[4,19],pigmej:2,pile:[3,5],ping:12,pipe:[5,21,27],place:[2,7,18,24,26],plain:[2,3,5,12,22],plan:20,platform:[7,26],pleas:[21,25],plu:2,plugin:26,plumb:2,point:[1,2,5,13],poll:[0,2,7],pollhub:2,pollut:2,pool:[1,2,3,4,5,8,9],pooledconnectionwrapp:12,popen4:2,popen:2,popul:17,port:[1,2,3],portant:[0,2],posit:[13,18,19,20],possibl:[1,2,7,16,18,19,24],post:[0,3,5,9],postgr:0,posthook:[2,22],potenti:2,power:[13,25],practic:[3,7,24],pre:[0,17],preced:0,predict:13,preemptiv:1,prefer:[1,7,21],prematur:2,present:[1,2,24,26,28],preserv:[2,14],preston:[0,2,6],pretend:22,pretti:5,prevent:[1,2,13,16],previou:[2,17],previous:2,primit:[1,8,9],primitv:5,print:[1,2,3,5,8,13,14,15,16,17,22,25,26,27],print_funct:5,printout:26,prior:25,prioriti:18,priorityqueu:18,privat:22,probabl:[2,7],problem:[2,3,20,24],problemat:22,proc:2,process:[1,2,3,5,8,9],producer_consum:5,product:[3,13],profil:[0,2],program:[4,5,7],project:[0,2,6,28],promot:7,proof:6,propag:2,proper:19,properli:[2,22],properti:[16,21],proport:15,protect:[2,3,13],protocol:[2,21,22],provid:[0,1,2,3,5,12,17,20,21,22,24,26,27,28],provision:22,proxi:[0,2,3,12,27],psycopg2:[2,12,24],psycopg:[2,24],pub:2,pull:[0,2],punct:5,pure:7,purpos:[2,3,25,26],push:[5,19],put:[2,5,7,12,14,17,18,22,28],put_nowait:18,putter:18,py3k:2,pycon:[2,6],pycurl:2,pyevent:[2,7,27],pygtk:0,pyopenssl:[1,2,8],pypi:[0,2,5],python2:2,python3:[0,2],python:[0,1,2,3,5,6,7,8,9],pythonpath:[5,26],pyzmq:[2,8,9],qsize:18,qthcn:0,quad:2,quantiti:15,queri:[2,12],question:0,queu:[1,28],queue:[1,2,5,8,9,14],quick:1,quickli:5,quirk:0,quit:[1,5,15,24,26],r262:10,race:2,radioact:28,radix:0,rai:28,rais:[1,2,5,7,12,13,14,15,16,18,19,20,21,22],ralf:0,ran:26,random:[5,19,27],rang:5,rare:[2,20,24],rather:[1,3,5,26],raw_path_info:2,rawconnectionpool:12,raylu:[0,2],raymon:2,raymond:0,reach:19,reactor:2,read:[0,1,2,3,5,7,8,13,20,22,25,26],read_chat_forev:5,readabl:[1,2],reader:[2,3,5],readi:[2,7,14],readlin:[0,3,5,20],readm:0,readuntil:2,real:27,realli:13,reason:[12,24,26,27],receiv:[2,3,13,18,28],recent:[14,18,20],reconnect:28,record:13,recurs:2,recursive_crawl:5,recv:[2,3,5],red:6,redbo:2,reduc:[0,2],reentrant:[2,15],refactor:2,refer:[1,2,8],reflect:2,regard:0,regardless:[1,2,16],regist:[7,13],regular:[1,2,5],reimplement:2,rel:2,relat:[1,2],relationship:28,releas:[2,19],reli:[19,24,25],reliabl:[2,28],reload:5,remain:[12,22,27],remote_port:[0,2],remov:[2,5,12,13,16,18],renam:2,render:0,repeatedli:[3,14],replac:[2,24],report:[0,2,18,26],repr:5,repres:[1,12,15,19,27],repro:0,request:[0,1,2,3,5,10,21,22],request_lin:22,request_method:5,requir:[1,2,5,6,7,12,19,22,24],rescu:24,research:28,resembl:18,reset:14,resiz:[2,15,17,18],resolut:13,resolv:[2,5],resourc:[8,9,13],resourcewarn:2,respect:[0,3,5,18],respond:[3,22],respons:[0,2,9,21],rest:[1,10,12],restor:24,restrict:[1,27],restructur:7,restserv:6,result:[0,1,2,3,5,12,14,15,16,17,20],resum:[2,13,18],retri:[0,2],retriev:[1,3,15,16,18],retval:14,reus:[12,14],revers:19,review:2,rfc7231:22,rfc:22,rfk:[0,2],rhel:2,rhode:2,right:[2,16,17],risk:15,rivera:0,robinson:0,robot:5,robust:[2,3],rollback:12,root:12,routin:17,rss:3,rtyler:2,rudd:0,ruijun:[0,2],rule:24,run:[0,1,2,3,5,6,7,8,9],runtim:[17,24],runtimeerror:14,ryan:[0,2],s33kr1t:12,safe:[1,2,7,24,27],safeti:5,salmon:[0,2],same:[0,1,2,3,5,6,7,13,14,15,16,19,20,21,22,24,25,26],sampl:22,saranwrap:2,save:[0,1],saw:5,scenario:22,schedul:[1,2,6,7,16,20],schema:12,scheme:2,schmir:[0,2],schmitt:0,scope:7,scott:[0,2],scraper:3,script:2,sean:[0,2],search:[5,8],second:[0,1,2,7,13,16,17,18,20],secondlif:[2,3,25],secret:28,section:[20,22],secur:22,sedov:2,see:[1,2,4,5,7,13,14,16,20,21,24,25,26],seed:5,seek:2,seem:5,seen:5,select26:2,select:[0,1,2,7,12,24],select_db:12,self:[14,17],sem:19,semant:[2,19,28],semaphor:[0,2,8,9],send:[2,5,14,21,22],send_except:[2,14],send_hundred_continue_head:2,send_hundred_continue_respons:22,sendal:[0,2,3,5],sender:5,sens:26,sensibl:[2,26],sent:22,separ:[1,2,15],sequenc:24,sergei:[0,2],sergeyev:[0,2],serial:21,serv:[1,2,10,22,26],server:[1,2],server_cap:12,server_ev:22,server_sid:[1,22],server_sock:26,servic:3,session:1,set:[1,2,5,10,12,13,16,17,19,20,22,25,27],set_accept_st:25,set_character_set:12,set_hundred_continue_response_head:22,set_num_thread:2,set_server_opt:12,set_sql_mod:12,set_verifi:25,setitim:[2,13],settimeout:[0,2],setup:[2,26,28],sever:12,share:[1,12,13],shaun:[0,2],shaw:2,shepelev:0,ship:2,shop:25,shorter:13,should:[1,2,16,19,20,21,22,24,27],shouldn:2,show:[3,5],show_valu:13,show_warn:12,shown:22,shutdown:[2,12,25],side:3,sigalarm:13,sigchld:2,sign:19,signal:13,signatur:[2,16],signific:2,silenc:20,silent:4,similar:[2,14,18],simmon:[0,2],simon:0,simpl:[3,5,8,21,22],simplehttpserv:2,simplejson:2,simpler:27,simplest:27,simpli:[1,2,7,10,12,21,22,24,26],simplic:1,simultan:[0,2,3,5,28],sinc:[5,24,27],singl:[1,2,10,14,15,17,21,22,24],singleton:7,sit:1,site:[5,22],situ:10,situat:[15,19],six:5,size:[2,4,15,17,18,22,27],size_or_pool:15,skip:[2,26],skip_if_no_ssl:2,skirko:[0,2],slant:0,sleep:[1,2,5,14,16,20,24],slide:0,slight:24,slightli:[2,3,21,22],slot:[15,18],slow:24,small:[0,2,5,22],smart:[2,26],sndhwm:2,so_reuseaddr:[0,1,2],sock:[1,10,21,22,25],sock_dgram:28,sock_stream:[25,28],socket:[0,1,2,3],socket_timeout:[2,22],socketserv:24,softwar:12,some:[1,2,3,5,6,7,12,16,17,19,20,24,25,26,27,28],someon:2,someth:[2,3],sometim:[2,24,26],somewhat:3,soren:[0,2],sort:[5,24],soup:26,sourc:[0,2,5,6,8,26],soviet:28,spandex:28,spare:6,spawn_aft:[1,2,16],spawn_after_loc:16,spawn_n:[1,3,5,14,15,16],speak:28,spec:[21,22],special:[7,20],specif:[1,7,12,16,22,26],specifi:[4,7,10,13,16,17,19,22,24],spent:6,spew:13,sqlite:2,sqlstate:12,squeaki:2,squelch:0,sriniva:[0,2],ssl:[0,1,2,8,9,21],ssl_listen:2,ssl_version:1,sslconnect:2,sslv23_method:25,stack:[5,13,14,16],stacktrac:14,stand:2,standalon:15,standard:[1,2,3,5,8,9,18],stanescu:0,stanworth:[0,2],starmap:15,start:[1,3,5,6,7,16,22],start_respons:[3,5,22],start_url:5,starting_id:27,stasiak:[0,2],stat:12,state:[6,10,13,24],statement:[1,2,17,20,24],statu:22,status_cod:22,stderr:22,stdin:14,stdlib:[2,26],stdout:13,stefano:0,steven:0,stick:[5,10,27],still:[2,12,20,21],stinner:[0,2],stolen:28,stomp:2,stop:[1,2,6,13],stopiter:15,stopserv:1,storag:[8,9],store:[3,14],store_result:12,str:22,straightforward:2,strang:2,stream:28,strict:28,strictli:19,string:[2,3,13,20,21,22,27],string_liter:12,strip:5,structur:[1,3],stuart:[0,2],stub:26,stuf:1,stuff:[1,2],style:[3,6],sub:[2,26],subclass:[2,17,18],subprocess:[0,2],subscrib:2,subsect:1,subsequ:18,subset:12,substanti:7,subtli:19,successfulli:16,suggest:0,suit:[2,12,15],sullivan:0,summari:[1,26],supersocket:2,suppli:[1,7,10,16,22,27],support:[0,2,5,7,8,9,18,21],suppos:[12,17],suppress:20,suppress_ragged_eof:1,sure:[0,1,2,7,19,25],suspend:[1,7,15,19],svn:6,swap:24,swap_in:2,swap_out:2,switch_out:2,switchingtodeadgreenlet:2,synchron:[2,18,28],syscal:[0,2],system:[1,2,7,13,24,25,26],systemexit:5,szotten:[0,2],takashi:2,take:[1,6,12,14,19,28],taken:12,talk:[2,6,8],tarbal:[2,26],target:[12,16],task:[2,7,15,18],task_don:18,taso:0,tavi:[0,2],tcp:[1,2,28],tcp_listen:2,tcp_server:2,teardown:28,technic:22,tediou:5,tegel:[0,2],tell:[13,18,26],telnet:[5,10],temoto:0,temotor:0,templat:22,tempmod:26,temporarili:24,ten:3,tend:12,term:[1,3,8],termin:[1,5,13,16,21],tess:0,test:[0,2,8,12,22],test_024a_expect_100_continue_with_head:22,test_024b_expect_100_continue_with_headers_multiple_chunk:22,test_024c_expect_100_continue_with_headers_multiple_nonchunk:22,text:[3,5,22],than:[1,3,5,12,15,16,17,18,19,22,24,25,26],thei:[1,2,3,4,5,7,12,14,15,18,22,24,26,27],them:[2,7,12,13,14,19,26,27,28],themselv:27,therebi:3,therefor:[2,13,24,27],therein:2,thi:[1,2,3,4,5,7,8,10,12,13,15,16,17,18,19,20,21,22,24,25,26,27],thier:0,thing:[5,10,14,15,16,17,19,27],third:7,thoma:[0,2],those:[2,3,5,22,26,27],though:[1,16,19,22,26],thousand:3,thread:[0,1,2,3,5,7,8,9],thread_id:12,threadloc:2,threadpool:[2,4],three:[2,12],through:[5,12,20],throughout:12,throw_arg:16,thrown:26,thu:[2,6,7,15,19,22,28],tim:[0,2],time:[1,2,3,6,12,13,14,15,16,17,18,19,20,21,22,24,27,28],timeout:[0,1,2,5,7,8,9,13,17,18,19],timeout_exc:7,timeout_valu:20,timeoutexpir:2,timer:[2,7,12,13,20],timestamp:22,titl:[3,5],toe:2,toggl:13,token:17,tokenpool:17,told:2,toma:2,tomaz:[0,2],too:[2,5,7,12,19,20],took:20,tool:[8,9],top:2,total:2,tour:3,tox:2,tpool:[0,2,4,8,13],tpool_except:13,tpooledconnectionpool:[2,12],trace:[13,14,16],trace_nam:13,traceback:[2,14,20,22],track:[0,2,12],trampolin:[2,6,7],transact:22,transfer:[2,28],transpar:[6,25,28],trap_error:2,travi:[0,2],tree:[6,26],tri:[7,25],trick:27,tricki:7,trigger:[14,20],truli:[2,5,17],trunk:6,tucker:0,tune:10,tupl:[1,2,14,16,18,22],turn:7,tushar:[0,2],tweak:[2,21],twist:[0,2],twistedr:2,twistedutil:2,two:[1,5,14,17,20,28],txt:5,tyler:[0,2],type:[3,5,10,16,20,22,27,28],typeerror:2,typic:[5,18],typo:0,unavail:28,unavoid:16,unblock:[18,19],unbound:19,uncaught:1,uncov:0,under:[8,21,24],underli:[2,22,25],understand:[1,2,4],unencrypt:22,unexpect:20,unexpectedli:[7,27],unfinish:[2,12,18],unicod:21,unidirect:5,unidirection:5,uniqu:17,unit:[1,2,26],unittest:[6,26],univers:[2,8,9],unix:22,unlik:18,unlink:[0,2,16],unpack:2,unpatch:2,unpredict:1,unreli:28,unschedul:14,unspew:13,until:[1,2,3,7,14,15,16,17,18,19,27],unus:[2,12],unwrap:2,updat:[2,6],upgrad:[0,2],upon:[12,24],upper:[3,19],urban:[0,2],url:[2,3,5,8,22,25],url_length_limit:22,url_match:5,url_regex:5,url_schem:[2,22],urllib2:[2,3,5,8,20,25],urlopen:[3,5,8,25],usabl:22,use_hub:[2,4,7],use_result:12,useless:12,user:[2,4],usr:5,usual:26,utf:21,util:[2,13],val:0,valid:21,valu:[1,3,5,12,13,14,15,16,19,20,21,22,27],valueerror:[18,19],variabl:2,variant:18,variou:3,varrazzo:[0,2,24],vast:27,vatamaniuc:[0,2],verbos:[1,2],veri:[1,3,5,12,17,19,20],verifi:26,verify_non:25,version:[1,2,3,21,22,24,25,26],via:[2,7,10,17,26,27],victor:[0,2],violat:22,vishvananda:2,visit:14,wai:[1,2,5,10,14,16,17,21,22,24,26,27],wait:[0,2,5,7,12,13,14,15,16,17,18,19,21,22,25],wait_on:14,waital:[5,15],waiter:14,waitpid:2,wake:[0,2,7,12,19],wall_second:22,want:[1,2,3,12,16,22,26,27],warn:21,warning_count:12,water:[12,17],weak:24,weaker:25,web:3,webcrawl:[0,5],webob:0,websocket:[0,2],websocket_chat:5,websockets13:2,websocketwsgi:[5,21],weight:6,weird:[2,26],well:[2,5,22,24,26],were:[0,2,3,5,6,18,26],what:[1,2,4,7,8,13,24,26],whatev:[16,17],wheel:2,when:[1,2,3,5,6,7,10,12,13,14,15,16,17,18,19,20,22,24,26,27,28],whenev:[12,17,18,25],where:[2,3,12,14,18,22,28],wherea:24,whether:[2,12,13,16,18,22,24],which:[1,2,3,5,7,12,13,14,15,16,17,19,22,24,25,26,27],whole:15,whoop:14,why:[2,7],wiki:[2,3],william:[0,2],windisch:[0,2],window:[0,2],with_stat:5,with_timeout:[2,20],within:[2,8,9],without:[2,7,12,13,15,16,18,19,20],wodg:26,woken:[14,18],won:[1,3,7,20],wonder:6,word:17,work:[1,2,3,5,6],worker:[3,5,15],world:[5,6,8,21,22],would:[1,2,12,19],wrap:[2,20,21,22,25,26,27],wrap_:2,wrap_pipes_with_coroutine_pip:2,wrap_socket:1,wrap_socket_with_coroutine_socket:2,wrap_ssl:[0,1,2,22],wrapper:[12,25,27],wright:[0,2],write:[2,5,6,7,8,13,24],writer:[2,5],written:[6,22,23],wsgi:[0,2,3],wsgi_app:22,wsgi_test:22,www:[3,5,8,20,23],xreadlin:2,yamamoto:2,yandex:5,yang:[0,2],yet:[2,6,21,26],yield:[1,2,3,10,12,13,16,17,20,22,24,27],yimg:[3,5,8],your:[1,2,5,7,25,26],yourself:[5,7],zed:2,zero:[15,17,18,19],zeromq:[0,2,8,23],zeroreturnerror:2,zhang:[0,2],ziegler:0,zip:5,zmq:[0,2,8,9]},titles:["Authors","Basic Usage","0.17.3","Design Patterns","Environment Variables","Examples","History","Understanding Eventlet Hubs","Eventlet Documentation","Module Reference","<code class=\"docutils literal\"><span class=\"pre\">backdoor</span></code> &#8211; Python interactive interpreter within a running process","<code class=\"docutils literal\"><span class=\"pre\">corolocal</span></code> &#8211; Coroutine local storage","<code class=\"docutils literal\"><span class=\"pre\">db_pool</span></code> &#8211; DBAPI 2 database connection pooling","<code class=\"docutils literal\"><span class=\"pre\">debug</span></code> &#8211; Debugging tools for Eventlet","<code class=\"docutils literal\"><span class=\"pre\">event</span></code> &#8211; Cross-greenthread primitive","<code class=\"docutils literal\"><span class=\"pre\">greenpool</span></code> &#8211; Green Thread Pools","<code class=\"docutils literal\"><span class=\"pre\">greenthread</span></code> &#8211; Green Thread Implementation","<code class=\"docutils literal\"><span class=\"pre\">pools</span></code> - Generic pools of resources","<code class=\"docutils literal\"><span class=\"pre\">queue</span></code> &#8211; Queue class","<code class=\"docutils literal\"><span class=\"pre\">semaphore</span></code> &#8211; Semaphore classes","<code class=\"docutils literal\"><span class=\"pre\">timeout</span></code> &#8211; Universal Timeouts","<code class=\"docutils literal\"><span class=\"pre\">websocket</span></code> &#8211; Websocket Server","<code class=\"docutils literal\"><span class=\"pre\">wsgi</span></code> &#8211; WSGI server","<code class=\"docutils literal\"><span class=\"pre\">eventlet.green.zmq</span></code> &#8211; \u00d8MQ support","Greening The World","Using SSL With Eventlet","Testing Eventlet","Threads","Zeromq"],titleterms:{"\u00f8mq":[23,28],"class":[18,19],"function":[1,7],"import":24,api:[1,28],argument:12,author:0,backdoor:10,basic:1,bind:23,bug:0,chat:5,client:3,connect:[5,12],constructor:12,consum:5,content:8,continu:22,contributor:0,control:1,conveni:1,coroloc:11,coroutin:11,coverag:26,crawler:5,cross:14,databas:12,databaseconnector:12,db_pool:12,dbapi:12,debug:13,design:3,dispatch:3,doctest:26,document:[8,28],earlier:25,echo:5,environ:4,event:14,eventlet:[7,8,13,23,25,26],exampl:5,extens:22,feed:5,find:0,forward:5,gener:17,green:[15,16,23,24],greenpool:15,greenthread:[1,14,16],hassl:0,header:22,histori:6,hook:22,how:7,hub:[7,26],implement:16,indic:8,interact:10,interpret:10,lab:0,librari:[24,26],licens:8,linden:0,local:11,maintain:0,modul:9,monkeypatch:24,more:7,multi:5,network:1,non:22,origin:0,patch:1,pattern:3,pool:[12,15,17,27],port:5,post:22,primari:1,primit:14,process:10,produc:5,pyopenssl:25,python:[10,23,25],pyzmq:23,queue:18,recurs:5,refer:9,relat:7,resourc:17,respons:22,run:10,scraper:5,semaphor:19,server:[3,5,21,22],simpl:27,socket:5,spawn:1,ssl:[22,25],standard:[22,24,26],storag:11,support:[22,23],tabl:8,test:26,thank:0,thread:[15,16,27],timeout:20,tool:13,tpool:27,understand:7,univers:20,usag:1,user:5,variabl:4,web:5,websocket:[5,21],what:28,who:0,within:10,work:7,world:24,write:26,wsgi:[5,22],you:0,zeromq:28,zmq:23}})