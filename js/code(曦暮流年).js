function password(){
				var testV = 1;
				var pass1 = prompt('密码：12345678')
				while (testV < 3){
					if(!pass1)
					history.go(-1);
					if(pass1 == "2444666668888888"){
						alert('没想到吧，就这么简单');
						break;
					}
					testV+=-1;
					var pass1 = prompt('给你机会你不中用啊');
			        }
					if (pass1!="password"& testV == 3)
					history.go(-1);
					return"";
			}
			document.write(password());
			