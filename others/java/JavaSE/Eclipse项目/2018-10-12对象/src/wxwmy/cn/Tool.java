package wxwmy.cn;


public class Tool {
	//��Ա����
	private String name,sex;
	private int age;
	//Ĭ��ͬһ�����ſ��Է��� public
	//���캯����������������һ��
	public Tool(String name,String sex,int age) {
		this.name=name;
		this.sex=sex;
		this.age=age;		
	}
	//��Ա����
	public String getName()//getter����,���س�Ա����
	{
		return name;
	}
	public void setAge(int age)//set����,�޸ĳ�Ա����
	{
		this.age = age;
	}
	boolean printInfo()  {
		System.out.println("������������"+name+"\n�Ա�Ϊ"+sex+"\n����Ϊ"+age+"��");
		return true;
	}
	
}