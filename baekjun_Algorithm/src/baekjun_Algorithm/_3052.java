package baekjun_Algorithm;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
 
public class _3052 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        boolean[] arr = new boolean[42];
        int count = 0; 
        
        for(int i = 0 ; i < 10 ; i++) {
            arr[Integer.parseInt(br.readLine()) % 42] = true;
        }
        

        for(boolean val : arr) {
            if(val){
                count++;
            }
        }
        System.out.println(count);
    }
}