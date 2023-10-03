public class Main {
    public static void main(String[] args) {

//        Candy hardCandy = CandyFactory.getCandy(CandyType.HARD);
        HardCandy hardCandy = (HardCandy) CandyFactory.getCandy(CandyType.HARD);
        assert hardCandy != null;
        System.out.println(hardCandy.getCandyName());

        System.out.println("Hello world!");

        Candy mintyCandy = CandyFactory.getCandy(CandyType.MINTY);
        assert mintyCandy != null;
        System.out.println(mintyCandy.getCandyName());

        System.out.println("Hello world!");

        Candy non = CandyFactory.getCandy(null);
        System.out.println(non);

    }
}