public class LazyInitialization {

    private static LazyInitialization instante ;
    private LazyInitialization(){


    }

    public static LazyInitialization getInstance(){
        if(instante == null)
            instante = new LazyInitialization();
        return instante;
    }
}
