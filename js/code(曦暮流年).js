function password(){
				var testV = 1;
				var pass1 = prompt('本站谁最帅\n \n A:站长\n B:\站长\n C:站长\n D:我自己\n 请选择错误的答案;用文字回答')
				while (testV < 3){
					if(!pass1)
					history.go(-1);
					if(pass1 == "我自己"){
						alert('群众的眼睛果然是是雪亮的，本站长果然帅');
						break;
					}
					testV+=-1;
					var pass1 = prompt('四分之三的正确率,选什么不好偏偏选这个 \n承认本站长帅很难吗,再给你一次机会\n \n本站谁最帅\n \n A:站长\n B:\站长\n C:站长\n D:我自己\n 请选择错误的答案;用文字回答');
			        }
					if (pass1!="password"& testV == 3)
					history.go(-1);
					return"";
			}
			document.write(password());
			