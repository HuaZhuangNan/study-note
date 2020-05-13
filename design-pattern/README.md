# 7 大设计原则 和 23 种设计模式(JavaScript 和 Typescript)

## 7 大设计原则 SOLID LC

- [(SRP)单一职责原则](#SRP)

- [(OCP)开-闭原则](#OCP)

- [(LSP)里氏替换原则](#LSP)

- [(ISP)接口隔离原则](#ISP)

- [(DIP)依赖倒置原则](#DIP)

- [(LOD)迪米特原则(最少知识原则)](#LOD)

- [(CARP)合成/聚合复用原则](#CARP)

### SRP

> **单一职责原则**

- 一个程序只做好一件事
- 功能过于复杂就拆分开，使每个部分保持独立
- 在做编程的时候，很自然的会在一个类加上各种各样的功能。这样意味着，无论任何需求要来，都需要更改这个类，这样其实是很糟糕的，维护麻烦，复用不可能，也缺乏灵活性。当变化发生时，设计会遭到很多意想不到的破坏。

### OCP

> **开-闭原则**

- 对扩展开发，对修改关闭
- 增加需求时，扩展新代码，而非修改已经有的代码，保证以前功能的可用性
- 开闭原则一条非常重要的原则，可以说其它原则的基石。
- 软件设计的终极目标

### LSP

> **里氏替换原则**

- 子类能够覆盖父类
- 父类中能出现的地方子类就能出现
- 在程序中，任何调用基类对象实现的功能，都可以调用派生类对象来替换

### ISP

> **接口隔离原则**

- 保持接口的单一性、独立性，尽量避免出现“胖接口”
- 还是一个降低类之间耦合度的意思。因为，越小的接口，就越好实现，复用性也越高。

### DIP

> **依赖倒置**

- 面向接口编程，以来抽象数据，不依赖具体事物的实现
- 接口是稳定的，实现是不稳定的。这也要求，一旦接口确定，就不应该再进行修改了。而根据接口的实现，是可以根据具体问题和情况，采用不同的手段去实现。

### LOD

> **迪米特**

- 一个实体应当尽可能少的与其他实体之间发生相互作用。这样做的目的在于减少依赖，独立功能，以便更好的复用。

### CARP

> **合成/聚合**

- 在一个新的对象里面使用一些已有的对象，使之成为新对象的一部分，新的对象通过这些对象的委派达到复用已有功能的目的。设计原则是：尽量使用合成/聚合，尽量不要使用继承。

## 设计模式(5+8+10=23)

| 范围\\目的 | [创建型模式(5)](#Create)     | [结构型模式(8)](#Structure)    | 行为型模式(10)   |
| ---------- | ---------------------------- | ------------------------------ | ---------------- |
| 类模式      | [工厂](#Factory)             | [(类）适配器](#ClassAdapter)   | 模板方法、解释器 |
| 对象模式    | [单例](#Singleton)           | [代理](#Proxy)                 | 策略             |
|            | [原型](#Prototype)           | [(对象)适配器](#ObjectAdapter) | 命令             |
|            | [抽象工厂](#AbstractFactory) | [桥接](#Bridge)                | 职责链           |
|            | [建造者](#Builder)           | [装饰器](#Decorator)           | 状态             |
|            |                              | 外观                           | 观察者           |
|            |                              | 享元                           | 中介者           |
|            |                              | 组合                           | 迭代器           |
|            |                              |                                | 访问者           |
|            |                              |                                | 备忘录           |

## Create

> **创建型模式**

### Factory

> 工厂

- 把 new 操作单独封装

- 遇到 new 的时候就需要考虑是否需要使用

// TODO: 工厂模式

```ts
class Product {}
class Creator {}
```

### Singleton

> 单例

### Prototype

> 原型

### AbstractFactory

> 抽象工厂

### Builder

> 建造者

## Structure

> **结构性模式**

### ClassAdapter

> 类适配器

### Proxy

> 代理模式

### Bridge

> 桥接

### Decorator

> 装饰器

### 创建型(5)

- 工厂方法
- 单例
- 原型
- 抽象工厂
- 建造者

### 组合型(8)

- 类模式
- 适配器模式
- 装饰器模式
- 代理模式
- 外观模式
- 桥接模式
- 组合模式
- 享元模式

### 行为性(6+5)

- 策略性
- 模板方法模式
- 观察者模式
- 迭代器模式
- 职责连模式
- 命令模式

- 备忘录模式
- 状态模式
- 访问者模式
- 中介者模式
- 解释器模式