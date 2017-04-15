
function Sorting(num){
	this.num=num,
	this.sor=function(){
		var x=0;
		var y=0;
		for(i=0;i<this.num.length-1;i++)
		{
			var m=0;
			for(var j=0;j<this.num.length-1-i;j++)
			{
				
				if(this.num[j]<this.num[j+1])
				{
					m++
					var tem=this.num[j];
					this.num[j]=this.num[j+1];
					this.num[j+1]=tem;
				}
				x++;
				
			}
			if(m===0)
			{
				break;
			}
			y++;
		}
		for(var i=0;i<this.num.length;i++)
		{
			document.write(this.num[i]+" , ");
		}
	}
}
(function($){

})(jQurey)