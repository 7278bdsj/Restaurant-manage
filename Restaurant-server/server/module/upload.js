const fs=require('fs');
const path=require('path');

const uploadFile = (ctx) => {
    let fileName = ctx.request.body.name;
    let file = ctx.request.files.file;
    // 创建可读流
    const render = fs.createReadStream(file.path);
    // 修改文件名
    let myDate = new Date();
	let newFilename = myDate.getTime()+'.'+file.name[1];
	//写入地址
	let uploadPath = path.join(__dirname,'../public/upload');
	//创建写入流
	const upStream = fs.createWriteStream(uploadPath);
	//可读流通过管道写入可写流
	reader.pipe(upStream);
	ctx.body={code:200,date:{url:'http://'+ctx.headers.host+'/upload/'+newFilename}};
}

module.exports={
	uploadFile
};