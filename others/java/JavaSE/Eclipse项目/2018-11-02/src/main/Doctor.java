package main;

public class Doctor {
	String name,address;
	int idnumber;
	//���캯����������������һ��
	public Doctor(String name,int idnumber,String address) {
		this.name=name;
		this.idnumber=idnumber;	
		this.address=address;	
	}
	public void print (){
		System.out.println("ҽ��������");
	}
}
class NonSpecialist extends Doctor {
	public NonSpecialist(String name, int idnumber, String address) {
		super(name, idnumber, address);
	}
	public void print (){
		System.out.println("ҽ��������Ϊ"+name+"���Ϊ"+idnumber+"��ַΪ"+address);
	}
}
class Specialist extends Doctor {
	String specialist;
	public Specialist(String name, int idnumber, String address ,String specialist) {
		super(name, idnumber, address);
		this.specialist = specialist;
	}
	public void print (){
		System.out.println("ҽ��������Ϊ "+name+" ���Ϊ "+idnumber+" ��ַΪ "+address+" רҵΪ "+specialist);
	}
}
