//your JS code here. If required.

let p=document.getElementById('status');

let btn=document.getElementById('enterBtn');

btn.addEventListener('click',fun);

function fun(para) {
	let h1=document.createElement('h1');
	h1.id=p.id;
	h1.innerText="Entered Metaverse"
	p.parentNode.replaceChild(h1,p);
}