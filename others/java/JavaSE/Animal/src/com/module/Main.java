package com.module;

import com.module.Animal;

public class Main {

    public static void main(String[] args) {
        Animal cat = new Animal("Lucy",4);
        Animal dog = new Animal("lucky",5);
        cat.eat();
        dog.eat();

    }
}
