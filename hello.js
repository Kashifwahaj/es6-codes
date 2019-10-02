console.log('hello world');
let myY={
	title:'hey',
	ind:8
}

console.log(myY.ind);

// var txtFile ="/home/kw/Documents/Prog Carr/BackendJ/Node/Node";
// var file =new File(txtFile);
// var str ="This Will Be Written";

// file.open("w");
// file.write(str);
// file.close();
// alert(str);
var FileOpener = new ActiveXObject(“Scripting.FileSystemObject”);
var FilePointer = FileOpener.OpenTextFile(“/home/kw/Documents/Prog Carr/BackendJ/Node/Node/text.txt”, 8, true);
FilePointer.WriteLine(“I m a good boy”);
FilePointer.Close();