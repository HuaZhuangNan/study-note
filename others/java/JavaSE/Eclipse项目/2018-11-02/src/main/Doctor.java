package main;

public class Doctor {
	String name,address;
	int idnumber;
	//构造函数，函数名和类名一致
	public Doctor(String name,int idnumber,String address) {
		this.name=name;
		this.idnumber=idnumber;	
		this.address=address;	
	}
	public void print (){
		System.out.println("医生的名字");
	}
}
class NonSpecialist extends Doctor {
	public NonSpecialist(String name, int idnumber, String address) {
		super(name, idnumber, address);
	}
	public void print (){
		System.out.println("医生的名字为"+name+"编号为"+idnumber+"地址为"+address);
	}
}
class Specialist extends Doctor {
	String specialist;
	public Specialist(String name, int idnumber, String address ,String specialist) {
		super(name, idnumber, address);
		this.specialist = specialist;
	}
	public void print (){
		System.out.println("医生的名字为 "+name+" 编号为 "+idnumber+" 地址为 "+address+" 专业为 "+specialist);
	}
}
