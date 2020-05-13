package main;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {
	public static void main(String args[]) {
//		int a=123456;
//		Integer in = new  Integer(a);
		ArrayList<Integer> List = new ArrayList<Integer>();//若想集合的数据类型数据为INT基本类型，就需要使用INT的包装类Interger
//		ArrayList<String> List = new ArrayList<String>();
//		ArrayList List = new ArrayList();
		
		List.add(1);
		List.add(2);
		List.add(3);
//		int[] arr = new Int[List.size()];
//		String[] arr = new String[List.size()];
		Integer[] arr = List.toArray(new Integer[List.size()]);
//		Int32[] values = new Int32[List.Count];
		System.out.println(Arrays.toString(arr));
//		String a ="8558555vsvds";
//		System.out.println(a.substring(9,12));
//		for(int element:arr){
//		     System.out.println(element);
//		}
		
	}
}
