public class MainTest {
    public static void main(String[] args) {

        EagerInitialization eger1 = EagerInitialization.getInstance();
        eger1.setName("hahah");
        System.out.println(eger1.getName());

        EagerInitialization eger2 = EagerInitialization.getInstance();
        System.out.println(eger2.getName());


        System.out.println("Hello world!");
    }
}