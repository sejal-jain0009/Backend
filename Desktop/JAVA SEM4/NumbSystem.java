//binary to decimal
//Method -1
/*import java.util.Scanner;
class NumbSystem
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        String binary=sc.next();
        int decimal=Integer.parseInt(binary,2);
        System.out.println(decimal);
        sc.close();
    }
}*/

//Method-2
/*import java.util.Scanner;
class NumbSystem{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int binary_num=sc.nextInt();
        int ans=0;
        int pw=1;
        while(binary_num>0){
          int digit=binary_num%10;
          ans+=digit*pw;
          binary_num/=10;
          pw*=2;
        }
        System.out.println(ans);
    }
}*/

//decimal to binary
/*import java.util.Scanner;
class NumbSystem{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int decimal_num=sc.nextInt();
        int ans=0;
        int pw=1;
        while(decimal_num>0){
          int digit=decimal_num%2;
          ans+=digit*pw;
          pw*=10;
          decimal_num/=2;
        }
        System.out.println(ans);
    }
}*/