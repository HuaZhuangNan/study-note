package wxwmy.cn;


public class Tool {
	//成员变量
	private String name,sex;
	private int age;
	//默认同一个包才可以访问 public
	//构造函数，函数名和类名一致
	public Tool(String name,String sex,int age) {
		this.name=name;
		this.sex=sex;
		this.age=age;		
	}
	//成员函数
	public String getName()//getter方法,返回成员变量
	{
		return name;
	}
	public void setAge(int age)//set方法,修改成员变量
	{
		this.age = age;
	}
	boolean printInfo()  {
		System.out.println("你好你的姓名是"+name+"\n性别为"+sex+"\n年龄为"+age+"岁");
		return true;
	}
	
}