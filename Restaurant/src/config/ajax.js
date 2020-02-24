import axios from 'axios';

export default function ajax (url, data={},type='GET'){
	return new Promise((resolve,reject)=>{
		let promise='';
		type=type.toUpperCase();
	if (type=="GET") {
		let str='';
		Object.keys(data).forEach((key)=>{
			str+=key+'='+data[key]+'&';
		});
		str=str.substring(0,str.lastIndexOf('&'));
		url=url+"?"+str;
		promise=axios.get(url);
	}
	else{
		promise=axios.post(url,data);
	}
		promise.then(response=>{
			resolve(response.data);
		}).catch(error=>{
			reject(error);
		})
	})
}
